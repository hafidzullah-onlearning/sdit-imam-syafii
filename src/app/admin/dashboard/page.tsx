"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminDashboardOverview() {
  const [role, setRole] = useState("admin");
  const [userName, setUserName] = useState("Ust. Admin Utama");

  useEffect(() => {
    const savedRole = localStorage.getItem("admin_role") || "admin";
    const savedName = localStorage.getItem("admin_name") || "Ust. Admin Utama";
    setRole(savedRole);
    setUserName(savedName);
  }, []);

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-primary text-on-primary rounded-3xl p-6 md:p-8 oceanic-shadow flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 z-10">
          <span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-bold inline-block">
            {role === "admin" ? "Role: Admin Utama" : "Role: Ustadz Pengampu Tahfidz"}
          </span>
          <h1 className="font-headline-lg text-2xl md:text-3xl font-bold">
            Assalamu'alaikum, {userName}!
          </h1>
          <p className="text-on-primary/80 text-xs md:text-sm max-w-xl">
            Selamat datang di Panel Kontrol SDIT Imam Syafi'i. Silakan gunakan menu di bawah ini untuk memperbarui informasi sekolah dan santri.
          </p>
        </div>
        <div className="z-10 flex flex-wrap gap-3">
          <Link
            href="/admin/tahfidz"
            className="bg-primary-container text-on-primary-container hover:bg-surface hover:text-primary px-5 py-3 rounded-xl font-bold text-xs transition-all whitespace-nowrap oceanic-shadow flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">menu_book</span>
            Update Hafalan Santri
          </Link>
          {role === "admin" && (
            <Link
              href="/admin/ppdb"
              className="bg-tertiary-container text-on-tertiary-container hover:bg-surface hover:text-primary px-5 py-3 rounded-xl font-bold text-xs transition-all whitespace-nowrap oceanic-shadow flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
              Kelola PPDB
            </Link>
          )}
        </div>
      </div>

      {/* Overview Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase text-outline">Santri Terdaftar</span>
            <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">school</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-on-surface">245</div>
          <p className="text-xs text-on-surface-variant mt-1">10 Data Santri Sampel Tahfidz</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase text-outline">Berita Published</span>
            <div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[24px]">newspaper</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-on-surface">6</div>
          <p className="text-xs text-on-surface-variant mt-1">Artikel Terbit di Website</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase text-outline">Status PPDB</span>
            <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined text-[24px]">event_available</span>
            </div>
          </div>
          <div className="text-xl font-bold text-primary flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse"></span>
            AKTIF (Gelombang 1)
          </div>
          <p className="text-xs text-on-surface-variant mt-1">Sisa Kuota: 15 Kursi</p>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase text-outline">Staff &amp; Pengelola</span>
            <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface">
              <span className="material-symbols-outlined text-[24px]">groups</span>
            </div>
          </div>
          <div className="text-3xl font-bold text-on-surface">4</div>
          <p className="text-xs text-on-surface-variant mt-1">Pendidik &amp; Manajemen</p>
        </div>
      </div>

      {/* Quick Action Hub & Modules Overview */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Quick Menu Panel */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
          <h3 className="font-headline-md text-lg font-bold text-on-surface mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">apps</span>
            Pintas Akses Modul Kontrol
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/admin/tahfidz"
              className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary transition-all flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-[22px]">menu_book</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                  Modul Tahfidz Santri
                </h4>
                <p className="text-xs text-on-surface-variant mt-0.5">
                  Update cepat hafalan Juz, status munaqosyah, dan catatan setoran.
                </p>
              </div>
            </Link>

            {role === "admin" && (
              <>
                <Link
                  href="/admin/berita"
                  className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px]">newspaper</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                      CMS Berita &amp; Informasi
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Tulis berita baru, upload foto header, &amp; atur status Draft/Publish.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/admin/ppdb"
                  className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px]">how_to_reg</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                      Saklar Gelombang PPDB
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Buka/tutup pendaftaran periodik, ubah kuota, &amp; pantau pendaftar.
                    </p>
                  </div>
                </Link>

                <Link
                  href="/admin/struktur"
                  className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/30 hover:border-primary transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[22px]">groups</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-on-surface group-hover:text-primary transition-colors">
                      Struktur Organisasi
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Atur pengelola sekolah &amp; terapkan Avatar Clipart Ustadz/Ustadzah.
                    </p>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* System & Status Info Panel */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow space-y-4">
          <h3 className="font-headline-md text-lg font-bold text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">info</span>
            Status Sistem Website
          </h3>

          <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant">Database Supabase:</span>
              <span className="font-bold text-primary flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#25D366]"></span> Connected
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant">Row Level Security:</span>
              <span className="font-bold text-on-surface">Aktif (Enabled)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant">Session Auth:</span>
              <span className="font-bold text-on-surface capitalize">{role}</span>
            </div>
          </div>

          <div className="p-4 bg-tertiary-fixed/30 rounded-xl border border-tertiary/20 text-xs space-y-1">
            <p className="font-bold text-tertiary">Petunjuk Penggunaan:</p>
            <p className="text-on-surface-variant">
              Semua perubahan yang Anda lakukan pada modul admin akan langsung diperbarui secara dinamis pada tampilan website publik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
