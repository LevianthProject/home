export function PageHero({
  label,
  title,
  copy
}: {
  label: string;
  title: React.ReactNode;
  copy: string;
}) {
  return (
    <section className="page-hero">
      <p>{label}</p>
      <h1>{title}</h1>
      <div>
        <span aria-hidden="true" />
        <p>{copy}</p>
      </div>
    </section>
  );
}
