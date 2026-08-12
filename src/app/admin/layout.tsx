"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [role, setRole] = useState<string>("admin");
  const [name, setName] = useState<string>("Pengguna Admin");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    const savedRole = localStorage.getItem("sdit_user_role") || "admin";
    const savedName = localStorage.getItem("sdit_user_name") || "Pengguna Admin";
    setRole(savedRole);
    setName(savedName);
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem("sdit_user_role");
    localStorage.removeItem("sdit_user_name");
    localStorage.removeItem("sdit_user_email");
    document.cookie = "admin_demo_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    router.push("/admin/login");
  };

  const navItems = [
    {
      label: "Dashboard",
      href: "/admin/dashboard",
      icon: "dashboard",
      roles: ["superadmin", "admin", "ustadz"],
    },
    {
      label: "Kelola Pengguna",
      href: "/admin/users",
      icon: "manage_accounts",
      roles: ["superadmin"],
    },
    {
      label: "Status Tahfidz",
      href: "/admin/tahfidz",
      icon: "menu_book",
      roles: ["superadmin", "admin", "ustadz"],
    },
    {
      label: "CMS Berita",
      href: "/admin/berita",
      icon: "newspaper",
      roles: ["superadmin", "admin"],
    },
    {
      label: "Gelombang PPDB",
      href: "/admin/ppdb",
      icon: "how_to_reg",
      roles: ["superadmin", "admin"],
    },
    {
      label: "Struktur Organisasi",
      href: "/admin/struktur",
      icon: "groups",
      roles: ["superadmin", "admin"],
    },
  ];

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface flex">
      {/* Sidebar Navigation */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-surface-container-lowest border-r border-outline-variant/30 flex flex-col justify-between transition-transform duration-300 ${
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="h-16 px-6 border-b border-outline-variant/30 flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.png"
                  alt="Logo SDIT Imam Syafi'i"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-sm text-primary block leading-none">
                  SDIT Imam Syafi'i
                </span>
                <span className="text-[10px] text-on-surface-variant font-medium">
                  Panel Kontrol Admin
                </span>
              </div>
            </Link>
            <button
              className="lg:hidden text-outline hover:text-on-surface"
              onClick={() => setIsMobileSidebarOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* User Profile Summary Card */}
          <div className="p-4 m-4 bg-surface-container-low rounded-2xl border border-outline-variant/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                {name.charAt(0).toUpperCase()}
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-xs text-on-surface truncate">{name}</p>
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed">
                  {role === "superadmin"
                    ? "Super Admin Utama"
                    : role === "admin"
                    ? "Admin Utama"
                    : "Ustadz / Pengajar"}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-4 space-y-1.5">
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-outline mb-2">
              Menu Utama
            </p>
            {navItems.map((item) => {
              const isAllowed = item.roles.includes(role);
              const isActive = pathname === item.href;

              if (!isAllowed) return null;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-label-bold text-xs transition-all ${
                    isActive
                      ? "bg-primary text-on-primary oceanic-shadow"
                      : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-outline-variant/30 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            Lihat Website Utama
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-error hover:bg-error-container/20 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Keluar (Logout)
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="h-16 bg-surface-container-lowest border-b border-outline-variant/30 px-gutter flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="lg:hidden text-primary focus:outline-none cursor-pointer"
            >
              <span className="material-symbols-outlined text-[28px]">menu</span>
            </button>
            <h2 className="font-headline-md text-base md:text-lg font-bold text-on-surface">
              SDIT Imam Syafi'i Control Center
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block px-3 py-1 bg-surface-container-low border border-outline-variant/30 rounded-full text-xs font-bold text-on-surface-variant">
              Tahun Ajaran 2024/2025
            </span>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 p-gutter max-w-container-max w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
