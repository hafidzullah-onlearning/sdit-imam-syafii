"use client";

import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased overflow-x-hidden pt-20">
      {/* TopNavBar */}
      <nav className="bg-surface/90 backdrop-blur-md dark:bg-inverse-surface/90 fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          {/* Brand */}
          <div className="flex items-center gap-sm">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-headline-md">
              <span className="material-symbols-outlined">school</span>
            </div>
            <span className="text-headline-md font-headline-md font-bold text-primary dark:text-inverse-primary tracking-tight">
              {"SDIT Imam Syafi'i"}
            </span>
          </div>
          {/* Links (Web) */}
          <div className="hidden md:flex gap-lg items-center">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 font-label-bold text-label-bold transition-colors duration-200 hover:text-primary-container" href="#">Beranda</a>
            <a className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary-container" href="#">Profil</a>
            <a className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary-container" href="#">Berita</a>
            <a className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary-container" href="#">Cek Tahfidz</a>
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
              className="text-primary font-bold font-label-bold text-label-bold transition-colors duration-200 hover:text-primary-container py-2" 
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Beranda
            </a>
            <a 
              className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary-container py-2" 
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Profil
            </a>
            <a 
              className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary-container py-2" 
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Berita
            </a>
            <a 
              className="text-on-surface-variant font-medium font-label-bold text-label-bold transition-colors duration-200 hover:text-primary-container py-2" 
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cek Tahfidz
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

      {/* Main Content Canvas */}
      <main>
        {/* Hero Section */}
        <section className="relative py-xl px-gutter max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-lg">
          <div className="absolute inset-0 islamic-pattern -z-10 opacity-50"></div>
          <div className="md:w-1/2 flex flex-col items-start gap-md z-10">
            <div className="bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-full font-label-bold text-label-bold inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              Penerimaan Siswa Baru Dibuka
            </div>
            <h1 className="font-headline-xl text-headline-xl md:text-[56px] leading-[1.1] text-on-surface">
              Membentuk Generasi <span className="text-primary">{"Qur'ani"}</span>, Cerdas, dan Berakhlak Mulia
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[90%]">
              Sekolah Dasar Islam Terpadu pilihan terbaik di BTN Tirasa, Sudiang, Makassar. Kami berkomitmen memberikan pendidikan seimbang antara ilmu dunia dan akhirat.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label-bold text-label-bold py-4 px-8 rounded-full transition-all duration-200 oceanic-shadow hover:-translate-y-1 cursor-pointer">
                Daftar PPDB Online
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary/5 font-label-bold text-label-bold py-4 px-8 rounded-full transition-all duration-200 cursor-pointer">
                Pelajari Alur
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full mt-lg md:mt-0 z-10">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden oceanic-shadow">
              <img 
                className="object-cover w-full h-full" 
                alt="A bright, modern Islamic elementary school classroom filled with diverse students wearing neat uniforms, engaging happily in a learning activity. Natural sunlight floods the room through large windows, creating a warm, inviting, and professional educational atmosphere. The color palette features soft sky blues, clean whites, and warm woods, reflecting a peaceful and high-quality learning environment." 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAow9mLf8rHIMFMJzd8tih1V5DfURBYIWwQBiUM_xjj6a4wAbJksI843LCYLeIUa24JlONueOUEJYAYInv4-ExHybjPa2dnDIgrRKY3J-hpo0hPAkZxQbXjp20jcXkdx7UL4zySdgXQGJw9lW6qjbMEWX-alfsqK_wY8yjRvFZ7kvDgU49XZgvE0A26558b3y8NZduhH6-HOZ5TTpjl9FK3a1VtYZavmqKMMEoV8CXgR7IkJ1RgeDu1Qg" 
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-surface p-4 rounded-2xl oceanic-shadow flex items-center gap-3 border border-surface-variant/50 hidden md:flex">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div>
                  <p className="font-label-bold text-label-bold text-on-surface">Target Tahfidz</p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">6 Juz / 6 Tahun</p>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-[#25D366] text-white p-4 rounded-xl flex items-center gap-3 shadow-lg z-20">
                <span className="material-symbols-outlined text-[32px]">military_tech</span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-label-bold uppercase tracking-wider opacity-90">Akreditasi</span>
                  <span className="text-lg font-bold leading-tight">A (Sangat Baik)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Stats Section */}
        <section className="py-12 bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
              <div className="bg-surface rounded-2xl p-6 oceanic-shadow flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-on-surface">350+</p>
                  <p className="text-sm text-on-surface-variant">Siswa Aktif</p>
                </div>
              </div>
              <div className="bg-surface rounded-2xl p-6 oceanic-shadow flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-on-surface">3 Juz</p>
                  <p className="text-sm text-on-surface-variant">Target Tahfidz</p>
                </div>
              </div>
              <div className="bg-surface rounded-2xl p-6 oceanic-shadow flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/50 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined">emoji_events</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-on-surface">12+</p>
                  <p className="text-sm text-on-surface-variant">Prestasi Nasional</p>
                </div>
              </div>
              <div className="bg-surface rounded-2xl p-6 oceanic-shadow flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">military_tech</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-on-surface">28</p>
                  <p className="text-sm text-on-surface-variant">Ustadz &amp; Ustadzah</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths (Bento Grid Style) */}
        <section className="py-xl bg-surface-bright border-y border-surface-variant/30">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">Keunggulan Kami</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Pondasi kokoh untuk masa depan ananda dengan fasilitas dan program terstruktur.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              {/* Card 1 */}
              <div className="bg-surface rounded-2xl p-md oceanic-shadow border-t-4 border-tertiary-container hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[32px]">import_contacts</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{"Program Unggulan Tahfidz Al-Qur'an"}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Target pencapaian 6 Juz dalam 6 Tahun (1 Tahun 1 Juz) dengan metode talaqqi yang intensif dan menyenangkan.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
                    Sertifikasi Hafalan Berkala
                  </li>
                  <li className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-primary-container text-[18px]">check_circle</span>
                    {"Buku Mutaba'ah Digital"}
                  </li>
                </ul>
              </div>
              {/* Card 2 */}
              <div className="bg-surface rounded-2xl p-md oceanic-shadow border-t-4 border-primary-container hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[32px]">domain</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Fasilitas Modern</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Lingkungan belajar yang bersih, aman, dan dilengkapi dengan teknologi terkini untuk menunjang eksplorasi siswa.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-tertiary-container text-[18px]">star</span>
                    Laboratorium Komputer
                  </li>
                  <li className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-tertiary-container text-[18px]">star</span>
                    Perpustakaan Interaktif
                  </li>
                </ul>
              </div>
              {/* Card 3 */}
              <div className="bg-surface rounded-2xl p-md oceanic-shadow border-t-4 border-secondary hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-xl bg-secondary-container flex items-center justify-center text-secondary mb-4">
                  <span className="material-symbols-outlined text-[32px]">architecture</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Kurikulum Integratif</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4">Perpaduan seimbang antara kurikulum Nasional (Umum) dan kurikulum khas SIT {"(Syar'i)"} untuk kecerdasan holistik.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                    Pendidikan Karakter
                  </li>
                  <li className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
                    Ekstrakurikuler Beragam
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-xl px-gutter max-w-container-max mx-auto">
          <div className="bg-primary text-on-primary rounded-[2rem] p-lg md:p-xl flex flex-col md:flex-row items-center gap-lg relative overflow-hidden">
            {/* Abstract Graphic */}
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="md:w-1/2 z-10">
              <h2 className="font-headline-lg text-headline-lg mb-sm">Visi &amp; Misi</h2>
              <p className="font-body-lg text-body-lg text-on-primary/80 mb-md">Mewujudkan institusi pendidikan dasar Islam terpadu yang profesional dalam mencetak generasi dambaan umat.</p>
              <a className="inline-flex items-center gap-2 text-on-primary font-label-bold text-label-bold hover:text-tertiary-container transition-colors" href="#">
                Lihat Profil Lengkap
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
            </div>
            <div className="md:w-1/2 z-10 bg-surface/10 backdrop-blur-sm rounded-2xl p-md border border-white/10">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-tertiary-fixed">visibility</span>
                  <h4 className="font-headline-md text-headline-md text-on-primary text-lg">Visi</h4>
                </div>
                <p className="font-body-sm text-body-sm text-on-primary/90">Menjadi pusat percontohan pendidikan dasar yang melahirkan generasi {"Qur'ani"}, cerdas secara akademik, dan berakhlak mulia sesuai pemahaman Salafus Shalih.</p>
              </div>
              <div className="w-full h-px bg-white/20 my-4"></div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary-container">flag</span>
                  <h4 className="font-headline-md text-headline-md text-on-primary text-lg">Misi Utama</h4>
                </div>
                <ul className="space-y-1 font-body-sm text-body-sm text-on-primary/90 pl-8 list-disc marker:text-primary-container">
                  <li>Menyelenggarakan pendidikan tahfidz {"Al-Qur'an"} bersanad.</li>
                  <li>Mengintegrasikan nilai-nilai Islam dalam setiap mata pelajaran.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* News & Anak Sholih Combo Section */}
        <section className="py-xl bg-surface-container-low border-b border-surface-variant/30">
          <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-lg">
            {/* News Column (Left) */}
            <div className="lg:w-[65%] flex flex-col">
              <div className="flex justify-between items-end mb-lg">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">Berita &amp; Informasi</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Update terkini kegiatan dan pengumuman SDIT Imam Syafi'i.</p>
                </div>
                <button className="hidden md:flex items-center gap-2 text-primary font-label-bold text-label-bold hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors cursor-pointer">
                  Lihat Semua Berita
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                {/* News Card 1 */}
                <div className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer">
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt="A well-designed graphic announcement banner for school enrollment." 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqyPznSygECLqcICjFz5fgeFvnUUzxBLTSSeSAp-_X_hUIYO-SBnfkdcPrMNq-Ilo3MKK81k2RJyqjXKm-DUkWV-5zK9YtX9IFingn5MvHRmkiOzT1wSgpXbvZ2ITQ8IO8HLcwTFcxw6aL0b18K4e9ZRAG0BtUmNNH27yQBETs9GrPDWGKXPmk0OWn3YNo_TdlLsp0pgQjZmTekGAXHi20RrCF740PwTjxuIAxSKNW7NOBuR5bF31g_w" 
                    />
                    <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-bold text-[12px]">Pengumuman</div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="text-xs text-on-surface-variant mb-2 flex items-center gap-1 font-body-sm">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      15 Oktober 2024
                    </div>
                    <h3 className="font-headline-md text-on-surface text-base mb-2 group-hover:text-primary transition-colors leading-tight">Jadwal Pendaftaran PPDB Gelombang 1</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow line-clamp-2 text-sm">Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025 resmi dibuka. Kuota terbatas.</p>
                    <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span></span>
                  </div>
                </div>
                {/* News Card 2 */}
                <div className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer">
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt="A brightly lit, spacious school hall arranged for a formal examination or ceremony." 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXu8MhXQg7PR_7uIFMPtXe-LM65CJIa2M5p0m7oKFydeaRoe4148uqTsekFLipYcWMM_jrKDdhJxJBF3y7dFgZqpLYGitKrXCJm1RQx9su8Fl_qsaejDfv-ddxYrw4ik7Ikl-SAz2Gylw4b1r340bZFXjsqtyqb1VtPYD4xHYBkzldADuYxTRM3x7F1zuDF9WNOx8lC4Mg3jPMFPIZmwzpFW4eC0VK7xHx8N2MGDjfUQUAEk_wWt2IKl3A" 
                    />
                    <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-bold text-[12px]">Akademik</div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="text-xs text-on-surface-variant mb-2 flex items-center gap-1 font-body-sm">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      10 Oktober 2024
                    </div>
                    <h3 className="font-headline-md text-on-surface text-base mb-2 group-hover:text-primary transition-colors leading-tight">Agenda Munaqosyah Tahfidz</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow line-clamp-2 text-sm">Ujian tahfidz terbuka untuk siswa kelas 1-6 akan dilaksanakan pekan depan.</p>
                    <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span></span>
                  </div>
                </div>
                {/* News Card 3 */}
                <div className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer">
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt="A serene outdoor scene of a school courtyard during a quiet, sunny day." 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6sj1t65YG_VPlTJmeZyVrcxSUBuwy2mOGoSAP6em3Af3oKufDr7wdzcYs2VNtfA8npscKjMvfyMMu9tv632_eKZLvKU70OoXByV4YKsRd3wonXEYhfcNL8thN5tmHw-dwQD61v9DeOCaoGM2l3a86MRqCB4SGuYCYP66MGH44THUMK2uCp5EtOW0LjZXs1DMA3xU2ytLKfXAlzTcpPjqMrLlMZ4g6jF7RZYksETW8Xdw1Y72q237uLg" 
                    />
                    <div className="absolute top-4 left-4 bg-surface-container-high text-on-surface px-3 py-1 rounded-full font-label-bold text-[12px]">Informasi</div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="text-xs text-on-surface-variant mb-2 flex items-center gap-1 font-body-sm">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      05 Oktober 2024
                    </div>
                    <h3 className="font-headline-md text-on-surface text-base mb-2 group-hover:text-primary transition-colors leading-tight">Libur Semester</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow line-clamp-2 text-sm">Pemberitahuan jadwal libur akhir semester ganjil bagi seluruh siswa.</p>
                    <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span></span>
                  </div>
                </div>
              </div>
              <button className="md:hidden w-full mt-6 flex justify-center items-center gap-2 text-primary border border-primary font-label-bold text-label-bold px-4 py-3 rounded-lg transition-colors cursor-pointer">
                Lihat Semua Berita
              </button>
            </div>
            {/* Anak Sholih Column (Right) */}
            <div className="lg:w-[35%] flex flex-col">
              <div className="text-center lg:text-left mb-lg">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">Anak Sholih Bulan Ini</h2>
                <p className="font-body-md text-body-md text-transparent hidden lg:block">Spacer</p>
              </div>
              <div className="bg-surface rounded-[2rem] p-6 oceanic-shadow border border-surface-variant/30 flex flex-col h-full items-start">
                <h3 className="text-xl font-bold text-on-surface mb-1">Ahmad Yusuf Al-Fatih</h3>
                <p className="text-primary font-label-bold text-[12px] mb-6">KELAS 3 AL-FARABI</p>
                <div className="w-full bg-secondary-fixed/10 rounded-xl p-4 border border-secondary-fixed/20 mb-6 flex-grow">
                  <div className="flex items-center gap-2 text-primary mb-3 text-sm">
                    <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                    <span className="font-bold">Pencapaian Istimewa:</span>
                  </div>
                  <ul className="space-y-2 text-on-surface-variant text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Menyelesaikan hafalan Juz 29 dengan predikat Mumtaz (Istimewa).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Juara 2 Lomba Adab Islami &amp; Tilawah tingkat Kota.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Selalu aktif membantu guru dan menjaga adab ketertiban kelas.</span>
                    </li>
                  </ul>
                </div>
                <p className="italic text-on-surface-variant opacity-80 text-xs">
                  {"\"Semoga Allah memberkahi hafalan dan akhlak Ananda Ahmad Yusuf, serta menjadikannya penyejuk mata bagi orang tuanya.\""}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-inverse-surface dark:bg-surface-container-lowest text-tertiary-fixed dark:text-tertiary w-full rounded-t-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md py-xl px-gutter max-w-container-max mx-auto">
          {/* Brand & Bio */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-sm">
              <div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-inverse-surface font-headline-md">
                <span className="material-symbols-outlined text-[20px]">school</span>
              </div>
              <span className="text-headline-lg font-headline-lg text-surface-bright dark:text-on-surface">SDIT Imam Syafi&apos;i</span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant max-w-xs">
              Mencetak Generasi Qur&apos;ani dan Berprestasi. Berlokasi di lingkungan asri BTN Tirasa, Sudiang, Makassar.
            </p>
            <div className="flex gap-3 mt-2">
              {/* Social Placeholders */}
              <a className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-container transition-colors duration-200" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary-container transition-colors duration-200" href="#">
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
            </div>
          </div>
          {/* Quick Links & Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-headline-sm text-headline-sm text-surface-bright dark:text-on-surface">Tautan Penting</h4>
            <div className="flex flex-col gap-2">
              <a className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Kontak Kami</a>
              <a className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Lokasi Sekolah</a>
              <a className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Kebijakan Privasi</a>
              <a className="text-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-container dark:hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100" href="#">Syarat &amp; Ketentuan</a>
            </div>
            <a className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg font-label-bold text-label-bold w-max hover:opacity-90 transition-opacity" href="#">
              <span className="material-symbols-outlined">chat</span>
              Hubungi Panitia PPDB
            </a>
          </div>
          {/* Location Map */}
          <div className="flex flex-col gap-4">
            <h4 className="font-headline-sm text-headline-sm text-surface-bright dark:text-on-surface">Lokasi Kami</h4>
            <div className="w-full h-40 bg-surface/10 rounded-lg overflow-hidden border border-surface/20">
              {/* Map Placeholder */}
              <div 
                className="w-full h-full bg-cover bg-center" 
                title="Sudiang, Makassar Map"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWws3EcXe_xZKkKACVWv1_FRbgi4gr7V9y-iFZbgApZFfyqSv7Ifw9zNFZ_q3CUspDuO_P-CGeZVa0WwWxQ30XRAuk1Ls8sLol02L2-Qxxnz9OaaTlTIQfNA6Q8bCxWhy7S5BQOxIK3dx1F9rU0Ul6sshv6Sbl6A6TFHcHS8WdNYevVrl30YCWCU9bLN1O4710QbGJqjnDOwB9t0ylooE3KlQ6NuEavIFV7PFL7HvcVfXnsRlhDSTjdw')" }}
              ></div>
            </div>
            <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant">
              BTN Tirasa, Sudiang, Kec. Biringkanaya,<br />Kota Makassar, Sulawesi Selatan.
            </p>
          </div>
        </div>
        <div className="border-t border-surface/10 py-6 text-center">
          <p className="font-body-sm text-body-sm text-surface-variant dark:text-on-surface-variant">{"© 2024 SDIT Imam Syafi'i. Mencetak Generasi Qur'ani dan Berprestasi."}</p>
        </div>
      </footer>
    </div>
  );
}