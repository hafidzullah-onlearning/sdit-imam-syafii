import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import newsPpdb from "@/assets/news-ppdb.jpg";
import newsMunaqosyah from "@/assets/news-munaqosyah.png";
import newsHoliday from "@/assets/news-holiday.jpg";

const articlesData: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    author: string;
    image: any;
    content: string[];
  }
> = {
  "jadwal-pendaftaran-ppdb-gelombang-1": {
    title: "Jadwal Pendaftaran PPDB Gelombang 1 Tahun Ajaran 2024/2025",
    date: "15 Oktober 2024",
    category: "Pengumuman",
    author: "Panitia PPDB SDIT Imam Syafi'i",
    image: newsPpdb,
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "SDIT Imam Syafi'i Sudiang Makassar dengan bangga mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) Gelombang 1 untuk Tahun Ajaran 2024/2025. Pendaftaran ini diperuntukkan bagi calon murid kelas 1 serta transfer murid pindahan.",
      "Sebagai institusi pendidikan yang berkomitmen membentuk generasi Qur'ani yang berakhlak mulia dan unggul secara akademik, SDIT Imam Syafi'i menyediakan kuota terbatas demi menjaga rasio ideal antara ustadz pendamping dan santri.",
      "Persyaratan Pendaftaran:",
      "1. Mengisi Formulir Pendaftaran (Online via WhatsApp Panitia / Datang Langsung).\n2. Membayar Biaya Pendaftaran.\n3. Melampirkan Fotokopi Akta Kelahiran & Kartu Keluarga.\n4. Usia minimal calon siswa 6 tahun pada bulan Juli 2024.",
      "Bagi Bapak/Ibu wali murid yang ingin berkonsultasi mengenai alur pendaftaran, rincian biaya, atau jadwal tes observasi, silakan menghubungi Panitia PPDB melalui tombol kontak yang tersedia.",
    ],
  },
  "agenda-munaqosyah-tahfidz": {
    title: "Pelaksanaan Agenda Munaqosyah Tahfidz Al-Qur'an Semester Ganjil",
    date: "10 Oktober 2024",
    category: "Akademik",
    author: "Koordinator Tahfidz",
    image: newsMunaqosyah,
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "Dalam rangka menguji kelancaran dan ketepatan tajwid hafalan Al-Qur'an santri, SDIT Imam Syafi'i akan menggelar Ujian Munaqosyah Tahfidz Terbuka untuk seluruh tingkat kelas 1 hingga 6.",
      "Ujian Munaqosyah ini merupakan agenda rutin yang wajib diikuti oleh santri yang telah menyelesaikan target hafalan minimal 1 Juz (Juz 30, 29, 28, atau seterusnya).",
      "Format ujian diselenggarakan secara langsung di hadapan Tim Penguji/Penguji Eksternal serta dapat disaksikan oleh orang tua/wali santri secara khidmat.",
      "Semoga Allah memberikan kelancaran dan keistiqomahan kepada ananda dalam menjaga kalam-Nya.",
    ],
  },
  "libur-semester-ganjil": {
    title: "Pemberitahuan Jadwal Libur Akhir Semester Ganjil",
    date: "05 Oktober 2024",
    category: "Informasi",
    author: "Humas Sekolah",
    image: newsHoliday,
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "Diberitahukan kepada seluruh Orang Tua / Wali Santri SDIT Imam Syafi'i bahwasanya kegiatan Pembelajaran Semester Ganjil telah selesai dilaksanakan dengan lancar.",
      "Jadwal Libur Akhir Semester ditetapkan mulai tanggal 20 Desember 2024 hingga 5 Januari 2025. Kegiatan Belajar Mengajar (KBM) Semester Genap akan kembali aktif pada hari Senin, 6 Januari 2025.",
      "Himbauan Liburan:",
      "1. Orang tua diharapkan tetap memantau mutaba'ah harian sholat 5 waktu & muraja'ah hafalan Al-Qur'an ananda di rumah.\n2. Mengisi buku mutaba'ah liburan yang telah dibagikan oleh ustadz kelas.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) {
    return {
      title: "Berita Tidak Ditemukan - SDIT Imam Syafi'i",
    };
  }
  return {
    title: `${article.title} - SDIT Imam Syafi'i`,
    description: article.content[1] || article.title,
  };
}

export default async function DetailBeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    return (
      <div className="bg-surface font-body-md text-on-surface min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center">
            <span className="material-symbols-outlined text-64px text-outline mb-4">
              article
            </span>
            <h1 className="font-bold text-2xl mb-2">Artikel Tidak Ditemukan</h1>
            <p className="text-sm text-on-surface-variant mb-6">
              Maaf, berita atau pengumuman yang Anda cari tidak ditemukan.
            </p>
            <Link
              href="/berita"
              className="bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-xl shadow inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Kembali ke Berita
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col pt-16">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-gutter">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/berita" className="hover:text-primary transition-colors">
              Berita
            </Link>
            <span>/</span>
            <span className="text-on-surface font-bold truncate max-w-xs md:max-w-none">
              {article.title}
            </span>
          </div>

          {/* Article Header */}
          <div className="mb-8">
            <span className="inline-block bg-primary text-on-primary font-bold text-xs px-3 py-1 rounded-full mb-3">
              {article.category}
            </span>
            <h1 className="font-headline-xl text-headline-xl md:text-4xl text-on-surface mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-on-surface-variant border-b border-surface-variant/30 pb-4">
              <span className="flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px] text-primary">person</span>
                {article.author}
              </span>
              <span className="flex items-center gap-1 font-medium">
                <span className="material-symbols-outlined text-[16px] text-primary">calendar_today</span>
                {article.date}
              </span>
            </div>
          </div>

          {/* Main Image */}
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 oceanic-shadow border border-surface-variant/30">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Body Content */}
          <div className="prose prose-slate max-w-none space-y-4 text-on-surface-variant leading-relaxed text-sm md:text-base mb-12">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Back & Share Action */}
          <div className="border-t border-surface-variant/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 text-primary font-bold text-xs hover:underline"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Lihat Berita Lainnya
            </Link>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow hover:opacity-90 transition-opacity"
            >
              <span className="material-symbols-outlined text-[18px]">share</span>
              Bagikan ke WhatsApp
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
