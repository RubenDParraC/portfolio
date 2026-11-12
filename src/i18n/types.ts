export type TranslationKeys =
  | "general.record"
  | "general.showing"
  | "general.of"
  | "general.search"
  | "general.actions"
  | "header.home"
  | "header.about"
  | "header.projects"
  | "header.skills"
  | "hero.headline"
  | "hero.prefix"
  | "hero.profession"
  | "hero.description"
  | "about.headline"
  | "about.subheadline"
  | "about.profession"
  | "about.description"
  | "about.buttonText"
  | "projects.headline"
  | "projects.subheadline"
  | "projects.row.technologies"
  | "projects.row.logo"
  | "projects.row.title"
  | "projects.row.description"
  | "education.headline"
  | "education.subheadline"
  | "education.telematicsTitle"
  | "education.technologyTitle"
  | "education.institution"
  | "experience.headline"
  | "experience.subheadline"
  | "projects.buttonText"
  | "skills.headline"
  | "skills.subheadline"
  | "project.kampo"
  | "project.healthclubespecialista"
  | "project.dermaclub"
  | "project.washpartnerus"
  | "project.washtimeus"
  | "project.washapplavatodo"
  | "project.sangabriel"
  | "experience.cobistopaz"
  | "experience.cobistopazDateRange"
  | "experience.cobistopazPosition"
  | "experience.tradesorginc"
  | "experience.tradesorgincDateRange"
  | "experience.tradesorgincPosition"
  | "experience.eurekadreams"
  | "experience.eurekadreamsDateRange"
  | "experience.eurekadreamsPosition";

export interface SectionsKeys {
  general: {
    record: string;
    showing: string;
    of: string;
    search: string;
    actions: string;
  };
  header: {
    home: string;
    about: string;
    projects: string;
    skills: string;
  };
  hero: {
    headline: string;
    prefix: string;
    profession: string;
    description: string;
  };
  about: {
    headline: string;
    subheadline: string;
    profession: string;
    description: string;
    buttonText: string;
  };
  education: {
    headline: string;
    subheadline: string;
    telematicsTitle: string;
    technologyTitle: string;
    institution: string;
  };
  projects: {
    headline: string;
    subheadline: string;
    buttonText: string;
    row: {
      technologies: string;
      logo: string;
      title: string;
      description: string;
    };
  };
  skills: {
    headline: string;
    subheadline: string;
  };
  experience: {
    headline: string;
    subheadline: string;
    cobistopaz: string;
    cobistopazDateRange: string;
    cobistopazPosition: string;
    tradesorginc: string;
    tradesorgincDateRange: string;
    tradesorgincPosition: string;
    eurekadreams: string;
    eurekadreamsDateRange: string;
    eurekadreamsPosition: string;
  };
  project: {
    kampo: string;
    healthclubespecialista: string;
    dermaclub: string;
    washpartnerus: string;
    washtimeus: string;
    washapplavatodo: string;
    sangabriel: string;
  };
}

export interface Translations {
  ES: SectionsKeys;
  EN: SectionsKeys;
}
