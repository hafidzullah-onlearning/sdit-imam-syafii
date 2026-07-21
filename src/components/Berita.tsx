import Image from "next/image";
import Link from "next/link";
import newsPpdb from "@/assets/news-ppdb.jpg";
import newsMunaqosyah from "@/assets/news-munaqosyah.png";
import newsHoliday from "@/assets/news-holiday.jpg";

export default function Berita() {
  return (
    <div className="lg:w-[65%] flex flex-col">
      <div className="flex justify-between items-end mb-lg lg:mb-4">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Berita &amp; Informasi</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Update terkini kegiatan dan pengumuman SDIT Imam Syafi&apos;i.
          </p>
        </div>
        <Link
          href="/berita"
          className="hidden md:flex items-center gap-2 text-primary font-label-bold text-label-bold hover:bg-primary/5 px-4 py-2 rounded-lg transition-colors"
        >
          Lihat Semua Berita
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {/* News Card 1 */}
        <Link
          href="/berita/jadwal-pendaftaran-ppdb-gelombang-1"
          className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-40 lg:h-32 overflow-hidden relative">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A well-designed graphic announcement banner for school enrollment."
              src={newsPpdb}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-3 left-3 bg-primary text-on-primary px-2.5 py-0.5 rounded-full font-label-bold text-[11px] z-10">
              Pengumuman
            </div>
          </div>
          <div className="p-4 lg:p-3 flex flex-col flex-grow">
            <div className="text-xs text-on-surface-variant mb-2 lg:mb-1 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              15 Oktober 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base lg:text-sm mb-2 lg:mb-1 group-hover:text-primary transition-colors leading-tight">
              Jadwal Pendaftaran PPDB Gelombang 1
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 lg:mb-2 flex-grow line-clamp-2 text-sm lg:text-xs">
              Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025 resmi dibuka. Kuota terbatas.
            </p>
            <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">
              Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </Link>
        {/* News Card 2 */}
        <Link
          href="/berita/agenda-munaqosyah-tahfidz"
          className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-40 lg:h-32 overflow-hidden relative">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A brightly lit, spacious school hall arranged for a formal examination or ceremony."
              src={newsMunaqosyah}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-3 left-3 bg-tertiary-container text-on-tertiary-container px-2.5 py-0.5 rounded-full font-label-bold text-[11px] z-10">
              Akademik
            </div>
          </div>
          <div className="p-4 lg:p-3 flex flex-col flex-grow">
            <div className="text-xs text-on-surface-variant mb-2 lg:mb-1 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              10 Oktober 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base lg:text-sm mb-2 lg:mb-1 group-hover:text-primary transition-colors leading-tight">
              Agenda Munaqosyah Tahfidz
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 lg:mb-2 flex-grow line-clamp-2 text-sm lg:text-xs">
              Ujian tahfidz terbuka untuk siswa kelas 1-6 akan dilaksanakan pekan depan.
            </p>
            <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">
              Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </Link>
        {/* News Card 3 */}
        <Link
          href="/berita/libur-semester-ganjil"
          className="bg-surface rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="h-40 lg:h-32 overflow-hidden relative">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="A serene outdoor scene of a school courtyard during a quiet, sunny day."
              src={newsHoliday}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-3 left-3 bg-surface-container-high text-on-surface px-2.5 py-0.5 rounded-full font-label-bold text-[11px] z-10">
              Informasi
            </div>
          </div>
          <div className="p-4 lg:p-3 flex flex-col flex-grow">
            <div className="text-xs text-on-surface-variant mb-2 lg:mb-1 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              05 Oktober 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base lg:text-sm mb-2 lg:mb-1 group-hover:text-primary transition-colors leading-tight">
              Libur Semester
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 lg:mb-2 flex-grow line-clamp-2 text-sm lg:text-xs">
              Pemberitahuan jadwal libur akhir semester ganjil bagi seluruh siswa.
            </p>
            <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">
              Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </Link>
      </div>
      <Link
        href="/berita"
        className="md:hidden w-full mt-6 flex justify-center items-center gap-2 text-primary border border-primary font-label-bold text-label-bold px-4 py-3 rounded-lg transition-colors text-center"
      >
        Lihat Semua Berita
      </Link>
    </div>
  );
}

