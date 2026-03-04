import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  type GameRole = {
    #rusher;
    #sniper;
    #support;
  };

  type LaunchStatus = {
    #comingSoon;
    #preRegister;
    #live;
  };

  type Character = {
    name : Text;
    role : GameRole;
    activeSkillName : Text;
    activeSkillDescription : Text;
    passiveSkills : [Text];
  };

  type Registration = {
    name : Text;
    email : Text;
  };

  type SiteConfig = {
    launchStatus : LaunchStatus;
    totalPlayers : Nat;
  };

  let characterMap = Map.empty<Text, Character>();
  let registrationMap = Map.empty<Text, Registration>();
  var siteConfig : SiteConfig = {
    launchStatus = #comingSoon;
    totalPlayers = 0;
  };

  public shared ({ caller }) func preRegister(name : Text, email : Text) : async () {
    if (registrationMap.containsKey(email)) {
      Runtime.trap("Email already registered");
    };
    registrationMap.add(email, { name; email });
    siteConfig := { siteConfig with totalPlayers = siteConfig.totalPlayers + 1 };
  };

  public query ({ caller }) func getTotalRegistrations() : async Nat {
    registrationMap.size();
  };

  public shared ({ caller }) func addCharacter(name : Text, role : GameRole, activeSkillName : Text, activeSkillDescription : Text, passiveSkills : [Text]) : async () {
    let character : Character = {
      name;
      role;
      activeSkillName;
      activeSkillDescription;
      passiveSkills;
    };
    characterMap.add(name, character);
  };

  public query ({ caller }) func getCharacter(name : Text) : async Character {
    switch (characterMap.get(name)) {
      case (null) { Runtime.trap("Character not found") };
      case (?character) { character };
    };
  };

  public query ({ caller }) func getAllCharacters() : async [Character] {
    characterMap.values().toArray();
  };

  public shared ({ caller }) func updateLaunchStatus(status : LaunchStatus) : async () {
    siteConfig := { siteConfig with launchStatus = status };
  };

  public query ({ caller }) func getLaunchStatus() : async LaunchStatus {
    siteConfig.launchStatus;
  };

  public query ({ caller }) func getTotalPlayers() : async Nat {
    siteConfig.totalPlayers;
  };
};
