import React from "react";
import Image from "next/image";

interface AvatarProps {
  className?: string;
  size?: number;
}

/**
 * Ustadz Avatar Component - Direct User Uploaded Image Asset (/public/avatar-ustadz.png)
 */
export function UstadzAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/avatar-ustadz.png"
        alt="Avatar Ustadz"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        unoptimized
      />
    </div>
  );
}

/**
 * Ustadzah Avatar Component - Direct User Uploaded Image Asset (/public/avatar-ustadzah.png)
 */
export function UstadzahAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/avatar-ustadzah.png"
        alt="Avatar Ustadzah"
        width={size}
        height={size}
        className="w-full h-full object-cover"
        unoptimized
      />
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
