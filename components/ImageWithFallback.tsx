'use client';

import { useState } from 'react';

interface Props {
  src?: string;
  alt: string;
  fallback?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallback,
  width,
  height,
  className,
}: Props) {
  const [imgSrc, setImgSrc] = useState(src || fallback || '');

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() =>
        setImgSrc(
          fallback || `https://placehold.co/600x400/f8faf5/4ade80?text=${encodeURIComponent(alt)}`
        )
      }
    />
  );
}
