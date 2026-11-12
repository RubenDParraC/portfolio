import * as React from "react";
import { twMerge } from "tailwind-merge";

// utils
import {
  bg_colors,
  border_colors,
  text_colors,
} from "../../utils/utils-colors";

// types
import type { ButtonProps } from "./types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      disabled = false,
      type = "button",
      color = "primary_900",
      variant = "solid",
      iconLeft,
      iconRight,
      counter,
      className,
      classNameLabel,
      onClick,
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={twMerge(
          `
          relative
          p-2
          px-8
          rounded-3xl

          flex
          flex-row
          items-center
          justify-center
          gap-3
          `,
          variant === "solid"
            ? `${bg_colors[color]} shadow-lg`
            : variant === "outline"
              ? `border-2 ${border_colors[color]}`
              : "",
          disabled
            ? "cursor-not-allowed opacity-[0.24]"
            : "hover:opacity-70 cursor-pointer",
          className,
        )}
      >
        {counter !== undefined && counter > 0 && (
          <div
            className="
              absolute
              -top-3
              right-0

              min-w-6
              min-h-6
              px-px

              bg-warning-05
              rounded-full

              flex
              items-center
              justify-center

              text-[10px]
              text-white
              font-medium
            "
          >
            {counter > 99 ? "99+" : counter}
          </div>
        )}

        {iconLeft}

        {label && (
          <span
            className={twMerge(
              "text-sm font-medium",
              variant === "solid" ? "text-white" : text_colors[color],
              classNameLabel,
            )}
          >
            {label}
          </span>
        )}

        {iconRight}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
