// types
import type { ReactNode } from "react";
import type { bg_colors } from "../../utils/utils-colors";

export type ButtonProps = {
  label?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "solid" | "outline" | "none";
  color?: keyof typeof bg_colors;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  counter?: number;
  className?: string;
  classNameLabel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
