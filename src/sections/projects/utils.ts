// types
import type { DataTableColumn } from "../../complex-components/data-table";
import type { TranslationKeys } from "../../i18n/types";
import type { Project } from "./types";

// Construye la configuración de las columnas de la tabla de proyectos.
// biome-ignore lint/suspicious/noExplicitAny: <>
export function getProjectsColumns(t: (key: TranslationKeys) => any) {
  const createColumn = <T>(
    key: keyof T,
    translationKey: TranslationKeys,
  ): DataTableColumn<T> => ({
    key: key as string,
    title: t(translationKey),
    sortable: true,
  });

  const columns: DataTableColumn<Project>[] = [
    createColumn<Project>("title", "projects.row.title"),
    {
      ...createColumn<Project>("description", "projects.row.description"),
      render: (_, project) => t(project.description as TranslationKeys),
    },
  ];

  return {
    columns,
  };
}

export const ProjectsList: Project[] = [
  {
    title: "San Gabriel",
    description: "project.sangabriel",
    logo: "https://play-lh.googleusercontent.com/PFUaJMcUmYaplZcu5XBlnb-i3EwmSci1iSD2PKfKh2I1P2UzFnm-H2CtHrshgsXdEnrZip2G5GMi0joWKdU5eIs=w240-h480-rw",
    technologies: [
      "https://miro.medium.com/v2/resize:fit:512/1*em2XHNcs3cB1fBkd1TF1bQ.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgH0PJEcmWEu5uhR2K18GosGYr2TzNYFD_81XAPHlfr8iGmoFAmLwr1xA&s=10",
      "https://img.icons8.com/?size=512&id=108784&format=png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://avatars.githubusercontent.com/u/114648228?s=200&v=4",
      "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      "https://www.svgrepo.com/show/353657/django-icon.svg",
      "https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png",
      "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt38b2ab4ea0da2357/6242e8d49eb79b7d7303c4bd/json-editor.svg",
      "https://miro.medium.com/v2/resize:fit:1400/1*45wZCdnX2a2d337Ej-JUrQ.jpeg",
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
    ],
    url: "https://play.google.com/store/apps/details?id=com.sangabriel.sangabriel&hl=es",
  },
  {
    title: "Kampo",
    description: "project.kampo",
    logo: "https://play-lh.googleusercontent.com/5fFMGX2hWOejqF6k-eCGBDrDNBZWFesplAGk28t4sVWdH2CgR8JNrCnmaU7Wq0W3ws-noyN2Bnqf-wHNp_q90A=w240-h480-rw",
    technologies: [
      "https://miro.medium.com/v2/resize:fit:512/1*em2XHNcs3cB1fBkd1TF1bQ.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgH0PJEcmWEu5uhR2K18GosGYr2TzNYFD_81XAPHlfr8iGmoFAmLwr1xA&s=10",
      "https://img.icons8.com/?size=512&id=108784&format=png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://avatars.githubusercontent.com/u/114648228?s=200&v=4",
      "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      "https://www.svgrepo.com/show/353657/django-icon.svg",
      "https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png",
      "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt38b2ab4ea0da2357/6242e8d49eb79b7d7303c4bd/json-editor.svg",
      "https://miro.medium.com/v2/resize:fit:1400/1*45wZCdnX2a2d337Ej-JUrQ.jpeg",
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
    ],
    url: "https://play.google.com/store/apps/details?id=com.kampoapp.kampoapp&hl=es",
  },
  {
    title: "Healthclub Especialista",
    description: "project.healthclubespecialista",
    logo: "https://play-lh.googleusercontent.com/kORCP07eWWDNff_UmUethksOC7Dd1Oy0j1qg6z1Sqlz9gpezeTcusZ8LN89F7cimV2rn68et_yi8ANGy5SgH=w240-h480-rw",
    technologies: [
      "https://miro.medium.com/v2/resize:fit:512/1*em2XHNcs3cB1fBkd1TF1bQ.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgH0PJEcmWEu5uhR2K18GosGYr2TzNYFD_81XAPHlfr8iGmoFAmLwr1xA&s=10",
      "https://img.icons8.com/?size=512&id=108784&format=png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://avatars.githubusercontent.com/u/114648228?s=200&v=4",
      "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      "https://www.svgrepo.com/show/353657/django-icon.svg",
      "https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png",
      "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt38b2ab4ea0da2357/6242e8d49eb79b7d7303c4bd/json-editor.svg",
      "https://miro.medium.com/v2/resize:fit:1400/1*45wZCdnX2a2d337Ej-JUrQ.jpeg",
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
    ],
    url: "https://play.google.com/store/apps/details?id=com.healthespecialista.healthespecialista&hl=es",
  },
  {
    title: "DermaClub",
    description: "project.dermaclub",
    logo: "https://play-lh.googleusercontent.com/prv8tCYcfGpOyM1SjjE4oO4LgFOUvxaaanXE14Akh1Xzk__aqeWACr1KFxJCA6v6-RvPjm3DF-K7VqTwZepD=w240-h480-rw",
    technologies: [
      "https://miro.medium.com/v2/resize:fit:512/1*em2XHNcs3cB1fBkd1TF1bQ.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgH0PJEcmWEu5uhR2K18GosGYr2TzNYFD_81XAPHlfr8iGmoFAmLwr1xA&s=10",
      "https://img.icons8.com/?size=512&id=108784&format=png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://avatars.githubusercontent.com/u/114648228?s=200&v=4",
      "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      "https://www.svgrepo.com/show/353657/django-icon.svg",
      "https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png",
      "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt38b2ab4ea0da2357/6242e8d49eb79b7d7303c4bd/json-editor.svg",
      "https://miro.medium.com/v2/resize:fit:1400/1*45wZCdnX2a2d337Ej-JUrQ.jpeg",
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
    ],
    url: "https://play.google.com/store/apps/details?id=com.healtpacientes.healtpacientes&hl=es",
  },
  {
    title: "WashTime US",
    description: "project.washpartnerus",
    logo: "https://play-lh.googleusercontent.com/JE36VvaMw_XXQS8Y9I3pH6_xg8I2MSVqU417GkfropseF2qEClWV72DwckcKIKcXf1BBrWlFHL_Q__nOS4LWBQ=w240-h480-rw",
    technologies: [
      "https://miro.medium.com/v2/resize:fit:512/1*em2XHNcs3cB1fBkd1TF1bQ.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgH0PJEcmWEu5uhR2K18GosGYr2TzNYFD_81XAPHlfr8iGmoFAmLwr1xA&s=10",
      "https://img.icons8.com/?size=512&id=108784&format=png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://avatars.githubusercontent.com/u/114648228?s=200&v=4",
      "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      "https://www.svgrepo.com/show/353657/django-icon.svg",
      "https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png",
      "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt38b2ab4ea0da2357/6242e8d49eb79b7d7303c4bd/json-editor.svg",
      "https://miro.medium.com/v2/resize:fit:1400/1*45wZCdnX2a2d337Ej-JUrQ.jpeg",
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
    ],
    url: "https://play.google.com/store/apps/details?id=com.washtimeclient.washtimeclient&hl=es",
  },
  {
    title: "WashApp Lavatodo",
    description: "project.washapplavatodo",
    logo: "https://play-lh.googleusercontent.com/QeSB1rXvGOIkb0uM741FWYf5hPbH4C9EzPv4rDGI9a23xY78lGMXCviVqZbaKoIvMewLRmDnS91hM5cWoBj7ow=w240-h480-rw",
    technologies: [
      "https://miro.medium.com/v2/resize:fit:512/1*em2XHNcs3cB1fBkd1TF1bQ.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgH0PJEcmWEu5uhR2K18GosGYr2TzNYFD_81XAPHlfr8iGmoFAmLwr1xA&s=10",
      "https://img.icons8.com/?size=512&id=108784&format=png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
      "https://avatars.githubusercontent.com/u/114648228?s=200&v=4",
      "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
      "https://www.svgrepo.com/show/353657/django-icon.svg",
      "https://miro.medium.com/v2/resize:fit:1200/1*J3G3akaMpUOLegw0p0qthA.png",
      "https://eu-images.contentstack.com/v3/assets/blt8f94ebff857fe1ae/blt38b2ab4ea0da2357/6242e8d49eb79b7d7303c4bd/json-editor.svg",
      "https://miro.medium.com/v2/resize:fit:1400/1*45wZCdnX2a2d337Ej-JUrQ.jpeg",
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png",
    ],
    url: "https://play.google.com/store/apps/details?id=com.washappcli.washappcli&hl=es",
  },
];
