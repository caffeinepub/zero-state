import { Play } from "lucide-react";
import { RevealSection } from "../components/RevealSection";

const lines = [
  {
    id: "welcome",
    tag: null,
    text: "WELCOME TO THE ZERO STATE. Drop into the next generation of mobile survival. Project: Zero State brings the intensity of Battle Royale with the depth of a Hero Shooter.",
  },
  {
    id: "evolve",
    tag: "EVOLVE OR EXPIRE",
    text: "Your suit is your weapon. Collect Data Cores on the battlefield to level up your abilities mid-game. Will you choose extra armor, or silent movement? The choice determines your survival.",
  },
  {
    id: "squad",
    tag: "FAST-PACED SQUAD COMBAT",
    text: "10 minutes. 50 players. One survivor. Coordinate with your squad using real-time voice chat and the revolutionary Ping-to-Action system.",
  },
  {
    id: "tech",
    tag: "MASTER THE TECH",
    text: "Deploy Hard-Light shields, use grappling hooks to climb sky-rises, and drive high-speed hoverbikes. The island is your playground.",
  },
  {
    id: "finale",
    tag: null,
    text: "Booyah is a thing of the past. It's time to reach the Zero State.",
    highlight: true,
  },
];

const hudCorners = [
  "top-0 left-0 border-t border-l",
  "top-0 right-0 border-t border-r",
  "bottom-0 left-0 border-b border-l",
  "bottom-0 right-0 border-b border-r",
];

export default function AppStoreBlock() {
  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20"
      aria-label="App store description"
      style={{ background: "oklch(0.07 0.015 250)" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <RevealSection>
          <div
            className="relative p-8 sm:p-12 rounded-sm border"
            style={{
              background: "oklch(0.1 0.02 245 / 0.8)",
              borderColor: "oklch(0.82 0.18 196 / 0.2)",
            }}
          >
            {hudCorners.map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-6 h-6`}
                style={{ borderColor: "oklch(0.82 0.18 196 / 0.6)" }}
              />
            ))}

            <div
              className="font-display text-8xl font-black leading-none mb-6 -mt-4"
              style={{ color: "oklch(0.82 0.18 196 / 0.2)" }}
            >
              "
            </div>

            <div className="flex flex-col gap-6">
              {lines.map((line) => (
                <div key={line.id}>
                  {line.tag && (
                    <p
                      className="font-mono text-xs tracking-[0.2em] uppercase mb-1.5"
                      style={{ color: "oklch(0.68 0.22 25)" }}
                    >
                      [ {line.tag} ]
                    </p>
                  )}
                  <p
                    className={`font-body leading-relaxed ${line.highlight ? "font-bold text-lg" : "text-sm sm:text-base"}`}
                    style={{
                      color: line.highlight
                        ? "oklch(0.82 0.18 196)"
                        : "oklch(0.78 0.04 240)",
                    }}
                  >
                    {line.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{ borderColor: "oklch(0.82 0.18 196 / 0.15)" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-1 h-8 rounded-full"
                  style={{ background: "oklch(0.82 0.18 196)" }}
                />
                <div>
                  <p
                    className="font-display font-extrabold text-sm tracking-widest uppercase"
                    style={{ color: "oklch(0.82 0.18 196)" }}
                  >
                    PROJECT: ZERO STATE
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Official App Store Description
                  </p>
                </div>
              </div>

              {/* Google Play Store button */}
              <a
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="appstore.google_play_button"
                className="group inline-flex items-center gap-3 px-5 py-3 rounded-sm border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "oklch(0.12 0.025 245 / 0.9)",
                  borderColor: "oklch(0.82 0.18 196 / 0.3)",
                  color: "oklch(0.96 0.01 220)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "oklch(0.16 0.03 245 / 0.95)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "oklch(0.82 0.18 196 / 0.7)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 18px oklch(0.82 0.18 196 / 0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "oklch(0.12 0.025 245 / 0.9)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "oklch(0.82 0.18 196 / 0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "none";
                }}
              >
                {/* Google Play triangle icon */}
                <div
                  className="flex items-center justify-center w-8 h-8 rounded-sm flex-shrink-0"
                  style={{
                    background: "oklch(0.82 0.18 196 / 0.12)",
                    border: "1px solid oklch(0.82 0.18 196 / 0.3)",
                  }}
                >
                  <Play
                    className="w-4 h-4"
                    style={{ color: "oklch(0.82 0.18 196)" }}
                    fill="oklch(0.82 0.18 196)"
                  />
                </div>
                <div className="flex flex-col leading-none">
                  <span
                    className="font-mono text-[10px] tracking-[0.15em] uppercase mb-0.5"
                    style={{ color: "oklch(0.65 0.06 240)" }}
                  >
                    GET IT ON
                  </span>
                  <span
                    className="font-display font-bold text-sm tracking-wide"
                    style={{ color: "oklch(0.96 0.01 220)" }}
                  >
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
