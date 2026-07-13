export default function Stats() {
  return (
    <section id="stats" className="py-6 bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {/* Card 1: Siswa Aktif */}
          <div className="bg-surface rounded-2xl p-6 oceanic-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">group</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-on-surface">350+</p>
              <p className="text-sm text-on-surface-variant">Siswa Aktif</p>
            </div>
          </div>
          {/* Card 2: Alumni (Updated) */}
          <div className="bg-surface rounded-2xl p-6 oceanic-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-on-surface">100+</p>
              <p className="text-sm text-on-surface-variant">Alumni</p>
            </div>
          </div>
          {/* Card 3: Prestasi Nasional */}
          <div className="bg-surface rounded-2xl p-6 oceanic-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/50 flex items-center justify-center text-tertiary">
              <span className="material-symbols-outlined">emoji_events</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-on-surface">12+</p>
              <p className="text-sm text-on-surface-variant">Prestasi Nasional</p>
            </div>
          </div>
          {/* Card 4: Ustadz & Ustadzah */}
          <div className="bg-surface rounded-2xl p-6 oceanic-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary-fixed/50 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">military_tech</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-on-surface">28</p>
              <p className="text-sm text-on-surface-variant">Ustadz &amp; Ustadzah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
