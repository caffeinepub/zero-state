import { Loader2, Shield, Target, Zap } from "lucide-react";
import { useState } from "react";
import { type Character, GameRole } from "../backend.d";
import { RevealSection } from "../components/RevealSection";
import { useGetAllCharacters } from "../hooks/useQueries";

const ocidMap: Record<number, string> = {
  0: "characters.item.1",
  1: "characters.item.2",
  2: "characters.item.3",
  3: "characters.item.4",
};

function roleBadge(role: GameRole) {
  switch (role) {
    case GameRole.rusher:
      return {
        label: "RUSHER",
        cls: "bg-red-900/60 text-red-300 border-red-500/40",
      };
    case GameRole.sniper:
      return {
        label: "SNIPER",
        cls: "bg-purple-900/60 text-purple-300 border-purple-500/40",
      };
    case GameRole.support:
      return {
        label: "SUPPORT",
        cls: "bg-emerald-900/60 text-emerald-300 border-emerald-500/40",
      };
    default:
      return { label: "UNKNOWN", cls: "bg-gray-700 text-gray-300" };
  }
}

function roleIcon(role: GameRole) {
  switch (role) {
    case GameRole.rusher:
      return <Zap className="w-5 h-5" />;
    case GameRole.sniper:
      return <Target className="w-5 h-5" />;
    case GameRole.support:
      return <Shield className="w-5 h-5" />;
  }
}

function roleGlow(role: GameRole) {
  switch (role) {
    case GameRole.rusher:
      return "0 0 20px rgba(239,68,68,0.3)";
    case GameRole.sniper:
      return "0 0 20px rgba(168,85,247,0.3)";
    case GameRole.support:
      return "0 0 20px rgba(52,211,153,0.3)";
  }
}

function roleAccentColor(role: GameRole): string {
  switch (role) {
    case GameRole.rusher:
      return "oklch(0.65 0.22 22)";
    case GameRole.sniper:
      return "oklch(0.62 0.2 285)";
    case GameRole.support:
      return "oklch(0.68 0.18 145)";
  }
}

function CharacterCard({ char, index }: { char: Character; index: number }) {
  const badge = roleBadge(char.role);
  const icon = roleIcon(char.role);
  const glow = roleGlow(char.role);
  const accentColor = roleAccentColor(char.role);

  return (
    <div
      data-ocid={ocidMap[index] ?? `characters.item.${index + 1}`}
      className="relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2"
      style={{
        background: "oklch(0.1 0.02 242)",
        border: "1px solid oklch(0.2 0.03 245)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = glow;
        (e.currentTarget as HTMLDivElement).style.borderColor =
          accentColor.replace(")", " / 0.5)");
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "oklch(0.2 0.03 245)";
      }}
    >
      {/* Role-color left stripe */}
      <div
        className="absolute top-0 left-0 bottom-0 w-1.5"
        style={{ background: accentColor }}
      />

      {/* Ghosted role icon watermark */}
      <div
        className="absolute top-4 right-4 opacity-[0.06] pointer-events-none"
        style={{
          color: accentColor,
          transform: "scale(3.5)",
          transformOrigin: "top right",
        }}
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className="pl-6 pr-4 pt-5 pb-5 flex flex-col h-full">
        <div className="mb-3">
          <span
            className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono font-bold tracking-[0.15em] uppercase"
            style={{
              color: accentColor,
              background: accentColor.replace(")", " / 0.12)"),
              border: `1px solid ${accentColor.replace(")", " / 0.3)")}`,
            }}
          >
            {icon}
            {badge.label}
          </span>
        </div>

        <h3
          className="font-display font-extrabold text-4xl tracking-tight mb-4 leading-none"
          style={{ color: "oklch(0.96 0.01 220)" }}
        >
          {char.name}
        </h3>

        <div
          className="mb-4 p-3"
          style={{
            background: accentColor.replace(")", " / 0.07)"),
            borderLeft: `2px solid ${accentColor}`,
          }}
        >
          <p
            className="font-mono text-xs tracking-[0.15em] uppercase mb-1"
            style={{ color: accentColor.replace(")", " / 0.7)") }}
          >
            Active
          </p>
          <p
            className="font-display font-bold text-sm leading-snug"
            style={{ color: accentColor }}
          >
            {char.activeSkillName}
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1 leading-relaxed">
            {char.activeSkillDescription}
          </p>
        </div>

        <div className="mt-auto">
          <p
            className="font-mono text-xs tracking-[0.15em] uppercase mb-2"
            style={{ color: "oklch(0.42 0.04 245)" }}
          >
            Passives
          </p>
          <div className="flex flex-wrap gap-1.5">
            {char.passiveSkills.map((skill) => (
              <span key={skill} className="passive-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CharactersSection() {
  const { data: characters, isLoading } = useGetAllCharacters();
  const [activeRole, setActiveRole] = useState<GameRole | "all">("all");

  const displayed = (characters ?? []).filter(
    (c) => activeRole === "all" || c.role === activeRole,
  );

  return (
    <section
      id="characters"
      className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20"
      aria-label="Character roster"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/generated/characters-roster.dim_1200x600.jpg"
          alt=""
          className="w-full h-full object-cover object-center opacity-20"
          loading="lazy"
          width="1200"
          height="600"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.07 0.015 250) 0%, oklch(0.07 0.015 250 / 0.6) 40%, oklch(0.07 0.015 250 / 0.7) 60%, oklch(0.07 0.015 250) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <RevealSection>
          <div className="text-center mb-12">
            <p className="section-eyebrow">Operator Roster</p>
            <h2
              className="font-display font-extrabold text-4xl sm:text-6xl tracking-tighter"
              style={{ color: "oklch(0.96 0.01 220)" }}
            >
              CHOOSE YOUR
              <span
                className="block text-glow-cyan"
                style={{ color: "oklch(0.82 0.18 196)" }}
              >
                OPERATOR
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {(
              [
                "all",
                GameRole.rusher,
                GameRole.sniper,
                GameRole.support,
              ] as const
            ).map((role) => {
              const isActive = activeRole === role;
              const labels: Record<string, string> = {
                all: "ALL",
                rusher: "RUSHERS",
                sniper: "SNIPERS",
                support: "SUPPORT",
              };
              return (
                <button
                  type="button"
                  key={role}
                  data-ocid="characters.tab"
                  onClick={() => setActiveRole(role)}
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase rounded-sm border transition-all duration-200 ${isActive ? "border-current" : "border-transparent hover:border-current"}`}
                  style={{
                    color: isActive
                      ? "oklch(0.82 0.18 196)"
                      : "oklch(0.55 0.05 240)",
                    background: isActive
                      ? "oklch(0.82 0.18 196 / 0.1)"
                      : "transparent",
                  }}
                >
                  {labels[role]}
                </button>
              );
            })}
          </div>
        </RevealSection>

        {isLoading ? (
          <div
            data-ocid="characters.loading_state"
            className="flex items-center justify-center py-20"
          >
            <Loader2
              className="w-8 h-8 animate-spin"
              style={{ color: "oklch(0.82 0.18 196)" }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayed.map((char, i) => (
              <RevealSection key={char.name}>
                <CharacterCard char={char} index={i} />
              </RevealSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
