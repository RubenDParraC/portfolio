import { t } from "../../i18n/i18n";

// components
import SwiperComponent from "../../components/swiper/swiper";

// utils
import { ProjectsList } from "./utils";

// external components
import { MdArrowOutward } from "react-icons/md";

// types
import type { ProyectsProps } from "./types";

function Projects({ headline, subheadline, buttonText }: ProyectsProps) {
  return (
    <div id="#proyects" className="w-full p-10 lg:px-32 lg:py-12">
      <p className="text-slate-200 font-medium text-3xl mb-5">
        {headline}
        <span className="text-cyan-400 font-medium text-3xl pl-2">
          {subheadline}
        </span>
      </p>
      <div className="w-full overflow-x-auto scroll-smooth custom-scrollbar">
        <div className="flex gap-8">
          {ProjectsList.map((project, index) => (
            <div
              key={`project-${+index}`}
              className="min-w-[calc(40%-2rem)] w-full lg:w-[calc(40%-2rem)] flex-shrink-0 flex flex-col gap-5 text-slate-200"
            >
              <SwiperComponent images={project.images} />
              <div className="flex gap-2 items-center justify-center">
                {project.technologies.map((img, i) => (
                  <img
                    key={`img-icon-${index}-${+i}`}
                    alt="Icon"
                    className="h-4 w-4"
                    src={img}
                  />
                ))}
              </div>
              <span className="text-lg font-bold">{project.title}</span>
              <p className="text-slate-200 text-sm text-justify">
                {t(project.description)}
              </p>
              <button
                type="button"
                className="w-36 bg-cyan-500 py-2 px-5 rounded-lg font-bold uppercase hover:shadow-md hover:shadow-cyan-200 flex flex-row items-center justify-center gap-2"
                onClick={() => window.open(`${project.url}`, "_blank")}
              >
                <span className="text-sm font-bold">{buttonText}</span>
                <MdArrowOutward className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
