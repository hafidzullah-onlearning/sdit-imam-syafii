export default function VisiMisiBento() {
  return (
    <section className="py-xl bg-surface border-b border-surface-variant/30">
      <div className="px-gutter max-w-container-max mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-lg">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label-bold text-xs uppercase tracking-wider mb-3">
            Arah &amp; Tujuan Pendidikan
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
            Visi &amp; Misi Sekolah
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Komitmen kami dalam membentuk karakter Rabbani dan kecerdasan intelektual siswa secara seimbang.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {/* Main Vision Card (Full Width Span) */}
          <div className="md:col-span-3 bg-primary p-8 md:p-12 rounded-2xl text-on-primary oceanic-shadow relative overflow-hidden group">
            {/* Background Decorative Icon */}
            <div className="absolute -right-8 -top-8 opacity-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              <span
                className="material-symbols-outlined text-[240px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <span className="font-label-bold text-xs uppercase tracking-widest text-primary-fixed block mb-3 opacity-90">
                VISI SEKOLAH
              </span>
              <h3 className="font-headline-xl text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-on-primary font-bold">
                &ldquo;Terwujudnya Generasi Rabbani yang Qur&apos;ani, Berakhlak Mulia, dan Unggul dalam Prestasi.&rdquo;
              </h3>
            </div>
          </div>

          {/* Mission Card 1 */}
          <div className="bg-surface rounded-2xl p-md oceanic-shadow border-t-4 border-tertiary-container hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-xl mb-4">
                <span className="material-symbols-outlined text-[28px]">menu_book</span>
              </div>
              <h4 className="font-headline-md text-xl font-bold text-on-surface mb-2">
                Akademik Qur&apos;ani
              </h4>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Menyelenggarakan pendidikan yang mengintegrasikan nilai-nilai Al-Qur&apos;an dan Sunnah ke dalam seluruh mata pelajaran umum.
              </p>
            </div>
          </div>

          {/* Mission Card 2 */}
          <div className="bg-surface rounded-2xl p-md oceanic-shadow border-t-4 border-primary-container hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 bg-tertiary/10 text-tertiary flex items-center justify-center rounded-xl mb-4">
                <span className="material-symbols-outlined text-[28px]">diversity_3</span>
              </div>
              <h4 className="font-headline-md text-xl font-bold text-on-surface mb-2">
                Pembentukan Karakter
              </h4>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Membiasakan adab-adab Islam dan akhlak mulia dalam interaksi harian di lingkungan sekolah dan rumah.
              </p>
            </div>
          </div>

          {/* Mission Card 3 */}
          <div className="bg-surface rounded-2xl p-md oceanic-shadow border-t-4 border-secondary hover:-translate-y-1 transition-transform duration-300">
            <div>
              <div className="w-12 h-12 bg-secondary/10 text-secondary flex items-center justify-center rounded-xl mb-4">
                <span className="material-symbols-outlined text-[28px]">psychology</span>
              </div>
              <h4 className="font-headline-md text-xl font-bold text-on-surface mb-2">
                Inovasi Belajar
              </h4>
              <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                Mengembangkan metode pembelajaran yang kreatif, inovatif, dan relevan dengan perkembangan sains serta teknologi.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
