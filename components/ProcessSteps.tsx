type Step = {
  title: string;
  description: string;
};

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="divide-y hairline border-y hairline">
      {steps.map((step, i) => (
        <li key={step.title} className="grid gap-2 py-6 md:grid-cols-[80px_1fr] md:gap-8">
          <span className="font-mono text-sm text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-base font-semibold text-ink">{step.title}</h3>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
