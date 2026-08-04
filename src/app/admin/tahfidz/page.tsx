"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";

interface StudentRecord {
  id?: string;
  no: number;
  name: string;
  nisn: string;
  class: string;
  juz: string;
  status: string;
  statusType: "success" | "warning" | "info";
  lastUpdate: string;
}

const initialMockStudents: StudentRecord[] = [
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

export default function AdminTahfidzPage() {
  const [students, setStudents] = useState<StudentRecord[]>(initialMockStudents);
  const [selectedClass, setSelectedClass] = useState("Semua");
  const [editingStudent, setEditingStudent] = useState<StudentRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState<Partial<StudentRecord>>({
    class: "6 Al-Ikhlas",
    statusType: "success",
    status: "Lulus Munaqosyah",
  });

  const supabase = createClient();

  useEffect(() => {
    // Load from localStorage or Supabase
    const saved = localStorage.getItem("sdit_students");
    if (saved) {
      try {
        setStudents(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const saveToStorageAndDB = (updatedList: StudentRecord[]) => {
    setStudents(updatedList);
    localStorage.setItem("sdit_students", JSON.stringify(updatedList));
  };

  const handleClassFilterChange = (c: string) => {
    setSelectedClass(c);
  };

  const filteredStudents = selectedClass === "Semua"
    ? students
    : students.filter((s) => s.class === selectedClass);

  const classesList = [
    "Semua",
    "6 Al-Ikhlas",
    "5 An-Nasr",
    "4 Al-Falaq",
    "3 Al-Masad",
    "2 Quraisy",
  ];

  const handleUpdateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingStudent) return;

    const updated = students.map((s) =>
      s.no === editingStudent.no
        ? { ...editingStudent, lastUpdate: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }) }
        : s
    );
    saveToStorageAndDB(updated);
    setIsEditModalOpen(false);
    setEditingStudent(null);
  };

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.nisn) return;

    const newRecord: StudentRecord = {
      no: students.length + 1,
      name: newStudent.name,
      nisn: newStudent.nisn,
      class: newStudent.class || "6 Al-Ikhlas",
      juz: newStudent.juz || "Juz 30",
      status: newStudent.status || "Hafalan Baru",
      statusType: newStudent.statusType || "info",
      lastUpdate: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }),
    };

    const updated = [newRecord, ...students];
    saveToStorageAndDB(updated);
    setIsAddModalOpen(false);
    setNewStudent({ class: "6 Al-Ikhlas", statusType: "success", status: "Lulus Munaqosyah" });
  };

  const handleDeleteStudent = (no: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data santri ini?")) {
      const updated = students.filter((s) => s.no !== no);
      saveToStorageAndDB(updated);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
        <div>
          <h1 className="font-headline-lg text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[28px]">menu_book</span>
            Modul Kelola Status Tahfidz Santri
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Perbarui data hafalan Juz, status munaqosyah, dan mutaba'ah santri per kelas.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary hover:bg-primary-container text-on-primary font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm oceanic-shadow cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          Tambah Santri Baru
        </button>
      </div>

      {/* Class Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {classesList.map((cls) => (
          <button
            key={cls}
            onClick={() => handleClassFilterChange(cls)}
            className={`px-5 py-2 rounded-full font-label-bold text-xs transition-all cursor-pointer ${
              selectedClass === cls
                ? "bg-primary text-on-primary oceanic-shadow"
                : "bg-surface-container-low text-on-surface-variant hover:bg-secondary-container"
            }`}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="bg-surface-container-lowest rounded-2xl oceanic-shadow overflow-hidden border border-outline-variant/30">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant border-b border-outline-variant/30">
                <th className="px-6 py-4 font-bold uppercase tracking-wider">No</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider">Nama Santri / NISN</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider">Kelas</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider">Juz Dihafal</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider">Status Capaian</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider">Terakhir Update</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-right">Aksi Kontrol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.no} className="hover:bg-primary-fixed/10 transition-colors">
                    <td className="px-6 py-4 text-on-surface-variant">{student.no}</td>
                    <td className="px-6 py-4">
                      <div className="font-bold text-primary">{student.name}</div>
                      <div className="text-[10px] text-outline font-mono">NISN: {student.nisn}</div>
                    </td>
                    <td className="px-6 py-4 text-on-surface font-semibold">{student.class}</td>
                    <td className="px-6 py-4 font-semibold text-on-surface">{student.juz}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold ${
                          student.statusType === "success"
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : student.statusType === "warning"
                            ? "bg-tertiary/10 text-tertiary border border-tertiary/20"
                            : "bg-secondary/10 text-secondary border border-secondary/20"
                        }`}
                      >
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-on-surface-variant">{student.lastUpdate}</td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => {
                          setEditingStudent(student);
                          setIsEditModalOpen(true);
                        }}
                        className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg font-bold text-[11px] hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                      >
                        Edit Status
                      </button>
                      <button
                        onClick={() => handleDeleteStudent(student.no)}
                        className="px-3 py-1.5 bg-error-container/40 text-error rounded-lg font-bold text-[11px] hover:bg-error hover:text-on-error transition-all cursor-pointer"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-on-surface-variant">
                    Tidak ada santri pada kelas ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Student Modal */}
      {isEditModalOpen && editingStudent && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-md w-full p-6 rounded-3xl oceanic-shadow border border-outline-variant/30 space-y-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">edit</span>
              Update Status Hafalan Santri
            </h3>

            <form onSubmit={handleUpdateStudent} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-on-surface mb-1">Nama Santri</label>
                <input
                  type="text"
                  value={editingStudent.name}
                  onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
                  className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-on-surface mb-1">NISN</label>
                  <input
                    type="text"
                    value={editingStudent.nisn}
                    onChange={(e) => setEditingStudent({ ...editingStudent, nisn: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-on-surface mb-1">Kelas</label>
                  <select
                    value={editingStudent.class}
                    onChange={(e) => setEditingStudent({ ...editingStudent, class: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  >
                    <option value="6 Al-Ikhlas">6 Al-Ikhlas</option>
                    <option value="5 An-Nasr">5 An-Nasr</option>
                    <option value="4 Al-Falaq">4 Al-Falaq</option>
                    <option value="3 Al-Masad">3 Al-Masad</option>
                    <option value="2 Quraisy">2 Quraisy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Juz Dihafal</label>
                <input
                  type="text"
                  value={editingStudent.juz}
                  onChange={(e) => setEditingStudent({ ...editingStudent, juz: e.target.value })}
                  className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  placeholder="misal: Juz 29, 30"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-on-surface mb-1">Keterangan Status</label>
                  <input
                    type="text"
                    value={editingStudent.status}
                    onChange={(e) => setEditingStudent({ ...editingStudent, status: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-on-surface mb-1">Tipe Badge Warna</label>
                  <select
                    value={editingStudent.statusType}
                    onChange={(e) =>
                      setEditingStudent({
                        ...editingStudent,
                        statusType: e.target.value as "success" | "warning" | "info",
                      })
                    }
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  >
                    <option value="success">Hijau (Lulus/Sukses)</option>
                    <option value="warning">Emas/Kuning (Proses Muraja'ah)</option>
                    <option value="info">Biru (Hafalan Baru)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 bg-surface-container-high rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-on-primary rounded-xl font-bold oceanic-shadow cursor-pointer"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-md w-full p-6 rounded-3xl oceanic-shadow border border-outline-variant/30 space-y-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">person_add</span>
              Tambah Santri Baru
            </h3>

            <form onSubmit={handleAddStudent} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-on-surface mb-1">Nama Lengkap Santri</label>
                <input
                  type="text"
                  value={newStudent.name || ""}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  placeholder="Masukkan Nama Santri"
                  className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-on-surface mb-1">NISN</label>
                  <input
                    type="text"
                    value={newStudent.nisn || ""}
                    onChange={(e) => setNewStudent({ ...newStudent, nisn: e.target.value })}
                    placeholder="0123456789"
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-on-surface mb-1">Kelas</label>
                  <select
                    value={newStudent.class || "6 Al-Ikhlas"}
                    onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  >
                    <option value="6 Al-Ikhlas">6 Al-Ikhlas</option>
                    <option value="5 An-Nasr">5 An-Nasr</option>
                    <option value="4 Al-Falaq">4 Al-Falaq</option>
                    <option value="3 Al-Masad">3 Al-Masad</option>
                    <option value="2 Quraisy">2 Quraisy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Juz Dihafal</label>
                <input
                  type="text"
                  value={newStudent.juz || ""}
                  onChange={(e) => setNewStudent({ ...newStudent, juz: e.target.value })}
                  placeholder="misal: Juz 30"
                  className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-on-surface mb-1">Status</label>
                  <input
                    type="text"
                    value={newStudent.status || "Lulus Munaqosyah"}
                    onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value })}
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-on-surface mb-1">Badge Warna</label>
                  <select
                    value={newStudent.statusType || "success"}
                    onChange={(e) =>
                      setNewStudent({
                        ...newStudent,
                        statusType: e.target.value as "success" | "warning" | "info",
                      })
                    }
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  >
                    <option value="success">Hijau (Lulus)</option>
                    <option value="warning">Emas (Muraja'ah)</option>
                    <option value="info">Biru (Hafalan Baru)</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-surface-container-high rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-on-primary rounded-xl font-bold oceanic-shadow cursor-pointer"
                >
                  Tambah Santri
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
