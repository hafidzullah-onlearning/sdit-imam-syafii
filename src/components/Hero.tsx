import Image from "next/image";
import Link from "next/link";
import heroClassroom from "@/assets/hero-classroom.jpg";

export default function Hero() {
  return (
    <section
      className="relative py-md md:py-6 px-gutter max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-lg"
    >
      <div className="absolute inset-0 islamic-pattern -z-10 opacity-50"></div>
      <div className="md:w-1/2 flex flex-col items-start gap-md z-10">
        <div className="bg-secondary-fixed text-on-secondary-fixed px-4 py-2 rounded-full font-label-bold text-label-bold inline-flex items-center gap-2">
          <span
            className="material-symbols-outlined text-[16px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          Penerimaan Siswa Baru Dibuka
        </div>
        <h1 className="font-headline-xl text-headline-xl md:text-[44px] leading-[1.1] text-on-surface">
          Membentuk Generasi <span className="text-primary">{"Qur'ani"}</span>, Cerdas, dan Berakhlak Mulia
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[90%]">
          Sekolah Dasar Islam Terpadu pilihan terbaik di BTN Tirasa, Sudiang, Makassar. Kami berkomitmen memberikan pendidikan seimbang antara ilmu dunia dan akhirat.
        </p>
        {/* Highlight Info Cards (Akreditasi & Target Tahfidz) */}
        <div className="flex flex-wrap items-center gap-md mt-2">
          {/* Card 1: Akreditasi A */}
          <div className="bg-surface-container-low p-3.5 px-4 rounded-2xl oceanic-shadow flex items-center gap-3 border border-surface-variant/40">
            <div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary shadow-sm">
              <span className="material-symbols-outlined text-[24px]">military_tech</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Akreditasi</p>
              <p className="text-sm font-bold text-on-surface leading-tight">A (Sangat Baik)</p>
            </div>
          </div>

          {/* Card 2: Target Tahfidz */}
          <div className="bg-surface-container-low p-3.5 px-4 rounded-2xl oceanic-shadow flex items-center gap-3 border border-surface-variant/40">
            <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-[24px]">menu_book</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Target Tahfidz</p>
              <p className="text-sm font-bold text-on-surface leading-tight">6 Juz / 6 Tahun</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 w-full mt-lg md:mt-0 z-10 relative">
        {/* Main Image Container */}
        <div className="relative w-full aspect-[4/3] max-h-[320px] md:max-h-[380px] rounded-[2rem] overflow-hidden oceanic-shadow border border-surface-variant/40">
          <Image
            className="object-cover"
            alt="A bright, modern Islamic elementary school classroom filled with diverse students engaging in learning."
            src={heroClassroom}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>


    </section>
  );
}
