export default function AnakSholih() {
  return (
    <div className="lg:w-[35%] flex flex-col">
      <div className="text-center lg:text-left mb-lg lg:mb-4">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Anak Sholih Bulan Ini</h2>
        <p className="font-body-md text-body-md text-transparent hidden lg:block lg:h-6">Spacer</p>
      </div>
      <div className="bg-surface rounded-[2rem] p-6 lg:p-5 oceanic-shadow border border-surface-variant/30 flex flex-col h-full items-start">
        <h3 className="text-xl font-bold text-on-surface mb-1">Ahmad Yusuf Al-Fatih</h3>
        <p className="text-primary font-label-bold text-[12px] mb-6 lg:mb-3">KELAS 3 AL-FARABI</p>
        <div className="w-full bg-secondary-fixed/10 rounded-xl p-4 lg:p-3 border border-secondary-fixed/20 mb-6 lg:mb-4 flex-grow">
          <div className="flex items-center gap-2 text-primary mb-3 lg:mb-2 text-sm">
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span className="font-bold">Pencapaian Istimewa:</span>
          </div>
          <ul className="space-y-2 text-on-surface-variant text-xs">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Menyelesaikan hafalan Juz 29 dengan predikat Mumtaz (Istimewa).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Juara 2 Lomba Adab Islami &amp; Tilawah tingkat Kota.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Selalu aktif membantu guru dan menjaga adab ketertiban kelas.</span>
            </li>
          </ul>
        </div>
        <p className="italic text-on-surface-variant opacity-80 text-xs">
          {"\"Semoga Allah memberkahi hafalan dan akhlak Ananda Ahmad Yusuf, serta menjadikannya penyejuk mata bagi orang tuanya.\""}
        </p>
      </div>
    </div>
  );
}
