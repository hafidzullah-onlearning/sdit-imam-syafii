import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pendaftaran PPDB 2024/2025 - SDIT Imam Syafi'i",
  description:
    "Informasi Penerimaan Peserta Didik Baru (PPDB) SDIT Imam Syafi'i Sudiang Makassar. Syarat pendaftaran, rincian biaya, alur seleksi, dan pendaftaran online.",
};

export default function PpdbPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col pt-16">
      <Navbar />

      <main className="flex-grow">
        {/* Header Banner */}
        <section className="bg-surface-container-low py-12 md:py-16 border-b border-surface-variant/30">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-4 py-1.5 rounded-full font-label-bold text-xs mb-4">
              <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
              Tahun Ajaran 2024/2025
            </div>
            <h1 className="font-headline-xl text-headline-xl md:text-[40px] text-on-surface mb-3">
              Penerimaan Peserta Didik Baru (PPDB)
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Bergabunglah bersama keluarga besar SDIT Imam Syafi'i. Kuota penerimaan dibatasi demi menjaga kualitas pembimbingan santri.
            </p>
          </div>
        </section>

        {/* Alur Pendaftaran Section */}
        <section className="py-xl bg-surface">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
                Alur Pendaftaran PPDB
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                4 langkah mudah mendaftarkan putra/putri Anda di SDIT Imam Syafi'i.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
              {/* Step 1 */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow relative flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-primary text-on-primary font-bold flex items-center justify-center text-sm mb-4">
                    01
                  </span>
                  <h3 className="font-bold text-base text-on-surface mb-2">Konsultasi &amp; Pendaftaran</h3>
                  <p className="text-xs text-on-surface-variant">
                    Menghubungi panitia PPDB via WhatsApp atau mengisi formulir langsung di sekretariat sekolah.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow relative flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-primary text-on-primary font-bold flex items-center justify-center text-sm mb-4">
                    02
                  </span>
                  <h3 className="font-bold text-base text-on-surface mb-2">Penyerahan Berkas</h3>
                  <p className="text-xs text-on-surface-variant">
                    Melengkapi berkas administrasi (Akta Kelahiran, KK, Pas Foto, dan Form Pendaftaran).
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow relative flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-primary text-on-primary font-bold flex items-center justify-center text-sm mb-4">
                    03
                  </span>
                  <h3 className="font-bold text-base text-on-surface mb-2">Observasi Calon Santri</h3>
                  <p className="text-xs text-on-surface-variant">
                    Pelaksanaan pemetaan kesiapan belajar santri dan wawancara singkat dengan orang tua wali.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow relative flex flex-col justify-between">
                <div>
                  <span className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary-container font-bold flex items-center justify-center text-sm mb-4">
                    04
                  </span>
                  <h3 className="font-bold text-base text-on-surface mb-2">Pengumuman &amp; Daftar Ulang</h3>
                  <p className="text-xs text-on-surface-variant">
                    Pengumuman hasil observasi serta penyelesaian registrasi daftar ulang siswa baru.
                  </p>
                </div>
              </div>
            </div>

            {/* Syarat & Gelombang Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mt-xl">
              {/* Syarat Pendaftaran */}
              <div className="bg-surface-container-low p-6 md:p-8 rounded-2xl border border-surface-variant/30 oceanic-shadow">
                <h3 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">assignment_turned_in</span>
                  Syarat Administrasi
                </h3>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span>Usia calon santri minimal 6 tahun pada bulan Juli 2024.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span>Fotokopi Akta Kelahiran santri (2 lembar).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span>Fotokopi Kartu Keluarga / KK (2 lembar).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span>Fotokopi KTP Orang Tua / Wali Santri.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">check_circle</span>
                    <span>Pas Foto terbaru ukuran 3x4 berwarna (4 lembar).</span>
                  </li>
                </ul>
              </div>

              {/* Gelombang & Kontak */}
              <div className="bg-primary text-on-primary p-6 md:p-8 rounded-2xl oceanic-shadow flex flex-col justify-between">
                <div>
                  <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold inline-block mb-3">
                    Status Kuota: Dibuka
                  </span>
                  <h3 className="text-2xl font-bold mb-3">Pendaftaran Gelombang 1</h3>
                  <p className="text-on-primary/80 text-sm mb-6 leading-relaxed">
                    Dapatkan potongan khusus registrasi awal bagi pendaftar Gelombang 1. Hubungi panitia sekarang untuk mendapatkan nomor antrean observasi.
                  </p>
                </div>

                <a
                  href="https://wa.me/628123456789?text=Assalamu%27alaikum%2C%20saya%20ingin%20mendaftar%20PPDB%20SDIT%20Imam%20Syafi%27i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white hover:opacity-95 text-center font-bold py-3.5 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Daftar via WhatsApp Panitia
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
