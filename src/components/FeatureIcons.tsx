import { Heart, Truck } from "lucide-react";
import type { FeatureIcon } from "../data/home";

function CactusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 52" width="34" height="34" fill="none" aria-hidden className={className}>
      <rect x="12" y="0" width="8" height="52" rx="4" fill="currentColor" />
      <rect x="2" y="12" width="8" height="6" rx="3" fill="currentColor" />
      <rect x="2" y="3" width="6" height="15" rx="3" fill="currentColor" />
      <rect x="22" y="18" width="8" height="6" rx="3" fill="currentColor" />
      <rect x="24" y="9" width="6" height="15" rx="3" fill="currentColor" />
    </svg>
  );
}

function SunriseIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 30" width="38" height="30" fill="none" aria-hidden className={className}>
      <path d="M2,28 A18,18 0 0,1 38,28" stroke="currentColor" strokeWidth="2.2" />
      <line x1="20" y1="10" x2="20" y2="2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="10" y1="14" x2="6" y2="7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="30" y1="14" x2="34" y2="7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="4" y1="24" x2="0" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="36" y1="24" x2="40" y2="22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

/** The small picture drawn for each item in the teal strip. */
export function featureIcon(icon: FeatureIcon) {
  switch (icon) {
    case "cactus":
      return <CactusIcon className="text-[#eadbc5]/80" />;
    case "sunrise":
      return <SunriseIcon className="text-[#eadbc5]/80" />;
    case "heart":
      return <Heart className="h-8 w-8 text-[#eadbc5]/80" strokeWidth={1.4} />;
    case "truck":
      return <Truck className="h-8 w-8 text-[#eadbc5]/80" strokeWidth={1.4} />;
  }
}
