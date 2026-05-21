import { useState, useEffect } from "react";
import { ArrowUp, Heart, ChevronDown, Truck, Menu, X } from "lucide-react";
import { FacebookIcon, InstagramIcon, EtsyIcon } from "./SocialBrandIcons";

// ─── Constants ────────────────────────────────────────────────────────────────

const ETSY = "https://www.etsy.com/shop/RMglassandcopper";
const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Shop", href: ETSY, external: true },
  { label: "About", href: "#about" },
  { label: "Custom Orders", href: ETSY, external: true },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  { title: "Suncatchers", image: "/bee-flower1.jpg" },
  { title: "Arizona Pieces", image: "/az-flag.jpg" },
  { title: "Dragonflies", image: "/dragonfly2.jpg" },
  { title: "Garden Art", image: "/plank1.jpg" },
  { title: "Statement Panels", image: "/tropical-scene.jpg" },
  { title: "Coastal Panels", image: "/lighthouse1.jpg" },
];

const galleryImages = [
  { src: "/az-flag.jpg", alt: "Arizona flag stained glass panel" },
  { src: "/bee-flower1.jpg", alt: "Bee and flower stained glass suncatcher" },
  { src: "/dragonfly2.jpg", alt: "Dragonfly glass suncatcher at sunset" },
  { src: "/plank1.jpg", alt: "Wood and stained glass garden art" },
  { src: "/lighthouse1.jpg", alt: "Lighthouse stained glass panel" },
  { src: "/tropical-scene.jpg", alt: "Tropical bird stained glass panel" },
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sticky header: appears after scrolling ~75% of the hero
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
      setShowScrollTop(window.scrollY > window.innerHeight * 0.65);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal: fade+rise sections as they enter the viewport
  useEffect(() => {
    const revealOnScroll = () => {
      document.querySelectorAll<HTMLElement>(".reveal:not(.revealed)").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add("revealed");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll, { passive: true });
    revealOnScroll(); // check immediately on mount
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  // Keep hash links reliable after React renders the section targets
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400;1,700&family=Dancing+Script:wght@700&family=Pinyon+Script&display=swap');
        .pinyon { font-family: 'Pinyon Script', cursive; }
        /* Scroll-reveal */
        .reveal { opacity: 0; transform: translateY(32px); transition: opacity 0.75s ease, transform 0.75s ease; }
        .revealed { opacity: 1; transform: translateY(0); }
        /* Sticky header slide-down */
        @keyframes slideDown { from { opacity: 0; transform: translateY(-100%); } to { opacity: 1; transform: translateY(0); } }
        .sticky-nav { animation: slideDown 0.35s ease forwards; }
      `}</style>

      <main className="min-h-screen bg-[#eadbc5] text-[#2e1f14]">

        {/* ── Sticky header — slides in after scrolling past the hero ── */}
        {scrolled && (
          <div className="sticky-nav fixed top-0 left-0 right-0 z-50 border-b border-[#2e1f14]/10"
            style={{ background: "rgba(234,219,197,0.94)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}
          >
            <div className="relative mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-8 py-2">
              <img src="/logo.png" alt="Garfias Mountain Glass Art" className="h-[52px] sm:h-[60px] w-auto" />
              <nav className="hidden items-center gap-6 text-[11px] font-bold uppercase tracking-[0.12em] text-[#2e1f14] lg:flex">
                {NAV_LINKS.map(({ label, href, external }) => (
                  <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                    className="hover:text-[#0b565c] transition-colors">{label}</a>
                ))}
                <span className="h-5 w-px bg-[#2e1f14]/25" />
                <a href="https://www.instagram.com/garfiasmountainglassart" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#0b565c] transition-colors"><InstagramIcon className="h-4 w-4" /></a>
                <a href="https://www.facebook.com/garfiasranchglassart" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#0b565c] transition-colors"><FacebookIcon className="h-4 w-4" /></a>
                <a href={ETSY} target="_blank" rel="noopener noreferrer" aria-label="Etsy" className="hover:text-[#0b565c] transition-colors"><EtsyIcon className="h-4 w-4" /></a>
              </nav>
              <button className="lg:hidden p-1.5 text-[#2e1f14] hover:text-[#0b565c] transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
            {menuOpen && (
              <div className="lg:hidden border-t border-[#2e1f14]/10">
                <nav className="flex flex-col text-[#2e1f14]">
                  {NAV_LINKS.map(({ label, href, external }) => (
                    <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className="px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] border-b border-[#2e1f14]/10 hover:text-[#0b565c] transition-colors">{label}</a>
                  ))}
                  <div className="flex items-center gap-5 px-6 py-4">
                    <a href="https://www.instagram.com/garfiasmountainglassart" target="_blank" rel="noopener noreferrer" className="text-[#0b565c] hover:opacity-65 transition-opacity"><InstagramIcon className="h-5 w-5" /></a>
                    <a href="https://www.facebook.com/garfiasranchglassart" target="_blank" rel="noopener noreferrer" className="text-[#0b565c] hover:opacity-65 transition-opacity"><FacebookIcon className="h-5 w-5" /></a>
                    <a href={ETSY} target="_blank" rel="noopener noreferrer" className="text-[#0b565c] hover:opacity-65 transition-opacity"><EtsyIcon className="h-5 w-5" /></a>
                  </div>
                </nav>
              </div>
            )}
          </div>
        )}

        {/* Announcement bar */}
        <div className="bg-[#0b565c] py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-[#eadbc5]">
          &#10022; &nbsp;Handmade Stained Glass Art Inspired by the Land We Love&nbsp; &#10022;
        </div>

        {/* Hero */}
        <section
          className="relative overflow-hidden min-h-[calc(100svh-38px)]"
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

          {/* Art showcase – desktop only */}
          <div className="absolute inset-0 z-10 hidden lg:block pointer-events-none">
            <div className="relative h-full mx-auto max-w-7xl px-8">

              {/* Soft warm glow behind the cluster so pieces feel placed, not pasted */}
              <div className="absolute" style={{
                right: "-4%", top: "4%", width: "52%", height: "92%",
                background: "radial-gradient(ellipse at 60% 50%, rgba(234,219,197,0.22) 0%, rgba(234,219,197,0) 68%)",
              }} />

              {/* Desert cactus piece, kept as the Arizona anchor */}
              <img
                src="/Art1.avif"
                alt="Desert cactus stained glass"
                className="absolute w-[150px] xl:w-[172px]"
                style={{
                  top: "18%", right: "29%",
                  transform: "rotate(-4.5deg)",
                  border: "3px solid rgba(234,219,197,0.62)",
                  borderRadius: "2px",
                  boxShadow: "0 18px 50px rgba(0,0,0,0.34)",
                  zIndex: 1,
                }}
              />

              {/* Tropical scene, largest feature piece */}
              <img
                src="/tropical-scene.jpg"
                alt="Stained glass tropical bird scene"
                className="absolute w-[220px] xl:w-[258px]"
                style={{
                  top: "34%", right: "8%",
                  transform: "rotate(2deg)",
                  border: "3px solid rgba(234,219,197,0.62)",
                  borderRadius: "2px",
                  boxShadow: "0 22px 60px rgba(0,0,0,0.38)",
                  zIndex: 3,
                }}
              />

              {/* Lighthouse panel, lower supporting piece */}
              <img
                src="/lighthouse1.jpg"
                alt="Stained glass lighthouse panel"
                className="absolute w-[160px] xl:w-[184px]"
                style={{
                  top: "64%", right: "26%",
                  transform: "rotate(-2deg)",
                  border: "3px solid rgba(234,219,197,0.62)",
                  borderRadius: "2px",
                  boxShadow: "0 18px 50px rgba(0,0,0,0.34)",
                  zIndex: 2,
                }}
              />
            </div>
          </div>

          {/* Art showcase – mobile only */}
          <div className="absolute inset-x-0 bottom-[10%] z-10 flex lg:hidden justify-center items-end gap-2 px-4 pointer-events-none">
            <img
              src="/lighthouse1.jpg"
              alt="Stained glass lighthouse panel"
              className="w-[78px]"
              style={{
                transform: "rotate(-3deg)",
                border: "2px solid rgba(234,219,197,0.62)",
                borderRadius: "2px",
                boxShadow: "0 10px 28px rgba(0,0,0,0.36)",
              }}
            />
            <img
              src="/tropical-scene.jpg"
              alt="Stained glass tropical bird scene"
              className="w-[102px]"
              style={{
                transform: "rotate(1.5deg)",
                border: "2px solid rgba(234,219,197,0.62)",
                borderRadius: "2px",
                boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
              }}
            />
            <img
              src="/Art1.avif"
              alt="Desert cactus stained glass"
              className="w-[78px]"
              style={{
                transform: "rotate(-2deg)",
                border: "2px solid rgba(234,219,197,0.62)",
                borderRadius: "2px",
                boxShadow: "0 10px 28px rgba(0,0,0,0.36)",
              }}
            />
          </div>

          {/* Header / Nav — wrapped in relative so dropdown overlays hero */}
          <div className="relative z-20">
            <header className="mx-auto flex max-w-7xl items-start justify-between px-4 sm:px-8 pt-5 sm:pt-8">
              <Logo variant="header" />

              {/* Desktop nav */}
              <nav className="hidden items-center gap-7 pt-6 text-[12px] font-bold uppercase tracking-[0.12em] text-[#2e1f14] lg:flex">
                <a href="#" aria-current="page" className="border-b-2 border-[#0b565c] pb-0.5 text-[#0b565c]">Home</a>
                <a href="https://www.etsy.com/shop/RMglassandcopper" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#0b565c] transition-colors">
                  Shop <ChevronDown className="h-3 w-3" />
                </a>
                <a href="#about" className="hover:text-[#0b565c] transition-colors">About</a>
                <a href="https://www.etsy.com/shop/RMglassandcopper" target="_blank" rel="noopener noreferrer" className="hover:text-[#0b565c] transition-colors">Custom Orders</a>
                <a href="#gallery" className="hover:text-[#0b565c] transition-colors">Gallery</a>
                <a href="#contact" className="hover:text-[#0b565c] transition-colors">Contact</a>
                <span className="h-7 w-px bg-[#2e1f14]/25" />
                <a href="https://www.instagram.com/garfiasmountainglassart" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#0b565c] transition-colors">
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/garfiasranchglassart" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#0b565c] transition-colors">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="https://www.etsy.com/shop/RMglassandcopper" target="_blank" rel="noopener noreferrer" aria-label="Etsy" className="hover:text-[#0b565c] transition-colors">
                  <EtsyIcon className="h-5 w-5" />
                </a>
              </nav>

              {/* Mobile hamburger */}
              <button
                className="lg:hidden mt-2 p-2 text-[#2e1f14] hover:text-[#0b565c] transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </header>

            {/* Mobile dropdown — absolute so it floats over the hero */}
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
                  {[
                    { label: "Home", href: "#" },
                    { label: "Shop", href: "https://www.etsy.com/shop/RMglassandcopper", external: true },
                    { label: "About", href: "#about" },
                    { label: "Custom Orders", href: "https://www.etsy.com/shop/RMglassandcopper", external: true },
                    { label: "Gallery", href: "#gallery" },
                    { label: "Contact", href: "#contact" },
                  ].map(({ label, href, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className="px-6 py-3.5 text-[12px] font-bold uppercase tracking-[0.18em] border-b border-[#2e1f14]/10 hover:text-[#0b565c] transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                  <div className="flex items-center gap-5 px-6 py-4">
                    <a href="https://www.instagram.com/garfiasmountainglassart" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#0b565c] hover:opacity-65 transition-opacity">
                      <InstagramIcon className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com/garfiasranchglassart" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#0b565c] hover:opacity-65 transition-opacity">
                      <FacebookIcon className="h-5 w-5" />
                    </a>
                    <a href="https://www.etsy.com/shop/RMglassandcopper" target="_blank" rel="noopener noreferrer" aria-label="Etsy" className="text-[#0b565c] hover:opacity-65 transition-opacity">
                      <EtsyIcon className="h-5 w-5" />
                    </a>
                  </div>
                </nav>
              </div>
            )}
          </div>

          {/* Hero text */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pb-4 sm:pb-16 lg:pb-20 pt-0 sm:pt-2">
            <div className="max-w-[620px] pt-3 sm:pt-4 lg:pt-6">
              <h1 className="pinyon text-[52px] sm:text-[68px] lg:text-[84px] leading-[1.1] tracking-[0.01em]">
                Where light<br />
                <span className="text-[#0b565c]">becomes art</span>
              </h1>
              <Diamond className="mt-4 sm:mt-6 text-[#0b565c]" />
              <p className="mt-4 sm:mt-5 max-w-[300px] text-[14px] sm:text-[16px] leading-relaxed">
                30 years of stained glass, copper & color. Handmade in the Arizona desert.
              </p>
              <a href="https://www.etsy.com/shop/RMglassandcopper" target="_blank" rel="noopener noreferrer"
                className="mt-5 sm:mt-8 inline-flex items-center gap-3 bg-[#0b565c] px-6 sm:px-7 py-3 sm:py-4 playfair text-[11px] font-bold uppercase tracking-[0.2em] text-[#eadbc5] hover:bg-[#084d53] transition-colors"
              >
                Shop the Collection <span className="ml-1">&#8594;</span>
              </a>
            </div>
          </div>
        
      </section>

      {/* Made by Hand 3-col */}
      <section className="grid grid-cols-1 lg:grid-cols-3 reveal">
        <img
          className="h-[360px] w-full object-cover"
          src="/shop1.jpg"
          alt="Sheets of stained glass organized in the studio"
        />
        <div className="flex h-[360px] flex-col items-center justify-center bg-[#eadbc5] px-10 text-center">
          <SunRays />
          <h2 className="playfair mt-3 text-[26px] font-black uppercase tracking-[0.04em]">Made by Hand.</h2>
          <p className="playfair mt-0.5 text-[22px] italic text-[#0b565c]">Inspired by home.</p>
          <Diamond className="mt-4 mb-4 text-[#2e1f14]" />
          <p className="text-[13px] leading-relaxed max-w-[210px]">
            Every piece is individually designed and handcrafted in our ranch studio in Arizona.
          </p>
          <a
            href="#about"
            className="mt-5 border border-[#2e1f14]/45 px-9 py-2.5 playfair text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#2e1f14]/5 transition-colors"
          >
            Our Story
          </a>
        </div>
        <img
          className="h-[360px] w-full object-cover"
          src="/shop2.jpg"
          alt="Garfias Mountain Glass Art studio workspace"
        />
      </section>

      {/* About Ronda */}
      <section id="about" className="bg-[#f2e5d2] px-8 py-16 scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#0b565c]">Meet the Artist</p>
            <h2 className="playfair mt-3 text-[38px] font-black leading-tight text-[#2e1f14] sm:text-[46px]">
              Ronda Myers
            </h2>
            <p className="playfair mt-2 text-[22px] italic text-[#0b565c]">
              Garfias Mountain Glass Art
            </p>
            <Diamond className="mt-5 text-[#2e1f14]" />
          </div>
          <div className="space-y-4 text-[15px] leading-7 text-[#2e1f14]/82">
            <p>
              Ronda Myers has loved stained glass since childhood. Growing up in the Midwest, she was mesmerized by the stained glass windows in the Victorian homes around her hometown, drawn to their color, design, and the feeling they created when sunlight moved through them.
            </p>
            <p>
              Even then, she wanted to know how those windows were made. Years later, after moving to Arizona, she found a stained glass course through a local city art program and finally had the chance to learn the craft herself.
            </p>
            <p>
              With guidance from an experienced and encouraging instructor, Ronda learned the foundations of stained glass window making and kept going. More than 30 years later, she still designs, cuts, solders, and finishes each piece by hand from her Arizona studio.
            </p>
            <p>
              She has also started creating copper and glass windchimes, made to bring color, light, and sound outdoors. Each one is built with glass beads, crystals, copper, and brass bells so it can stand up to weather and wind while keeping a delicate look.
            </p>
            <p>
              Garfias Mountain Glass Art is her way of sharing that lifelong love of glass with others. She hopes each piece brings as much joy to its new home as she had while making it.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href={ETSY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0b565c] px-6 py-3 playfair text-[11px] font-bold uppercase tracking-[0.18em] text-[#eadbc5] hover:bg-[#084d53] transition-colors"
              >
                Shop Available Pieces
              </a>
              <a
                href={ETSY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#2e1f14]/45 px-6 py-3 playfair text-[11px] font-bold uppercase tracking-[0.18em] text-[#2e1f14] hover:bg-[#2e1f14]/5 transition-colors"
              >
                Ask About Custom Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="bg-[#eadbc5] px-8 py-12 reveal">
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
                href="https://www.etsy.com/shop/RMglassandcopper"
                target="_blank"
                rel="noopener noreferrer"
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
      <section className="bg-[#0b565c] reveal">
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
      <section id="gallery" className="bg-[#eadbc5] px-8 py-12 scroll-mt-24">
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
              <a href="https://www.instagram.com/garfiasmountainglassart" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-65 transition-opacity">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/garfiasranchglassart" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-65 transition-opacity">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-2 text-[12px] font-bold text-[#2e1f14]">@garfiasranchglassart</p>
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

      {/* Footer */}
      <footer id="contact" className="bg-[#2b1b10] px-8 py-12 text-[#eadbc5] scroll-mt-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Logo variant="footer" />
            <p className="mt-5 text-[11px] leading-relaxed text-[#eadbc5]/50">
              &copy; 2025 Garfias Mountain Glass Art.<br />All Rights Reserved.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#eadbc5]">Shop & Studio</h3>
            <ul className="mt-4 space-y-2.5 text-[13px] text-[#eadbc5]/65">
              {[
                { label: "Shop on Etsy", href: ETSY },
                { label: "Ask About Custom Work", href: ETSY },
                { label: "About Ronda", href: "#about" },
                { label: "View Gallery", href: "#gallery" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="hover:text-[#eadbc5] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#eadbc5]">Follow</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-[#eadbc5]/65">
              See new pieces, studio updates, and works in progress.
            </p>
            <div className="mt-5 flex gap-4 text-[#eadbc5]/75">
              <a href="https://www.instagram.com/garfiasmountainglassart" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#eadbc5] transition-colors">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/garfiasranchglassart" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#eadbc5] transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href={ETSY} target="_blank" rel="noopener noreferrer" aria-label="Etsy" className="hover:text-[#eadbc5] transition-colors">
                <EtsyIcon className="h-5 w-5" />
              </a>
            </div>
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

      {showScrollTop && (
        <button
          type="button"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center bg-[#0b565c] text-[#eadbc5] shadow-xl transition-colors hover:bg-[#084d53] focus:outline-none focus:ring-2 focus:ring-[#eadbc5] focus:ring-offset-2 focus:ring-offset-[#2b1b10]"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={1.8} />
        </button>
      )}

    </main >
    </>
  );
}
