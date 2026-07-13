import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Keunggulan from "@/components/Keunggulan";
import VisiMisi from "@/components/VisiMisi";
import Berita from "@/components/Berita";
import AnakSholih from "@/components/AnakSholih";
import TahfidzSummary from "@/components/TahfidzSummary";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased overflow-x-hidden pt-16">
      <Navbar />

      <main>
        {/* Layar Pertama: Hero + Stats */}
        <div id="hero" className="md:min-h-[calc(100vh-4rem)] flex flex-col justify-between scroll-mt-16">
          <Hero />
          <Stats />
        </div>

        <Keunggulan />
        <VisiMisi />

        {/* News & Anak Sholih Combo Section */}
        <section
          id="berita"
          className="md:min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] flex flex-col justify-center py-8 lg:py-6 bg-surface-container-low border-b border-surface-variant/30 scroll-mt-16 lg:overflow-hidden"
        >
          <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-lg w-full">
            <Berita />
            {/* Divider vertikal untuk desktop */}
            <div className="hidden lg:block w-px bg-outline-variant/30 self-stretch my-4"></div>
            {/* Divider horizontal untuk mobile */}
            <div className="block lg:hidden h-px bg-outline-variant/30 my-md w-full"></div>
            <AnakSholih />
          </div>
        </section>

        <TahfidzSummary />
      </main>

      <Footer />
    </div>
  );
}