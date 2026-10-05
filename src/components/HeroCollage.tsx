import { desktopCollage, phoneCollage } from "../data/collage";

/** The art pieces pictured over the hero: one arrangement for large screens, one for phones. */
export default function HeroCollage() {
  return (
    <>
      {/* Art showcase, desktop only */}
      <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none">
        <div className="relative h-full mx-auto max-w-7xl px-8">

          {/* Soft warm glow behind the cluster so pieces feel placed, not pasted */}
          <div className="absolute" style={{
            right: "-4%", top: "4%", width: "52%", height: "92%",
            background: "radial-gradient(ellipse at 60% 50%, rgba(234,219,197,0.22) 0%, rgba(234,219,197,0) 68%)",
          }} />

          {desktopCollage.map(({ src, alt, maxWidthClass, top, right, rotate, boxShadow, layer }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              className={`absolute h-auto w-auto ${maxWidthClass} max-h-[34vh]`}
              style={{
                top, right,
                transform: `rotate(${rotate}deg)`,
                border: "3px solid rgba(234,219,197,0.62)",
                borderRadius: "2px",
                boxShadow,
                zIndex: layer,
              }}
            />
          ))}
        </div>
      </div>

      {/* Art showcase, phones only */}
      <div className="absolute inset-x-0 bottom-[10%] z-10 flex lg:hidden justify-center items-end gap-2 px-4 pointer-events-none">
        {phoneCollage.map(({ src, alt, maxWidthClass, rotate, boxShadow }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            className={`h-auto w-auto ${maxWidthClass} max-h-[130px]`}
            style={{
              transform: `rotate(${rotate}deg)`,
              border: "2px solid rgba(234,219,197,0.62)",
              borderRadius: "2px",
              boxShadow,
            }}
          />
        ))}
      </div>
    </>
  );
}
