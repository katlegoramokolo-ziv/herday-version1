import { photos, photoSrcSet, photoUrl, type PhotoKey } from '@/data/photos';

interface ResponsiveImageProps {
  photo: PhotoKey;
  sizes?: string;
  className?: string;
  eager?: boolean;
}

export function ResponsiveImage({
  photo,
  sizes = '100vw',
  className = '',
  eager = false,
}: ResponsiveImageProps) {
  const { alt, position } = photos[photo];

  return (
    <img
      src={photoUrl(photo, 960)}
      srcSet={photoSrcSet(photo)}
      sizes={sizes}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      style={{ objectPosition: position }}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
