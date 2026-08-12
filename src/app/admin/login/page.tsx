"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        // SuperAdmin fallback if cloud Auth table is not yet provisioned in dev environment
        if (
          email === "superadmin@sdit-imamsyafii.sch.id" &&
          password === "SuperAdminPassword123!"
        ) {
          localStorage.setItem("sdit_user_email", email);
          localStorage.setItem("sdit_user_role", "superadmin");
          localStorage.setItem("sdit_user_name", "Super Admin Utama");
          router.push("/admin/dashboard");
          return;
        }
        setErrorMsg("Email atau password salah. Silakan periksa kredensial Anda.");
      } else if (data.user) {
        let userRole = data.user.user_metadata?.role || "admin";
        let userName = data.user.user_metadata?.full_name || data.user.email;

        if (data.user.email === "superadmin@sdit-imamsyafii.sch.id") {
          userRole = "superadmin";
        }

        try {
          const { data: profile } = await supabase
            .from("profiles")
            .select("role, full_name")
            .eq("id", data.user.id)
            .single();

          if (profile) {
            if (profile.role) userRole = profile.role;
            if (profile.full_name) userName = profile.full_name;
          }
        } catch {}

        localStorage.setItem("sdit_user_email", data.user.email || "");
        localStorage.setItem("sdit_user_role", userRole);
        localStorage.setItem("sdit_user_name", userName || "Pengguna Admin");

        router.push("/admin/dashboard");
      }
    } catch {
      if (
        email === "superadmin@sdit-imamsyafii.sch.id" &&
        password === "SuperAdminPassword123!"
      ) {
        localStorage.setItem("sdit_user_email", email);
        localStorage.setItem("sdit_user_role", "superadmin");
        localStorage.setItem("sdit_user_name", "Super Admin Utama");
        router.push("/admin/dashboard");
        return;
      }
      setErrorMsg("Terjadi kesalahan sistem. Silakan periksa koneksi Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-center items-center px-gutter font-body-md text-on-surface relative overflow-hidden islamic-pattern">
      <div className="w-full max-w-md bg-surface-container-lowest p-8 md:p-10 rounded-3xl oceanic-shadow border border-outline-variant/30 z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="relative w-16 h-16 mx-auto mb-3">
            <Image
              src="/logo.png"
              alt="Logo SDIT Imam Syafi'i"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="font-headline-lg text-2xl font-bold text-primary">
            Control Center SDIT
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Portal Masuk Administrator &amp; Tenaga Pendidik
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 bg-error-container text-on-error-container text-xs rounded-xl flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-label-bold text-on-surface mb-1">
              Email Akses Resmi
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@sdit-imamsyafii.sch.id"
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-label-bold text-on-surface mb-1">
              Kata Sandi (*Password*)
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-container text-on-primary font-bold text-xs py-3.5 rounded-xl transition-all shadow-sm oceanic-shadow disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Memproses Autentikasi...</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">lock_open</span>
                Masuk ke System CMS
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-outline-variant/20 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-bold"
          >
            <span className="material-symbols-outlined text-[14px]">arrow_back</span>
            Kembali ke Website Utama
          </Link>
        </div>
      </div>
    </div>
  );
}
