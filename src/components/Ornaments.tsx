// Small decorative pieces used by more than one section.

export function SunRays() {
  return (
    <svg viewBox="0 0 58 36" width="54" height="33" fill="none" aria-hidden className="text-[#0b565c]">
      <path d="M3,34 A26,26 0 0,1 55,34" stroke="currentColor" strokeWidth="2" />
      <line x1="29" y1="10" x2="29" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="13" x2="13" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="13" x2="45" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="23" x2="2" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="23" x2="56" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-px w-9 bg-current opacity-40" />
      <span className="text-[9px] opacity-60">&#9670;</span>
      <span className="h-px w-9 bg-current opacity-40" />
    </div>
  );
}
