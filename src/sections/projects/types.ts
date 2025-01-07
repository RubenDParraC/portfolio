// types
import type { TranslationKeys } from "../../i18n/types";

export type ProyectsProps = {
  headline: string;
  subheadline: string;
  buttonText: string;
};

export interface Project {
  title: string;
  description: TranslationKeys;
  images: string[];
  technologies: string[];
  url: string;
}
