"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryProps = {
  images: string[];
};

export function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev + 1) % images.length
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? 0 : (prev - 1 + images.length) % images.length
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, images.length]);

  if (!images?.length) return null;

  const showPrev = () => {
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % images.length
    );
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-3 lg:overflow-visible">
          {images.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="relative min-w-[85%] snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:min-w-[60%] lg:min-w-0 lg:aspect-[4/3]"
              aria-label={`Open image ${index + 1}`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition duration-300 hover:scale-[1.02]"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 60vw, 33vw"
                />
              </div>
            </button>
          ))}
        </div>
      </section>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          onClick={() => setActiveIndex(null)}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveIndex(null);
              }}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-sm font-semibold text-white"
            >
              Close
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-3 text-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-3 text-white"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            <div
              className="relative h-[75vh] w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`Full view image ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm text-white">
              {activeIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
