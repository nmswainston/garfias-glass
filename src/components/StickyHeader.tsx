import { Menu, X } from "lucide-react";
import { FacebookIcon, InstagramIcon, EtsyIcon } from "../SocialBrandIcons";
import { navLinks } from "../data/nav";
import { site } from "../data/site";

type Props = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

/** The slim menu bar that slides down once the visitor scrolls past the hero. */
export default function StickyHeader({ menuOpen, onToggleMenu, onCloseMenu }: Props) {
  return (
    <div className="sticky-nav fixed top-0 left-0 right-0 z-50 border-b border-[#2e1f14]/10"
      style={{ background: "rgba(234,219,197,0.94)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
    >
      <div className="relative mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-8 py-2">
        <img src={site.logoHeader} alt={site.name} className="h-[52px] sm:h-[60px] w-auto" />
        <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e1f14] lg:flex">
          {navLinks.map(({ label, href, external }) => (
            <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
              className="hover:text-[#0b565c] transition-colors">{label}</a>
          ))}
          <span className="h-5 w-px bg-[#2e1f14]/25" />
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#0b565c] transition-colors"><InstagramIcon className="h-4 w-4" /></a>
          <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#0b565c] transition-colors"><FacebookIcon className="h-4 w-4" /></a>
          <a href={site.etsyUrl} target="_blank" rel="noopener noreferrer" aria-label="Etsy" className="hover:text-[#0b565c] transition-colors"><EtsyIcon className="h-4 w-4" /></a>
        </nav>
        <button className="lg:hidden p-1.5 text-[#2e1f14] hover:text-[#0b565c] transition-colors" onClick={onToggleMenu} aria-label="Toggle menu">
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-[#2e1f14]/10">
          <nav className="flex flex-col text-[#2e1f14]">
            {navLinks.map(({ label, href, external }) => (
              <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                onClick={onCloseMenu}
                className="px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] border-b border-[#2e1f14]/10 hover:text-[#0b565c] transition-colors">{label}</a>
            ))}
            <div className="flex items-center gap-5 px-6 py-4">
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#0b565c] hover:opacity-65 transition-opacity"><InstagramIcon className="h-5 w-5" /></a>
              <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-[#0b565c] hover:opacity-65 transition-opacity"><FacebookIcon className="h-5 w-5" /></a>
              <a href={site.etsyUrl} target="_blank" rel="noopener noreferrer" className="text-[#0b565c] hover:opacity-65 transition-opacity"><EtsyIcon className="h-5 w-5" /></a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
