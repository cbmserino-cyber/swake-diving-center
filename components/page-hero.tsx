type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  kicker?: string;
};

export function PageHero({ eyebrow, title, description, kicker }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_40%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,1))]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 md:text-lg">{description}</p>
        {kicker ? <p className="mt-5 text-sm text-slate-400">{kicker}</p> : null}
      </div>
    </section>
  );
}
