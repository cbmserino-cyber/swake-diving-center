import Image from "next/image";

type GalleryProps = {
  images: string[];
};

export function Gallery({ images }: GalleryProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover transition hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
