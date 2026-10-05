import { ChevronDown, Menu, X } from "lucide-react";
import { FacebookIcon, InstagramIcon, EtsyIcon } from "../SocialBrandIcons";
import { navLinks } from "../data/nav";
import { site } from "../data/site";
import Logo from "./Logo";

type Props = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

/** The logo and menu that sit on top of the hero, with the phone dropdown. */
export default function HeroHeader({ menuOpen, onToggleMenu, onCloseMenu }: Props) {
  return (
    // Wrapped in relative so the dropdown overlays the hero
    <div className="relative z-20">
      <header className="mx-auto flex max-w-7xl items-start justify-between px-4 sm:px-8 pt-5 sm:pt-8">
        <Logo variant="header" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 pt-6 text-[12px] font-bold uppercase tracking-[0.12em] text-[#2e1f14] lg:flex">
          {navLinks.map(({ label, href, external, current, arrow }) =>
            current ? (
              <a key={label} href={href} aria-current="page" className="border-b-2 border-[#0b565c] pb-0.5 text-[#0b565c]">{label}</a>
            ) : (
              <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                className={`${arrow ? "flex items-center gap-1 " : ""}hover:text-[#0b565c] transition-colors`}>
                {arrow ? `${label} ` : label}
                {arrow && <ChevronDown className="h-3 w-3" />}
              </a>
            ))}
          <span className="h-7 w-px bg-[#2e1f14]/25" />
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#0b565c] transition-colors">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#0b565c] transition-colors">
            <FacebookIcon className="h-5 w-5" />
          </a>
          <a href={site.etsyUrl} target="_blank" rel="noopener noreferrer" aria-label="Etsy" className="hover:text-[#0b565c] transition-colors">
            <EtsyIcon className="h-5 w-5" />
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden mt-2 p-2 text-[#2e1f14] hover:text-[#0b565c] transition-colors"
          onClick={onToggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Phone dropdown: absolute so it floats over the hero */}
      {menuOpen && (
        <div className="absolute top-full left-4 right-4 z-30 lg:hidden rounded-sm shadow-2xl overflow-hidden"
          style={{
            background: "rgba(234,219,197,0.72)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(234,219,197,0.4)",
          }}
        >
          <nav className="flex flex-col text-[#2e1f14]">
            {navLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={onCloseMenu}
                className="px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] border-b border-[#2e1f14]/10 hover:text-[#0b565c] transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="flex items-center gap-5 px-6 py-4">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#0b565c] hover:opacity-65 transition-opacity">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#0b565c] hover:opacity-65 transition-opacity">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href={site.etsyUrl} target="_blank" rel="noopener noreferrer" aria-label="Etsy" className="text-[#0b565c] hover:opacity-65 transition-opacity">
                <EtsyIcon className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
