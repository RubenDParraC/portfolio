import { twMerge } from "tailwind-merge";

// types
import type { AboutProps } from "./types";

function About({
  headline,
  subheadline,
  profession,
  description,
  buttonText,
  image,
}: AboutProps) {
  return (
    <div
      id="#about"
      className="w-full bg-zinc-600 flex flex-col-reverse lg:flex-row items-stretch"
    >
      {image ? (
        <div className="w-full lg:w-1/3 lg:max-h-96 bg-zinc-800 hidden lg:block">
          <img alt="about" src={image} className="w-full h-full object-cover" />
        </div>
      ) : null}
      <div
        className={twMerge(
          "w-full flex flex-col gap-2 p-10 lg:pr-32 lg:py-12",
          image ? "lg:w-2/3" : "lg:pl-32"
        )}
      >
        <p className="text-slate-200 font-medium text-3xl">
          {headline}
          <span className="text-cyan-400 font-medium text-3xl pl-2">
            {subheadline}
          </span>
        </p>
        <p className="text-slate-200 font-medium text-lg">{profession}</p>
        <p className="text-slate-200 text-sm mb-5">{description}</p>
        <button
          type="button"
          className="w-auto bg-cyan-500 py-2 px-5 rounded-lg text-slate-200 font-bold uppercase hover:shadow-md hover:shadow-cyan-200"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/files/SPANISH.pdf";
            link.download = "SPANISH.pdf";
            link.click();
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default About;
