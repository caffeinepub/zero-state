import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type Character, GameRole } from "../backend.d";
import { useActor } from "./useActor";

const FALLBACK_CHARACTERS: Character[] = [
  {
    name: "VEGA",
    role: GameRole.rusher,
    activeSkillName: "Adrenaline Surge",
    activeSkillDescription: "Speed boost + 20% damage for 5 seconds",
    passiveSkills: ["Iron Skin", "Silent Step"],
  },
  {
    name: "ECHO",
    role: GameRole.sniper,
    activeSkillName: "Recon Pulse",
    activeSkillDescription: "Reveals nearby loot and enemies in 50m radius",
    passiveSkills: ["Eagle Eye", "Ghost Protocol"],
  },
  {
    name: "NOVA",
    role: GameRole.support,
    activeSkillName: "Shield Weave",
    activeSkillDescription: "Deploys energy shield for squad",
    passiveSkills: ["Medic Drone", "Nano Repair"],
  },
  {
    name: "KIRA",
    role: GameRole.rusher,
    activeSkillName: "Grapple Blitz",
    activeSkillDescription: "Enhanced grapple + area stun on landing",
    passiveSkills: ["Parkour Pro", "Combat Reflexes"],
  },
];

export function useGetAllCharacters() {
  const { actor, isFetching } = useActor();
  return useQuery<Character[]>({
    queryKey: ["characters"],
    queryFn: async () => {
      if (!actor) return FALLBACK_CHARACTERS;
      try {
        const chars = await actor.getAllCharacters();
        if (!chars || chars.length === 0) return FALLBACK_CHARACTERS;
        return chars;
      } catch {
        return FALLBACK_CHARACTERS;
      }
    },
    enabled: !isFetching,
    placeholderData: FALLBACK_CHARACTERS,
    // Fetch once — characters don't change during a session
    staleTime: Number.POSITIVE_INFINITY,
    refetchOnWindowFocus: false,
  });
}

export function useGetTotalRegistrations() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["totalRegistrations"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      try {
        return await actor.getTotalRegistrations();
      } catch {
        return BigInt(0);
      }
    },
    enabled: !isFetching,
    // Refresh every 30s but not on every window focus
    refetchInterval: 30_000,
    refetchOnWindowFocus: false,
    staleTime: 30_000,
  });
}

export function usePreRegister() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) => {
      if (!actor) throw new Error("Not connected");
      await actor.preRegister(name, email);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["totalRegistrations"] });
    },
  });
}

export { FALLBACK_CHARACTERS };
export type { Character };
