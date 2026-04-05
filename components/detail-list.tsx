type DetailListProps = {
  title: string;
  items: string[];
};

export function DetailList({ title, items }: DetailListProps) {
  return (
    <section className="rounded-3xl border border-[#3AA0C8]/20 bg-[#050505] p-6">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3AA0C8]">
        {title}
      </h2>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span className="mt-[0.45rem] h-2 w-2 shrink-0 rounded-full bg-[#F15A24]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
