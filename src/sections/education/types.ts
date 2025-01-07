// types
import type { TranslationKeys } from "../../i18n/types";

export type EducationProps = {
  headline: string;
  subheadline: string;
};

export interface EducationItem {
  title: TranslationKeys;
  institution: TranslationKeys;
  location: string;
  image: string;
}
