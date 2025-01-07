// types
import type { SkillsProps } from "./types";

function Skills({ headline, subheadline, skills }: SkillsProps) {
  return (
    <div id="#skills" className="w-full p-10 lg:px-32 lg:py-12 bg-zinc-600">
      <p className="text-slate-200 font-medium text-3xl mb-5">
        {headline}
        <span className="text-cyan-400 font-medium text-3xl pl-2">
          {subheadline}
        </span>
      </p>
      <div className="relative overflow-hidden w-full">
        <div className="flex w-max animate-scroll gap-8">
          {skills.concat(skills).map((skill, index) => (
            <div
              key={`skill-${+index}`}
              className="flex flex-col gap-2 items-center"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-20 h-20 object-center object-contain"
              />
              <span className="text-slate-200 font-medium text-sm">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
