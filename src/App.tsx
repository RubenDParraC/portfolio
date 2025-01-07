import { t } from "./i18n/i18n";

// sections
import Hero from "./sections/hero/hero";
import profileImage from "./assets/profile.jpg";
import aboutImage from "./assets/about.jpg";
import About from "./sections/about/about";
import Header from "./sections/header/header";
import Projects from "./sections/projects/projects";
import Experience from "./sections/experience/experience";
import Education from "./sections/education/education";
import Skills from "./sections/skills/skills";
import Footer from "./sections/footer/footer";

// utils
import { skills } from "./sections/skills/utils";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-start justify-start bg-zinc-800">
      <Header />
      <Hero
        headline={t("hero.headline")}
        name="Ruben Dario Parra"
        prefix={t("hero.prefix")}
        profession={t("hero.profession")}
        photo={profileImage}
        description={t("hero.description")}
      />
      <About
        headline={t("about.headline")}
        subheadline={t("about.subheadline")}
        profession={t("about.profession")}
        buttonText={t("about.description")}
        description={t("about.buttonText")}
        image={aboutImage}
      />
      <Projects
        headline={t("projects.headline")}
        subheadline={t("projects.subheadline")}
        buttonText={t("projects.buttonText")}
      />
      <Skills
        headline={t("skills.headline")}
        subheadline={t("skills.subheadline")}
        skills={skills}
      />
      <Experience
        headline={t("experience.headline")}
        subheadline={t("experience.subheadline")}
      />
      <Education
        headline={t("education.headline")}
        subheadline={t("education.subheadline")}
      />
      <Footer
        name="Ruben Dario Parra Camargo"
        profession={t("about.profession")}
        email="rdparrac50@gmail.com"
        phone="+57 321 297 0570"
        location="Colombia, Bogotá D.C."
      />
    </div>
  );
}

export default App;
