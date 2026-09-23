type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lead: string;
};

export default function PageIntro({ eyebrow, title, lead }: Props) {
  return (
    <div className="container-content pb-10 pt-16 md:pt-20">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="font-mono text-xs text-accent">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">{lead}</p>
      </div>
    </div>
  );
}
