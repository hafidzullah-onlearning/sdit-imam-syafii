import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import newsPpdb from "@/assets/news-ppdb.jpg";
import newsMunaqosyah from "@/assets/news-munaqosyah.png";
import newsHoliday from "@/assets/news-holiday.jpg";
import newsMabit from "@/assets/news-mabit.jpg";
import newsScience from "@/assets/news-science.jpg";

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
  "mabit-qiyamul-lail-kelas-6": {
    title: "Mabit & Qiyamul Lail Bersama Siswa Kelas 6 SDIT Imam Syafi'i",
    date: "12 Oktober 2024",
    category: "Kegiatan",
    author: "Tim Kesiswaan & Al-Qur'an",
    image: newsMabit,
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "SDIT Imam Syafi'i sukses menyelenggarakan kegiatan Malam Bina Iman dan Taqwa (Mabit) serta Qiyamul Lail khusus bagi seluruh siswa-siswi kelas 6. Kegiatan ini bertujuan untuk membekali mental dan spiritual para santri menjelang ujian kelulusan.",
      "Selama Mabit, siswa diajak mengulas kembali hafalan Al-Qur'an (muraja'ah), mendengarkan ceramah motivasi Islami, sholat beregu, serta sholat tahajud berjamaah di sepertiga malam terakhir.",
      "Kegiatan diakhiri dengan sholat subuh berjamaah, doa bersama, dan sarapan sehat bersama ustadz pendamping. Semoga kegiatan ini menanamkan kebiasaan ibadah mandiri yang kuat bagi ananda di rumah.",
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
      "Dalam rangka menguji kelancaran dan ketepatan tajwid hafalan Al-Qur'an santri, SDIT Imam Syafi'i menggelar Ujian Munaqosyah Tahfidz Terbuka untuk seluruh tingkat kelas 1 hingga 6.",
      "Ujian Munaqosyah ini merupakan agenda rutin yang wajib diikuti oleh santri yang telah menyelesaikan target hafalan minimal 1 Juz (Juz 30, 29, 28, atau seterusnya).",
      "Format ujian diselenggarakan secara langsung di hadapan Tim Penguji/Penguji Eksternal serta disaksikan oleh orang tua/wali santri secara khidmat.",
      "Semoga Allah memberikan kelancaran dan keistiqomahan kepada ananda dalam menjaga kalam-Nya.",
    ],
  },
  "jadwal-pendaftaran-ppdb-gelombang-1": {
    title: "Pembukaan Pendaftaran Peserta Didik Baru (PPDB) TA 2025/2026",
    date: "05 Oktober 2024",
    category: "Pengumuman",
    author: "Panitia PPDB SDIT Imam Syafi'i",
    image: newsPpdb,
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "SDIT Imam Syafi'i Sudiang Makassar dengan bangga mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) Gelombang 1 untuk Tahun Ajaran 2025/2026. Pendaftaran ini diperuntukkan bagi calon murid kelas 1 serta transfer murid pindahan.",
      "Sebagai institusi pendidikan yang berkomitmen membentuk generasi Qur'ani yang berakhlak mulia dan unggul secara akademik, SDIT Imam Syafi'i menyediakan kuota terbatas demi menjaga rasio ideal antara ustadz pendamping dan santri.",
      "Persyaratan Pendaftaran:",
      "1. Mengisi Formulir Pendaftaran (Online via WhatsApp Panitia / Datang Langsung).\n2. Membayar Biaya Pendaftaran.\n3. Melampirkan Fotokopi Akta Kelahiran & Kartu Keluarga.\n4. Usia minimal calon siswa 6 tahun pada bulan Juli 2025.",
      "Bagi Bapak/Ibu wali murid yang ingin berkonsultasi mengenai alur pendaftaran, rincian biaya, atau jadwal tes observasi, silakan menghubungi Panitia PPDB melalui tombol kontak yang tersedia.",
    ],
  },
  "science-day-eksplorasi-kreativitas": {
    title: "Science Day: Eksplorasi Sains dan Teknologi Berbasis Al-Qur'an",
    date: "28 September 2024",
    category: "Kegiatan",
    author: "Tim Kurikulum Sains",
    image: newsScience,
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "SDIT Imam Syafi'i sukses menggelar pameran 'Science Day' tahunan yang diikuti oleh perwakilan siswa dari kelas 1 hingga kelas 6 di gedung aula sekolah.",
      "Berbagai proyek eksperimen menarik ditampilkan, mulai dari miniatur gunung berapi, pemurni air sederhana, hingga eksperimen fisika sederhana yang dihubungkan dengan ayat-ayat kauniyah Al-Qur'an.",
      "Acara ini bertujuan menumbuhkan rasa ingin tahu, cara berpikir kritis, serta kesadaran akan kebesaran Allah melalui fenomena alam semesta.",
    ],
  },
  "prestasi-gemilang-olimpiade-matematika": {
    title: "Santri SDIT Imam Syafi'i Raih Medali Emas Olimpiade Matematika",
    date: "20 September 2024",
    category: "Akademik",
    author: "Humas & Prestasi Sekolah",
    image: newsMunaqosyah,
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "Alhamdulillah tsumma alhamdulillah, berita membanggakan datang dari kontingen sains SDIT Imam Syafi'i yang berhasil menyabet Medali Emas dalam Kompetisi Sains & Matematika tingkat Provinsi.",
      "Prestasi ini diraih berkat kedisiplinan belajar ananda dan bimbingan intensif dari para ustadz pembina olimpiade sekolah.",
      "Manajemen sekolah mengucapkan jazakumullahu khairan kepada para guru, orang tua, dan seluruh pihak yang memberikan dukungan penuh bagi pencapaian gemilang ini.",
    ],
  },
  "libur-semester-ganjil": {
    title: "Peresmian Pojok Baca Tematik di Setiap Lantai Sekolah",
    date: "15 September 2024",
    category: "Pengumuman",
    author: "Tim Literasi Sekolah",
    image: newsHoliday,
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "Guna meningkatkan budaya minat baca (literasi) bagi santri, SDIT Imam Syafi'i kini meresmikan area 'Pojok Baca' tematik di setiap lorong lantai 1 hingga lantai 3 gedung sekolah.",
      "Pojok baca dilengkapi dengan karpet empuk, rak buku ramah anak, serta ribuan koleksi buku cerita Islami, ensiklopedia anak, dan majalah sains.",
      "Diharapkan santri dapat memanfaatkan waktu istirahat dengan membaca buku yang mendidik dan menambah wawasan keislaman.",
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
      <div className="bg-background font-body-md text-on-surface min-h-screen flex flex-col pt-16">
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
              className="bg-primary text-on-primary font-bold text-xs px-6 py-3 rounded-full shadow inline-flex items-center gap-2"
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

  const getBadgeStyle = (category: string) => {
    switch (category) {
      case "Kegiatan":
        return "bg-primary/10 text-primary border border-primary/20";
      case "Akademik":
        return "bg-secondary-container text-on-secondary-container";
      case "Pengumuman":
        return "bg-error-container text-on-error-container";
      default:
        return "bg-surface-container-high text-on-surface";
    }
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col pt-16">
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
            <span
              className={`inline-block font-label-bold text-xs px-3 py-1 rounded-full mb-3 ${getBadgeStyle(
                article.category
              )}`}
            >
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
