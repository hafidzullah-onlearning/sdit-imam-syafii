import Image from "next/image";
import historySchool from "@/assets/history-school.jpg";

export default function Sejarah() {
  return (
    <section className="relative md:min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-16 bg-surface islamic-pattern border-b border-surface-variant/30">
      <div className="px-gutter max-w-container-max mx-auto grid md:grid-cols-2 gap-xl items-center w-full">
        <div className="space-y-md">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-label-bold text-xs uppercase tracking-wider">
            Sejarah Kami
          </div>
          <h2 className="font-headline-lg text-headline-xl md:text-[40px] text-on-surface leading-tight">
            Jejak Langkah SDIT Imam Syafi'i
          </h2>
          <p className="font-body-md text-body-lg text-on-surface-variant leading-relaxed">
            Berdiri sejak tahun 2012, SDIT Imam Syafi'i berawal dari sebuah cita-cita mulia untuk menyediakan lingkungan pendidikan yang representatif bagi anak-anak kaum muslimin. Didorong oleh kesadaran akan pentingnya dasar agama yang kuat sejak usia dini, kami berkomitmen untuk menghadirkan kurikulum terpadu.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed opacity-90">
            Selama lebih dari satu dekade, sekolah ini telah bertransformasi dari sebuah gedung sederhana menjadi institusi pendidikan modern yang dipercaya masyarakat, tanpa pernah meninggalkan filosofi dasar kami: pendidikan yang berpusat pada Al-Qur'an dan akhlak mulia.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-28 h-28 bg-tertiary/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="bg-surface p-2.5 rounded-2xl oceanic-shadow transform rotate-2 border border-surface-variant/30 relative">
            <div className="relative w-full aspect-[4/3] max-h-[380px] md:max-h-[440px] rounded-xl overflow-hidden">
              <Image
                src={historySchool}
                alt="Sejarah perkembangan gedung dan lingkungan SDIT Imam Syafi'i"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

