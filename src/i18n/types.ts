export type TranslationKeys =
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
  | "project.lulynarvaezvocalcoachDes"
  | "project.ajudadaurologia"
  | "project.boldrinrivers"
  | "project.scconstrucciones"
  | "project.eddiepinturas"
  | "project.empleadasunidas"
  | "project.tumascotasegura"
  | "project.Des991"
  | "project.sgstrategies"
  | "project.danzayeniruiz"
  | "project.amobility"
  | "project.glamper"
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
    lulynarvaezvocalcoachDes: string;
    ajudadaurologia: string;
    boldrinrivers: string;
    scconstrucciones: string;
    eddiepinturas: string;
    empleadasunidas: string;
    tumascotasegura: string;
    Des991: string;
    sgstrategies: string;
    danzayeniruiz: string;
    amobility: string;
    glamper: string;
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
