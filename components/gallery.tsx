"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryProps = {
  images: string[];
};

export function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen, activeIndex]);

  if (!images?.length) return null;

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const onTouchStart = (clientX: number) => {
    touchStartX.current = clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (clientX: number) => {
    touchEndX.current = clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) showNext();
    if (distance < -50) showPrev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setLightboxOpen(true);
              }}
              className="relative overflow-hidden rounded-3xl border border-white/10"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          ))}
        </div>
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-3 text-white"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-3 text-white"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm text-white">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          {images.length > 1 && (
            <div className="flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeIndex ? "bg-cyan-300" : "bg-white/30"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
          onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
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
