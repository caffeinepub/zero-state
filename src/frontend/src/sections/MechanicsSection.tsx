import { Clock, Cpu, Shield, Zap } from "lucide-react";
import { RevealSection } from "../components/RevealSection";

const mechanics = [
  {
    icon: <Clock className="w-7 h-7" />,
    title: "10-MINUTE BLITZ",
    description:
      "50 players drop onto a 4×4 km map. Every match designed to last exactly 10–12 minutes — perfectly tuned for mobile playstyles. No camping, only conquest.",
    tag: "Fast-Paced",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "LINK SYSTEM",
    description:
      "Each operator has 1 Active Skill and 2 Passive Slots. Mix passives from other operators you own to build a truly custom combat identity. No two builds are alike.",
    tag: "Custom Builds",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "HARD-LIGHT BARRIERS",
    description:
      "Deploy Gloo-Tech barriers anywhere in seconds. Upgrade them to transparent for stealth plays, or electrify them to punish enemies who rush you.",
    tag: "Gloo-Tech",
    image: "/assets/generated/gloo-tech-barrier.dim_800x500.jpg",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "VERTICAL COMBAT",
    description:
      "Every operator ships with a built-in short-range grappling hook. Reach rooftops in seconds. Urban combat is fully 3D — the sky is a battlefield too.",
    tag: "3D Movement",
  },
];

export default function MechanicsSection() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20"
      aria-label="Gameplay mechanics"
      style={{ background: "oklch(0.09 0.018 248)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <p
              className="section-eyebrow"
              style={{ color: "oklch(0.68 0.22 25 / 0.8)" }}
            >
              Gameplay Systems
            </p>
            <h2
              className="font-display font-extrabold text-4xl sm:text-6xl tracking-tighter"
              style={{ color: "oklch(0.96 0.01 220)" }}
            >
              MASTER THE
              <span
                className="text-glow-orange ml-3"
                style={{ color: "oklch(0.78 0.2 25)" }}
              >
                TECH
              </span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mechanics.map((mech) => (
            <RevealSection key={mech.title}>
              <div
                className="relative rounded-sm border overflow-hidden h-full group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "oklch(0.11 0.022 245 / 0.9)",
                  borderColor: "oklch(0.22 0.04 250)",
                }}
              >
                {mech.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={mech.image}
                      alt={mech.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width="800"
                      height="500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 50%, oklch(0.11 0.022 245) 100%)",
                      }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="shrink-0 w-12 h-12 rounded-sm flex items-center justify-center"
                      style={{
                        color: "oklch(0.82 0.18 196)",
                        background: "oklch(0.82 0.18 196 / 0.1)",
                        border: "1px solid oklch(0.82 0.18 196 / 0.3)",
                      }}
                    >
                      {mech.icon}
                    </div>
                    <div>
                      <span
                        className="font-mono text-xs tracking-widest uppercase"
                        style={{ color: "oklch(0.68 0.22 25)" }}
                      >
                        {mech.tag}
                      </span>
                      <h3
                        className="font-display font-extrabold text-xl tracking-tight mt-0.5"
                        style={{ color: "oklch(0.96 0.01 220)" }}
                      >
                        {mech.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {mech.description}
                  </p>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "oklch(0.82 0.18 196)" }}
                />
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
