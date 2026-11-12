// external components
import { twMerge } from "tailwind-merge";

// types
import type { AvatarProps } from "./types";

// utils
import { Sizes } from "./utils";

function Avatar({ src, size, className }: AvatarProps) {
  return (
    <img
      src={src}
      alt="Avatar"
      className={twMerge(Sizes[size ?? "md"], "overflow-hidden", className)}
    />
  );
}

export default Avatar;
