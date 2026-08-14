import React from "react";

interface AvatarProps {
  className?: string;
  size?: number;
}

export function UstadzAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/avatar-ustadz.png"
        alt="Avatar Ustadz"
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  );
}

/**
 * Ustadzah Avatar Icon - Replaceable Image Asset
 */
export function UstadzahAvatar({ className = "", size = 120 }: AvatarProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/avatar-ustadzah.png"
        alt="Avatar Ustadzah"
        className="w-full h-full object-cover rounded-full"
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
