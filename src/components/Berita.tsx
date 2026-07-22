import Image from "next/image";
import Link from "next/link";
import newsPpdb from "@/assets/news-ppdb.jpg";
import newsMunaqosyah from "@/assets/news-munaqosyah.png";
import newsMabit from "@/assets/news-mabit.jpg";

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
          href="/berita/mabit-qiyamul-lail-kelas-6"
          className="bg-surface-container-lowest rounded-2xl overflow-hidden oceanic-shadow border-t-4 border-tertiary-container flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <div className="h-40 lg:h-32 overflow-hidden relative bg-surface-container">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Mabit & Qiyamul Lail Bersama Kelas 6"
              src={newsMabit}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-3 left-3 bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-label-bold text-[11px] z-10">
              Kegiatan
            </div>
          </div>
          <div className="p-4 lg:p-3 flex flex-col flex-grow">
            <div className="text-xs text-outline mb-2 lg:mb-1 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              12 Okt 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base lg:text-sm mb-2 lg:mb-1 group-hover:text-primary transition-colors leading-tight">
              Mabit &amp; Qiyamul Lail Bersama Kelas 6
            </h3>
            <p className="font-body-sm text-on-surface-variant mb-4 lg:mb-2 flex-grow line-clamp-2 text-sm lg:text-xs">
              Membangun spiritualitas sejak dini melalui kegiatan Malam Bina Iman dan Taqwa (Mabit).
            </p>
            <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">
              Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </Link>

        {/* News Card 2 */}
        <Link
          href="/berita/agenda-munaqosyah-tahfidz"
          className="bg-surface-container-lowest rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <div className="h-40 lg:h-32 overflow-hidden relative bg-surface-container">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Ujian Tahfidz Semester Ganjil"
              src={newsMunaqosyah}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-3 left-3 bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full font-label-bold text-[11px] z-10">
              Akademik
            </div>
          </div>
          <div className="p-4 lg:p-3 flex flex-col flex-grow">
            <div className="text-xs text-outline mb-2 lg:mb-1 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              10 Okt 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base lg:text-sm mb-2 lg:mb-1 group-hover:text-primary transition-colors leading-tight">
              Ujian Tahfidz Semester Ganjil Dimulai
            </h3>
            <p className="font-body-sm text-on-surface-variant mb-4 lg:mb-2 flex-grow line-clamp-2 text-sm lg:text-xs">
              Pelaksanaan evaluasi hafalan Al-Qur'an berjalan dengan khidmat.
            </p>
            <span className="text-primary font-label-bold text-[12px] mt-auto inline-flex items-center gap-1">
              Baca Selengkapnya <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            </span>
          </div>
        </Link>

        {/* News Card 3 */}
        <Link
          href="/berita/jadwal-pendaftaran-ppdb-gelombang-1"
          className="bg-surface-container-lowest rounded-2xl overflow-hidden oceanic-shadow flex flex-col group cursor-pointer hover:-translate-y-1 transition-all duration-300"
        >
          <div className="h-40 lg:h-32 overflow-hidden relative bg-surface-container">
            <Image
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Pembukaan Pendaftaran Siswa Baru (PPDB)"
              src={newsPpdb}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute top-3 left-3 bg-error-container text-on-error-container px-2.5 py-0.5 rounded-full font-label-bold text-[11px] z-10">
              Pengumuman
            </div>
          </div>
          <div className="p-4 lg:p-3 flex flex-col flex-grow">
            <div className="text-xs text-outline mb-2 lg:mb-1 flex items-center gap-1 font-body-sm">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              05 Okt 2024
            </div>
            <h3 className="font-headline-md text-on-surface text-base lg:text-sm mb-2 lg:mb-1 group-hover:text-primary transition-colors leading-tight">
              Pembukaan Pendaftaran Siswa Baru (PPDB)
            </h3>
            <p className="font-body-sm text-on-surface-variant mb-4 lg:mb-2 flex-grow line-clamp-2 text-sm lg:text-xs">
              SDIT Imam Syafi'i resmi membuka pendaftaran peserta didik baru.
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
