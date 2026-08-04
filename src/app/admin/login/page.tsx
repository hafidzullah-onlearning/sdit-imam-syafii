"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "ustadz">("admin");
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
        // Fallback for demo access if Supabase auth is not yet provisioned in cloud
        if (email === "admin@sdit.sch.id" && password === "admin123") {
          document.cookie = "admin_demo_auth=true; path=/; max-age=86400";
          localStorage.setItem("admin_role", role);
          localStorage.setItem("admin_name", role === "admin" ? "Ust. Admin Utama" : "Ust. Pengampu Tahfidz");
          router.push("/admin/dashboard");
          return;
        }
        setErrorMsg("Email atau password tidak cocok. Silakan coba lagi.");
      } else if (data.user) {
        document.cookie = "admin_demo_auth=true; path=/; max-age=86400";
        localStorage.setItem("admin_role", role);
        localStorage.setItem("admin_name", data.user.email || "Admin SDIT");
        router.push("/admin/dashboard");
      }
    } catch {
      // Demo login fallback
      if (email === "admin@sdit.sch.id" && password === "admin123") {
        document.cookie = "admin_demo_auth=true; path=/; max-age=86400";
        localStorage.setItem("admin_role", role);
        localStorage.setItem("admin_name", role === "admin" ? "Ust. Admin Utama" : "Ust. Pengampu Tahfidz");
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
            Dashboard Admin
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            SDIT Imam Syafi'i Sudiang Makassar
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
              Peran Pengguna (*Role*)
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30">
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  role === "admin"
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Admin Utama
              </button>
              <button
                type="button"
                onClick={() => setRole("ustadz")}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  role === "ustadz"
                    ? "bg-primary text-on-primary shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                Ustadz / Pengajar
              </button>
            </div>
          </div>

          <div>
            <label className="block text-xs font-label-bold text-on-surface mb-1">
              Email Akses
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sdit.sch.id"
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
              <span>Memproses...</span>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">lock_open</span>
                Masuk ke Dashboard
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-outline-variant/20 text-center">
          <p className="text-[11px] text-on-surface-variant italic mb-2">
            *Demo Kredensial: Email <code className="bg-surface-container-high px-1 py-0.5 rounded text-primary">admin@sdit.sch.id</code> / Pass <code className="bg-surface-container-high px-1 py-0.5 rounded text-primary">admin123</code>
          </p>
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
