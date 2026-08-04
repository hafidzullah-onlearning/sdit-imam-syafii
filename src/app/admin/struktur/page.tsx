"use client";

import { useState, useEffect } from "react";
import { IslamicAvatar } from "@/components/icons/IslamicAvatars";
import { fetchStaffFromDB, saveStaffToDB, deleteStaffFromDB, StaffRecord } from "@/lib/supabase/services";

type StaffMember = StaffRecord;

const initialStaffMembers: StaffMember[] = [
  {
    id: "1",
    name: "Ust. Ahmad Ridwan, M.Pd",
    role: "Kepala Sekolah",
    gender: "male",
    displayOrder: 1,
  },
  {
    id: "2",
    name: "Ustzh. Sarah Amina",
    role: "Waka Kurikulum",
    gender: "female",
    displayOrder: 2,
  },
  {
    id: "3",
    name: "Ust. Fauzan Hanif",
    role: "Waka Kesiswaan",
    gender: "male",
    displayOrder: 3,
  },
  {
    id: "4",
    name: "Ustzh. Fatimah Zahra",
    role: "Bendahara Sekolah",
    gender: "female",
    displayOrder: 4,
  },
];

export default function AdminStrukturPage() {
  const [staffList, setStaffList] = useState<StaffMember[]>(initialStaffMembers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<StaffMember | null>(null);

  const [formData, setFormData] = useState<Partial<StaffMember>>({
    gender: "male",
    displayOrder: 1,
  });

  useEffect(() => {
    async function loadStaff() {
      const dbStaff = await fetchStaffFromDB();
      if (dbStaff && dbStaff.length > 0) {
        setStaffList(dbStaff);
      } else {
        const saved = localStorage.getItem("sdit_staff");
        if (saved) {
          try {
            setStaffList(JSON.parse(saved));
          } catch {}
        }
      }
    }
    loadStaff();
  }, []);

  const saveToStorage = (updated: StaffMember[], staffToSave?: StaffMember, idToDelete?: string) => {
    const sorted = [...updated].sort((a, b) => a.displayOrder - b.displayOrder);
    setStaffList(sorted);
    localStorage.setItem("sdit_staff", JSON.stringify(sorted));

    if (staffToSave) {
      saveStaffToDB(staffToSave);
    }
    if (idToDelete) {
      deleteStaffFromDB(idToDelete);
    }
  };

  const handleOpenAdd = () => {
    setEditingStaff(null);
    setFormData({
      name: "",
      role: "",
      gender: "male",
      displayOrder: staffList.length + 1,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (staff: StaffMember) => {
    setEditingStaff(staff);
    setFormData(staff);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.role) return;

    let target: StaffMember;
    if (editingStaff) {
      target = { ...editingStaff, ...formData } as StaffMember;
      const updated = staffList.map((s) => (s.id === editingStaff.id ? target : s));
      saveToStorage(updated, target);
    } else {
      target = {
        id: String(Date.now()),
        name: formData.name,
        role: formData.role,
        gender: (formData.gender as any) || "male",
        displayOrder: Number(formData.displayOrder) || staffList.length + 1,
      };
      saveToStorage([...staffList, target], target);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id?: string) => {
    if (!id) return;
    if (confirm("Apakah Anda yakin ingin menghapus pengelola ini dari struktur organisasi?")) {
      const updated = staffList.filter((s) => s.id !== id);
      saveToStorage(updated, undefined, id);
    }
  };


  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
        <div>
          <h1 className="font-headline-lg text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[28px]">groups</span>
            Modul Struktur Organisasi &amp; Pengelola
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Tambah, edit, dan atur urutan hierarki tim pengelola sekolah dengan Ikon Clipart Islami (Ustadz &amp; Ustadzah).
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="bg-primary hover:bg-primary-container text-on-primary font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm oceanic-shadow cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          Tambah Pengelola Baru
        </button>
      </div>

      {/* Staff Grid Preview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {staffList.map((staff) => (
          <div
            key={staff.id}
            className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow text-center flex flex-col items-center justify-between space-y-4 group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-full flex flex-col items-center">
              <div className="mb-2">
                <span className="bg-surface-container-high text-on-surface px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                  Urutan #{staff.displayOrder}
                </span>
              </div>

              {/* Islamic Avatar Icon */}
              <div className="my-2 transition-transform group-hover:scale-105 duration-300">
                <IslamicAvatar gender={staff.gender} size={110} />
              </div>

              <h3 className="font-bold text-base text-on-surface mt-2 mb-1">
                {staff.name}
              </h3>
              <p className="text-primary font-bold text-xs uppercase tracking-wider">
                {staff.role}
              </p>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 w-full flex items-center justify-center gap-2">
              <button
                onClick={() => handleOpenEdit(staff)}
                className="px-3.5 py-1.5 bg-primary/10 text-primary rounded-xl font-bold text-xs hover:bg-primary hover:text-on-primary transition-all cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">edit</span>
                Edit
              </button>
              <button
                onClick={() => handleDelete(staff.id)}
                className="px-3.5 py-1.5 bg-error-container/40 text-error rounded-xl font-bold text-xs hover:bg-error hover:text-on-error transition-all cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">delete</span>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-md w-full p-6 rounded-3xl oceanic-shadow border border-outline-variant/30 space-y-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">person</span>
              {editingStaff ? "Edit Pengelola Sekolah" : "Tambah Pengelola Baru"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-on-surface mb-1">Nama Lengkap &amp; Gelar</label>
                <input
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="misal: Ust. Ahmad Ridwan, M.Pd"
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Jabatan / Peran Sekolah</label>
                <input
                  type="text"
                  value={formData.role || ""}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="misal: Kepala Sekolah / Waka Kurikulum"
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Pilihan Clipart Islami (Gender)</label>
                <div className="grid grid-cols-2 gap-3 p-1 bg-surface-container-low rounded-xl border border-outline-variant/30">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, gender: "male" })}
                    className={`py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.gender === "male"
                        ? "bg-primary text-on-primary shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <span>Ustadz (Laki-laki)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, gender: "female" })}
                    className={`py-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      formData.gender === "female"
                        ? "bg-tertiary text-on-tertiary shadow-sm"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    <span>Ustadzah (Perempuan)</span>
                  </button>
                </div>
              </div>

              {/* Avatar Live Preview */}
              <div className="p-3 bg-surface-container-low rounded-2xl border border-outline-variant/20 text-center flex flex-col items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-outline mb-1">Preview Clipart Avatar</span>
                <IslamicAvatar gender={formData.gender || "male"} size={90} />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Urutan Posisi Penayangan (#1, #2, dst)</label>
                <input
                  type="number"
                  value={formData.displayOrder || 1}
                  onChange={(e) => setFormData({ ...formData, displayOrder: Number(e.target.value) })}
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 bg-surface-container-high rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-bold oceanic-shadow cursor-pointer"
                >
                  Simpan Staff
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
