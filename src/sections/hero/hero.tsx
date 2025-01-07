// hooks
import { useScreenWidth } from "../../hooks/use-screen-width";

// components
import Avatar from "../../components/avatar/avatar";

// external components
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

// types
import type { HeroProps } from "./types";

function Hero({
  headline,
  name,
  prefix,
  profession,
  description,
  photo,
}: HeroProps) {
  const screenWidth = useScreenWidth();
  return (
    <div id="#hero" className="w-full p-10 lg:px-32 lg:py-12 mt-20">
      <div className="w-full flex flex-col-reverse items-center lg:flex-row gap-8 lg:gap-20">
        <div className="lg:flex-1 flex flex-col gap-2">
          <p className="text-slate-200 font-medium text-lg">{headline}</p>
          <p className="text-slate-200 font-medium text-4xl">{name}</p>
          <p className="text-slate-200 font-medium text-lg">
            {prefix}
            <span className="text-cyan-400 font-medium text-lg pl-2">
              {profession}
            </span>
          </p>
          <p className="text-slate-200 text-sm">{description}</p>
          <div className="flex flex-row items-center gap-2">
            <FaLinkedin
              className="w-6 h-6 text-cyan-500 hover:shadow-lg cursor-pointer hover:shadow-cyan-200"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ruben-parra-0b0692279",
                  "_blank"
                )
              }
            />
            <FaSquareGithub
              className="w-6 h-6 text-cyan-500 hover:shadow-lg cursor-pointer hover:shadow-cyan-200"
              onClick={() =>
                window.open("https://github.com/RubenDParraC", "_blank")
              }
            />
          </div>
        </div>
        <Avatar src={photo} size={screenWidth > 819 ? "xl" : "lg"} />
      </div>
    </div>
  );
}

export default Hero;
