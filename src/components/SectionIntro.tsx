export function SectionIntro({
  label,
  title,
  copy
}: {
  label: string;
  title: React.ReactNode;
  copy?: string;
}) {
  return (
    <header className="section-intro" data-reveal>
      <p>{label}</p>
      <h2>{title}</h2>
      {copy ? <div>{copy}</div> : null}
    </header>
  );
}
