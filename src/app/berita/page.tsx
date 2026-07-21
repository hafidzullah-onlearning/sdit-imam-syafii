"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import newsPpdb from "@/assets/news-ppdb.jpg";
import newsMunaqosyah from "@/assets/news-munaqosyah.png";
import newsHoliday from "@/assets/news-holiday.jpg";

const articles = [
  {
    slug: "jadwal-pendaftaran-ppdb-gelombang-1",
    title: "Jadwal Pendaftaran PPDB Gelombang 1",
    date: "15 Oktober 2024",
    category: "Pengumuman",
    image: newsPpdb,
    summary:
      "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025 resmi dibuka. Kuota terbatas untuk calon santri baru.",
  },
  {
    slug: "agenda-munaqosyah-tahfidz",
    title: "Agenda Munaqosyah Tahfidz",
    date: "10 Oktober 2024",
    category: "Akademik",
    image: newsMunaqosyah,
    summary:
      "Ujian tahfidz terbuka untuk siswa kelas 1-6 akan dilaksanakan pekan depan disaksikan oleh orang tua wali santri.",
  },
  {
    slug: "libur-semester-ganjil",
    title: "Pengumuman Libur Akhir Semester Ganjil",
    date: "05 Oktober 2024",
    category: "Informasi",
    image: newsHoliday,
    summary:
      "Pemberitahuan resmi jadwal libur akhir semester ganjil serta himbauan kegiatan mutaba'ah di rumah.",
  },
];

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["Semua", "Pengumuman", "Akademik", "Informasi"];

  const filteredArticles = articles.filter((item) => {
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col pt-16">
      <Navbar />

      <main className="flex-grow">
        {/* Header Banner */}
        <section className="bg-surface-container-low py-12 md:py-16 border-b border-surface-variant/30">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full font-label-bold text-xs mb-4">
              <span className="material-symbols-outlined text-[16px]">newspaper</span>
              Kabar &amp; Informasi Terkini
            </div>
            <h1 className="font-headline-xl text-headline-xl md:text-[40px] text-on-surface mb-3">
              Berita &amp; Pengumuman Sekolah
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Dapatkan berita terbaru seputar agenda akademik, prestasi siswa, dan pengumuman resmi SDIT Imam Syafi'i.
            </p>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <section className="py-8 bg-surface border-b border-surface-variant/20">
          <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-primary text-on-primary oceanic-shadow"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-70 text-[18px]">
                search
              </span>
              <input
                type="text"
                placeholder="Cari berita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl py-2.5 pl-10 pr-4 text-xs focus:outline-none focus:border-primary transition-all"
              />
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12 bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/berita/${article.slug}`}
                    className="bg-surface rounded-2xl overflow-hidden oceanic-shadow border border-surface-variant/30 flex flex-col group hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3 bg-primary text-on-primary px-3 py-1 rounded-full font-label-bold text-[11px] z-10">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <div className="text-xs text-on-surface-variant mb-2 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                        {article.date}
                      </div>
                      <h2 className="font-bold text-lg text-on-surface mb-2 group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-xs text-on-surface-variant mb-4 flex-grow line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                      <span className="text-primary font-bold text-xs mt-auto inline-flex items-center gap-1">
                        Baca Selengkapnya{" "}
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-48px text-outline mb-2">article</span>
                <p className="font-bold text-on-surface text-base">Berita tidak ditemukan</p>
                <p className="text-xs text-on-surface-variant mt-1">
                  Coba gunakan kata kunci lain atau ubah filter kategori.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
