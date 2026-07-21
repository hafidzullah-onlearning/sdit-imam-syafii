import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sejarah from "@/components/Sejarah";
import Keunggulan from "@/components/Keunggulan";
import VisiMisiBento from "@/components/VisiMisiBento";
import StrukturOrganisasi from "@/components/StrukturOrganisasi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profil Sekolah & Visi Misi - SDIT Imam Syafi'i",
  description:
    "Profil lengkap SDIT Imam Syafi'i Sudiang Makassar. Mengenal Sejarah, Visi & Misi, Keunggulan Kurikulum, Struktur Pengelola, dan Fasilitas Modern.",
};

export default function ProfilPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col pt-16">
      <Navbar />

      <main className="flex-grow">
        {/* Sejarah Section */}
        <Sejarah />


        {/* Visi Misi Bento Section */}
        <VisiMisiBento />

        {/* Keunggulan & Kurikulum */}
        <Keunggulan />


        {/* Struktur Organisasi & Pengelola */}
        <StrukturOrganisasi />

        {/* Additional Profil Details Section */}
        <section className="py-xl bg-surface">

          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
                Fasilitas &amp; Lingkungan Belajar
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Dirancang khusus untuk mendukung kenyamanan serta keamanan santri selama proses belajar mengajar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[28px]">meeting_room</span>
                </div>
                <h3 className="font-bold text-lg text-on-surface mb-2">Ruang Kelas Ber-AC &amp; Ergonomis</h3>
                <p className="text-sm text-on-surface-variant">
                  Ruang kelas bersih, nyaman, ber-AC, dengan pencahayaan alami yang memadai untuk fokus belajar.
                </p>
              </div>

              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[28px]">mosque</span>
                </div>
                <h3 className="font-bold text-lg text-on-surface mb-2">Musholla &amp; Area Talaqqi</h3>
                <p className="text-sm text-on-surface-variant">
                  Fasilitas ibadah yang luas untuk sholat berjamaah dan halaqah setoran tahfidz harian.
                </p>
              </div>

              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-4">
                  <span className="material-symbols-outlined text-[28px]">sports_soccer</span>
                </div>
                <h3 className="font-bold text-lg text-on-surface mb-2">Area Olahraga &amp; Bermain</h3>
                <p className="text-sm text-on-surface-variant">
                  Lapangan olahraga yang aman untuk kegiatan fisik, ekstrakurikuler, dan interaksi sosial santri.
                </p>
              </div>
            </div>

            {/* CTA PPDB Banner */}
            <div className="mt-xl bg-primary text-on-primary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 oceanic-shadow">
              <div>
                <h3 className="font-headline-lg text-2xl md:text-3xl font-bold mb-2">
                  Tertarik Menjadi Bagian dari Keluarga Besar SDIT Imam Syafi'i?
                </h3>
                <p className="text-on-primary/80 max-w-xl text-sm md:text-base">
                  Pendaftaran Peserta Didik Baru (PPDB) telah dibuka. Segera amankan kuota untuk putra/putri Anda.
                </p>
              </div>
              <Link
                href="/ppdb"
                className="bg-tertiary-container text-on-tertiary-container hover:bg-tertiary hover:text-on-tertiary px-8 py-4 rounded-full font-label-bold text-sm transition-all whitespace-nowrap oceanic-shadow"
              >
                Informasi PPDB &amp; Pendaftaran
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
