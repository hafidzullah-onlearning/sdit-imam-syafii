import Image from "next/image";

export default function Berita() {
  return (
    <div className="lg:w-[65%] flex flex-col">
      <div className="flex justify-between items-end mb-lg">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Berita &amp; Informasi</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Update terkini kegiatan dan pengumuman SDIT Imam Syafi&apos;i.
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-primary font-label-bold text-label-bold hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors cursor-pointer">
          Lihat Semua Berita
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* News Card 1 */}
        <div className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer">
          <div className="h-40 overflow-hidden relative">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A well-designed graphic announcement banner for school enrollment."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqyPznSygECLqcICjFz5fgeFvnUUzxBLTSSeSAp-_X_hUIYO-SBnfkdcPrMNq-Ilo3MKK81k2RJyqjXKm-DUkWV-5zK9YtX9IFingn5MvHRmkiOzT1wSgpXbvZ2ITQ8IO8HLcwTFcxw6aL0b18K4e9ZRAG0BtUmNNH27yQBETs9GrPDWGKXPmk0OWn3YNo_TdlLsp0pgQjZmTekGAXHi20RrCF740PwTjxuIAxSKNW7NOBuR5bF31g_w"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-label-bold text-[12px] z-10">
              Pengumuman
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="text-xs text-on-surface-variant mb-2 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              15 Oktober 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base mb-2 group-hover:text-primary transition-colors leading-tight">
              Jadwal Pendaftaran PPDB Gelombang 1
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow line-clamp-2 text-sm">
              Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025 resmi dibuka. Kuota terbatas.
            </p>
            <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">
              Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </div>
        {/* News Card 2 */}
        <div className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer">
          <div className="h-40 overflow-hidden relative">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A brightly lit, spacious school hall arranged for a formal examination or ceremony."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXu8MhXQg7PR_7uIFMPtXe-LM65CJIa2M5p0m7oKFydeaRoe4148uqTsekFLipYcWMM_jrKDdhJxJBF3y7dFgZqpLYGitKrXCJm1RQx9su8Fl_qsaejDfv-ddxYrw4ik7Ikl-SAz2Gylw4b1r340bZFXjsqtyqb1VtPYD4xHYBkzldADuYxTRM3x7F1zuDF9WNOx8lC4Mg3jPMFPIZmwzpFW4eC0VK7xHx8N2MGDjfUQUAEk_wWt2IKl3A"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full font-label-bold text-[12px] z-10">
              Akademik
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="text-xs text-on-surface-variant mb-2 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              10 Oktober 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base mb-2 group-hover:text-primary transition-colors leading-tight">
              Agenda Munaqosyah Tahfidz
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow line-clamp-2 text-sm">
              Ujian tahfidz terbuka untuk siswa kelas 1-6 akan dilaksanakan pekan depan.
            </p>
            <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">
              Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </div>
        {/* News Card 3 */}
        <div className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer">
          <div className="h-40 overflow-hidden relative">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A serene outdoor scene of a school courtyard during a quiet, sunny day."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6sj1t65YG_VPlTJmeZyVrcxSUBuwy2mOGoSAP6em3Af3oKufDr7wdzcYs2VNtfA8npscKjMvfyMMu9tv632_eKZLvKU70OoXByV4YKsRd3wonXEYhfcNL8thN5tmHw-dwQD61v9DeOCaoGM2l3a86MRqCB4SGuYCYP66MGH44THUMK2uCp5EtOW0LjZXs1DMA3xU2ytLKfXAlzTcpPjqMrLlMZ4g6jF7RZYksETW8Xdw1Y72q237uLg"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-4 left-4 bg-surface-container-high text-on-surface px-3 py-1 rounded-full font-label-bold text-[12px] z-10">
              Informasi
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <div className="text-xs text-on-surface-variant mb-2 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              05 Oktober 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base mb-2 group-hover:text-primary transition-colors leading-tight">
              Libur Semester
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-grow line-clamp-2 text-sm">
              Pemberitahuan jadwal libur akhir semester ganjil bagi seluruh siswa.
            </p>
            <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">
              Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </div>
      </div>
      <button className="md:hidden w-full mt-6 flex justify-center items-center gap-2 text-primary border border-primary font-label-bold text-label-bold px-4 py-3 rounded-lg transition-colors cursor-pointer">
        Lihat Semua Berita
      </button>
    </div>
  );
}
