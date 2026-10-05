import { about } from "../data/home";
import { site } from "../data/site";
import { Diamond } from "./Ornaments";

/** "Meet the Artist": the story of Ronda and the two shop buttons. */
export default function About() {
  return (
    <section id="about" className="bg-[#f2e5d2] px-8 py-16 scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#0b565c]">{about.eyebrow}</p>
          <h2 className="playfair mt-3 text-[38px] font-black leading-tight text-[#2e1f14] sm:text-[46px]">
            {about.name}
          </h2>
          <p className="playfair mt-2 text-[22px] italic text-[#0b565c]">
            {about.tagline}
          </p>
          <Diamond className="mt-5 text-[#2e1f14]" />
        </div>
        <div className="space-y-4 text-[15px] leading-7 text-[#2e1f14]/82">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              {paragraph}
            </p>
          ))}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#0b565c] px-6 py-3 playfair text-[11px] font-bold uppercase tracking-[0.18em] text-[#eadbc5] hover:bg-[#084d53] transition-colors"
            >
              {about.shopButtonLabel}
            </a>
            <a
              href={site.etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#2e1f14]/45 px-6 py-3 playfair text-[11px] font-bold uppercase tracking-[0.18em] text-[#2e1f14] hover:bg-[#2e1f14]/5 transition-colors"
            >
              {about.customButtonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
