import type * as HeroIconsOutline from "@heroicons/react/24/outline";
import type * as HeroIconsSolid from "@heroicons/react/24/solid";

import type { text_colors } from "../../utils/utils-colors";

export type HeroIconNamesOutline = keyof typeof HeroIconsOutline;

export type HeroIconNamesSolid = keyof typeof HeroIconsSolid;

export type HeroIconNames = HeroIconNamesOutline | HeroIconNamesSolid;

export interface IconComponentProps {
  iconName: HeroIconNames;
  size?: number;
  variant?: "outline" | "solid";
  className?: string;
  color?: keyof typeof text_colors;
  style?: React.CSSProperties;
  onClick?: () => void;
}
