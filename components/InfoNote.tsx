export default function InfoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-muted">
      {children}
    </div>
  );
}
