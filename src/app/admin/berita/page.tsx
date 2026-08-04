"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchNewsFromDB, saveNewsToDB, deleteNewsFromDB, NewsArticleRecord } from "@/lib/supabase/services";

type ArticleItem = NewsArticleRecord;

const initialArticles: ArticleItem[] = [
  {
    slug: "mabit-qiyamul-lail-kelas-6",
    title: "Mabit & Qiyamul Lail Bersama Siswa Kelas 6 SDIT Imam Syafi'i",
    date: "12 Okt 2024",
    category: "Kegiatan",
    author: "Tim Kesiswaan & Al-Qur'an",
    image: "/news-mabit.jpg",
    summary: "Membangun spiritualitas sejak dini melalui kegiatan Malam Bina Iman dan Taqwa (Mabit) yang diikuti oleh seluruh siswa akhir SDIT Imam Syafi'i.",
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "SDIT Imam Syafi'i sukses menyelenggarakan kegiatan Malam Bina Iman dan Taqwa (Mabit) serta Qiyamul Lail khusus bagi seluruh siswa-siswi kelas 6.",
    ],
    status: "published",
  },
  {
    slug: "agenda-munaqosyah-tahfidz",
    title: "Pelaksanaan Agenda Munaqosyah Tahfidz Al-Qur'an Semester Ganjil",
    date: "10 Okt 2024",
    category: "Akademik",
    author: "Koordinator Tahfidz",
    image: "/news-munaqosyah.png",
    summary: "Pelaksanaan evaluasi hafalan Al-Qur'an berjalan dengan khidmat.",
    content: [
      "Assalamu'alaikum Warahmatullahi Wabarakatuh.",
      "Dalam rangka menguji kelancaran dan ketepatan tajwid hafalan Al-Qur'an santri.",
    ],
    status: "published",
  },
];

export default function AdminBeritaPage() {
  const [articles, setArticles] = useState<ArticleItem[]>(initialArticles);
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingArticle, setEditingArticle] = useState<ArticleItem | null>(null);

  const [formData, setFormData] = useState<Partial<ArticleItem>>({
    category: "Kegiatan",
    author: "Humas SDIT Imam Syafi'i",
    status: "published",
    image: "/news-mabit.jpg",
  });

  useEffect(() => {
    async function loadNews() {
      const dbArticles = await fetchNewsFromDB(false);
      if (dbArticles && dbArticles.length > 0) {
        setArticles(dbArticles);
      } else {
        const saved = localStorage.getItem("sdit_news");
        if (saved) {
          try {
            setArticles(JSON.parse(saved));
          } catch {}
        }
      }
    }
    loadNews();
  }, []);

  const saveToStorage = (updated: ArticleItem[], articleToSave?: ArticleItem, slugToDelete?: string) => {
    setArticles(updated);
    localStorage.setItem("sdit_news", JSON.stringify(updated));

    if (articleToSave) {
      saveNewsToDB(articleToSave);
    }
    if (slugToDelete) {
      deleteNewsFromDB(slugToDelete);
    }
  };


  const filteredArticles = articles.filter((a) => {
    if (filterStatus === "all") return true;
    return a.status === filterStatus;
  });

  const handleOpenAddModal = () => {
    setEditingArticle(null);
    setFormData({
      category: "Kegiatan",
      author: "Humas SDIT Imam Syafi'i",
      status: "published",
      image: "/news-mabit.jpg",
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (article: ArticleItem) => {
    setEditingArticle(article);
    setFormData(article);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.summary) return;

    const slug =
      formData.slug ||
      formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const dateStr = new Date().toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    const contentArray =
      typeof formData.content === "string"
        ? (formData.content as string).split("\n\n")
        : formData.content || [formData.summary];

    if (editingArticle) {
      const updatedArticle: ArticleItem = {
        ...editingArticle,
        ...formData,
        slug,
        date: dateStr,
        content: contentArray,
      } as ArticleItem;

      const updated = articles.map((a) =>
        a.slug === editingArticle.slug ? updatedArticle : a
      );
      saveToStorage(updated, updatedArticle);
    } else {
      const newArticle: ArticleItem = {
        slug,
        title: formData.title || "",
        category: (formData.category as any) || "Kegiatan",
        author: formData.author || "Humas SDIT Imam Syafi'i",
        date: dateStr,
        image: formData.image || "/news-mabit.jpg",
        summary: formData.summary || "",
        content: contentArray,
        status: (formData.status as any) || "published",
      };
      saveToStorage([newArticle, ...articles], newArticle);
    }

    setIsModalOpen(false);
  };

  const handleToggleStatus = (slug: string) => {
    let target: ArticleItem | undefined;
    const updated = articles.map((a) => {
      if (a.slug === slug) {
        const nextStatus: "published" | "draft" = a.status === "published" ? "draft" : "published";
        target = { ...a, status: nextStatus };
        return target;
      }
      return a;
    });
    saveToStorage(updated, target);
  };

  const handleDelete = (slug: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus artikel berita ini?")) {
      const updated = articles.filter((a) => a.slug !== slug);
      saveToStorage(updated, undefined, slug);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow">
        <div>
          <h1 className="font-headline-lg text-2xl font-bold text-primary flex items-center gap-2">
            <span className="material-symbols-outlined text-[28px]">newspaper</span>
            CMS Pengelolaan Berita &amp; Informasi
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Tulis berita baru, upload foto header, dan kelola status penerbitan (Draft vs Published).
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="bg-primary hover:bg-primary-container text-on-primary font-bold text-xs px-5 py-3 rounded-xl transition-all shadow-sm oceanic-shadow cursor-pointer flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          Tulis Berita Baru
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilterStatus("all")}
          className={`px-5 py-2 rounded-full font-label-bold text-xs cursor-pointer transition-all ${
            filterStatus === "all"
              ? "bg-primary text-on-primary oceanic-shadow"
              : "bg-surface-container-low text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Semua ({articles.length})
        </button>
        <button
          onClick={() => setFilterStatus("published")}
          className={`px-5 py-2 rounded-full font-label-bold text-xs cursor-pointer transition-all ${
            filterStatus === "published"
              ? "bg-primary text-on-primary oceanic-shadow"
              : "bg-surface-container-low text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Published ({articles.filter((a) => a.status === "published").length})
        </button>
        <button
          onClick={() => setFilterStatus("draft")}
          className={`px-5 py-2 rounded-full font-label-bold text-xs cursor-pointer transition-all ${
            filterStatus === "draft"
              ? "bg-primary text-on-primary oceanic-shadow"
              : "bg-surface-container-low text-on-surface-variant hover:bg-secondary-container"
          }`}
        >
          Draft ({articles.filter((a) => a.status === "draft").length})
        </button>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.slug}
            className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 oceanic-shadow flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                  {article.category}
                </span>
                <button
                  onClick={() => handleToggleStatus(article.slug)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all cursor-pointer ${
                    article.status === "published"
                      ? "bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30"
                      : "bg-tertiary/10 text-tertiary border border-tertiary/30"
                  }`}
                >
                  {article.status === "published" ? "✓ PUBLISHED" : "✎ DRAFT"}
                </button>
              </div>

              <h3 className="font-bold text-base text-on-surface mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-xs text-on-surface-variant line-clamp-2 mb-3">
                {article.summary}
              </p>

              <div className="flex items-center gap-4 text-[11px] text-outline font-medium">
                <span>By: {article.author}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-end gap-2">
              <button
                onClick={() => handleOpenEditModal(article)}
                className="px-3.5 py-2 bg-primary/10 text-primary rounded-xl font-bold text-xs hover:bg-primary hover:text-on-primary transition-all cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">edit</span>
                Edit
              </button>
              <button
                onClick={() => handleDelete(article.slug)}
                className="px-3.5 py-2 bg-error-container/40 text-error rounded-xl font-bold text-xs hover:bg-error hover:text-on-error transition-all cursor-pointer flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">delete</span>
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form Edit/Add */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-surface-container-lowest max-w-xl w-full p-6 rounded-3xl oceanic-shadow border border-outline-variant/30 space-y-4 my-8">
            <h3 className="font-bold text-lg text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">newspaper</span>
              {editingArticle ? "Edit Berita Sekolah" : "Tulis Berita / Pengumuman Baru"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-on-surface mb-1">Judul Artikel Berita</label>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Masukkan Judul Berita"
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-on-surface mb-1">Kategori</label>
                  <select
                    value={formData.category || "Kegiatan"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value as any,
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  >
                    <option value="Kegiatan">Kegiatan</option>
                    <option value="Akademik">Akademik</option>
                    <option value="Pengumuman">Pengumuman</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-on-surface mb-1">Status Publikasi</label>
                  <select
                    value={formData.status || "published"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.target.value as any,
                      })
                    }
                    className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl font-bold"
                  >
                    <option value="published">PUBLISHED (Langsung Tayang)</option>
                    <option value="draft">DRAFT (Simpan Sementara)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Penulis / Author</label>
                <input
                  type="text"
                  value={formData.author || ""}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Tim Kesiswaan / Humas"
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Ringkasan Singkat (Summary)</label>
                <textarea
                  rows={2}
                  value={formData.summary || ""}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  placeholder="Ringkasan 1-2 kalimat untuk kartu berita..."
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-on-surface mb-1">Isi Konten Berita (Pisahkan Paragraf dengan 2x Enter)</label>
                <textarea
                  rows={5}
                  value={
                    Array.isArray(formData.content)
                      ? formData.content.join("\n\n")
                      : (formData.content as any) || ""
                  }
                  onChange={(e) => setFormData({ ...formData, content: e.target.value as any })}
                  placeholder="Tulis artikel berita secara lengkap di sini..."
                  className="w-full px-3.5 py-2.5 bg-surface-container-low border border-outline-variant/30 rounded-xl font-sans"
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
                  Simpan Berita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
