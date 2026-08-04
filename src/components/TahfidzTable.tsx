"use client";

import { useState, useMemo, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { fetchStudentsFromDB } from "@/lib/supabase/services";

interface StudentRecord {
  no: number;
  name: string;
  nisn: string;
  class: string;
  juz: string;
  status: string;
  statusType: "success" | "warning" | "info";
  lastUpdate: string;
}

export default function TahfidzTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [studentList, setStudentList] = useState<StudentRecord[]>([]);

  const defaultStudents: StudentRecord[] = [
    {
      no: 1,
      name: "Abdullah Ahmad Fawwaz",
      nisn: "0128391021",
      class: "6 Al-Ikhlas",
      juz: "Juz 28, 29, 30",
      status: "Lulus Munaqosyah",
      statusType: "success",
      lastUpdate: "12 Okt 2024",
    },
    {
      no: 2,
      name: "Aisyah Humaira",
      nisn: "0137281922",
      class: "5 An-Nasr",
      juz: "Juz 29, 30",
      status: "Proses Muraja'ah",
      statusType: "warning",
      lastUpdate: "10 Okt 2024",
    },
    {
      no: 3,
      name: "Muhammad Zaidan",
      nisn: "0129381043",
      class: "6 Al-Ikhlas",
      juz: "Juz 30",
      status: "Lulus Munaqosyah",
      statusType: "success",
      lastUpdate: "09 Okt 2024",
    },
    {
      no: 4,
      name: "Fathimah Azzahra",
      nisn: "0148291054",
      class: "4 Al-Falaq",
      juz: "Juz 30",
      status: "Hafalan Baru",
      statusType: "info",
      lastUpdate: "08 Okt 2024",
    },
    {
      no: 5,
      name: "Ibrahim Al-Ghifari",
      nisn: "0139201955",
      class: "5 An-Nasr",
      juz: "Juz 27, 28, 29, 30",
      status: "Lulus Munaqosyah",
      statusType: "success",
      lastUpdate: "07 Okt 2024",
    },
    {
      no: 6,
      name: "Khodijah Salma",
      nisn: "0159281066",
      class: "3 Al-Masad",
      juz: "Juz 30",
      status: "Hafalan Baru",
      statusType: "info",
      lastUpdate: "06 Okt 2024",
    },
    {
      no: 7,
      name: "Umar bin Khattab",
      nisn: "0129381077",
      class: "6 Al-Ikhlas",
      juz: "Juz 29, 30",
      status: "Lulus Munaqosyah",
      statusType: "success",
      lastUpdate: "05 Okt 2024",
    },
    {
      no: 8,
      name: "Ali bin Abi Thalib",
      nisn: "0169281088",
      class: "2 Quraisy",
      juz: "Juz 30 (Setengah)",
      status: "Proses Setoran",
      statusType: "warning",
      lastUpdate: "04 Okt 2024",
    },
    {
      no: 9,
      name: "Siti Aminah",
      nisn: "0139281099",
      class: "5 An-Nasr",
      juz: "Juz 30",
      status: "Lulus Munaqosyah",
      statusType: "success",
      lastUpdate: "03 Okt 2024",
    },
    {
      no: 10,
      name: "Zaid bin Haritsah",
      nisn: "0149281100",
      class: "4 Al-Falaq",
      juz: "Juz 29, 30",
      status: "Proses Muraja'ah",
      statusType: "warning",
      lastUpdate: "02 Okt 2024",
    },
  ];

  useEffect(() => {
    let channel: any;

    async function loadData() {
      // 1. Try fetching from Supabase DB first
      const dbStudents = await fetchStudentsFromDB();
      if (dbStudents && dbStudents.length > 0) {
        setStudentList(dbStudents);
      } else {
        // Fallback to localStorage or default
        const saved = localStorage.getItem("sdit_students");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setStudentList(parsed);
              return;
            }
          } catch {}
        }
        setStudentList(defaultStudents);
      }

      // 2. Subscribe to Supabase Realtime changes
      try {
        const supabase = createClient();
        channel = supabase
          .channel("realtime_tahfidz_students")
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "students" },
            async () => {
              const fresh = await fetchStudentsFromDB();
              if (fresh) setStudentList(fresh);
            }
          )
          .subscribe();
      } catch {}
    }

    loadData();

    return () => {
      if (channel) {
        try {
          const supabase = createClient();
          supabase.removeChannel(channel);
        } catch {}
      }
    };
  }, []);

  const mockStudents = studentList.length > 0 ? studentList : defaultStudents;


  // Real-time search filter by Name or NISN
  const filteredStudents = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return mockStudents;
    return mockStudents.filter(
      (student) =>
        student.name.toLowerCase().includes(q) ||
        student.nisn.toLowerCase().includes(q) ||
        student.class.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage) || 1;
  const paginatedStudents = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredStudents.slice(start, start + itemsPerPage);
  }, [filteredStudents, currentPage, itemsPerPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const getBadgeStyle = (type: StudentRecord["statusType"]) => {
    switch (type) {
      case "success":
        return "bg-primary/10 text-primary border border-primary/20";
      case "warning":
        return "bg-tertiary/10 text-tertiary border border-tertiary/20";
      case "info":
        return "bg-secondary/10 text-secondary border border-secondary/20";
      default:
        return "bg-surface-variant text-on-surface-variant";
    }
  };

  return (
    <div className="w-full">
      {/* Search Bar Section */}
      <div className="max-w-xl mx-auto mb-10">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-outline">search</span>
          </div>
          <input
            id="studentSearch"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari Nama atau NISN Siswa..."
            aria-label="Cari Nama atau NISN Siswa"
            className="block w-full pl-12 pr-10 py-4 bg-surface-container-lowest border border-outline-variant/40 rounded-2xl oceanic-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 font-body-md text-body-md text-on-surface placeholder:text-outline"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-outline hover:text-on-surface transition-colors cursor-pointer"
              aria-label="Bersihkan pencarian"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          )}
        </div>
      </div>

      {/* Data Table Container */}
      <div className="bg-surface-container-lowest rounded-2xl oceanic-shadow overflow-hidden border-t-4 border-tertiary-container border-x border-b border-outline-variant/30">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant border-b border-outline-variant/30">
                <th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-wider text-xs">
                  No
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-wider text-xs">
                  Nama Siswa / NISN
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-wider text-xs">
                  Kelas
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-wider text-xs">
                  Juz yang Dihafal
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-wider text-xs">
                  Status
                </th>
                <th className="px-6 py-4 font-label-bold text-label-bold uppercase tracking-wider text-xs">
                  Tanggal Update
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {paginatedStudents.length > 0 ? (
                paginatedStudents.map((student) => (
                  <tr
                    key={student.no}
                    className="hover:bg-primary-fixed/10 transition-colors duration-150 group cursor-default"
                  >
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">
                      {student.no}
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md">
                      <div className="font-semibold text-primary group-hover:underline">
                        {student.name}
                      </div>
                      <div className="text-xs text-outline font-mono">
                        NISN: {student.nisn}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md text-on-surface">
                      {student.class}
                    </td>
                    <td className="px-6 py-4 font-body-md text-body-md font-medium text-on-surface">
                      {student.juz}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full font-label-bold text-[12px] whitespace-nowrap ${getBadgeStyle(
                          student.statusType
                        )}`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant whitespace-nowrap">
                      {student.lastUpdate}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center">
                    <span className="material-symbols-outlined text-[48px] text-outline mb-2">
                      person_search
                    </span>
                    <p className="text-base font-semibold text-on-surface">
                      Data siswa tidak ditemukan
                    </p>
                    <p className="text-sm text-on-surface-variant mt-1">
                      Coba periksa kata kunci nama atau NISN yang Anda masukkan.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="mt-3 inline-flex items-center gap-1 text-primary font-bold text-xs hover:underline cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">refresh</span>
                      Reset Pencarian
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        <div className="px-6 py-4 bg-surface-container border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-body-sm text-on-surface-variant">
            Menampilkan {filteredStudents.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} -{" "}
            {Math.min(currentPage * itemsPerPage, filteredStudents.length)} dari{" "}
            {filteredStudents.length} siswa (Total Terdaftar: 245)
          </span>
          <div className="flex items-center space-x-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              aria-label="Halaman Sebelumnya"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-primary-fixed/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_left</span>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-label-bold transition-all cursor-pointer ${
                  currentPage === page
                    ? "bg-primary text-on-primary font-bold shadow-sm"
                    : "hover:bg-primary-fixed/50 text-on-surface-variant"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              aria-label="Halaman Selanjutnya"
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-primary-fixed/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action & Program Highlight Card */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded-2xl oceanic-shadow overflow-hidden h-64 relative group border border-outline-variant/30">
          <div
            className="bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end p-6">
            <p className="text-on-primary font-headline-md text-headline-md drop-shadow">
              Metode Tahfidz Berkelanjutan
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-headline-lg text-headline-lg text-primary">
            Program Unggulan Tahfidz
          </h3>
          <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed">
            SDIT Imam Syafi&apos;i mengedepankan kualitas hafalan dengan metode talaqqi dan muroja&apos;ah intensif. Setiap siswa dibimbing oleh asatidzah yang kompeten untuk memastikan makhraj dan tajwid yang benar.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-bold text-label-bold text-sm text-on-surface">
                Target Min. 3 - 6 Juz
              </span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/30">
              <span
                className="material-symbols-outlined text-primary text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-label-bold text-label-bold text-sm text-on-surface">
                Sertifikasi Internal &amp; Munaqosyah
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
