import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Keunggulan from "@/components/Keunggulan";
import TahfidzSummary from "@/components/TahfidzSummary";
import VisiMisi from "@/components/VisiMisi";
import Berita from "@/components/Berita";
import AnakSholih from "@/components/AnakSholih";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased overflow-x-hidden pt-20">
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Keunggulan />
        <TahfidzSummary />
        <VisiMisi />

        {/* News & Anak Sholih Combo Section */}
        <section
          id="berita"
          className="py-xl bg-surface-container-low border-b border-surface-variant/30"
        >
          <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-lg">
            <Berita />
            <AnakSholih />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}