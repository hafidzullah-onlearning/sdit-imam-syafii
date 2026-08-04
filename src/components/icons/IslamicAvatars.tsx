import React from "react";

interface AvatarProps {
  className?: string;
  size?: number;
}

export function UstadzAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#00658d]/10 via-[#00adef]/15 to-[#003d57]/20 border border-primary/20 p-2 shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Aura */}
        <circle cx="60" cy="60" r="50" fill="#00658D" fillOpacity="0.08" />
        <circle cx="60" cy="60" r="42" fill="#00ADEF" fillOpacity="0.12" />

        {/* Peci / Kopiah Hitam Islami */}
        <path
          d="M38 42C38 32 46 28 60 28C74 28 82 32 82 42V48H38V42Z"
          fill="#1E293B"
        />
        <rect x="37" y="46" width="46" height="4" rx="2" fill="#00658D" />

        {/* Head / Wajah */}
        <circle cx="60" cy="54" r="16" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />

        {/* Senyum & Kacamata Syar'i */}
        <circle cx="53" cy="52" r="3" stroke="#00658D" strokeWidth="1.5" fill="none" />
        <circle cx="67" cy="52" r="3" stroke="#00658D" strokeWidth="1.5" fill="none" />
        <line x1="56" y1="52" x2="64" y2="52" stroke="#00658D" strokeWidth="1.5" />
        <path d="M54 60C56 63 64 63 66 60" stroke="#00658D" strokeWidth="1.5" strokeLinecap="round" />

        {/* Jenggot Rapi */}
        <path
          d="M52 62C54 67 66 67 68 62C66 70 54 70 52 62Z"
          fill="#334155"
        />

        {/* Baju Koko & Kerah */}
        <path
          d="M30 102C30 84 42 74 60 74C78 74 90 84 90 102V108H30V102Z"
          fill="#00658D"
        />
        {/* Kerah Koko Putih */}
        <path d="M52 74L60 84L68 74" fill="#FFFFFF" stroke="#003D57" strokeWidth="1.5" />
        <line x1="60" y1="84" x2="60" y2="102" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />

        {/* Star Accent */}
        <path
          d="M60 14L62 18L66 19L63 22L64 26L60 24L56 26L57 22L54 19L58 18L60 14Z"
          fill="#BA9E77"
        />
      </svg>
    </div>
  );
}

export function UstadzahAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-[#725b38]/10 via-[#ba9e77]/20 to-[#493516]/20 border border-tertiary/30 p-2 shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Aura */}
        <circle cx="60" cy="60" r="50" fill="#725B38" fillOpacity="0.08" />
        <circle cx="60" cy="60" r="42" fill="#BA9E77" fillOpacity="0.15" />

        {/* Hijab Syar'i Outer */}
        <path
          d="M26 98C26 72 36 30 60 30C84 30 94 72 94 98C94 104 86 108 60 108C34 108 26 104 26 98Z"
          fill="#725B38"
        />

        {/* Inner Hijab Layer (Ciput / Layer Emas) */}
        <path
          d="M38 46C38 34 46 32 60 32C74 32 82 34 82 46V54H38V46Z"
          fill="#BA9E77"
        />

        {/* Head / Wajah */}
        <circle cx="60" cy="54" r="14" fill="#FFF7ED" stroke="#725B38" strokeWidth="1.5" />

        {/* Muka & Senyum Ramah */}
        <circle cx="53" cy="52" r="2" fill="#493516" />
        <circle cx="67" cy="52" r="2" fill="#493516" />
        <path d="M55 59C57 62 63 62 65 59" stroke="#725B38" strokeWidth="1.5" strokeLinecap="round" />

        {/* Lipatan Hijab Syar'i Anggun */}
        <path
          d="M40 76C48 84 72 84 80 76C74 94 46 94 40 76Z"
          fill="#BA9E77"
          fillOpacity="0.8"
        />

        {/* Bros Bintang Soft Gold */}
        <circle cx="70" cy="74" r="4" fill="#FEDEB2" stroke="#725B38" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function IslamicAvatar({ gender, className = "", size = 120 }: { gender: "male" | "female"; className?: string; size?: number }) {
  if (gender === "female") {
    return <UstadzahAvatar className={className} size={size} />;
  }
  return <UstadzAvatar className={className} size={size} />;
}
