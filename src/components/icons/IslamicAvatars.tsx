import React from "react";

interface AvatarProps {
  className?: string;
  size?: number;
}

/**
 * Ustadz Avatar: Minimalist Syar'i Vector Silhouette with Peci / Kopiah
 */
export function UstadzAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-primary/10 via-primary/5 to-primary/15 border border-primary/20 p-2 shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Soft Circular Glow Background */}
        <circle cx="60" cy="60" r="48" fill="#00658D" fillOpacity="0.08" />

        {/* Peci / Kopiah Silhouette */}
        <path
          d="M39 41C39 30.5 48 27 60 27C72 27 81 30.5 81 41V46H39V41Z"
          fill="#004D6B"
        />
        <rect x="38" y="44" width="44" height="3" rx="1.5" fill="#00ADEF" />

        {/* Head / Neck Contour Silhouette */}
        <circle cx="60" cy="52" r="16" fill="#00658D" />

        {/* Collar Accent */}
        <path
          d="M52 64L60 72L68 64"
          stroke="#00ADEF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Smooth Shoulders & Bust Silhouette */}
        <path
          d="M26 102C26 82 40 70 60 70C80 70 94 82 94 102V106H26V102Z"
          fill="#00658D"
        />

        {/* Shirt Placket Accent Line */}
        <line
          x1="60"
          y1="72"
          x2="60"
          y2="98"
          stroke="#FFFFFF"
          strokeOpacity="0.6"
          strokeWidth="2"
          strokeDasharray="3 3"
        />
      </svg>
    </div>
  );
}

/**
 * Ustadzah Avatar: Minimalist Syar'i Vector Silhouette with Graceful Hijab
 */
export function UstadzahAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-b from-tertiary/10 via-tertiary/5 to-tertiary/15 border border-tertiary/30 p-2 shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Soft Circular Glow Background */}
        <circle cx="60" cy="60" r="48" fill="#725B38" fillOpacity="0.08" />

        {/* Outer Graceful Syar'i Hijab Silhouette */}
        <path
          d="M24 98C24 68 34 26 60 26C86 26 96 68 96 98C96 104 86 107 60 107C34 107 24 104 24 98Z"
          fill="#725B38"
        />

        {/* Inner Hijab Layer (Ciput / Layer Accent) */}
        <path
          d="M39 42C39 31 47 29 60 29C73 29 81 31 81 42V48H39V42Z"
          fill="#BA9E77"
        />

        {/* Face Oval Area (Soft Neutral Silhouette) */}
        <ellipse cx="60" cy="52" rx="13" ry="15" fill="#493516" />

        {/* Drape Folds Silhouette */}
        <path
          d="M38 74C46 84 74 84 82 74C76 96 44 96 38 74Z"
          fill="#BA9E77"
          fillOpacity="0.85"
        />

        {/* Pin Accent */}
        <circle cx="70" cy="72" r="3.5" fill="#FEDEB2" />
      </svg>
    </div>
  );
}

/**
 * Universal IslamicAvatar Component
 */
export function IslamicAvatar({
  gender,
  className = "",
  size = 120,
}: {
  gender: "male" | "female";
  className?: string;
  size?: number;
}) {
  if (gender === "female") {
    return <UstadzahAvatar className={className} size={size} />;
  }
  return <UstadzAvatar className={className} size={size} />;
}
