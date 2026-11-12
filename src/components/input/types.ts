// types
import type { FocusEvent, ReactNode } from "react";

export interface InputProps {
  id?: string;
  value: string;
  label?: string;
  hinText?: string;
  hinTextIcon?: ReactNode;
  isError?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  secureTextEntry?: boolean;
  disableCopyPaste?: boolean;
  withCamelCase?: boolean;
  className?: string;
  classNameContainer?: string;
  classNameLabel?: string;
  classNameInput?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  onChange: (value: string) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
}
