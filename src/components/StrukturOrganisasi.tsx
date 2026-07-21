import Image from "next/image";
import staffKepalaSekolah from "@/assets/staff-kepala-sekolah.jpg";
import staffWakaKurikulum from "@/assets/staff-waka-kurikulum.jpg";
import staffWakaKesiswaan from "@/assets/staff-waka-kesiswaan.jpg";
import staffBendahara from "@/assets/staff-bendahara.jpg";

export default function StrukturOrganisasi() {
  const staffMembers = [
    {
      name: "Ust. Ahmad Ridwan, M.Pd",
      role: "Kepala Sekolah",
      image: staffKepalaSekolah,
    },
    {
      name: "Ustzh. Sarah Amina",
      role: "Waka Kurikulum",
      image: staffWakaKurikulum,
    },
    {
      name: "Ust. Fauzan Hanif",
      role: "Waka Kesiswaan",
      image: staffWakaKesiswaan,
    },
    {
      name: "Ustzh. Fatimah Zahra",
      role: "Bendahara Sekolah",
      image: staffBendahara,
    },
  ];

  return (
    <section className="py-xl bg-surface border-b border-surface-variant/30">
      <div className="px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-bold text-xs uppercase tracking-wider mb-3">
              Manajemen Sekolah
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-sm text-on-surface">
              Struktur Organisasi &amp; Pengelola
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Tim pendidik profesional yang berdedikasi tinggi membimbing dan mengampu putra-putri Anda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
          {staffMembers.map((staff, idx) => (
            <div key={idx} className="text-center group">
              <div className="relative mb-md overflow-hidden rounded-2xl aspect-[3/4] oceanic-shadow border border-surface-variant/30">
                <Image
                  src={staff.image}
                  alt={`Foto ${staff.name} - ${staff.role}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h4 className="font-bold text-lg text-on-surface mb-1">{staff.name}</h4>
              <p className="text-primary font-bold text-xs uppercase tracking-wider">
                {staff.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
