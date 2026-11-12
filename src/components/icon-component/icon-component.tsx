import { twMerge } from "tailwind-merge";

// external components
import * as HeroIconsSolid from "@heroicons/react/24/solid";
import * as HeroIconsOutline from "@heroicons/react/24/outline";

// types
import type { IconComponentProps } from "./types";

// utils
import { text_colors } from "../../utils/utils-colors";

function IconComponent({
  iconName,
  size = 24,
  variant = "outline",
  color = "black",
  className,
  style,
  onClick,
}: IconComponentProps) {
  const HeroIcons = variant === "outline" ? HeroIconsOutline : HeroIconsSolid;

  const heroIcon = HeroIcons[iconName as keyof typeof HeroIcons];

  const Icon = heroIcon;

  if (!Icon) {
    return <div>Icon not found!</div>;
  }

  return (
    <Icon
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
      className={twMerge(
        onClick && "cursor-pointer",
        text_colors[color],
        className,
      )}
      onClick={onClick}
    />
  );
}

export default IconComponent;
