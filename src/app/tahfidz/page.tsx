import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TahfidzTable from "@/components/TahfidzTable";

export const metadata: Metadata = {
  title: "Portal Monitoring Tahfidz Al-Qur'an - SDIT Imam Syafi'i",
  description:
    "Portal informasi & pencarian mandiri progres hafalan santri SDIT Imam Syafi'i. Monitoring kelulusan target 6 Juz 6 Tahun dan catatan setoran harian.",
};

export default function TahfidzPage() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen flex flex-col pt-16 relative overflow-hidden">
      <Navbar />

      <main className="flex-grow relative">
        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 islamic-pattern -z-10 pointer-events-none"></div>

        {/* Header Banner */}
        <section className="bg-surface-container-low/80 backdrop-blur-sm py-12 md:py-16 border-b border-surface-variant/30">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full font-label-bold text-xs mb-4">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              Program Unggulan
            </div>
            <h1 className="font-headline-xl text-headline-xl md:text-[40px] text-primary mb-3">
              Informasi Capaian Tahfidz Al-Qur&apos;an
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Halaman pemantauan hafalan Al-Qur&apos;an siswa SDIT Imam Syafi&apos;i secara berkala dan transparan bagi wali murid.
            </p>
          </div>
        </section>

        {/* Interactive Tahfidz Table Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-container-max mx-auto px-gutter">
            <TahfidzTable />
          </div>
        </section>

        {/* Tahfidz Method & Milestones */}
        <section className="py-xl bg-surface-container-lowest/60 border-t border-surface-variant/30">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-2xl mx-auto mb-lg">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">
                Metode Pembimbingan Tahfidz
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Bagaimana ustadz dan ustadzah mendampingi hafalan santri setiap hari di halaqah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[28px]">record_voice_over</span>
                </div>
                <h3 className="font-bold text-lg text-on-surface mb-2">1. Metode Talaqqi &amp; Tasmi'</h3>
                <p className="text-sm text-on-surface-variant">
                  Santri mendengarkan makhraj dan tajwid langsung dari ustadz pembimbing, kemudian mengulanginya hingga fasih dan mutqin.
                </p>
              </div>

              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-primary mb-4">
                  <span className="material-symbols-outlined text-[28px]">update</span>
                </div>
                <h3 className="font-bold text-lg text-on-surface mb-2">2. Muraja'ah Harian Berkelanjutan</h3>
                <p className="text-sm text-on-surface-variant">
                  Setiap jam halaqah diawali dengan pengulangan hafalan lama (*sabaq &amp; manzil*) agar hafalan yang telah disetorkan tidak mudah lupa.
                </p>
              </div>

              <div className="bg-surface-container-low p-6 rounded-2xl border border-surface-variant/30 oceanic-shadow">
                <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-4">
                  <span className="material-symbols-outlined text-[28px]">verified</span>
                </div>
                <h3 className="font-bold text-lg text-on-surface mb-2">3. Munaqosyah &amp; Sertifikasi</h3>
                <p className="text-sm text-on-surface-variant">
                  Ujian kenaikan juz secara berkala dengan penguji independen untuk penerbitan sertifikat resmi kelulusan juz.
                </p>
              </div>
            </div>

            {/* Target Breakdown Table */}
            <div className="mt-xl bg-surface-container-low rounded-2xl p-6 md:p-8 border border-surface-variant/30 oceanic-shadow">
              <h3 className="text-xl font-bold text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">flag</span>
                Target Kelulusan Tahfidz per Tingkat Kelas
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-outline-variant/30 text-on-surface font-bold">
                      <th className="py-3 px-4">Tingkat Kelas</th>
                      <th className="py-3 px-4">Target Juz</th>
                      <th className="py-3 px-4">Fokus Surah / Juz</th>
                      <th className="py-3 px-4 text-right">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20 text-on-surface-variant">
                    <tr>
                      <td className="py-3 px-4 font-bold text-on-surface">Kelas 1 &amp; 2</td>
                      <td className="py-3 px-4 text-primary font-bold">Juz 30</td>
                      <td className="py-3 px-4">Surah An-Nas s.d. Surah An-Naba</td>
                      <td className="py-3 px-4 text-right">
                        <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-bold">
                          Wajib Lulus
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-on-surface">Kelas 3 &amp; 4</td>
                      <td className="py-3 px-4 text-primary font-bold">Juz 29</td>
                      <td className="py-3 px-4">Surah Al-Mulk s.d. Surah Al-Mursalat</td>
                      <td className="py-3 px-4 text-right">
                        <span className="bg-primary/10 text-primary text-xs px-2.5 py-1 rounded-full font-bold">
                          Wajib Lulus
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-bold text-on-surface">Kelas 5 &amp; 6</td>
                      <td className="py-3 px-4 text-tertiary font-bold">Juz 28 s.d. Juz 25</td>
                      <td className="py-3 px-4">Surah Mujadilah &amp; Juz Pilihan Plus Mutaba'ah Total</td>
                      <td className="py-3 px-4 text-right">
                        <span className="bg-tertiary/10 text-tertiary text-xs px-2.5 py-1 rounded-full font-bold">
                          Target Pengayaan
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Help Callout */}
            <div className="mt-8 bg-surface p-6 rounded-2xl border border-surface-variant/40 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[36px]">contact_support</span>
                <div>
                  <p className="font-bold text-on-surface text-base">Butuh Informasi Buku Mutaba'ah Ananda?</p>
                  <p className="text-xs text-on-surface-variant">
                    Hubungi Ustadz/Ustadzah koordinator halaqah untuk mendapatkan laporan detail progres harian.
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/628123456789?text=Assalamu%27alaikum%2C%20saya%20ingin%20menanyakan%20progres%20tahfidz%20ananda"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-container text-on-primary font-bold text-xs px-6 py-3 rounded-xl transition-all whitespace-nowrap"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
