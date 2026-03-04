import { CheckCircle2, Cpu, Radio, Star } from "lucide-react";
import { RevealSection } from "../components/RevealSection";

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "ADAPTIVE GRAPHICS ENGINE",
    subtitle: "LOD Scaling System",
    description:
      "Dynamically scales Level-of-Detail to maintain locked 60 FPS on devices with 4GB RAM while delivering ray-traced reflections and HDR lighting on flagship hardware.",
    specs: [
      "60 FPS on 4GB RAM",
      "Ray-Traced Reflections",
      "Dynamic LOD Scaling",
      "HDR Display Support",
    ],
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "AI-ENHANCED MATCHMAKING",
    subtitle: "Playstyle Intelligence",
    description:
      "Goes beyond rank brackets. Our neural matchmaker analyzes your combat DNA — are you an aggressive Rusher or a patient Sniper? You'll always face your equal.",
    specs: [
      "Playstyle Profiling",
      "Anti-Smurfing Engine",
      "Ping-Optimized Routing",
      "Squad Compatibility Score",
    ],
  },
  {
    icon: <Radio className="w-8 h-8" />,
    title: "NEURAL FOOTSTEPS",
    subtitle: "Spatial Audio Technology",
    description:
      "High-fidelity 3D audio that lets you pinpoint exactly which floor or surface an enemy is walking on. Concrete sounds different from metal grating. Stealth just got real.",
    specs: [
      "Surface-Type Detection",
      "3D Positional Audio",
      "Floor-Level Tracking",
      "Noise Cancellation",
    ],
  },
];

export default function TechSection() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20"
      aria-label="Technical features"
      style={{ background: "oklch(0.06 0.015 250)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.82 0.18 196 / 0.35), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <RevealSection>
          <div className="text-center mb-16">
            <p className="section-eyebrow">Under the Hood</p>
            <h2
              className="font-display font-extrabold text-4xl sm:text-6xl tracking-tighter"
              style={{ color: "oklch(0.96 0.01 220)" }}
            >
              BUILT FOR
              <span
                className="block text-glow-cyan"
                style={{ color: "oklch(0.82 0.18 196)" }}
              >
                SUPREMACY
              </span>
            </h2>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
          {features.map((feat, i) => (
            <RevealSection key={feat.title}>
              <div
                className="relative p-8 h-full group"
                style={{
                  background:
                    i === 1
                      ? "oklch(0.1 0.022 245 / 0.95)"
                      : "oklch(0.08 0.018 248 / 0.9)",
                  border: "1px solid oklch(0.22 0.04 250)",
                }}
              >
                {/* HUD corners */}
                <div
                  className="absolute top-3 left-3 w-4 h-4 border-t border-l"
                  style={{ borderColor: "oklch(0.82 0.18 196 / 0.4)" }}
                />
                <div
                  className="absolute top-3 right-3 w-4 h-4 border-t border-r"
                  style={{ borderColor: "oklch(0.82 0.18 196 / 0.4)" }}
                />
                <div
                  className="absolute bottom-3 left-3 w-4 h-4 border-b border-l"
                  style={{ borderColor: "oklch(0.82 0.18 196 / 0.4)" }}
                />
                <div
                  className="absolute bottom-3 right-3 w-4 h-4 border-b border-r"
                  style={{ borderColor: "oklch(0.82 0.18 196 / 0.4)" }}
                />

                <div
                  className="w-14 h-14 rounded-sm flex items-center justify-center mb-6"
                  style={{
                    color: "oklch(0.82 0.18 196)",
                    background: "oklch(0.82 0.18 196 / 0.08)",
                    border: "1px solid oklch(0.82 0.18 196 / 0.3)",
                  }}
                >
                  {feat.icon}
                </div>

                <p
                  className="font-mono text-xs tracking-widest uppercase mb-1"
                  style={{ color: "oklch(0.68 0.22 25)" }}
                >
                  {feat.subtitle}
                </p>
                <h3
                  className="font-display font-extrabold text-xl tracking-tight mb-3"
                  style={{ color: "oklch(0.96 0.01 220)" }}
                >
                  {feat.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  {feat.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {feat.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: "oklch(0.82 0.18 196)" }}
                      />
                      <span
                        className="font-mono text-xs tracking-wide"
                        style={{ color: "oklch(0.78 0.06 240)" }}
                      >
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
