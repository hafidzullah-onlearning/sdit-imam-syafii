import Image from "next/image";

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
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-label-bold text-label-bold py-4 px-8 rounded-full transition-all duration-200 oceanic-shadow hover:-translate-y-1 cursor-pointer">
            Daftar PPDB Online
          </button>
        </div>
      </div>
      <div className="md:w-1/2 w-full mt-lg md:mt-0 z-10">
        <div className="relative w-full aspect-[4/3] max-h-[300px] md:max-h-[350px] rounded-[2rem] overflow-hidden oceanic-shadow">
          <Image
            className="object-cover"
            alt="A bright, modern Islamic elementary school classroom filled with diverse students wearing neat uniforms, engaging happily in a learning activity. Natural sunlight floods the room through large windows, creating a warm, inviting, and professional educational atmosphere. The color palette features soft sky blues, clean whites, and warm woods, reflecting a peaceful and high-quality learning environment."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAow9mLf8rHIMFMJzd8tih1V5DfURBYIWwQBiUM_xjj6a4wAbJksI843LCYLeIUa24JlONueOUEJYAYInv4-ExHybjPa2dnDIgrRKY3J-hpo0hPAkZxQbXjp20jcXkdx7UL4zySdgXQGJw9lW6qjbMEWX-alfsqK_wY8yjRvFZ7kvDgU49XZgvE0A26558b3y8NZduhH6-HOZ5TTpjl9FK3a1VtYZavmqKMMEoV8CXgR7IkJ1RgeDu1Qg"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-surface p-4 rounded-2xl oceanic-shadow flex items-center gap-3 border border-surface-variant/50 hidden md:flex z-20">
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
  );
}
