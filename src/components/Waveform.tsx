export function Waveform({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M0 40 L80 40 L100 20 L120 60 L140 10 L160 70 L180 30 L200 50 L240 40 L300 40 L320 15 L340 65 L360 25 L380 55 L400 40 L460 40 L480 20 L500 60 L520 30 L540 50 L580 40 L640 40 L660 25 L680 55 L700 40 L800 40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
