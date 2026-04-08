import Image from "next/image";

type GalleryProps = {
  images: string[];
};

export function Gallery({ images }: GalleryProps) {
  if (!images?.length) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
