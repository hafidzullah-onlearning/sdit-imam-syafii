"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Profil", href: "/profil" },
    { label: "Berita", href: "/berita" },
    { label: "Progres Tahfidz", href: "/tahfidz" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-surface/90 backdrop-blur-md dark:bg-inverse-surface/90 fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-sm group">
          <div className="relative w-10 h-10 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Logo SDIT Imam Syafi'i"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight group-hover:opacity-90 transition-opacity">
            {"SDIT Imam Syafi'i"}
          </span>
        </Link>

        {/* Right Aligned Navigation & CTA */}
        <div className="hidden md:flex items-center gap-lg">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium font-label-bold text-label-bold transition-colors duration-200 ${
                isActive(item.href)
                  ? "text-primary border-b-2 border-primary py-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/ppdb"
            className="inline-block bg-primary hover:bg-primary-container text-on-primary font-label-bold text-label-bold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-95 text-center ml-2"
          >
            Daftar PPDB
          </Link>
        </div>


        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary cursor-pointer focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[32px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant/30 px-gutter py-4 flex flex-col gap-4 shadow-md transition-all duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium font-label-bold text-label-bold transition-colors duration-200 py-2 ${
                isActive(item.href) ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/ppdb"
            className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-bold text-label-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Daftar PPDB
          </Link>
        </div>
      )}
    </nav>
  );
}

