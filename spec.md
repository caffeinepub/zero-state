# Zero State

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Landing page / game pitch website for "Project: Zero State" -- a fast-paced tactical battle royale mobile game
- Hero section with game title, tagline, and primary CTA (Download / Pre-Register)
- "Core Hook" section explaining Dynamic Evolution / Nano-Suit progression
- Gameplay Mechanics section covering: 10-Minute Blitz, Link System, Gloo-Tech (Hard-Light Barriers), Verticality/Grappling Hook
- Key Technical Features section: Adaptive Graphics Engine, AI Matchmaking, Neural Footsteps
- Monetization & Engagement section: Evolution Pass (Reactive Skins), Squad Hub
- Characters roster section showcasing sample hero characters with their skills
- App Store-style description block
- Pre-register / download CTA footer section
- Backend: store pre-registration emails / interest submissions
- Backend: character roster data (name, active skill, passive slots, description)
- Backend: feature flags for launch status

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Generate hero banner image, character artwork images, and feature section images
2. Select no additional components (no auth/email needed for this pitch site)
3. Generate Motoko backend with: pre-registration interest list, character roster query, basic site config
4. Build React frontend:
   - Full-page marketing / pitch site layout
   - Animated hero section with game logo and CTA
   - Sections: Evolution Hook, Gameplay Mechanics (card grid), Technical Features, Characters Roster, Evolution Pass, Squad Hub, App Store Description, Pre-Register CTA
   - Mobile-first responsive design
   - Dark, futuristic UI aesthetic with neon accent colors fitting a sci-fi battle royale
   - Pre-register form wired to backend
