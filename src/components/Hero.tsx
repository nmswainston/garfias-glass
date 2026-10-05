import { hero } from "../data/home";
import { site } from "../data/site";
import { Diamond } from "./Ornaments";
import HeroCollage from "./HeroCollage";
import HeroHeader from "./HeroHeader";

type Props = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

/** The big opening section: background, art collage, menu and headline. */
export default function Hero({ menuOpen, onToggleMenu, onCloseMenu }: Props) {
  return (
    <section
      className="relative overflow-hidden min-h-[calc(100svh-38px)]"
      style={{
        backgroundImage: `url('${hero.backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg,rgba(234,219,197,.97) 0%,rgba(234,219,197,.88) 32%,rgba(234,219,197,.55) 56%,rgba(234,219,197,.08) 100%)"
      }} />

      <HeroCollage />

      <HeroHeader menuOpen={menuOpen} onToggleMenu={onToggleMenu} onCloseMenu={onCloseMenu} />

      {/* Hero text */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pb-4 sm:pb-16 lg:pb-20 pt-0 sm:pt-2">
        <div className="max-w-[620px] pt-3 sm:pt-4 lg:pt-6">
          <h1 className="pinyon text-[52px] sm:text-[68px] lg:text-[84px] leading-[1.1] tracking-[0.01em]">
            {hero.headline[0]}<br />
            <span className="text-[#0b565c]">{hero.headline[1]}</span>
          </h1>
          <Diamond className="mt-4 sm:mt-6 text-[#0b565c]" />
          <p className="mt-4 sm:mt-5 max-w-[300px] text-[14px] sm:text-[16px] leading-relaxed">
            {hero.subline}
          </p>
          <a href={site.etsyUrl} target="_blank" rel="noopener noreferrer"
            className="mt-5 sm:mt-8 inline-flex items-center gap-3 bg-[#0b565c] px-6 sm:px-7 py-3 sm:py-4 playfair text-[11px] font-bold uppercase tracking-[0.2em] text-[#eadbc5] hover:bg-[#084d53] transition-colors"
          >
            {`${hero.buttonLabel} `}<span className="ml-1">&#8594;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
