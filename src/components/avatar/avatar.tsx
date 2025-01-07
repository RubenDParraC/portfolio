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
      className={twMerge(
        Sizes[size ?? "md"],
        "rounded-[60%_40%_60%_40%] overflow-hidden shadow-lg shadow-cyan-400",
        className
      )}
    />
  );
}

export default Avatar;
