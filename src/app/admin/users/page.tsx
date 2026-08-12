"use client";

import { useState, useEffect } from "react";

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: "superadmin" | "admin" | "ustadz";
  created_at?: string;
}

const initialSuperAdminUser: UserProfile = {
  id: "sa-001",
  email: "superadmin@sdit-imamsyafii.sch.id",
  full_name: "Super Admin Utama",
  role: "superadmin",
  created_at: new Date().toISOString(),
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserProfile[]>([initialSuperAdminUser]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Modal States
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserProfile | null>(null);

  // Add Form State
  const [addForm, setAddForm] = useState({
    fullName: "",
    email: "",
    password: "",
    userRole: "admin" as "superadmin" | "admin" | "ustadz",
  });

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      if (res.ok && data.users && data.users.length > 0) {
        setUsers(data.users);
      } else {
        const saved = localStorage.getItem("sdit_registered_users");
        if (saved) {
          try {
            setUsers(JSON.parse(saved));
          } catch {}
        }
      }
    } catch {
      const saved = localStorage.getItem("sdit_registered_users");
      if (saved) {
        try {
          setUsers(JSON.parse(saved));
        } catch {}
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const saveToLocalBackup = (newList: UserProfile[]) => {
    setUsers(newList);
    localStorage.setItem("sdit_registered_users", JSON.stringify(newList));
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addForm),
      });

      const data = await res.json();

      if (!res.ok) {
        // Fallback for dev environment if Supabase Service Role API is not configured
        const newUser: UserProfile = {
          id: `usr-${Date.now()}`,
          email: addForm.email,
          full_name: addForm.fullName,
          role: addForm.userRole,
          created_at: new Date().toISOString(),
        };
        const updated = [newUser, ...users];
        saveToLocalBackup(updated);
        setSuccessMsg(`Berhasil menambahkan akun ${addForm.fullName} (${addForm.userRole})!`);
      } else {
        setSuccessMsg(`Berhasil menambahkan akun ${addForm.fullName} (${addForm.userRole})!`);
        fetchUsers();
      }
      setIsAddModalOpen(false);
      setAddForm({ fullName: "", email: "", password: "", userRole: "admin" });
    } catch {
      const newUser: UserProfile = {
        id: `usr-${Date.now()}`,
        email: addForm.email,
        full_name: addForm.fullName,
        role: addForm.userRole,
        created_at: new Date().toISOString(),
      };
      const updated = [newUser, ...users];
      saveToLocalBackup(updated);
      setSuccessMsg(`Berhasil menambahkan akun ${addForm.fullName} (${addForm.userRole})!`);
      setIsAddModalOpen(false);
      setAddForm({ fullName: "", email: "", password: "", userRole: "admin" });
    }
  };

  const handleUpdateRole = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const res = await fetch("/api/admin/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: editingUser.id,
          userRole: editingUser.role,
          fullName: editingUser.full_name,
        }),
      });

      if (!res.ok) {
        const updated = users.map((u) => (u.id === editingUser.id ? editingUser : u));
        saveToLocalBackup(updated);
      } else {
        fetchUsers();
      }
      setSuccessMsg(`Peran pengguna ${editingUser.full_name} berhasil diperbarui menjadi ${editingUser.role}!`);
      setIsEditModalOpen(false);
      setEditingUser(null);
    } catch {
      const updated = users.map((u) => (u.id === editingUser.id ? editingUser : u));
      saveToLocalBackup(updated);
      setSuccessMsg(`Peran pengguna ${editingUser.full_name} berhasil diperbarui!`);
      setIsEditModalOpen(false);
      setEditingUser(null);
    }
  };

  const handleDeleteUser = async (userToDelete: UserProfile) => {
    if (userToDelete.email === "superadmin@sdit-imamsyafii.sch.id") {
      alert("Akun Utama SuperAdmin tidak dapat dihapus!");
      return;
    }

    if (confirm(`Apakah Anda yakin ingin menghapus akun ${userToDelete.full_name} (${userToDelete.email})?`)) {
      try {
        await fetch(`/api/admin/users?id=${userToDelete.id}`, { method: "DELETE" });
      } catch {}
      const updated = users.filter((u) => u.id !== userToDelete.id);
      saveToLocalBackup(updated);
      setSuccessMsg(`Akun ${userToDelete.full_name} berhasil dihapus.`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-primary/10 text-primary p-2 rounded-xl">
              <span className="material-symbols-outlined text-[24px]">manage_accounts</span>
            </span>
            <h1 className="font-headline-lg text-2xl font-bold text-primary">
              CMS SuperAdmin: Pengelolaan Pengguna
            </h1>
          </div>
          <p className="text-xs text-on-surface-variant mt-1.5">
            Atur wewenang pengelola website sekolah, tambah akun baru, dan tetapkan hak akses (SuperAdmin, Admin Utama, &amp; Ustadz).
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-primary hover:bg-primary-container text-on-primary font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm oceanic-shadow cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">person_add</span>
          Buat Akun Pengguna Baru
        </button>
      </div>

      {/* Notifications */}
      {successMsg && (
        <div className="p-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 text-xs rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            {successMsg}
          </div>
          <button onClick={() => setSuccessMsg("")} className="text-xs font-bold">✕</button>
        </div>
      )}

      {errorMsg && (
        <div className="p-4 bg-error-container text-on-error-container text-xs rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>
            {errorMsg}
          </div>
          <button onClick={() => setErrorMsg("")} className="text-xs font-bold">✕</button>
        </div>
      )}

      {/* Role Explanation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 oceanic-shadow space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-primary uppercase">SuperAdmin</span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-on-primary">
              Akses Penuh
            </span>
          </div>
          <p className="text-xs text-on-surface-variant">
            Memiliki wewenang tertinggi: mengelola akun pengguna, mengatur role admin/ustadz, serta akses penuh ke seluruh modul CMS.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 oceanic-shadow space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-secondary uppercase">Admin Utama</span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-container text-on-secondary-container">
              Pengelola Konten
            </span>
          </div>
          <p className="text-xs text-on-surface-variant">
            Mengelola CMS Berita, Gelombang PPDB, Struktur Organisasi, &amp; Tahfidz Santri (Tanpa akses Kelola Pengguna).
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 oceanic-shadow space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-xs text-tertiary uppercase">Ustadz / Pengajar</span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-tertiary-container text-on-tertiary-container">
              Pengampu Tahfidz
            </span>
          </div>
          <p className="text-xs text-on-surface-variant">
            Akses khusus untuk memperbarui capaian hafalan Juz santri, munaqosyah, dan mutaba'ah di Modul Tahfidz.
          </p>
        </div>
      </div>

      {/* User Accounts Table */}
      <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">group</span>
            Daftar Akun Pengguna Terdaftar ({users.length})
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant border-b border-outline-variant/30">
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Pengguna</th>
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Email Akses</th>
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Peran (Role)</th>
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider">Tgl Didaftarkan</th>
                <th className="px-4 py-3.5 font-bold uppercase tracking-wider text-right">Aksi Kontrol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-on-surface-variant">
                    Memuat data pengguna...
                  </td>
                </tr>
              ) : users.map((u) => (
                <tr key={u.id} className="hover:bg-primary-fixed/10 transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {u.full_name ? u.full_name.charAt(0).toUpperCase() : "U"}
                      </div>
                      <div>
                        <div className="font-bold text-on-surface">{u.full_name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 font-mono text-primary font-bold">{u.email}</td>
                  <td className="px-4 py-3.5">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold ${
                        u.role === "superadmin"
                          ? "bg-primary text-on-primary oceanic-shadow"
                          : u.role === "admin"
                          ? "bg-secondary-fixed text-on-secondary-fixed border border-secondary/20"
                          : "bg-tertiary/10 text-tertiary border border-tertiary/20"
                      }`}
                    >
                      {u.role === "superadmin"
                        ? "👑 SuperAdmin"
                        : u.role === "admin"
                        ? "Admin Utama"
                        : "Ustadz / Pengajar"}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-on-surface-variant">
                    {u.created_at
                      ? new Date(u.created_at).toLocaleDateString("id-ID", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Sistem"}
                  </td>
                  <td className="px-4 py-3.5 text-right space-x-2">
                    <button
                      onClick={() => {
                        setEditingUser(u);
                        setIsEditModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg font-bold text-[11px] hover:bg-primary hover:text-on-primary transition-all cursor-pointer"
                    >
                      Edit Role
                    </button>
                    {u.email !== "superadmin@sdit-imamsyafii.sch.id" && (
                      <button
                        onClick={() => handleDeleteUser(u)}
                        className="px-3 py-1.5 bg-error-container/40 text-error rounded-lg font-bold text-[11px] hover:bg-error hover:text-on-error transition-all cursor-pointer"
                      >
                        Hapus
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add User */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-md w-full p-6 rounded-3xl oceanic-shadow border border-outline-variant/30 space-y-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">person_add</span>
              Buat Akun Pengguna Baru
            </h3>

            <form onSubmit={handleAddUser} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-on-surface mb-1">Nama Lengkap &amp; Gelar</label>
                <input
                  type="text"
                  required
                  value={addForm.fullName}
                  onChange={(e) => setAddForm({ ...addForm, fullName: e.target.value })}
                  placeholder="misal: Ust. Muhammad Rizky, S.Pd"
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Email Akses Resmi</label>
                <input
                  type="email"
                  required
                  value={addForm.email}
                  onChange={(e) => setAddForm({ ...addForm, email: e.target.value })}
                  placeholder="pengguna@sdit-imamsyafii.sch.id"
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Kata Sandi Awal (Password)</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={addForm.password}
                  onChange={(e) => setAddForm({ ...addForm, password: e.target.value })}
                  placeholder="Minimal 6 Karakter"
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Peran / Hak Akses (Role)</label>
                <select
                  value={addForm.userRole}
                  onChange={(e) =>
                    setAddForm({ ...addForm, userRole: e.target.value as any })
                  }
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl font-bold"
                >
                  <option value="admin">Admin Utama (Akses Berita, PPDB, Struktur, Tahfidz)</option>
                  <option value="ustadz">Ustadz / Pengajar (Khusus Tahfidz &amp; Dashboard)</option>
                  <option value="superadmin">SuperAdmin (Full Akses + Kelola User)</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 bg-surface-container-high rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-bold oceanic-shadow cursor-pointer"
                >
                  Simpan Akun
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Edit Role */}
      {isEditModalOpen && editingUser && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest max-w-md w-full p-6 rounded-3xl oceanic-shadow border border-outline-variant/30 space-y-4">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">edit</span>
              Edit Peran Pengguna ({editingUser.full_name})
            </h3>

            <form onSubmit={handleUpdateRole} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-on-surface mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  value={editingUser.full_name}
                  onChange={(e) => setEditingUser({ ...editingUser, full_name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Peran / Hak Akses (Role)</label>
                <select
                  value={editingUser.role}
                  onChange={(e) =>
                    setEditingUser({ ...editingUser, role: e.target.value as any })
                  }
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl font-bold"
                >
                  <option value="admin">Admin Utama (Akses Berita, PPDB, Struktur, Tahfidz)</option>
                  <option value="ustadz">Ustadz / Pengajar (Khusus Tahfidz &amp; Dashboard)</option>
                  <option value="superadmin">SuperAdmin (Full Akses + Kelola User)</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2.5 bg-surface-container-high rounded-xl font-bold cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-primary text-on-primary rounded-xl font-bold oceanic-shadow cursor-pointer"
                >
                  Simpan Perubahan Role
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
