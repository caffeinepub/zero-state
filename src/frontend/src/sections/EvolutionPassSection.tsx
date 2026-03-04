import { Star, Users, Zap } from "lucide-react";
import { RevealSection } from "../components/RevealSection";

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Reactive Skins",
    description:
      "Skins that glow and change color based on your kill count within a single match. The more you dominate, the more your suit evolves visually.",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Seasonal Progression",
    description:
      "Unlock exclusive operator outfits, weapon wraps, emotes, and Nano-Suit chassis across 100+ tiers each season.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Squad Hub",
    description:
      "4-man social lobby where your squad can hang out, flex emotes, customize vehicles, and coordinate loadouts before dropping in.",
  },
];

export default function EvolutionPassSection() {
  return (
    <section
      id="evolution-pass"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20"
      aria-label="Evolution pass"
      style={{ background: "oklch(0.08 0.018 248)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealSection>
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="/assets/generated/evolution-pass.dim_800x500.jpg"
                alt="Evolution Pass rewards"
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="500"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.82 0.18 196 / 0.08) 0%, transparent 60%)",
                }}
              />
              <div
                className="absolute inset-0 border rounded-sm"
                style={{ borderColor: "oklch(0.82 0.18 196 / 0.25)" }}
              />
            </div>
          </RevealSection>

          <RevealSection>
            <div>
              <p
                className="font-mono text-xs tracking-[0.3em] uppercase mb-4"
                style={{ color: "oklch(0.68 0.22 25)" }}
              >
                Season Pass
              </p>
              <h2
                className="font-display font-extrabold text-4xl sm:text-5xl tracking-tighter mb-2"
                style={{ color: "oklch(0.96 0.01 220)" }}
              >
                EVOLUTION
              </h2>
              <h2
                className="font-display font-extrabold text-4xl sm:text-5xl tracking-tighter mb-6 text-glow-cyan"
                style={{ color: "oklch(0.82 0.18 196)" }}
              >
                PASS
              </h2>
              <p
                className="font-body text-lg mb-8"
                style={{ color: "oklch(0.68 0.22 25)" }}
              >
                Reactive Skins. Real Prestige.
              </p>

              <div className="flex flex-col gap-6">
                {features.map((feat) => (
                  <div key={feat.title} className="flex gap-4">
                    <div
                      className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center"
                      style={{
                        color: "oklch(0.82 0.18 196)",
                        background: "oklch(0.82 0.18 196 / 0.1)",
                        border: "1px solid oklch(0.82 0.18 196 / 0.3)",
                      }}
                    >
                      {feat.icon}
                    </div>
                    <div>
                      <h3
                        className="font-display font-bold text-base tracking-wide mb-1"
                        style={{ color: "oklch(0.96 0.01 220)" }}
                      >
                        {feat.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-8 p-4 rounded-sm border"
                style={{
                  background: "oklch(0.68 0.22 25 / 0.08)",
                  borderColor: "oklch(0.68 0.22 25 / 0.3)",
                }}
              >
                <p
                  className="font-mono text-xs tracking-widest uppercase mb-1"
                  style={{ color: "oklch(0.68 0.22 25)" }}
                >
                  ⚡ SQUAD HUB
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  4-man social lobby. Flex emotes. Customize your hoverbike.
                  Drop with your crew from a shared hub before every match.
                </p>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
