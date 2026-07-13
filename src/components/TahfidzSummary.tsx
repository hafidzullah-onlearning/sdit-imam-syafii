"use client";

import { useState } from "react";

interface Student {
  name: string;
  class: string;
  target: string;
  progress: string;
  status: string;
  lastSetoran: string;
  totalJuz: string;
}

export default function TahfidzSummary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Student[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Mock data for search simulation
  const mockStudents = [
    {
      name: "Ahmad Yusuf Al-Fatih",
      class: "Kelas 3 Al-Farabi",
      target: "Juz 29",
      progress: "95%",
      status: "Mumtaz (Istimewa)",
      lastSetoran: "Surah An-Naba 1-40",
      totalJuz: "2 Juz",
    },
    {
      name: "Fatimah Az-Zahra",
      class: "Kelas 5 Ibn Sina",
      target: "Juz 27",
      progress: "80%",
      status: "Jayyid Jiddan (Sangat Baik)",
      lastSetoran: "Surah Al-Mulk 1-30",
      totalJuz: "4 Juz",
    },
    {
      name: "Ibrahim Al-Khalil",
      class: "Kelas 2 Al-Khawarizmi",
      target: "Juz 30",
      progress: "100%",
      status: "Mumtaz (Selesai)",
      lastSetoran: "Surah An-Nasr 1-3",
      totalJuz: "1 Juz",
    },
    {
      name: "Aisha Humaira",
      class: "Kelas 4 Al-Biruni",
      target: "Juz 28",
      progress: "90%",
      status: "Mumtaz (Istimewa)",
      lastSetoran: "Surah Al-Qalam 1-52",
      totalJuz: "3 Juz",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const results = mockStudents.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSearchResults(null);
    setHasSearched(false);
  };

  return (
    <section
      id="progrestahfidz"
      className="md:min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] flex flex-col justify-center py-8 lg:py-6 bg-surface border-y border-surface-variant/30 scroll-mt-16 lg:overflow-hidden"
    >
      <div className="max-w-container-max mx-auto px-gutter w-full">
        <div className="text-center max-w-2xl mx-auto mb-lg lg:mb-4">
          <span className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full font-label-bold text-label-bold inline-flex items-center gap-1.5 mb-3 lg:mb-2">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Monitoring Tahfidz Berkala
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm lg:mb-1">
            Progres Tahfidz Al-Qur&apos;an
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant lg:text-sm">
            Laporan visual pencapaian hafalan siswa secara kolektif serta akses pengecekan mandiri untuk wali santri.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-lg items-stretch">
          {/* Left Column: Progress Kolektif */}
          <div className="lg:w-1/2 bg-surface-container-low rounded-[2rem] p-md md:p-lg lg:p-6 border border-surface-variant/30 flex flex-col justify-between oceanic-shadow">
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Rata-rata Pencapaian Kelas
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 lg:mb-4">
                Grafik penyelesaian target kurikulum tahfidz berdasarkan tingkatan kelas pada semester berjalan.
              </p>

              <div className="space-y-6 lg:space-y-4">
                {/* Progress 1 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-label-bold text-label-bold text-on-surface text-sm">
                      Kelas 1 &amp; 2 (Target: Juz 30)
                    </span>
                    <span className="text-sm font-bold text-primary">92%</span>
                  </div>
                  <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                {/* Progress 2 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-label-bold text-label-bold text-on-surface text-sm">
                      Kelas 3 &amp; 4 (Target: Juz 29)
                    </span>
                    <span className="text-sm font-bold text-primary">85%</span>
                  </div>
                  <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-container rounded-full transition-all duration-500"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>

                {/* Progress 3 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-label-bold text-label-bold text-on-surface text-sm">
                      Kelas 5 &amp; 6 (Target: Juz 28 ke atas)
                    </span>
                    <span className="text-sm font-bold text-tertiary">78%</span>
                  </div>
                  <div className="w-full h-3 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-tertiary-container rounded-full transition-all duration-500"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-5 bg-surface p-4 lg:p-3 rounded-xl border border-surface-variant/30 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-[28px]">info</span>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                *Evaluasi kelayakan setoran dilakukan setiap hari oleh Ustadz/Ustadzah pendamping halaqah secara tatap muka (talaqqi).
              </p>
            </div>
          </div>

          {/* Right Column: Search Box */}
          <div className="lg:w-1/2 bg-surface-container-low rounded-[2rem] p-md md:p-lg lg:p-6 border border-surface-variant/30 flex flex-col justify-between oceanic-shadow">
            <div>
              <h3 className="text-xl font-bold text-on-surface mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">search</span>
                Cek Progres Hafalan Mandiri
              </h3>
              <p className="text-sm text-on-surface-variant mb-6 lg:mb-4">
                Masukkan nama lengkap ananda untuk memantau progres hafalan dan catatan setoran terbaru.
              </p>

              <form onSubmit={handleSearch} className="flex gap-2 mb-6 lg:mb-4">
                <div className="relative flex-grow">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant opacity-70">
                    person
                  </span>
                  <input
                    type="text"
                    placeholder="Contoh: Ahmad Yusuf, Fatimah..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-surface border border-outline-variant/50 rounded-xl py-3.5 lg:py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-container text-on-primary font-label-bold text-label-bold px-6 py-3.5 lg:py-2.5 rounded-xl cursor-pointer transition-all hover:scale-[0.98]"
                >
                  Cari
                </button>
              </form>

              {/* Dynamic Search Results & Recent Deposits container */}
              <div className="min-h-[160px] flex flex-col justify-center">
                {!hasSearched ? (
                  <div>
                    <h4 className="text-xs font-label-bold text-on-surface-variant tracking-wider uppercase mb-3 lg:mb-2">
                      Siswa dengan Hafalan Terbaik Bulan Ini:
                    </h4>
                    <div className="space-y-2.5 lg:space-y-2">
                      {mockStudents.slice(0, 3).map((student, idx) => (
                        <div
                          key={idx}
                          className="bg-surface rounded-xl p-3 lg:p-2.5 border border-outline-variant/20 flex justify-between items-center text-xs"
                        >
                          <div>
                            <p className="font-bold text-on-surface">{student.name}</p>
                            <p className="text-on-surface-variant text-[11px]">{student.class}</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-primary/10 text-primary font-bold px-2.5 py-1 rounded-full text-[10px]">
                              {student.totalJuz} Hafal
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : searchResults && searchResults.length > 0 ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xs font-label-bold text-primary uppercase tracking-wider">
                        Hasil Pencarian ({searchResults.length}):
                      </h4>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="text-xs text-on-surface-variant hover:text-primary underline cursor-pointer"
                      >
                        Reset
                      </button>
                    </div>
                    {searchResults.map((student, idx) => (
                      <div
                        key={idx}
                        className="bg-primary-fixed/30 rounded-xl p-4 border border-primary-fixed/50"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h5 className="font-bold text-on-surface text-sm">{student.name}</h5>
                            <p className="text-xs text-on-surface-variant">{student.class}</p>
                          </div>
                          <span className="bg-primary text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-md">
                            {student.totalJuz}
                          </span>
                        </div>
                        <div className="w-full h-px bg-outline-variant/30 my-2"></div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-on-surface-variant">
                          <div>
                            <p className="text-[10px] uppercase font-bold text-outline">Target Saat Ini</p>
                            <p className="font-medium text-on-surface">{student.target}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase font-bold text-outline">Progres Kelulusan</p>
                            <p className="font-medium text-on-surface">{student.progress}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-[10px] uppercase font-bold text-outline">Setoran Terakhir</p>
                            <p className="font-medium text-on-surface flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px] text-primary">
                                check_circle
                              </span>
                              {student.lastSetoran} ({student.status})
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <span className="material-symbols-outlined text-48px text-outline mb-2">
                      person_search
                    </span>
                    <p className="text-sm font-medium text-on-surface">Data tidak ditemukan</p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Pastikan ejaan nama lengkap benar atau klik reset.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-3 text-xs text-primary font-bold hover:underline cursor-pointer"
                    >
                      Kembali
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
