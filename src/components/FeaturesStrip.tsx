import { features } from "../data/home";
import { featureIcon } from "./FeatureIcons";

/** The teal strip of four promises. */
export default function FeaturesStrip() {
  return (
    <section className="bg-[#0b565c] reveal">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon, title, text }, i) => (
          <div
            key={title}
            className={`flex items-start gap-4 px-7 py-7 border-white/15 ${i < 3 ? "lg:border-r" : ""
              } ${i % 2 === 0 && i < 3 ? "md:border-r" : ""} border-b lg:border-b-0`}
          >
            <div className="mt-0.5 shrink-0">{featureIcon(icon)}</div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#eadbc5]">{title}</h3>
              <p className="mt-2 text-[12px] leading-relaxed text-[#eadbc5]/78">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
