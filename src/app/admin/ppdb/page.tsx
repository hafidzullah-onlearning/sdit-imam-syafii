"use client";

import { useState, useEffect } from "react";
import { fetchPpdbBatchFromDB, savePpdbBatchToDB, PpdbBatchRecord } from "@/lib/supabase/services";

type PpdbBatchConfig = PpdbBatchRecord;

interface ApplicantRecord {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  classGrade: string;
  status: "Pending" | "Lulus Observasi" | "Diterima" | "Ditolak";
  date: string;
}

const defaultBatchConfig: PpdbBatchConfig = {
  title: "Pendaftaran Gelombang 1 - TA 2025/2026",
  status: "active",
  startDate: "1 Okt 2024",
  endDate: "31 Des 2024",
  observationDate: "11 Januari 2025",
  announcementDate: "18 Januari 2025",
  remainingQuota: 15,
  totalQuota: 30,
  regFee: "Rp 350.000",
  devFee: "Rp 8.500.000",
  sppFee: "Rp 750.000",
};

const initialApplicants: ApplicantRecord[] = [
  {
    id: "APP-001",
    studentName: "Muhammad Farhan",
    parentName: "Dedi Supriyadi",
    phone: "081234567890",
    classGrade: "Kelas 1 SD",
    status: "Lulus Observasi",
    date: "04 Okt 2024",
  },
];

export default function AdminPpdbPage() {
  const [config, setConfig] = useState<PpdbBatchConfig>(defaultBatchConfig);
  const [applicants, setApplicants] = useState<ApplicantRecord[]>(initialApplicants);
  const [isSavedAlert, setIsSavedAlert] = useState(false);
  const [isAddApplicantModal, setIsAddApplicantModal] = useState(false);
  const [newApplicant, setNewApplicant] = useState<Partial<ApplicantRecord>>({
    classGrade: "Kelas 1 SD",
    status: "Pending",
  });

  useEffect(() => {
    async function loadPpdbData() {
      const dbBatch = await fetchPpdbBatchFromDB();
      if (dbBatch) {
        setConfig(dbBatch);
      } else {
        const savedConfig = localStorage.getItem("sdit_ppdb_config");
        if (savedConfig) {
          try {
            setConfig(JSON.parse(savedConfig));
          } catch {}
        }
      }

      const savedApplicants = localStorage.getItem("sdit_ppdb_applicants");
      if (savedApplicants) {
        try {
          setApplicants(JSON.parse(savedApplicants));
        } catch {}
      }
    }
    loadPpdbData();
  }, []);

  const saveConfig = (newCfg: PpdbBatchConfig) => {
    setConfig(newCfg);
    localStorage.setItem("sdit_ppdb_config", JSON.stringify(newCfg));
    savePpdbBatchToDB(newCfg);
    setIsSavedAlert(true);
    setTimeout(() => setIsSavedAlert(false), 3000);
  };

  const saveApplicants = (newList: ApplicantRecord[]) => {
    setApplicants(newList);
    localStorage.setItem("sdit_ppdb_applicants", JSON.stringify(newList));
  };

  const handleStatusChange = (status: "active" | "closed" | "draft") => {
    saveConfig({ ...config, status });
  };

  const handleUpdateApplicantStatus = (id: string, status: ApplicantRecord["status"]) => {
    const updated = applicants.map((app) => (app.id === id ? { ...app, status } : app));
    saveApplicants(updated);
  };

  const handleAddApplicant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newApplicant.studentName || !newApplicant.parentName) return;

    const record: ApplicantRecord = {
      id: `APP-00${applicants.length + 1}`,
      studentName: newApplicant.studentName,
      parentName: newApplicant.parentName,
      phone: newApplicant.phone || "081234567890",
      classGrade: newApplicant.classGrade || "Kelas 1 SD",
      status: (newApplicant.status as any) || "Pending",
      date: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }),
    };

    saveApplicants([record, ...applicants]);
    setIsAddApplicantModal(false);
    setNewApplicant({ classGrade: "Kelas 1 SD", status: "Pending" });
  };

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
        <div>
          <h1 className="font-headline-lg text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[28px]">how_to_reg</span>
            Modul Kelola Periodik PPDB
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Aktifkan/tutup gelombang pendaftaran, atur sisa kuota, dan atur alur berkas calon santri.
          </p>
        </div>

        {isSavedAlert && (
          <div className="bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border border-[#25D366]/30">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            Pengaturan PPDB Berhasil Disimpan!
          </div>
        )}
      </div>

      {/* Control Switcher Panel */}
      <div className="bg-surface-container-lowest p-6 md:p-8 rounded-3xl border border-outline-variant/30 oceanic-shadow space-y-6">
        <h2 className="font-bold text-base text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">toggle_on</span>
          Saklar Pengaktifan Pendaftaran Periodik
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => handleStatusChange("active")}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
              config.status === "active"
                ? "bg-primary text-on-primary border-primary oceanic-shadow scale-[1.02]"
                : "bg-surface-container-low border-outline-variant/30 hover:border-primary text-on-surface"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm">AKTIF (DIBUKA)</span>
              <span className="w-3 h-3 rounded-full bg-[#25D366]"></span>
            </div>
            <p className="text-xs opacity-90">
              Formulir &amp; Tombol WA pendaftaran di website publik otomatis aktif dan menerima santri baru.
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleStatusChange("closed")}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
              config.status === "closed"
                ? "bg-error text-on-error border-error oceanic-shadow scale-[1.02]"
                : "bg-surface-container-low border-outline-variant/30 hover:border-error text-on-surface"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm">TUTUP / KUOTA PENUH</span>
              <span className="w-3 h-3 rounded-full bg-error"></span>
            </div>
            <p className="text-xs opacity-90">
              Pengunjung website publik melihat pesan bahwa pendaftaran PPDB periode ini sedang ditutup.
            </p>
          </button>

          <button
            type="button"
            onClick={() => handleStatusChange("draft")}
            className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
              config.status === "draft"
                ? "bg-tertiary text-on-tertiary border-tertiary oceanic-shadow scale-[1.02]"
                : "bg-surface-container-low border-outline-variant/30 hover:border-tertiary text-on-surface"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm">DRAFT / PERSIAPAN</span>
              <span className="w-3 h-3 rounded-full bg-tertiary-container"></span>
            </div>
            <p className="text-xs opacity-90">
              Hanya pengujian internal. Menyembunyikan indikator pendaftaran langsung di website publik.
            </p>
          </button>
        </div>

        {/* Detailed Settings Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveConfig(config);
          }}
          className="pt-6 border-t border-outline-variant/20 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs"
        >
          <div className="md:col-span-3 font-bold text-sm text-primary">
            Rincian Gelombang &amp; Kuota Kursi
          </div>

          <div>
            <label className="block font-bold text-on-surface mb-1">Judul Gelombang</label>
            <input
              type="text"
              value={config.title}
              onChange={(e) => setConfig({ ...config, title: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl font-bold"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-on-surface mb-1">Sisa Kuota Kursi</label>
            <input
              type="number"
              value={config.remainingQuota}
              onChange={(e) => setConfig({ ...config, remainingQuota: Number(e.target.value) })}
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl font-bold text-primary"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-on-surface mb-1">Total Kuota Tersedia</label>
            <input
              type="number"
              value={config.totalQuota}
              onChange={(e) => setConfig({ ...config, totalQuota: Number(e.target.value) })}
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
              required
            />
          </div>

          <div>
            <label className="block font-bold text-on-surface mb-1">Tanggal Mulai Pendaftaran</label>
            <input
              type="text"
              value={config.startDate}
              onChange={(e) => setConfig({ ...config, startDate: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
            />
          </div>

          <div>
            <label className="block font-bold text-on-surface mb-1">Tanggal Penutupan</label>
            <input
              type="text"
              value={config.endDate}
              onChange={(e) => setConfig({ ...config, endDate: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
            />
          </div>

          <div>
            <label className="block font-bold text-on-surface mb-1">Jadwal Observasi Santri</label>
            <input
              type="text"
              value={config.observationDate}
              onChange={(e) => setConfig({ ...config, observationDate: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
            />
          </div>

          <div className="md:col-span-3 flex justify-end pt-2">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-container text-on-primary font-bold text-xs px-6 py-3 rounded-xl oceanic-shadow transition-all cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">save</span>
              Simpan Pengaturan Gelombang PPDB
            </button>
          </div>
        </form>
      </div>

      {/* Applicants List Section */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">groups</span>
              Daftar Calon Santri Mendaftar
            </h3>
            <p className="text-xs text-on-surface-variant">
              Kelola dan perbarui status seleksi administrasi &amp; observasi santri.
            </p>
          </div>

          <button
            onClick={() => setIsAddApplicantModal(true)}
            className="bg-secondary text-on-secondary font-bold text-xs px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">person_add</span>
            Input Manual Pendaftar (Sekretariat)
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant border-b border-outline-variant/30">
                <th className="px-4 py-3 font-bold">ID Reg</th>
                <th className="px-4 py-3 font-bold">Nama Calon Santri</th>
                <th className="px-4 py-3 font-bold">Orang Tua / HP WA</th>
                <th className="px-4 py-3 font-bold">Pilihan Tingkat</th>
                <th className="px-4 py-3 font-bold">Status Pendaftaran</th>
                <th className="px-4 py-3 font-bold">Tgl Daftar</th>
                <th className="px-4 py-3 font-bold text-right">Ubah Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {applicants.map((app) => (
                <tr key={app.id} className="hover:bg-primary-fixed/10 transition-colors">
                  <td className="px-4 py-3 font-mono font-bold text-outline">{app.id}</td>
                  <td className="px-4 py-3 font-bold text-primary">{app.studentName}</td>
                  <td className="px-4 py-3">
                    <div>{app.parentName}</div>
                    <div className="text-[10px] text-outline">{app.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-on-surface">{app.classGrade}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold ${
                        app.status === "Diterima"
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : app.status === "Lulus Observasi"
                          ? "bg-secondary/10 text-secondary border border-secondary/20"
                          : app.status === "Pending"
                          ? "bg-tertiary/10 text-tertiary border border-tertiary/20"
                          : "bg-error-container text-on-error-container"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">{app.date}</td>
                  <td className="px-4 py-3 text-right">
                    <select
                      value={app.status}
                      onChange={(e) =>
                        handleUpdateApplicantStatus(app.id, e.target.value as any)
                      }
                      className="px-2 py-1 bg-surface-container-low border border-outline-variant/30 rounded-lg text-[11px] font-bold text-on-surface cursor-pointer"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Lulus Observasi">Lulus Observasi</option>
                      <option value="Diterima">Diterima</option>
                      <option value="Ditolak">Ditolak</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Manual Applicant Modal */}
      {isAddApplicantModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-md w-full p-6 rounded-3xl oceanic-shadow border border-outline-variant/30 space-y-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">person_add</span>
              Input Calon Santri Baru (Sekretariat)
            </h3>

            <form onSubmit={handleAddApplicant} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-on-surface mb-1">Nama Calon Santri</label>
                <input
                  type="text"
                  value={newApplicant.studentName || ""}
                  onChange={(e) => setNewApplicant({ ...newApplicant, studentName: e.target.value })}
                  placeholder="Nama Lengkap Anak"
                  className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Nama Orang Tua / Wali</label>
                <input
                  type="text"
                  value={newApplicant.parentName || ""}
                  onChange={(e) => setNewApplicant({ ...newApplicant, parentName: e.target.value })}
                  placeholder="Nama Ibu / Ayah"
                  className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-on-surface mb-1">Nomor WA Handphone</label>
                  <input
                    type="text"
                    value={newApplicant.phone || ""}
                    onChange={(e) => setNewApplicant({ ...newApplicant, phone: e.target.value })}
                    placeholder="081234567890"
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-on-surface mb-1">Status Awal</label>
                  <select
                    value={newApplicant.status || "Pending"}
                    onChange={(e) => setNewApplicant({ ...newApplicant, status: e.target.value as any })}
                    className="w-full px-3 py-2 bg-surface-container-low border border-outline-variant/30 rounded-xl font-bold"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Lulus Observasi">Lulus Observasi</option>
                    <option value="Diterima">Diterima</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddApplicantModal(false)}
                  className="px-4 py-2 bg-surface-container-high rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-on-primary rounded-xl font-bold oceanic-shadow cursor-pointer"
                >
                  Simpan Pendaftar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
