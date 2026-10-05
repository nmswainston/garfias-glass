import { madeByHand } from "../data/home";
import { Diamond, SunRays } from "./Ornaments";

/** The three-column strip under the hero: picture, short text, picture. */
export default function MadeByHand() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 reveal">
      <img
        className="h-[360px] w-full object-cover"
        src={madeByHand.leftImage.src}
        alt={madeByHand.leftImage.alt}
      />
      <div className="flex h-[360px] flex-col items-center justify-center bg-[#eadbc5] px-10 text-center">
        <SunRays />
        <h2 className="playfair mt-3 text-[26px] font-black uppercase tracking-[0.04em]">{madeByHand.heading}</h2>
        <p className="playfair mt-0.5 text-[22px] italic text-[#0b565c]">{madeByHand.subheading}</p>
        <Diamond className="mt-4 mb-4 text-[#2e1f14]" />
        <p className="text-[13px] leading-relaxed max-w-[210px]">
          {madeByHand.text}
        </p>
        <a
          href="#about"
          className="mt-5 border border-[#2e1f14]/45 px-9 py-2.5 playfair text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#2e1f14]/5 transition-colors"
        >
          {madeByHand.buttonLabel}
        </a>
      </div>
      <img
        className="h-[360px] w-full object-cover"
        src={madeByHand.rightImage.src}
        alt={madeByHand.rightImage.alt}
      />
    </section>
  );
}
