// types
import type { TranslationKeys } from "../../i18n/types";

export type ProyectsProps = {
  headline: string;
  subheadline: string;
  buttonText: string;
};

export interface Project {
  logo: string;
  title: string;
  description: TranslationKeys;
  technologies: string[];
  url: string;
}
