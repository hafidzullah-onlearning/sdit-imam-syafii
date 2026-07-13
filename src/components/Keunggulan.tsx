export default function Keunggulan() {
  return (
    <section id="keunggulan" className="py-xl bg-surface-bright border-y border-surface-variant/30">
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
            <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
              {"Program Unggulan Tahfidz Al-Qur'an"}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Target pencapaian 6 Juz dalam 6 Tahun (1 Tahun 1 Juz) dengan metode talaqqi yang intensif dan menyenangkan.
            </p>
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
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Lingkungan belajar yang bersih, aman, dan dilengkapi dengan teknologi terkini untuk menunjang eksplorasi siswa.
            </p>
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
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              Perpaduan seimbang antara kurikulum Nasional (Umum) dan kurikulum khas SIT {"(Syar'i)"} untuk kecerdasan holistik.
            </p>
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
  );
}
