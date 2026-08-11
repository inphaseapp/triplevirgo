import Image from "next/image";

type BrandMarkProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Official TripleVirgo logo lockup — geometry, wordmark, and tagline.
 * Never redraw; never use as a watermark.
 */
export function BrandMark({ className = "", priority = false }: BrandMarkProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/brand/triplevirgo-lockup.jpg"
        alt="triplevirgo — Building technology that inspires understanding"
        width={1024}
        height={1024}
        priority={priority}
        className="h-auto w-full object-contain mix-blend-screen"
        sizes="(max-width: 768px) 88vw, 480px"
      />
    </div>
  );
}
