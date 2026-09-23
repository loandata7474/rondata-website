export default function DataFlowGraphic() {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-auto w-full max-w-sm"
      role="img"
      aria-label="광고 캠페인에서 리드 데이터로 이어지는 흐름을 나타내는 추상 그래픽"
    >
      <line x1="40" y1="80" x2="200" y2="150" stroke="#DADFE2" strokeWidth="1" />
      <line x1="200" y1="150" x2="360" y2="90" stroke="#DADFE2" strokeWidth="1" />
      <line x1="200" y1="150" x2="120" y2="270" stroke="#DADFE2" strokeWidth="1" />
      <line x1="200" y1="150" x2="300" y2="290" stroke="#DADFE2" strokeWidth="1" />
      <line x1="120" y1="270" x2="240" y2="360" stroke="#DADFE2" strokeWidth="1" />
      <line x1="300" y1="290" x2="240" y2="360" stroke="#DADFE2" strokeWidth="1" />

      <circle cx="40" cy="80" r="5" fill="#16233F" />
      <circle cx="360" cy="90" r="5" fill="#16233F" />
      <circle cx="200" cy="150" r="7" fill="#C6791F" />
      <circle cx="120" cy="270" r="5" fill="#16233F" />
      <circle cx="300" cy="290" r="5" fill="#16233F" />
      <circle cx="240" cy="360" r="7" fill="#C6791F" />

      <circle cx="200" cy="150" r="14" fill="none" stroke="#C6791F" strokeWidth="1" opacity="0.5" />
      <circle cx="240" cy="360" r="14" fill="none" stroke="#C6791F" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
