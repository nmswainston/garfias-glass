import { FacebookIcon, InstagramIcon } from "../SocialBrandIcons";
import { galleryImages, galleryIntro } from "../data/gallery";
import { site } from "../data/site";

/** The "Follow Along" heading with social links, and the row of gallery pictures. */
export default function FollowAlong() {
  return (
    <section id="gallery" className="bg-[#eadbc5] px-8 py-12 scroll-mt-24">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
        <div className="shrink-0 lg:w-[210px]">
          <h2
            className="dancing text-5xl text-[#2e1f14]"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
          >
            {galleryIntro.heading}
          </h2>
          <p className="mt-3 text-[13px] leading-relaxed text-[#2e1f14]/75">
            {galleryIntro.blurb}
          </p>
          <div className="mt-4 flex gap-3 text-[#0b565c]">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-65 transition-opacity">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-65 transition-opacity">
              <FacebookIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-2 text-[12px] font-bold text-[#2e1f14]">{site.instagramHandle}</p>
        </div>
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-5 gap-y-5 lg:justify-between">
          {galleryImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="h-32 w-auto max-w-[46%] object-contain transition-transform duration-500 hover:scale-[1.025] sm:h-40 sm:max-w-none lg:h-44"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
