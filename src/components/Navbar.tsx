"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-surface/90 backdrop-blur-md dark:bg-inverse-surface/90 fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
        {/* Brand */}
        <div className="flex items-center gap-sm">
          <div className="relative w-10 h-10 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Logo SDIT Imam Syafi'i"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight">
            {"SDIT Imam Syafi'i"}
          </span>
        </div>
        {/* Links (Web) */}
        <div className="hidden md:flex gap-lg items-center">
          <a
            className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary"
            href="#hero"
          >
            Beranda
          </a>
          <a
            className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary"
            href="#profil"
          >
            Profil
          </a>
          <a
            className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary"
            href="#berita"
          >
            Berita
          </a>
          <a
            className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary"
            href="#progrestahfidz"
          >
            Progres Tahfidz
          </a>
        </div>
        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-primary hover:bg-primary-container text-on-primary font-label-bold text-label-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:scale-95 cursor-pointer">
            Daftar PPDB
          </button>
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
          <a
            className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary py-2"
            href="#hero"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beranda
          </a>
          <a
            className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary py-2"
            href="#profil"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Profil
          </a>
          <a
            className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary py-2"
            href="#berita"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Berita
          </a>
          <a
            className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary py-2"
            href="#progrestahfidz"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Progres Tahfidz
          </a>
          <button
            className="w-full bg-primary hover:bg-primary-container text-on-primary font-label-bold text-label-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Daftar PPDB
          </button>
        </div>
      )}
    </nav>
  );
}
