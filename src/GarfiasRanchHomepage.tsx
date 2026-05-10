import { Heart, Search, ShoppingBag, ChevronDown, Truck } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialBrandIcons";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  { title: "Suncatchers", image: "https://images.unsplash.com/photo-1541411438265-4cb4687110f2?auto=format&fit=crop&w=700&q=80" },
  { title: "Desert Scenes", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=700&q=80" },
  { title: "Crosses & Faith", image: "https://images.unsplash.com/photo-1602524206684-995f1d22876b?auto=format&fit=crop&w=700&q=80" },
  { title: "Seasonal", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80" },
  { title: "Abstract", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=700&q=80" },
  { title: "Evil Eye", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=700&q=80" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80",
];

// ─── Logo (image-based) ───────────────────────────────────────────────────────
// Put New_Logo.png into your project's /public folder and rename it logo.png

function Logo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const isFooter = variant === "footer";
  return (
    <img
      src={isFooter ? "/circle-logo.png" : "/logo.png"}
      alt="Garfias Mountain Glass Art"
      className={isFooter ? "h-36 w-auto" : "h-[110px] sm:h-[165px] lg:h-[240px] w-auto"}
    />
  );
}


// ─── Sun Rays Icon ────────────────────────────────────────────────────────────

function SunRays() {
  return (
    <svg viewBox="0 0 58 36" width="54" height="33" fill="none" aria-hidden className="text-[#0b565c]">
      <path d="M3,34 A26,26 0 0,1 55,34" stroke="currentColor" strokeWidth="2" />
      <line x1="29" y1="10" x2="29" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="13" x2="13" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="13" x2="45" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="23" x2="2" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="23" x2="56" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// ─── Diamond divider ──────────────────────────────────────────────────────────

function Diamond({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="h-px w-9 bg-current opacity-40" />
      <span className="text-[9px] opacity-60">&#9670;</span>
      <span className="h-px w-9 bg-current opacity-40" />
    </div>
  );
}

// ─── Feature icons ────────────────────────────────────────────────────────────

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

// ─── Main Component ────────────────────────────────────────────────────────────

export default function GarfiasRanchHomepage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Dancing+Script:wght@700&family=Pinyon+Script&display=swap');
        .pinyon { font-family: 'Pinyon Script', cursive; }
      `}</style>

      <main className="min-h-screen bg-[#eadbc5] text-[#2e1f14]">

        {/* Announcement bar */}
        <div className="bg-[#0b565c] py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-[#eadbc5]">
          &#10022; &nbsp;Handmade Stained Glass Art Inspired by the Land We Love&nbsp; &#10022;
        </div>

        {/* Hero */}
        <section
          className="relative overflow-hidden min-h-[480px] sm:min-h-[620px] lg:min-h-[780px]"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(90deg,rgba(234,219,197,.97) 0%,rgba(234,219,197,.88) 32%,rgba(234,219,197,.55) 56%,rgba(234,219,197,.08) 100%)"
          }} />


          {/* Header / Nav */}
          <header className="relative z-20 mx-auto flex max-w-7xl items-start justify-between px-4 sm:px-8 pt-5 sm:pt-8">
            <Logo variant="header" />
            <nav className="hidden items-center gap-7 pt-6 text-[12px] font-bold uppercase tracking-[0.12em] text-[#2e1f14] lg:flex">
              <a href="#" aria-current="page" className="border-b-2 border-[#0b565c] pb-0.5 text-[#0b565c]">Home</a>
              <a href="#" className="flex items-center gap-1 hover:text-[#0b565c] transition-colors">
                Shop <ChevronDown className="h-3 w-3" />
              </a>
              <a href="#" className="hover:text-[#0b565c] transition-colors">About</a>
              <a href="#" className="hover:text-[#0b565c] transition-colors">Custom Orders</a>
              <a href="#" className="hover:text-[#0b565c] transition-colors">Galleries</a>
              <a href="#" className="hover:text-[#0b565c] transition-colors">Contact</a>
              <span className="h-7 w-px bg-[#2e1f14]/25" />
              <Search className="h-5 w-5 cursor-pointer hover:text-[#0b565c] transition-colors" />
              <ShoppingBag className="h-5 w-5 cursor-pointer hover:text-[#0b565c] transition-colors" />
            </nav>
          </header>

          {/* Hero text */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pb-10 sm:pb-16 lg:pb-20 pt-0 sm:pt-2">
            <div className="max-w-[620px] pt-3 sm:pt-4 lg:pt-6">
              <h1 className="pinyon text-[52px] sm:text-[68px] lg:text-[84px] leading-[1.1] tracking-[0.01em]">
                Where light<br />
                <span className="text-[#0b565c]">becomes art</span>
              </h1>
              <Diamond className="mt-4 sm:mt-6 text-[#0b565c]" />
              <p className="mt-4 sm:mt-5 max-w-[300px] text-[14px] sm:text-[16px] leading-relaxed">
                30 years of stained glass, copper & color. Handmade in the Arizona desert.
              </p>
              <a href="#"
                className="mt-5 sm:mt-8 inline-flex items-center gap-3 bg-[#0b565c] px-6 sm:px-7 py-3 sm:py-4 playfair text-[11px] font-bold uppercase tracking-[0.2em] text-[#eadbc5] hover:bg-[#084d53] transition-colors"
              >
                Shop the Collection <span className="ml-1">&#8594;</span>
              </a>
            </div>
          </div>
        
      </section>

      {/* Made by Hand 3-col */}
      <section className="grid grid-cols-1 lg:grid-cols-3">
        <img
          className="h-[360px] w-full object-cover"
          src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=90"
          alt="Arizona desert at sunset"
        />
        <div className="flex h-[360px] flex-col items-center justify-center bg-[#eadbc5] px-10 text-center">
          <SunRays />
          <h2 className="playfair mt-3 text-[26px] font-black uppercase tracking-[0.04em]">Made by Hand.</h2>
          <p className="playfair mt-0.5 text-[22px] italic text-[#0b565c]">Inspired by home.</p>
          <Diamond className="mt-4 mb-4 text-[#2e1f14]" />
          <p className="text-[13px] leading-relaxed max-w-[210px]">
            Every piece is individually designed and handcrafted in our ranch studio in Arizona.
          </p>
          <button
            type="button"
            className="mt-5 border border-[#2e1f14]/45 px-9 py-2.5 playfair text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#2e1f14]/5 transition-colors"
          >
            Our Story
          </button>
        </div>
        <img
          className="h-[360px] w-full object-cover"
          src="https://images.unsplash.com/photo-1507041957456-9c397ce39c97?auto=format&fit=crop&w=1200&q=90"
          alt="Artist working on stained glass"
        />
      </section>

      {/* Shop by Category */}
      <section className="bg-[#eadbc5] px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-center gap-4 text-[#2e1f14]">
            <div className="flex items-center gap-2.5">
              <span className="text-sm font-bold">&#8594;</span>
              <span className="h-px w-14 bg-[#2e1f14]/55" />
            </div>
            <h2 className="playfair text-[17px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
              Shop by Category
            </h2>
            <div className="flex items-center gap-2.5">
              <span className="h-px w-14 bg-[#2e1f14]/55" />
              <span className="text-sm font-bold">&#8592;</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-6 bg-[#2e1f14]/15">
            {categories.map((cat) => (
              <a
                key={cat.title}
                href="#"
                className="group block overflow-hidden bg-[#eadbc5] shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div
                  className="bg-[#0b565c] py-3 text-center font-bold uppercase tracking-[0.15em] text-[#eadbc5]"
                  style={{ fontSize: "10px" }}
                >
                  {cat.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="bg-[#0b565c]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {([
            {
              icon: <CactusIcon className="text-[#eadbc5]/80" />,
              title: "Made by Hand",
              text: "Each piece is cut, soldered and crafted with care in our Arizona studio.",
            },
            {
              icon: <SunriseIcon className="text-[#eadbc5]/80" />,
              title: "Inspired by Nature",
              text: "The colors, textures and landscapes of the Southwest inspire every piece.",
            },
            {
              icon: <Heart className="h-8 w-8 text-[#eadbc5]/80" strokeWidth={1.4} />,
              title: "Made to Last",
              text: "Quality glass and materials that stand the test of time.",
            },
            {
              icon: <Truck className="h-8 w-8 text-[#eadbc5]/80" strokeWidth={1.4} />,
              title: "Shipped with Care",
              text: "Thoughtful packaging to ensure your art arrives safely.",
            },
          ] as Array<{ icon: ReturnType<typeof CactusIcon>; title: string; text: string }>).map(({ icon, title, text }, i) => (
            <div
              key={title}
              className={`flex items-start gap-4 px-7 py-7 border-white/15 ${i < 3 ? "lg:border-r" : ""
                } ${i % 2 === 0 && i < 3 ? "md:border-r" : ""} border-b lg:border-b-0`}
            >
              <div className="mt-0.5 shrink-0">{icon}</div>
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#eadbc5]">{title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-[#eadbc5]/78">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Follow Along */}
      <section className="bg-[#eadbc5] px-8 py-10">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
          <div className="shrink-0 lg:w-[210px]">
            <h2
              className="dancing text-5xl text-[#2e1f14]"
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
            >
              Follow Along
            </h2>
            <p className="mt-3 text-[13px] leading-relaxed text-[#2e1f14]/75">
              See new pieces, behind the scenes and ranch life.
            </p>
            <div className="mt-4 flex gap-3 text-[#0b565c]">
              <a href="#" aria-label="Instagram" className="hover:opacity-65 transition-opacity">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:opacity-65 transition-opacity">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-2 text-[12px] font-bold text-[#2e1f14]">@garfiasranchglassart</p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2 md:grid-cols-4">
            {galleryImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Gallery"
                className="h-44 w-full object-cover hover:opacity-90 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2b1b10] px-8 py-12 text-[#eadbc5]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-5 text-[11px] leading-relaxed text-[#eadbc5]/50">
              &copy; 2024 Garfias Ranch Stained Glass Art.<br />All Rights Reserved.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#eadbc5]">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-[#eadbc5]/65">
              {["Shop", "About", "Custom Orders", "Galleries", "Contact"].map((link) => (
                <li key={link}><a href="#" className="hover:text-[#eadbc5] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#eadbc5]">Info</h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-[#eadbc5]/65">
              {["Shipping & Policies", "Care Instructions", "Returns", "FAQ"].map((link) => (
                <li key={link}><a href="#" className="hover:text-[#eadbc5] transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#eadbc5]">
              Let&apos;s Stay in Touch
            </h3>
            <p className="mt-4 text-[13px] leading-relaxed text-[#eadbc5]/65">
              Join our email list for studio updates, new pieces and shows.
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

    </main >
    </>
  );
}
