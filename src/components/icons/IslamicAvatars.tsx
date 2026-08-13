import React from "react";

interface AvatarProps {
  className?: string;
  size?: number;
}

/**
 * Ustadz Avatar Icon - Exact replica of user attached image 1
 * (Transparent background, grey circle border, grey peci/shirt, light grey face)
 */
export function UstadzAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Circle Ring */}
        <circle cx="100" cy="100" r="89" stroke="#848484" strokeWidth="7" fill="none" />

        {/* Peci / Kopiah Cap */}
        <path
          d="M71 66 C71 42 79 31 100 31 C121 31 129 42 129 66 V74 H71 V66 Z"
          fill="#787878"
        />

        {/* Face Contour */}
        <path
          d="M75 74 C75 56 125 56 125 74 C125 96 116 110 100 110 C84 110 75 96 75 74 Z"
          fill="#D2D2D2"
        />

        {/* Neck Area with V-Notch */}
        <path d="M88 110 H112 V130 H88 Z" fill="#D2D2D2" />
        <path
          d="M100 114 L94 130 H106 L100 114 Z"
          fill="#787878"
        />

        {/* Koko Shirt / Shoulders Silhouette */}
        <path
          d="M36 182 C36 138 64 120 100 120 C136 120 164 138 164 182 V193 H36 V182 Z"
          fill="#787878"
        />
      </svg>
    </div>
  );
}

/**
 * Ustadzah Avatar Icon - Exact replica of user attached image 2
 * (Transparent background, grey circle border, grey hijab, light grey face)
 */
export function UstadzahAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Circle Ring */}
        <circle cx="100" cy="100" r="89" stroke="#848484" strokeWidth="7" fill="none" />

        {/* Outer Hijab Drape Silhouette */}
        <path
          d="M52 174 C40 152 42 80 64 45 C78 22 122 22 136 45 C158 80 160 152 148 174 C139 188 120 193 100 193 C80 193 61 188 52 174 Z"
          fill="#787878"
        />

        {/* Face Oval Opening */}
        <ellipse cx="100" cy="93" rx="25" ry="35" fill="#D2D2D2" />
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
