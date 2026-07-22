import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import mapLocation from "@/assets/map-location.jpg";
import heroClassroom from "@/assets/hero-classroom.jpg";

export const metadata: Metadata = {
  title: "Pendaftaran PPDB 2025/2026 - SDIT Imam Syafi'i",
  description:
    "Informasi Penerimaan Peserta Didik Baru (PPDB) SDIT Imam Syafi'i Sudiang Makassar. Syarat pendaftaran, rincian biaya pendidikan, alur seleksi, dan registrasi.",
};

export default function PpdbPage() {
  const whatsappUrl =
    "https://wa.me/628123456789?text=Assalamu%27alaikum%2C%20saya%20ingin%20mendaftar%20PPDB%20SDIT%20Imam%20Syafi%27i";

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col pt-16">
      <Navbar />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative md:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden islamic-pattern py-12 md:py-6 bg-surface-container-low border-b border-surface-variant/30">
          <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-lg items-center relative z-10">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-container/10 text-primary border border-primary/20 rounded-full font-label-bold text-xs mb-4">
                <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
                PPDB TAHUN AJARAN 2025/2026
              </span>
              <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-on-surface mb-4 leading-tight">
                Mencetak Generasi <span className="text-primary">Qur'ani</span> dan Berprestasi
              </h1>
              <p className="text-body-lg text-on-surface-variant mb-6 max-w-lg leading-relaxed">
                Penerimaan Peserta Didik Baru SDIT Imam Syafi'i Sudiang telah dibuka. Bergabunglah bersama kami dalam membina karakter dan ilmu pengetahuan berdasarkan nilai-nilai Islam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-on-primary px-6 py-3.5 rounded-xl font-label-bold text-center oceanic-shadow hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Daftar via WhatsApp
                </a>
                <a
                  href="#biaya"
                  className="border-2 border-primary text-primary px-6 py-3.5 rounded-xl font-label-bold text-center hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">payments</span>
                  Lihat Biaya Pendidikan
                </a>
              </div>
            </div>

            {/* Gelombang 1 Floating Card */}
            <div className="mt-8 md:mt-0">
              <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl oceanic-shadow border-t-4 border-tertiary-container relative overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">event_available</span>
                  <div>
                    <div className="font-headline-md text-xl font-bold text-on-surface">Pendaftaran Gelombang 1</div>
                    <span className="text-xs text-on-surface-variant font-medium">Status Kuota: Dibuka</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6 text-sm text-on-surface-variant">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary-container text-[20px]">check_circle</span>
                    <span>Pendaftaran: 1 Okt 2024 – 31 Des 2024</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary-container text-[20px]">check_circle</span>
                    <span>Observasi Santri: 11 Januari 2025</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary-container text-[20px]">check_circle</span>
                    <span>Pengumuman: 18 Januari 2025</span>
                  </li>
                </ul>
                <div className="p-3 bg-secondary-fixed text-on-secondary-fixed rounded-xl text-center font-bold text-sm">
                  Kuota Terbatas: Sisa 15 Kursi
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Registration Flow (Alur Pendaftaran) */}
        <section className="py-xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter text-center mb-lg">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Alur Pendaftaran</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">
              Proses pendaftaran yang mudah dan transparan untuk calon santri SDIT Imam Syafi'i.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-gutter">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-bold text-xl oceanic-shadow shrink-0">
                  01
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 flex-grow oceanic-shadow group-hover:border-primary transition-all">
                  <h3 className="font-bold text-lg text-primary mb-1">Registrasi & Konsultasi</h3>
                  <p className="text-sm text-on-surface-variant">
                    Menghubungi panitia PPDB melalui WhatsApp atau mengisi formulir pendaftaran langsung di sekretariat sekolah.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-bold text-xl oceanic-shadow shrink-0">
                  02
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 flex-grow oceanic-shadow group-hover:border-primary transition-all">
                  <h3 className="font-bold text-lg text-primary mb-1">Verifikasi & Penyerahan Berkas</h3>
                  <p className="text-sm text-on-surface-variant">
                    Melengkapi dan menyerahkan berkas administrasi fisik (Akta Kelahiran, KK, Pas Foto, KTP Orang Tua).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center font-bold text-xl oceanic-shadow shrink-0">
                  03
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 flex-grow oceanic-shadow group-hover:border-primary transition-all">
                  <h3 className="font-bold text-lg text-primary mb-1">Observasi & Wawancara</h3>
                  <p className="text-sm text-on-surface-variant">
                    Calon santri mengikuti sesi pemetaan kesiapan belajar dan orang tua mengikuti wawancara pemahaman visi-misi sekolah.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-xl oceanic-shadow shrink-0">
                  04
                </div>
                <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 flex-grow oceanic-shadow group-hover:border-primary transition-all">
                  <h3 className="font-bold text-lg text-primary mb-1">Pengumuman & Daftar Ulang</h3>
                  <p className="text-sm text-on-surface-variant">
                    Setelah dinyatakan diterima, orang tua menyelesaikan administrasi daftar ulang dan pengambilan perlengkapan santri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Requirements Section */}
        <section className="py-xl bg-surface-container-low border-y border-outline-variant/20">
          <div className="max-w-container-max mx-auto px-gutter grid md:grid-cols-2 gap-lg items-center">
            {/* Visual Photo Stack */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden oceanic-shadow border border-surface-variant/40">
                <Image
                  src={heroClassroom}
                  alt="Kegiatan pembelajaran santri SDIT Imam Syafi'i"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Requirements Text */}
            <div className="order-1 md:order-2">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Persyaratan Administrasi</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">star</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Usia Minimal</h4>
                    <p className="text-sm text-on-surface-variant">Calon santri berusia minimal 6 tahun pada bulan Juli tahun ajaran baru.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">description</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Dokumen Wajib</h4>
                    <p className="text-sm text-on-surface-variant">Fotokopi Akta Kelahiran (2 lembar), Fotokopi Kartu Keluarga (2 lembar), dan KTP Orang Tua/Wali.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">badge</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface">Pas Foto Santri</h4>
                    <p className="text-sm text-on-surface-variant">Pas foto berwarna terbaru ukuran 3x4 (4 lembar).</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. Fee Details Section */}
        <section id="biaya" className="py-xl bg-surface scroll-mt-20">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Investasi Pendidikan</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-sm md:text-base">
                Rincian biaya pendidikan transparan untuk kenyamanan dan mutu belajar putra-putri Anda.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-md">
              {/* Card 1: Registration */}
              <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-2xl oceanic-shadow transition-transform hover:-translate-y-1 duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-primary font-bold text-xs uppercase tracking-wider mb-2">Administrasi</div>
                  <h3 className="font-bold text-xl mb-4 text-on-surface">Pendaftaran</h3>
                  <div className="text-3xl font-bold text-on-surface mb-6">Rp 350.000</div>
                  <ul className="space-y-3 text-sm text-on-surface-variant mb-6">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                      <span>Formulir &amp; Berkas Pendaftaran</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                      <span>Biaya Pemetaan &amp; Observasi Santri</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                      <span>Sesi Wawancara Orang Tua</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Development Fee (Highlighted) */}
              <div className="p-8 bg-primary text-on-primary rounded-2xl oceanic-shadow transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-4 right-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Utama
                </div>
                <div>
                  <div className="font-bold text-xs uppercase tracking-wider mb-2 opacity-80">Pembangunan</div>
                  <h3 className="font-bold text-xl mb-4">Uang Pangkal</h3>
                  <div className="text-3xl font-bold mb-6">Rp 8.500.000</div>
                  <ul className="space-y-3 text-sm opacity-90 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">done</span>
                      <span>Sarana &amp; Prasarana Pendidikan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">done</span>
                      <span>Seragam Sekolah Lengkap</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">done</span>
                      <span>Buku Paket Utama 1 Tahun</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px]">done</span>
                      <span>Kegiatan Ekstrakurikuler &amp; Tahfidz</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Monthly SPP */}
              <div className="p-8 bg-surface-container-low border border-outline-variant/30 rounded-2xl oceanic-shadow transition-transform hover:-translate-y-1 duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-primary font-bold text-xs uppercase tracking-wider mb-2">Operasional</div>
                  <h3 className="font-bold text-xl mb-4 text-on-surface">SPP Bulanan</h3>
                  <div className="text-3xl font-bold text-on-surface mb-6">Rp 750.000</div>
                  <ul className="space-y-3 text-sm text-on-surface-variant mb-6">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                      <span>Iuran Operasional Pendidikan</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                      <span>Program Tahfidz Intensif</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">done</span>
                      <span>Bimbingan Al-Qur'an Harian</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-8 text-center text-xs md:text-sm text-on-surface-variant italic">
              *Skema pembayaran uang pangkal dapat dikonsultasikan saat wawancara keuangan dengan panitia PPDB.
            </p>
          </div>
        </section>

        {/* 5. Inquiry & Location Section */}
        <section className="py-xl bg-surface-container-low border-t border-outline-variant/20">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid lg:grid-cols-2 gap-lg bg-surface-container-lowest rounded-3xl overflow-hidden oceanic-shadow border border-outline-variant/30">
              {/* Left: Contact Info & Form */}
              <div className="p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-primary mb-3">
                    Pertanyaan Seputar PPDB?
                  </h2>
                  <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
                    Panitia kami siap membantu memberikan informasi lengkap mengenai pendaftaran dan program pendidikan di SDIT Imam Syafi'i.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-sm text-on-surface">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[20px]">location_on</span>
                    </div>
                    <div>
                      <p className="font-bold">Sekretariat PPDB</p>
                      <p className="text-on-surface-variant text-xs">BTN Tirasa, Sudiang, Kec. Biringkanaya, Kota Makassar</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-on-surface">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                      <span className="material-symbols-outlined text-[20px]">chat</span>
                    </div>
                    <div>
                      <p className="font-bold">Layanan WhatsApp</p>
                      <p className="text-on-surface-variant text-xs">Senin – Sabtu (08.00 – 14.00 WITA)</p>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:opacity-95 text-white py-3.5 rounded-xl font-bold text-sm text-center oceanic-shadow transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Hubungi Panitia via WhatsApp
                </a>
              </div>

              {/* Right: Map Location Card */}
              <div className="relative bg-surface-container h-64 lg:h-auto overflow-hidden">
                <Image
                  src={mapLocation}
                  alt="Peta Lokasi SDIT Imam Syafi'i di BTN Tirasa, Sudiang, Makassar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/20 flex items-end p-6">
                  <div className="bg-surface/95 backdrop-blur-md p-4 rounded-xl oceanic-shadow w-full">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-[24px]">location_on</span>
                      <div>
                        <h4 className="font-bold text-sm text-on-surface">Lokasi SDIT Imam Syafi'i</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          BTN Tirasa, Sudiang, Biringkanaya, Makassar
                        </p>
                        <a
                          href="https://maps.google.com/?q=BTN+Tirasa+Sudiang+Makassar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary font-bold text-xs mt-2 inline-flex items-center gap-1 hover:underline"
                        >
                          Buka di Google Maps
                          <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. FAQ Section */}
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
