/**
 * The studio's identity, in one place (kept separate from Vrymdor's look): the name and positioning, the palette,
 * the type. globals.css reads the same colors as CSS variables.
 */
export const STUDIO = {
  name: "Hausmann Studio",
  owner: "Ernest Hausmann",
  title: "AI Creative Technologist",
  positioning: "AI-powered commercial production at global-brand standard.",
  intro:
    "I direct and finish commercials with an AI production studio I built myself: research, concept, AI cinematography, motion design, color and sound, all held to the craft of the world's biggest campaigns.",
  email: "ernesthausmann15@gmail.com",
  linkedin: "https://www.linkedin.com/in/ernest-hausmann-a4755a387/",
  youtube: "", // the channel URL, once it exists
  github: "https://github.com/ernesthausmann15",
  url: "https://ernesthausmann.dev",
} as const;

export const PALETTE = {
  ink: "#0A0A0B", // the screening room
  panel: "#141416",
  line: "#26262A",
  bone: "#F3EFE7", // type
  ash: "#8E8B85", // secondary type
  ember: "#FF5B2E", // the one signature accent (a tally light)
  focus: "#FFD9CC",
} as const;

export const CATEGORIES = ["All", "Sportswear", "Tech", "Automotive", "E-commerce", "Real Estate", "Food", "Nonprofit", "Local"] as const;
