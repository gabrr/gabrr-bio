import React from 'react';
import Image from 'next/image';

const iconsMap = {
  facebook: {
    black: '/black/facebook.svg',
    chrome: '/chrome/facebook.svg',
  },
  instagram: {
    black: '/black/instagram.svg',
    chrome: '/chrome/instagram.svg',
  },
  whats: {
    black: '/black/whats.svg',
    chrome: '/chrome/whats.svg',
  },
  youtube: {
    black: '/black/youtube.svg',
    chrome: '/chrome/youtube.svg',
  },
  x: {
    black: '/black/x.svg',
    chrome: '/chrome/x.svg',
  },
};

export type IconName = keyof typeof iconsMap;
export type IconVariant = 'black' | 'chrome';

interface IconProps {
  name: IconName;
  variant: IconVariant;
  alt?: string;
  size?: number;
}

export function Icon({ name, variant, alt, size = 28 }: IconProps) {
  const src = iconsMap[name]?.[variant];
  if (!src) return null;
  return (
    <Image
      src={src}
      alt={alt || name}
      width={size}
      height={size}
      style={{ display: 'inline-block' }}
    />
  );
}
