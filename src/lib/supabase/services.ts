import { createClient } from "./client";

export interface StudentRecord {
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

export interface NewsArticleRecord {
  id?: string;
  slug: string;
  title: string;
  category: "Kegiatan" | "Akademik" | "Pengumuman";
  author: string;
  summary: string;
  content: string[];
  image: string;
  status: "published" | "draft";
  date: string;
}

export interface StaffRecord {
  id?: string;
  name: string;
  role: string;
  gender: "male" | "female";
  displayOrder: number;
}

export interface PpdbBatchRecord {
  id?: string;
  title: string;
  status: "active" | "closed" | "draft";
  startDate: string;
  endDate: string;
  observationDate: string;
  announcementDate: string;
  remainingQuota: number;
  totalQuota: number;
  regFee: string;
  devFee: string;
  sppFee: string;
}

export interface PpdbApplicantRecord {
  id: string;
  studentName: string;
  parentName: string;
  phone: string;
  classGrade: string;
  status: "Pending" | "Lulus Observasi" | "Diterima" | "Ditolak";
  date: string;
}

// ----------------------------------------------------
// 1. TAHFIDZ STUDENTS SERVICES
// ----------------------------------------------------
export async function fetchStudentsFromDB(): Promise<StudentRecord[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("students")
      .select("*")
      .order("no", { ascending: true });

    if (error || !data || data.length === 0) return null;

    return data.map((item: any) => ({
      id: item.id,
      no: item.no,
      name: item.name,
      nisn: item.nisn,
      class: item.class,
      juz: item.juz,
      status: item.status,
      statusType: item.status_type as any,
      lastUpdate: item.last_update,
    }));
  } catch {
    return null;
  }
}

export async function saveStudentToDB(student: StudentRecord): Promise<boolean> {
  try {
    const supabase = createClient();
    const payload = {
      no: student.no,
      name: student.name,
      nisn: student.nisn,
      class: student.class,
      juz: student.juz,
      status: student.status,
      status_type: student.statusType,
      last_update: student.lastUpdate,
    };

    if (student.id) {
      await supabase.from("students").update(payload).eq("id", student.id);
    } else {
      await supabase.from("students").upsert(payload, { onConflict: "nisn" });
    }
    return true;
  } catch {
    return false;
  }
}

export async function deleteStudentFromDB(nisn: string): Promise<boolean> {
  try {
    const supabase = createClient();
    await supabase.from("students").delete().eq("nisn", nisn);
    return true;
  } catch {
    return false;
  }
}

// ----------------------------------------------------
// 2. NEWS ARTICLES SERVICES
// ----------------------------------------------------
export async function fetchNewsFromDB(onlyPublished = false): Promise<NewsArticleRecord[] | null> {
  try {
    const supabase = createClient();
    let query = supabase.from("news_articles").select("*").order("created_at", { ascending: false });

    if (onlyPublished) {
      query = query.eq("status", "published");
    }

    const { data, error } = await query;
    if (error || !data || data.length === 0) return null;

    return data.map((item: any) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      category: item.category,
      author: item.author,
      summary: item.summary,
      content: item.content || [item.summary],
      image: item.image_url || "/news-mabit.jpg",
      status: item.status,
      date: item.published_at || "12 Okt 2024",
    }));
  } catch {
    return null;
  }
}

export async function saveNewsToDB(article: NewsArticleRecord): Promise<boolean> {
  try {
    const supabase = createClient();
    const payload = {
      slug: article.slug,
      title: article.title,
      category: article.category,
      author: article.author,
      summary: article.summary,
      content: article.content,
      image_url: article.image,
      status: article.status,
      published_at: article.date,
    };

    await supabase.from("news_articles").upsert(payload, { onConflict: "slug" });
    return true;
  } catch {
    return false;
  }
}

export async function deleteNewsFromDB(slug: string): Promise<boolean> {
  try {
    const supabase = createClient();
    await supabase.from("news_articles").delete().eq("slug", slug);
    return true;
  } catch {
    return false;
  }
}

// ----------------------------------------------------
// 3. ORGANIZATION STAFF SERVICES
// ----------------------------------------------------
export async function fetchStaffFromDB(): Promise<StaffRecord[] | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("organization_staff")
      .select("*")
      .order("display_order", { ascending: true });

    if (error || !data || data.length === 0) return null;

    return data.map((item: any) => ({
      id: item.id,
      name: item.name,
      role: item.role,
      gender: item.gender,
      displayOrder: item.display_order,
    }));
  } catch {
    return null;
  }
}

export async function saveStaffToDB(staff: StaffRecord): Promise<boolean> {
  try {
    const supabase = createClient();
    const payload = {
      name: staff.name,
      role: staff.role,
      gender: staff.gender,
      display_order: staff.displayOrder,
    };

    if (staff.id && staff.id.includes("-")) {
      await supabase.from("organization_staff").update(payload).eq("id", staff.id);
    } else {
      await supabase.from("organization_staff").insert(payload);
    }
    return true;
  } catch {
    return false;
  }
}

export async function deleteStaffFromDB(id: string): Promise<boolean> {
  try {
    const supabase = createClient();
    await supabase.from("organization_staff").delete().eq("id", id);
    return true;
  } catch {
    return false;
  }
}

// ----------------------------------------------------
// 4. PPDB BATCH & APPLICANTS SERVICES
// ----------------------------------------------------
export async function fetchPpdbBatchFromDB(): Promise<PpdbBatchRecord | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("ppdb_batches")
      .select("*")
      .limit(1)
      .single();

    if (error || !data) return null;

    return {
      id: data.id,
      title: data.title,
      status: data.status,
      startDate: data.start_date,
      endDate: data.end_date,
      observationDate: data.observation_date,
      announcementDate: data.announcement_date,
      remainingQuota: data.remaining_quota,
      totalQuota: data.total_quota,
      regFee: data.reg_fee,
      devFee: data.dev_fee,
      sppFee: data.spp_fee,
    };
  } catch {
    return null;
  }
}

export async function savePpdbBatchToDB(batch: PpdbBatchRecord): Promise<boolean> {
  try {
    const supabase = createClient();
    const payload = {
      title: batch.title,
      status: batch.status,
      start_date: batch.startDate,
      end_date: batch.endDate,
      observation_date: batch.observationDate,
      announcement_date: batch.announcementDate,
      remaining_quota: batch.remainingQuota,
      total_quota: batch.totalQuota,
      reg_fee: batch.regFee,
      dev_fee: batch.devFee,
      spp_fee: batch.sppFee,
    };

    if (batch.id) {
      await supabase.from("ppdb_batches").update(payload).eq("id", batch.id);
    } else {
      await supabase.from("ppdb_batches").insert(payload);
    }
    return true;
  } catch {
    return false;
  }
}
