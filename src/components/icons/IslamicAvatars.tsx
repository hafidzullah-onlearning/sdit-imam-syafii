import React from "react";

interface AvatarProps {
  className?: string;
  size?: number;
}

/**
 * Ustadz Avatar Icon - Reproducing reference vector design
 */
export function UstadzAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <circle cx="100" cy="100" r="98" fill="#EBEBEB" />

        {/* Outer Circular Border Ring */}
        <circle cx="100" cy="100" r="91" stroke="#969696" strokeWidth="7" fill="none" />

        {/* Peci / Kopiah Cap */}
        <path
          d="M66 58 C66 38 78 30 100 30 C122 30 134 38 134 58 V66 H66 V58 Z"
          fill="#707070"
        />

        {/* Head Contour (Face area) */}
        <path
          d="M72 64 C72 50 128 50 128 64 C128 86 118 100 100 100 C82 100 72 86 72 64 Z"
          fill="#D9D9D9"
        />

        {/* Beard Outline on Jawline */}
        <path
          d="M74 76 C78 94 88 104 100 104 C112 104 122 94 126 76 C124 98 114 108 100 108 C86 108 76 98 74 76 Z"
          fill="#555555"
        />

        {/* Neck Area */}
        <path d="M86 98 H114 V116 H86 Z" fill="#D9D9D9" />

        {/* Collar V-Notch (Koko Collar) */}
        <path
          d="M93 112 L100 120 L107 112"
          stroke="#EBEBEB"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Shoulders & Koko Shirt Silhouette */}
        <path
          d="M32 170 C32 134 60 114 100 114 C140 114 168 134 168 170 V195 H32 V170 Z"
          fill="#707070"
        />
      </svg>
    </div>
  );
}

/**
 * Ustadzah Avatar Icon - Reproducing reference vector design
 */
export function UstadzahAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background Circle */}
        <circle cx="100" cy="100" r="98" fill="#EBEBEB" />

        {/* Outer Circular Border Ring */}
        <circle cx="100" cy="100" r="91" stroke="#969696" strokeWidth="7" fill="none" />

        {/* Outer Hijab Drape Silhouette */}
        <path
          d="M52 165 C40 145 42 78 62 48 C76 27 124 27 138 48 C158 78 160 145 148 165 C140 178 120 184 100 184 C80 184 60 178 52 165 Z"
          fill="#707070"
        />

        {/* Inner Ciput / Underscarf Layer */}
        <path
          d="M72 58 C72 44 82 40 100 40 C118 40 128 44 128 58 V66 H72 V58 Z"
          fill="#A0A0A0"
        />

        {/* Face Oval Opening */}
        <ellipse cx="100" cy="80" rx="24" ry="32" fill="#D9D9D9" />

        {/* Hijab Drape Fold Line Details */}
        <path
          d="M62 136 C74 150 126 150 138 136"
          stroke="#555555"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M70 152 C80 162 120 162 130 152"
          stroke="#555555"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
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
