type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  kicker?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  kicker,
}: PageHeroProps) {
  return (
    <section className="border-b border-[#3AA0C8]/20 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#3AA0C8]">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
          {description}
        </p>

        {kicker ? (
          <p className="mt-5 text-sm font-medium text-[#F15A24]">{kicker}</p>
        ) : null}
      </div>
    </section>
  );
}
