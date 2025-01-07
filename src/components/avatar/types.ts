// types
import type { Sizes } from "./utils";

export type AvatarProps = {
  src: string;
  size?: keyof typeof Sizes;
  className?: string;
};
