// types
import type { TranslationKeys } from "../../i18n/types";

export type ExperienceProps = {
  headline: string;
  subheadline: string;
};

export interface ExperienceItem {
  company: string;
  boss: string;
  location: string;
  dateRange: TranslationKeys;
  position: TranslationKeys;
  description: TranslationKeys;
  image: string;
}
