import { t } from "../../i18n/i18n";

// types
import type { EducationProps } from "./types";

// utils
import { EducationList } from "./utils";

function Education({ headline, subheadline }: EducationProps) {
  return (
    <div id="#education" className="w-full p-10 lg:px-32 lg:py-12 bg-zinc-600">
      <div className="w-full flex flex-col gap-5">
        <p className="text-slate-200 font-medium text-3xl">
          {headline}
          <span className="text-cyan-400 font-medium text-3xl pl-2">
            {subheadline}
          </span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {EducationList.map((education, index) => (
            <div
              key={`education-${+index}`}
              className="w-full rounded-lg border-[1px] border-cyan-500 p-5 flex flex-col lg:flex-row items-center gap-4"
            >
              <img
                src={education.image}
                alt={education.title}
                className="w-16 h-16 object-center object-cover overflow-hidden rounded-full"
              />
              <div className="flex flex-col items-center lg:items-start">
                <p className="text-slate-200 text-lg font-bold text-center lg:text-start mb-3">
                  {t(education.title)}
                </p>
                <p className="text-slate-200 text-sm text-center lg:text-start">
                  {t(education.institution)}
                </p>
                <p className="text-cyan-500 text-xs font-medium text-center lg:text-start">
                  {education.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
