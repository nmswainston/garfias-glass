import { FacebookIcon, InstagramIcon, EtsyIcon } from "../SocialBrandIcons";
import { footer } from "../data/footer";
import { site } from "../data/site";
import Logo from "./Logo";

/** The dark footer: logo, studio links, social links and the email box. */
export default function Footer() {
  return (
    <footer id="contact" className="bg-[#2b1b10] px-8 py-12 text-[#eadbc5] scroll-mt-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <Logo variant="footer" />
          <p className="mt-5 text-[11px] leading-relaxed text-[#eadbc5]/50">
            {footer.copyright[0]}<br />{footer.copyright[1]}
          </p>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#eadbc5]">{footer.studioHeading}</h3>
          <ul className="mt-4 space-y-2.5 text-[13px] text-[#eadbc5]/65">
            {footer.studioLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-[#eadbc5] transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#eadbc5]">{footer.followHeading}</h3>
          <p className="mt-4 text-[13px] leading-relaxed text-[#eadbc5]/65">
            {footer.followBlurb}
          </p>
          <div className="mt-5 flex gap-4 text-[#eadbc5]/75">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#eadbc5] transition-colors">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={site.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#eadbc5] transition-colors">
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a href={site.etsyUrl} target="_blank" rel="noopener noreferrer" aria-label="Etsy" className="hover:text-[#eadbc5] transition-colors">
              <EtsyIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#eadbc5]">
            {footer.newsletterHeading}
          </h3>
          <p className="mt-4 text-[13px] leading-relaxed text-[#eadbc5]/65">
            {footer.newsletterBlurb}
          </p>
          <div className="mt-5 flex">
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              className="flex-1 min-w-0 bg-[#1d1009] border border-[#3e2b1c] px-4 py-3 text-[13px] text-[#eadbc5] placeholder:text-[#eadbc5]/35 focus:outline-none focus:border-[#0b565c]"
            />
            <button
              type="button"
              className="bg-[#0b565c] px-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#eadbc5] hover:bg-[#084d53] transition-colors"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
