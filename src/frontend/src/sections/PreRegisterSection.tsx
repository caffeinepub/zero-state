import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { RevealSection } from "../components/RevealSection";
import { useGetTotalRegistrations, usePreRegister } from "../hooks/useQueries";

export default function PreRegisterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registered, setRegistered] = useState(false);

  const { data: totalRegistrations } = useGetTotalRegistrations();
  const { mutate: preRegister, isPending, isError, error } = usePreRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    preRegister(
      { name: name.trim(), email: email.trim() },
      {
        onSuccess: () => {
          setRegistered(true);
          toast.success("You're on the list! Welcome to the Zero State.");
        },
        onError: () => {
          toast.error("Registration failed. Please try again.");
        },
      },
    );
  };

  const registrationCount = totalRegistrations
    ? Number(totalRegistrations).toLocaleString()
    : "—";

  return (
    <section
      id="pre-register"
      className="relative py-32 sm:py-48 overflow-hidden scroll-mt-20"
      aria-label="Pre-register"
      style={{ background: "oklch(0.055 0.018 250)" }}
    >
      {/* Hard cyan entry rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "oklch(0.82 0.18 196 / 0.7)" }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, oklch(0.82 0.18 196 / 0.09) 0%, oklch(0.82 0.18 196 / 0.03) 40%, transparent 70%)",
        }}
      />
      {/* Centered grid band */}
      <div
        className="absolute inset-x-0 top-1/4 bottom-1/4 grid-bg"
        style={{ opacity: 0.2 }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
        <RevealSection>
          <p
            className="font-mono text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: "oklch(0.82 0.18 196)" }}
          >
            Early Access
          </p>

          <h2
            className="font-display font-extrabold tracking-tighter mb-2 animate-pulse-text"
            style={{
              fontSize: "clamp(3rem, 10vw, 6rem)",
              lineHeight: "0.88",
              color: "oklch(0.82 0.18 196)",
            }}
          >
            JOIN THE
            <br />
            ZERO STATE
          </h2>
          <p
            className="font-body mt-5 mb-10 text-base"
            style={{ color: "oklch(0.52 0.04 240)" }}
          >
            Secure your place in the first deployment wave.
          </p>

          {/* Registration counter */}
          <div
            className="inline-flex items-center gap-4 px-7 py-4 mb-10"
            style={{
              background: "oklch(0.1 0.02 242)",
              border: "1px solid oklch(0.82 0.18 196 / 0.4)",
              boxShadow: "0 0 32px oklch(0.82 0.18 196 / 0.12)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "oklch(0.82 0.18 196)" }}
            />
            <span
              className="font-display font-extrabold"
              style={{
                fontSize: "2rem",
                color: "oklch(0.82 0.18 196)",
                lineHeight: 1,
              }}
            >
              {registrationCount}
            </span>
            <span
              className="font-mono text-xs tracking-[0.15em] uppercase text-left leading-tight"
              style={{ color: "oklch(0.52 0.04 240)" }}
            >
              Operators
              <br />
              Registered
            </span>
          </div>

          {registered ? (
            <div
              data-ocid="preregister.success_state"
              className="p-8 rounded-sm border text-center"
              style={{
                background: "oklch(0.72 0.18 145 / 0.08)",
                borderColor: "oklch(0.72 0.18 145 / 0.3)",
              }}
            >
              <CheckCircle2
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "oklch(0.72 0.18 145)" }}
              />
              <h3
                className="font-display font-extrabold text-2xl tracking-tight mb-2"
                style={{ color: "oklch(0.72 0.18 145)" }}
              >
                YOU'RE IN
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Welcome to the Zero State, operator. Stay alert — deployment
                orders incoming.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  data-ocid="preregister.input"
                  type="text"
                  placeholder="Operator Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isPending}
                  className="font-mono text-sm tracking-wide"
                  style={{
                    background: "oklch(0.11 0.022 245)",
                    border: "1px solid oklch(0.82 0.18 196 / 0.3)",
                    color: "oklch(0.96 0.01 220)",
                  }}
                />
                <Input
                  data-ocid="preregister.email.input"
                  type="email"
                  placeholder="Deploy Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                  className="font-mono text-sm tracking-wide"
                  style={{
                    background: "oklch(0.11 0.022 245)",
                    border: "1px solid oklch(0.82 0.18 196 / 0.3)",
                    color: "oklch(0.96 0.01 220)",
                  }}
                />
              </div>

              <Button
                data-ocid="preregister.submit_button"
                type="submit"
                size="lg"
                disabled={isPending}
                className="btn-scan btn-cyan-primary w-full py-7"
              >
                {isPending ? (
                  <span
                    data-ocid="preregister.loading_state"
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Deploying...
                  </span>
                ) : (
                  "Deploy — Join the Zero State"
                )}
              </Button>

              {isError && (
                <p
                  data-ocid="preregister.error_state"
                  className="font-mono text-xs text-center"
                  style={{ color: "oklch(0.68 0.22 25)" }}
                  role="alert"
                >
                  ⚠{" "}
                  {error instanceof Error
                    ? error.message
                    : "Registration failed. Try again."}
                </p>
              )}
            </form>
          )}

          {/* Platform badges */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {[
              { platform: "iOS App Store", icon: "🍎" },
              { platform: "Google Play", icon: "▶" },
            ].map((p) => (
              <div
                key={p.platform}
                className="flex items-center gap-2 px-5 py-3 rounded-sm border"
                style={{
                  background: "oklch(0.11 0.022 245 / 0.8)",
                  borderColor: "oklch(0.22 0.04 250)",
                  color: "oklch(0.55 0.05 240)",
                }}
              >
                <span>{p.icon}</span>
                <div className="text-left">
                  <p className="font-mono text-xs tracking-wider">
                    {p.platform}
                  </p>
                  <p
                    className="font-mono text-xs"
                    style={{ color: "oklch(0.45 0.04 240)" }}
                  >
                    Coming Soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
