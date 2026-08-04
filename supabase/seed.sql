-- Seed Data for SDIT Imam Syafi'i

-- 1. Seed Organization Staff
INSERT INTO public.organization_staff (id, name, role, gender, display_order)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'Ust. Ahmad Ridwan, M.Pd', 'Kepala Sekolah', 'male', 1),
  ('22222222-2222-2222-2222-222222222222', 'Ustzh. Sarah Amina', 'Waka Kurikulum', 'female', 2),
  ('33333333-3333-3333-3333-333333333333', 'Ust. Fauzan Hanif', 'Waka Kesiswaan', 'male', 3),
  ('44444444-4444-4444-4444-444444444444', 'Ustzh. Fatimah Zahra', 'Bendahara Sekolah', 'female', 4)
ON CONFLICT (id) DO NOTHING;

-- 2. Seed PPDB Batches
INSERT INTO public.ppdb_batches (id, title, status, start_date, end_date, observation_date, announcement_date, remaining_quota, total_quota, reg_fee, dev_fee, spp_fee)
VALUES
  ('55555555-5555-5555-5555-555555555555', 'Gelombang 1 - TA 2025/2026', 'active', '1 Okt 2024', '31 Des 2024', '11 Januari 2025', '18 Januari 2025', 15, 30, 'Rp 350.000', 'Rp 8.500.000', 'Rp 750.000')
ON CONFLICT (id) DO NOTHING;

-- 3. Seed Students (Tahfidz)
INSERT INTO public.students (no, name, nisn, class, juz, status, status_type, last_update)
VALUES
  (1, 'Abdullah Ahmad Fawwaz', '0128391021', '6 Al-Ikhlas', 'Juz 28, 29, 30', 'Lulus Munaqosyah', 'success', '12 Okt 2024'),
  (2, 'Aisyah Humaira', '0137281922', '5 An-Nasr', 'Juz 29, 30', 'Proses Muraja''ah', 'warning', '10 Okt 2024'),
  (3, 'Muhammad Zaidan', '0129381043', '6 Al-Ikhlas', 'Juz 30', 'Lulus Munaqosyah', 'success', '09 Okt 2024'),
  (4, 'Fathimah Azzahra', '0148291054', '4 Al-Falaq', 'Juz 30', 'Hafalan Baru', 'info', '08 Okt 2024'),
  (5, 'Ibrahim Al-Ghifari', '0139201955', '5 An-Nasr', 'Juz 27, 28, 29, 30', 'Lulus Munaqosyah', 'success', '07 Okt 2024'),
  (6, 'Khodijah Salma', '0159281066', '3 Al-Masad', 'Juz 30', 'Hafalan Baru', 'info', '06 Okt 2024'),
  (7, 'Umar bin Khattab', '0129381077', '6 Al-Ikhlas', 'Juz 29, 30', 'Lulus Munaqosyah', 'success', '05 Okt 2024'),
  (8, 'Ali bin Abi Thalib', '0169281088', '2 Quraisy', 'Juz 30 (Setengah)', 'Proses Setoran', 'warning', '04 Okt 2024'),
  (9, 'Siti Aminah', '0139281099', '5 An-Nasr', 'Juz 30', 'Lulus Munaqosyah', 'success', '03 Okt 2024'),
  (10, 'Zaid bin Haritsah', '0149281100', '4 Al-Falaq', 'Juz 29, 30', 'Proses Muraja''ah', 'warning', '02 Okt 2024')
ON CONFLICT (nisn) DO NOTHING;

-- 4. Seed News Articles
INSERT INTO public.news_articles (slug, title, category, author, summary, content, image_url, status, published_at)
VALUES
  (
    'mabit-qiyamul-lail-kelas-6',
    'Mabit & Qiyamul Lail Bersama Siswa Kelas 6 SDIT Imam Syafi''i',
    'Kegiatan',
    'Tim Kesiswaan & Al-Qur''an',
    'Membangun spiritualitas sejak dini melalui kegiatan Malam Bina Iman dan Taqwa (Mabit) yang diikuti oleh seluruh siswa akhir SDIT Imam Syafi''i.',
    ARRAY[
      'Assalamu''alaikum Warahmatullahi Wabarakatuh.',
      'SDIT Imam Syafi''i sukses menyelenggarakan kegiatan Malam Bina Iman dan Taqwa (Mabit) serta Qiyamul Lail khusus bagi seluruh siswa-siswi kelas 6. Kegiatan ini bertujuan untuk membekali mental dan spiritual para santri menjelang ujian kelulusan.',
      'Selama Mabit, siswa diajak mengulas kembali hafalan Al-Qur''an (muraja''ah), mendengarkan ceramah motivasi Islami, sholat beregu, serta sholat tahajud berjamaah di sepertiga malam terakhir.',
      'Kegiatan diakhiri dengan sholat subuh berjamaah, doa bersama, dan sarapan sehat bersama ustadz pendamping. Semoga kegiatan ini menanamkan kebiasaan ibadah mandiri yang kuat bagi ananda di rumah.'
    ],
    '/news-mabit.jpg',
    'published',
    '12 Okt 2024'
  ),
  (
    'agenda-munaqosyah-tahfidz',
    'Pelaksanaan Agenda Munaqosyah Tahfidz Al-Qur''an Semester Ganjil',
    'Akademik',
    'Koordinator Tahfidz',
    'Pelaksanaan evaluasi hafalan Al-Qur''an berjalan dengan khidmat. Orang tua dapat memantau progres hafalan ananda disaksikan oleh tim penguji.',
    ARRAY[
      'Assalamu''alaikum Warahmatullahi Wabarakatuh.',
      'Dalam rangka menguji kelancaran dan ketepatan tajwid hafalan Al-Qur''an santri, SDIT Imam Syafi''i menggelar Ujian Munaqosyah Tahfidz Terbuka untuk seluruh tingkat kelas 1 hingga 6.',
      'Ujian Munaqosyah ini merupakan agenda rutin yang wajib diikuti oleh santri yang telah menyelesaikan target hafalan minimal 1 Juz (Juz 30, 29, 28, atau seterusnya).',
      'Format ujian diselenggarakan secara langsung di hadapan Tim Penguji/Penguji Eksternal serta disaksikan oleh orang tua/wali santri secara khidmat.'
    ],
    '/news-munaqosyah.png',
    'published',
    '10 Okt 2024'
  ),
  (
    'jadwal-pendaftaran-ppdb-gelombang-1',
    'Pembukaan Pendaftaran Peserta Didik Baru (PPDB) TA 2025/2026',
    'Pengumuman',
    'Panitia PPDB SDIT Imam Syafi''i',
    'SDIT Imam Syafi''i resmi membuka pendaftaran peserta didik baru (PPDB) untuk tahun ajaran 2025/2026. Kuota terbatas bagi calon santri baru.',
    ARRAY[
      'Assalamu''alaikum Warahmatullahi Wabarakatuh.',
      'SDIT Imam Syafi''i Sudiang Makassar dengan bangga mengumumkan pembukaan Penerimaan Peserta Didik Baru (PPDB) Gelombang 1 untuk Tahun Ajaran 2025/2026. Pendaftaran ini diperuntukkan bagi calon murid kelas 1 serta transfer murid pindahan.',
      'Sebagai institusi pendidikan yang berkomitmen membentuk generasi Qur''ani yang berakhlak mulia dan unggul secara akademik, SDIT Imam Syafi''i menyediakan kuota terbatas demi menjaga rasio ideal antara ustadz pendamping dan santri.'
    ],
    '/news-ppdb.jpg',
    'published',
    '05 Okt 2024'
  )
ON CONFLICT (slug) DO NOTHING;
