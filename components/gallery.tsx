"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type GalleryProps = {
  images: string[];
};

const PREVIEW_COUNT = 3;
const SWIPE_THRESHOLD = 50;

export function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const showPrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

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
  }, [lightboxOpen, images.length]);

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

    if (distance > SWIPE_THRESHOLD) showNext();
    if (distance < -SWIPE_THRESHOLD) showPrev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!images?.length) return null;

  const previewImages = images.slice(0, PREVIEW_COUNT);

  return (
    <>
      <div className="space-y-4">
        <div className="grid gap-4 md:grid-cols-3">
          {previewImages.map((src, index) => (
            <button
              key={`${src}-${index}`}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setLightboxOpen(true);
              }}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              aria-label={`Open image ${index + 1} in full view`}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition duration-300 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </button>
          ))}
        </div>

        {images.length > PREVIEW_COUNT && (
          <button
            type="button"
            onClick={() => {
              setActiveIndex(0);
              setLightboxOpen(true);
            }}
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            View all {images.length} images
          </button>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
          onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
            className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-sm font-semibold text-white"
            aria-label="Close gallery"
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
            className="relative h-[75vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`Gallery image ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <div className="absolute bottom-4 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
