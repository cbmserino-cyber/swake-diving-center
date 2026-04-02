import Image from "next/image";

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
    <section className="mx-auto max-w-5xl px-6 pt-12 pb-8 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <div className="mb-6 flex items-center gap-4">
          <Image
            src="/Swake-05.png"
            alt="Swake Freedivers Siquijor logo"
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
            priority
          />
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">
              Swake Freedivers
            </p>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#37A8E0]">
              Siquijor • by Swake Diving Center
            </p>
          </div>
        </div>

        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#37A8E0]">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {description}
        </p>

        {kicker ? (
          <p className="mt-4 text-sm font-medium text-slate-500">{kicker}</p>
        ) : null}
      </div>
    </section>
  );
}
