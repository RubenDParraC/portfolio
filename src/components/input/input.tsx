import { useId } from "react";

// external components
import { twMerge } from "tailwind-merge";

// types
import type { InputProps } from "./types";

export default function Input({
  id,
  value,
  label,
  hinText,
  hinTextIcon,
  isError,
  iconLeft,
  iconRight,
  placeholder,
  disabled = false,
  secureTextEntry = false,
  disableCopyPaste = false,
  className,
  classNameContainer,
  classNameLabel,
  classNameInput,
  type = "text",
  onChange,
  onBlur,
  onEnter,
  onKeyDown,
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div className={twMerge("w-full flex flex-col gap-2", classNameContainer)}>
      <div className="relative w-full">
        <div
          className={twMerge(
            `
            relative
            flex
            items-center
            gap-2
            rounded-sm
            border
            bg-neutral-700
            px-4
            pt-4
            pb-2
            transition-all
            duration-200
          `,
            isError
              ? "border-error-500 focus-within:border-error"
              : "border-neutral-02 focus-within:border-neutral-01",
            disabled && "opacity-50 cursor-not-allowed",
            className,
          )}
        >
          {iconLeft && <div className="flex items-center">{iconLeft}</div>}

          <input
            type={secureTextEntry ? "password" : type}
            value={value}
            disabled={disabled}
            placeholder=" "
            onBlur={onBlur}
            onChange={(e) => onChange?.(e.target.value)}
            onCopy={(e) => disableCopyPaste && e.preventDefault()}
            onCut={(e) => disableCopyPaste && e.preventDefault()}
            onPaste={(e) => disableCopyPaste && e.preventDefault()}
            onKeyDown={(e) => {
              onKeyDown?.(e);

              if (
                e.key === "Enter" &&
                !e.shiftKey &&
                value.trim().length > 0 &&
                onEnter
              ) {
                e.preventDefault();
                onEnter();
              }
            }}
            className={twMerge(
              `
              peer
              w-full
              bg-transparent
              outline-none
              border-none
              text-sm
              text-white

              placeholder-transparent

              disabled:text-gray-300
            `,
              classNameInput,
            )}
          />

          {(label || placeholder) && (
            <label
              htmlFor={inputId}
              className={twMerge(
                `
                  absolute
                  top-1/2
                  -translate-y-1/2

                  rounded-lg
                  bg-neutral-700
                  px-1 py-1

                  text-sm
                  text-neutral-0

                  pointer-events-none

                  transition-all
                  duration-200

                  peer-focus:top-0
                  peer-focus:text-xs
                  peer-focus:-translate-y-1/2

                  peer-not-placeholder-shown:top-0
                  peer-not-placeholder-shown:text-xs
                  peer-not-placeholder-shown:-translate-y-1/2

                  peer-focus:text-neutral-700 peer-focus:text-neutral-0
                `,
                iconLeft ? "left-12" : "left-4",
                classNameLabel,
              )}
            >
              {label || placeholder}
            </label>
          )}

          {iconRight && <div className="flex items-center">{iconRight}</div>}
        </div>
      </div>

      {hinText && (
        <div className="w-full flex flex-row items-center gap-1">
          {hinTextIcon && (
            <div className="flex items-center">{hinTextIcon}</div>
          )}
          <span
            className={twMerge(
              "text-xs px-1 py-2 text-neutral-700",
              isError && "text-error-500 font-semibold",
            )}
          >
            {hinText}
          </span>
        </div>
      )}
    </div>
  );
}
