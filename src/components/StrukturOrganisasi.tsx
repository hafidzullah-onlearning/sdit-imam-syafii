"use client";

import { useEffect, useState } from "react";
import { IslamicAvatar } from "@/components/icons/IslamicAvatars";
import { createClient } from "@/lib/supabase/client";
import { fetchStaffFromDB, StaffRecord } from "@/lib/supabase/services";

type StaffMember = StaffRecord;

const defaultStaffMembers: StaffMember[] = [
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

export default function StrukturOrganisasi() {
  const [staffMembers, setStaffMembers] = useState<StaffMember[]>(defaultStaffMembers);

  useEffect(() => {
    let channel: any;

    async function loadStaff() {
      // 1. Try DB fetch first
      const dbStaff = await fetchStaffFromDB();
      if (dbStaff && dbStaff.length > 0) {
        setStaffMembers(dbStaff);
      } else {
        const saved = localStorage.getItem("sdit_staff");
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setStaffMembers(parsed.sort((a: any, b: any) => a.displayOrder - b.displayOrder));
              return;
            }
          } catch {}
        }
        setStaffMembers(defaultStaffMembers);
      }

      // 2. Realtime listener
      try {
        const supabase = createClient();
        channel = supabase
          .channel("realtime_staff")
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "organization_staff" },
            async () => {
              const fresh = await fetchStaffFromDB();
              if (fresh) setStaffMembers(fresh);
            }
          )
          .subscribe();
      } catch {}
    }

    loadStaff();

    return () => {
      if (channel) {
        try {
          const supabase = createClient();
          supabase.removeChannel(channel);
        } catch {}
      }
    };
  }, []);


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
          {staffMembers.map((staff) => (
            <div key={staff.id} className="text-center group">
              <div className="relative mb-md overflow-hidden rounded-2xl aspect-[3/4] oceanic-shadow border border-surface-variant/30 bg-surface-container-lowest flex flex-col items-center justify-center p-4">
                <div className="transform group-hover:scale-105 transition-transform duration-500">
                  <IslamicAvatar gender={staff.gender} size={140} />
                </div>
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

