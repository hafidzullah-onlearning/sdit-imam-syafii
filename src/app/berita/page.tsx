"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import newsPpdb from "@/assets/news-ppdb.jpg";
import newsMunaqosyah from "@/assets/news-munaqosyah.png";
import newsHoliday from "@/assets/news-holiday.jpg";
import newsMabit from "@/assets/news-mabit.jpg";
import newsScience from "@/assets/news-science.jpg";

const articles = [
  {
    slug: "mabit-qiyamul-lail-kelas-6",
    title: "Mabit & Qiyamul Lail Bersama Kelas 6",
    date: "12 Okt 2024",
    category: "Kegiatan",
    image: newsMabit,
    summary:
      "Membangun spiritualitas sejak dini melalui kegiatan Malam Bina Iman dan Taqwa (Mabit) yang diikuti oleh seluruh siswa akhir SDIT Imam Syafi'i.",
  },
  {
    slug: "agenda-munaqosyah-tahfidz",
    title: "Ujian Tahfidz Semester Ganjil Dimulai",
    date: "10 Okt 2024",
    category: "Akademik",
    image: newsMunaqosyah,
    summary:
      "Pelaksanaan evaluasi hafalan Al-Qur'an berjalan dengan khidmat. Orang tua dapat memantau progres hafalan ananda disaksikan oleh tim penguji.",
  },
  {
    slug: "jadwal-pendaftaran-ppdb-gelombang-1",
    title: "Pembukaan Pendaftaran Siswa Baru (PPDB)",
    date: "05 Okt 2024",
    category: "Pengumuman",
    image: newsPpdb,
    summary:
      "SDIT Imam Syafi'i resmi membuka pendaftaran peserta didik baru (PPDB) untuk tahun ajaran 2025/2026. Kuota terbatas bagi calon santri baru.",
  },
  {
    slug: "science-day-eksplorasi-kreativitas",
    title: "Science Day: Eksplorasi Kreativitas Siswa",
    date: "28 Sep 2024",
    category: "Kegiatan",
    image: newsScience,
    summary:
      "Siswa-siswi menunjukkan bakat inovatif mereka dalam pameran sains tahunan yang mengusung tema 'Teknologi dan Al-Qur'an' di aula sekolah.",
  },
  {
    slug: "prestasi-gemilang-olimpiade-matematika",
    title: "Prestasi Gemilang di Olimpiade Matematika",
    date: "20 Sep 2024",
    category: "Akademik",
    image: newsMunaqosyah,
    summary:
      "Alhamdulillah, kontingen SDIT Imam Syafi'i berhasil membawa pulang medali emas dalam kompetisi sains & matematika tingkat provinsi.",
  },
  {
    slug: "libur-semester-ganjil",
    title: "Pojok Baca Baru untuk Menumbuhkan Literasi",
    date: "15 Sep 2024",
    category: "Pengumuman",
    image: newsHoliday,
    summary:
      "Fasilitas perpustakaan kini semakin lengkap dengan hadirnya area baca tematik yang nyaman bagi para siswa di setiap lantai gedung.",
  },
];

export default function BeritaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["Semua", "Pengumuman", "Akademik", "Kegiatan"];

  const filteredArticles = articles.filter((item) => {
    const matchesCategory =
      selectedCategory === "Semua" || item.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case "Kegiatan":
        return "bg-primary/10 text-primary border border-primary/20";
      case "Akademik":
        return "bg-secondary-container text-on-secondary-container";
      case "Pengumuman":
        return "bg-error-container text-on-error-container";
      default:
        return "bg-surface-container-high text-on-surface";
    }
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col pt-16">
      <Navbar />

      <main className="flex-grow pt-8 pb-20 max-w-container-max mx-auto px-gutter w-full">
        {/* Header Section */}
        <section className="mb-10 text-center md:text-left">
          <h1 className="font-headline-xl text-headline-xl md:text-[44px] text-primary mb-3">
            Berita &amp; Informasi
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Ikuti perkembangan terbaru mengenai kegiatan sekolah, pengumuman akademik, dan prestasi siswa-siswi SDIT Imam Syafi'i.
          </p>
        </section>

        {/* Filters & Search Bar */}
        <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  aria-pressed={isActive}
                  className={`px-6 py-2 rounded-full font-label-bold text-xs transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-on-primary oceanic-shadow"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-secondary-container transition-colors"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Cari berita..."
              aria-label="Cari berita"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-xl text-xs text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary-container transition-all"
            />
          </div>
        </section>

        {/* Articles Grid */}
        <section>
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, idx) => (
                <article
                  key={article.slug}
                  className={`bg-surface-container-lowest rounded-2xl overflow-hidden oceanic-shadow border border-surface-variant/30 flex flex-col group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${
                    idx === 0 ? "border-t-4 border-tertiary-container" : ""
                  }`}
                >
                  <Link href={`/berita/${article.slug}`} className="block relative aspect-video w-full overflow-hidden bg-surface-container">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`px-3 py-1 rounded-full font-label-bold text-xs ${getBadgeStyle(
                          article.category
                        )}`}
                      >
                        {article.category}
                      </span>
                      <span className="font-body-sm text-xs text-outline flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                        {article.date}
                      </span>
                    </div>

                    <h2 className="font-headline-md text-headline-md text-on-surface mb-2 leading-tight group-hover:text-primary transition-colors">
                      <Link href={`/berita/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="font-body-sm text-xs text-on-surface-variant mb-4 flex-grow line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>

                    <Link
                      href={`/berita/${article.slug}`}
                      className="inline-flex items-center gap-1.5 font-label-bold text-xs text-primary hover:text-primary-container transition-colors mt-auto"
                    >
                      Baca Selengkapnya
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-surface-container-lowest rounded-2xl border border-surface-variant/30">
              <span className="material-symbols-outlined text-48px text-outline mb-2">search_off</span>
              <p className="font-bold text-on-surface text-base">Berita tidak ditemukan</p>
              <p className="text-xs text-on-surface-variant mt-1 mb-4">
                Coba gunakan kata kunci lain atau ubah filter kategori.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("Semua");
                  setSearchQuery("");
                }}
                className="bg-primary text-on-primary font-label-bold text-xs px-5 py-2.5 rounded-full oceanic-shadow hover:bg-primary/90 transition-all cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </section>

        {/* Pagination UI */}
        {filteredArticles.length > 0 && (
          <nav className="mt-16 flex justify-center items-center gap-2" aria-label="Navigasi Halaman Berita">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant text-outline hover:bg-surface-container transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              aria-label="Halaman Sebelumnya"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-10 h-10 rounded-full font-label-bold text-xs cursor-pointer transition-colors ${
                currentPage === 1
                  ? "bg-primary text-on-primary"
                  : "border border-outline-variant text-on-surface hover:bg-surface-container"
              }`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentPage(2)}
              className={`w-10 h-10 rounded-full font-label-bold text-xs cursor-pointer transition-colors ${
                currentPage === 2
                  ? "bg-primary text-on-primary"
                  : "border border-outline-variant text-on-surface hover:bg-surface-container"
              }`}
            >
              2
            </button>
            <span className="px-2 text-outline text-xs">...</span>
            <button
              onClick={() => setCurrentPage(2)}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-outline-variant text-outline hover:bg-surface-container transition-colors cursor-pointer"
              aria-label="Halaman Selanjutnya"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </nav>
        )}
      </main>

      <Footer />
    </div>
  );
}
