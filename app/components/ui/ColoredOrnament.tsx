import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

interface ColoredOrnamentProps extends HTMLAttributes<HTMLDivElement> {
  src: string | StaticImageData;
  color: string;
  alt?: string;
}

export function ColoredOrnament({
  src,
  color,
  alt = "3D Ornament",
  className = "",
  style,
  ...props
}: ColoredOrnamentProps) {
  const imageSrc = typeof src === "string" ? src : src.src;

  return (
    <div
      className={`relative inline-block pointer-events-none select-none ${className}`}
      style={style}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        priority
        className="object-contain"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: color,
          WebkitMaskImage: `url(${imageSrc})`,
          WebkitMaskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskImage: `url(${imageSrc})`,
          maskSize: "contain",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
}
