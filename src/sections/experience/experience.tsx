import { t } from "../../i18n/i18n";

// types
import type { ExperienceProps } from "./types";

// utils
import { ExperienceList } from "./utils";

function Experience({ headline, subheadline }: ExperienceProps) {
  return (
    <div id="#experience" className="w-full p-10 lg:px-32 lg:py-12">
      <div className="w-full flex flex-col gap-5">
        <p className="text-slate-200 font-medium text-3xl">
          {headline}
          <span className="text-cyan-400 font-medium text-3xl pl-2">
            {subheadline}
          </span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {ExperienceList.map((experience, index) => (
            <div
              key={`experience-${+index}`}
              className="w-full rounded-lg border-[1px] border-cyan-500 p-5 flex flex-col"
            >
              <div className="flex flex-col lg:flex-row gap-3 items-center mb-3">
                <img
                  src={experience.image}
                  alt={experience.company}
                  className="w-10 h-10 object-center object-cover overflow-hidden rounded-full"
                />
                <p className="text-slate-200 text-lg font-bold text-center lg:text-start">
                  {experience.company}
                </p>
              </div>
              <p className="text-slate-200 text-sm text-center lg:text-start font-medium mb-2">
                {experience.boss}
              </p>
              <p className="text-slate-200 text-xs text-center lg:text-start mb-2">
                {t(experience.dateRange)}
              </p>
              <p className="text-cyan-500 text-xs text-center lg:text-start mb-2">
                {experience.location}
              </p>
              <p className="text-slate-200 text-xs text-center font-bold lg:text-start mb-4">
                {t(experience.position)}
              </p>
              <p className="text-slate-200 text-xs text-justify">
                {t(experience.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
