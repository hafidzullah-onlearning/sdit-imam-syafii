import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Keunggulan from "@/components/Keunggulan";
import VisiMisi from "@/components/VisiMisi";
import Berita from "@/components/Berita";
import AnakSholih from "@/components/AnakSholih";
import TahfidzSummary from "@/components/TahfidzSummary";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased overflow-x-hidden pt-16 flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Layar Pertama: Hero + Stats */}
        <div className="flex flex-col justify-between">
          <Hero />
          <Stats />
        </div>

        <Keunggulan />
        <VisiMisi />

        {/* News & Anak Sholih Combo Section */}
        <section className="py-12 bg-surface-container-low border-b border-surface-variant/30">
          <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-lg w-full">
            <Berita />
            {/* Divider vertikal untuk desktop */}
            <div className="hidden lg:block w-px bg-outline-variant/30 self-stretch my-4"></div>
            {/* Divider horizontal untuk mobile */}
            <div className="block lg:hidden h-px bg-outline-variant/30 my-md w-full"></div>
            <AnakSholih />
          </div>
        </section>

        {/* Tahfidz Summary Section */}
        <TahfidzSummary />

        {/* Call To Action Banner PPDB */}
        <section className="py-16 bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="bg-primary text-on-primary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 oceanic-shadow">
              <div className="space-y-2">
                <span className="bg-secondary-fixed text-on-secondary-fixed px-3.5 py-1 rounded-full text-xs font-bold inline-block">
                  Pendaftaran PPDB 2024/2025
                </span>
                <h2 className="font-headline-lg text-2xl md:text-3xl font-bold">
                  Mulai Perjalanan Pembentukan Generasi Qur'ani Ananda
                </h2>
                <p className="text-on-primary/80 max-w-xl text-sm">
                  Dapatkan informasi lengkap mengenai syarat pendaftaran, alur seleksi, dan rincian biaya pendidikan.
                </p>
              </div>
              <Link
                href="/ppdb"
                className="bg-primary-container text-on-primary-container hover:bg-surface hover:text-primary px-8 py-4 rounded-full font-bold text-sm transition-all whitespace-nowrap oceanic-shadow"
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