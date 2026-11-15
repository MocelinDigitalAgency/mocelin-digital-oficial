import { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F4EFF3] via-[#FAF8F9] to-[#F7F1E3] dark:from-[#141018] dark:via-[#0D0B10] dark:to-[#1A130D] border border-[#E61E7A]/25 p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="w-7 h-7 text-[#C21462] dark:text-[#D4AF37]/80 mb-3" aria-hidden="true" />
        <span className="font-display text-base text-[#141018] dark:text-[#F5F2EB]">
          {fallbackTitle ?? alt}
        </span>
        <span className="mt-1 text-xs text-[#645A6C] dark:text-[#B3ACB8]">
          Mocelin Digital Agency
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
