import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import {
  ChevronDown,
  Clock,
  Github,
  Instagram,
  Loader2,
  Map as MapIcon,
  Menu,
  Play,
  Shield,
  Star,
  Target,
  Twitter,
  Users,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { Suspense, lazy, useEffect, useState } from "react";
import { RevealSection } from "./components/RevealSection";

/* ─────────────────────────────────────────────────────────────────────────── */
/*  LAZY BELOW-FOLD SECTIONS — reduces initial JS parse time                   */
/* ─────────────────────────────────────────────────────────────────────────── */
const MechanicsSection = lazy(() => import("./sections/MechanicsSection"));
const CharactersSection = lazy(() => import("./sections/CharactersSection"));
const TechSection = lazy(() => import("./sections/TechSection"));
const EvolutionPassSection = lazy(
  () => import("./sections/EvolutionPassSection"),
);
const AppStoreBlock = lazy(() => import("./sections/AppStoreBlock"));
const PreRegisterSection = lazy(() => import("./sections/PreRegisterSection"));

const SectionFallback = () => (
  <div className="section-loading" aria-hidden="true">
    <Loader2
      className="w-6 h-6 animate-spin"
      style={{ color: "oklch(0.82 0.18 196 / 0.4)" }}
    />
  </div>
);

/* ─────────────────────────────────────────────────────────────────────────── */
/*  UTILS                                                                       */
/* ─────────────────────────────────────────────────────────────────────────── */
function roleIcon(role: string) {
  switch (role) {
    case "rusher":
      return <Zap className="w-5 h-5" />;
    case "sniper":
      return <Target className="w-5 h-5" />;
    case "support":
      return <Shield className="w-5 h-5" />;
    default:
      return null;
  }
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  NAVIGATION                                                                  */
/* ─────────────────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Characters", href: "#characters" },
    { label: "Evolution Pass", href: "#evolution-pass" },
    { label: "Pre-Register", href: "#pre-register" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark py-3" : "py-5 bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-extrabold text-xl tracking-[0.2em] text-glow-cyan"
          style={{ color: "oklch(0.82 0.18 196)" }}
        >
          ZERO<span style={{ color: "oklch(0.68 0.22 25)" }}>_</span>STATE
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
              style={{ letterSpacing: "0.12em" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Nav CTA — solid fill, maximum contrast */}
        <a href="#pre-register" className="hidden md:block">
          <Button
            data-ocid="nav.pre_register_button"
            className="btn-nav-cta"
            size="sm"
          >
            Pre-Register
          </Button>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden glass-dark mt-2 mx-4 rounded-lg py-4 px-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              onClick={() => setMobileOpen(false)}
              className="font-body text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            data-ocid="nav.pre_register_button"
            className="btn-nav-cta w-full"
            onClick={() => {
              setMobileOpen(false);
              document
                .getElementById("pre-register")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Pre-Register
          </Button>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  HERO SECTION                                                                */
/* ─────────────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden scroll-mt-20"
      aria-label="Hero section"
    >
      {/* Background — eager load, above fold */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1600x900.jpg"
          alt="Zero State battlefield"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width="1600"
          height="900"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.06 0.02 250 / 0.75) 0%, oklch(0.06 0.02 250 / 0.85) 60%, oklch(0.07 0.015 250) 100%)",
          }}
        />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Pre-title badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase animate-slide-up"
          style={{
            color: "oklch(0.82 0.18 196)",
            borderColor: "oklch(0.82 0.18 196 / 0.4)",
            background: "oklch(0.82 0.18 196 / 0.08)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Next-Gen Battle Royale — Coming Soon
        </div>

        {/* Main title — minimum text-8xl on desktop, tight letter-spacing */}
        <h1
          className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] tracking-tighter mb-4 animate-slide-up delay-100"
          style={{ lineHeight: "0.88", letterSpacing: "-0.02em" }}
        >
          <span
            className="block text-glow-cyan"
            style={{ color: "oklch(0.82 0.18 196)" }}
          >
            PROJECT:
          </span>
          <span
            className="block animate-pulse-text"
            style={{ color: "oklch(0.97 0.005 220)" }}
          >
            ZERO
          </span>
          <span className="block" style={{ color: "oklch(0.97 0.005 220)" }}>
            STATE
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="font-display font-bold text-2xl sm:text-4xl md:text-5xl tracking-[0.15em] mt-6 mb-10 text-glow-orange animate-slide-up delay-200"
          style={{ color: "oklch(0.78 0.2 25)" }}
        >
          EVOLVE OR EXPIRE.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 animate-slide-up delay-300">
          <a href="#pre-register">
            <Button
              data-ocid="hero.primary_button"
              size="lg"
              className="btn-cyan-primary px-10 py-6 text-sm"
            >
              Pre-Register Now
            </Button>
          </a>
          <Button
            data-ocid="hero.secondary_button"
            size="lg"
            variant="outline"
            className="font-display font-bold tracking-widest uppercase text-sm px-8 py-6 gap-2"
            style={{
              background: "transparent",
              color: "oklch(0.96 0.01 220)",
              borderColor: "oklch(0.96 0.01 220 / 0.4)",
              letterSpacing: "0.15em",
            }}
          >
            <Play className="w-4 h-4" />
            Watch Trailer
          </Button>
        </div>

        {/* Stat badges */}
        <div className="flex flex-wrap gap-3 justify-center animate-slide-up delay-400">
          {[
            { icon: <Users className="w-4 h-4" />, label: "50 Players" },
            { icon: <Clock className="w-4 h-4" />, label: "10 Min Matches" },
            { icon: <MapIcon className="w-4 h-4" />, label: "4x4 KM Map" },
          ].map((stat) => (
            <div key={stat.label} className="hero-stat-badge">
              {stat.icon}
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <ChevronDown
          className="w-6 h-6"
          style={{ color: "oklch(0.82 0.18 196 / 0.5)" }}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  EVOLUTION SECTION — above fold (2nd section), not lazy                     */
/* ─────────────────────────────────────────────────────────────────────────── */
const tiers = [
  {
    tier: "DATA CORE I",
    label: "DEFENSE",
    color: "oklch(0.82 0.18 196)",
    icon: <Shield className="w-8 h-8" />,
    description:
      "Reinforce your Nano-Suit's plating. Reduces incoming damage by 25% and increases HP regeneration rate.",
    buffs: ["Armor Plating +25%", "Regen Rate ×2", "Barrier Durability"],
  },
  {
    tier: "DATA CORE II",
    label: "MOBILITY",
    color: "oklch(0.78 0.2 25)",
    icon: <Zap className="w-8 h-8" />,
    description:
      "Overclock your suit's locomotion systems. Sprint faster, grapple farther, and land silently from any height.",
    buffs: ["Sprint Speed +35%", "Silent Movement", "Grapple Range +20m"],
  },
  {
    tier: "DATA CORE III",
    label: "OFFENSE",
    color: "oklch(0.68 0.22 25)",
    icon: <Target className="w-8 h-8" />,
    description:
      "Channel raw energy into your weapons. Bullet velocity, reload speed, and critical hit chance all surge.",
    buffs: ["Damage +20%", "Reload Speed ×1.5", "Crit Chance +15%"],
  },
];

function EvolutionSection() {
  return (
    <section
      id="features"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20"
      aria-label="Dynamic evolution system"
      style={{ background: "oklch(0.07 0.015 250)" }}
    >
      <div className="absolute inset-0 hex-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="section-eyebrow">Core Mechanic</p>
            <h2
              className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter text-glow-cyan"
              style={{ color: "oklch(0.82 0.18 196)" }}
            >
              EVOLVE
            </h2>
            <h2
              className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tighter"
              style={{ color: "oklch(0.96 0.01 220)" }}
            >
              OR EXPIRE
            </h2>
            <p className="font-body text-muted-foreground mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              As you eliminate enemies, your Nano-Suit collects Data Cores —
              crystallized combat data. Choose your evolution path in real-time.
              Every choice reshapes how you fight.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <RevealSection key={tier.tier}>
              <div
                className="relative p-6 rounded-sm border h-full flex flex-col transition-all duration-300 hover:-translate-y-1 group"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.12 0.025 245 / 0.9), oklch(0.08 0.015 250 / 0.9))",
                  border: `1px solid ${tier.color.replace(")", " / 0.3)")}`,
                  animationDelay: `${i * 0.15}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 0 24px ${tier.color.replace(")", " / 0.2)")}`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-8 h-8"
                  style={{
                    background: `linear-gradient(225deg, ${tier.color.replace(")", " / 0.3)")} 0%, transparent 60%)`,
                  }}
                />

                <div
                  className="mb-4 w-12 h-12 rounded-sm flex items-center justify-center"
                  style={{
                    color: tier.color,
                    background: `${tier.color.replace(")", " / 0.1)")}`,
                    border: `1px solid ${tier.color.replace(")", " / 0.3)")}`,
                  }}
                >
                  {tier.icon}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: tier.color }}
                  >
                    {tier.tier}
                  </span>
                </div>
                <h3
                  className="font-display font-extrabold text-2xl tracking-tight mb-3"
                  style={{ color: "oklch(0.96 0.01 220)" }}
                >
                  {tier.label}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {tier.description}
                </p>

                <div className="flex flex-col gap-1.5">
                  {tier.buffs.map((buff) => (
                    <div key={buff} className="flex items-center gap-2">
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ background: tier.color }}
                      />
                      <span
                        className="font-mono text-xs tracking-wide"
                        style={{ color: tier.color }}
                      >
                        {buff}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  FOOTER                                                                      */
/* ─────────────────────────────────────────────────────────────────────────── */
function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = [
    { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
    { icon: <Youtube className="w-4 h-4" />, label: "YouTube" },
    { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
    { icon: <Github className="w-4 h-4" />, label: "Discord" },
  ];

  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{
        background: "oklch(0.06 0.015 250)",
        borderTop: "1px solid oklch(0.22 0.04 250)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <a
              href="#hero"
              className="font-display font-extrabold text-lg tracking-[0.2em] text-glow-cyan"
              style={{ color: "oklch(0.82 0.18 196)" }}
            >
              ZERO<span style={{ color: "oklch(0.68 0.22 25)" }}>_</span>STATE
            </a>
            <p className="font-mono text-xs text-muted-foreground mt-1 tracking-wider">
              EVOLVE OR EXPIRE
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                aria-label={link.label}
                className="w-8 h-8 rounded-sm flex items-center justify-center transition-colors duration-200 hover:text-foreground"
                style={{
                  color: "oklch(0.45 0.04 240)",
                  background: "oklch(0.11 0.022 245)",
                  border: "1px solid oklch(0.22 0.04 250)",
                }}
              >
                {link.icon}
              </button>
            ))}
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © {year}. Built with ❤ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              style={{ color: "oklch(0.82 0.18 196 / 0.7)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  APP ROOT                                                                    */
/* ─────────────────────────────────────────────────────────────────────────── */
export default function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.style.setProperty("color-scheme", "dark");
    document.title = "Project: Zero State | Next-Gen Mobile Battle Royale";

    const desc = document.querySelector('meta[name="description"]');
    if (desc)
      desc.setAttribute(
        "content",
        "EVOLVE OR EXPIRE. Drop into the next generation of mobile survival. Project: Zero State — sci-fi tactical battle royale for mobile.",
      );

    const setMeta = (prop: string, content: string, propKey = "property") => {
      let el = document.querySelector(`meta[${propKey}="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(propKey, prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("og:title", "Project: Zero State | Next-Gen Mobile Battle Royale");
    setMeta(
      "og:description",
      "EVOLVE OR EXPIRE. The next generation of mobile survival is here.",
    );
    setMeta("og:type", "website");
    setMeta("twitter:card", "summary_large_image", "name");
    setMeta("twitter:title", "Project: Zero State", "name");
    setMeta(
      "twitter:description",
      "EVOLVE OR EXPIRE. Next-gen mobile battle royale.",
      "name",
    );
  }, []);

  return (
    <div
      className="min-h-screen font-body"
      style={{ background: "oklch(0.07 0.015 250)" }}
    >
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "oklch(0.12 0.025 245)",
            border: "1px solid oklch(0.82 0.18 196 / 0.3)",
            color: "oklch(0.96 0.01 220)",
            fontFamily: '"Geist Mono", monospace',
          },
        }}
      />

      <Navbar />

      <main>
        {/* Above-fold: rendered immediately */}
        <HeroSection />
        <EvolutionSection />

        {/* Below-fold: lazy loaded, each in its own Suspense boundary */}
        <Suspense fallback={<SectionFallback />}>
          <MechanicsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CharactersSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <TechSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <EvolutionPassSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AppStoreBlock />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PreRegisterSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

// Silence unused import — roleIcon used in EvolutionSection helpers
void roleIcon;
