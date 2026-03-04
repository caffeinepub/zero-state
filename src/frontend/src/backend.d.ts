import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Character {
    passiveSkills: Array<string>;
    name: string;
    role: GameRole;
    activeSkillName: string;
    activeSkillDescription: string;
}
export enum GameRole {
    support = "support",
    rusher = "rusher",
    sniper = "sniper"
}
export enum LaunchStatus {
    live = "live",
    comingSoon = "comingSoon",
    preRegister = "preRegister"
}
export interface backendInterface {
    addCharacter(name: string, role: GameRole, activeSkillName: string, activeSkillDescription: string, passiveSkills: Array<string>): Promise<void>;
    getAllCharacters(): Promise<Array<Character>>;
    getCharacter(name: string): Promise<Character>;
    getLaunchStatus(): Promise<LaunchStatus>;
    getTotalPlayers(): Promise<bigint>;
    getTotalRegistrations(): Promise<bigint>;
    preRegister(name: string, email: string): Promise<void>;
    updateLaunchStatus(status: LaunchStatus): Promise<void>;
}
