export default function VisiMisi() {
  return (
    <section id="profil" className="pt-8 md:pt-12 pb-xl px-gutter max-w-container-max mx-auto scroll-mt-16">
      <div className="bg-primary text-on-primary rounded-[2rem] p-lg md:p-xl flex flex-col md:flex-row items-center gap-lg relative overflow-hidden">
        {/* Abstract Graphic */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="md:w-1/2 z-10">
          <h2 className="font-headline-lg text-headline-lg mb-sm">Visi &amp; Misi</h2>
          <p className="font-body-lg text-body-lg text-on-primary/80 mb-md">
            Mewujudkan institusi pendidikan dasar Islam terpadu yang profesional dalam mencetak generasi dambaan umat.
          </p>
          <a
            className="inline-flex items-center gap-2 text-on-primary font-label-bold text-label-bold hover:text-tertiary-container transition-colors"
            href="#profil"
          >
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
            <p className="font-body-sm text-body-sm text-on-primary/90">
              Menjadi pusat percontohan pendidikan dasar yang melahirkan generasi {"Qur'ani"}, cerdas secara akademik, dan berakhlak mulia sesuai pemahaman Salafus Shalih.
            </p>
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
  );
}
