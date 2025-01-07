import { useLanguage } from "../context/language-context";

// types
import type { TranslationKeys, Translations } from "./types";

export const translations: Translations = {
  ES: {
    header: {
      home: "Inicio",
      about: "Acerca de",
      projects: "Proyectos",
      skills: "Habilidades",
    },
    hero: {
      headline: "¡Hola!, soy",
      prefix: "y soy",
      profession: "Desarrollador Front-End",
      description:
        "¡Hola! Soy un desarrollador Front-End apasionado por crear experiencias web atractivas y funcionales. Mi enfoque se centra en la usabilidad y el rendimiento, siempre buscando las mejores prácticas y las últimas tendencias en tecnología. Estoy emocionado por colaborar en proyectos innovadores y contribuir a la creación de soluciones digitales que marquen la diferencia. ¡Bienvenido a mi portafolio!",
    },
    about: {
      headline: "Acerca",
      subheadline: "de mí",
      profession: "Desarrollador Front-End",
      description: "Descargar CV",
      buttonText:
        "Ingeniero en telemática y tecnólogo en sistematización de datos; desarrollador de software Front End apasionado por la creación de experiencias interactivas y atractivas. Con una sólida formación en tecnologías de desarrollo de software y experiencia en dirección y desarrollo de proyectos, he adquirido conocimiento en lenguajes de programación, frameworks y bibliotecas que me hacen competente ante cualquier reto. Mi objetivo es utilizar mis habilidades técnicas y mi creatividad para construir interfaces de usuario intuitivas y atractivas que mejoren la experiencia del usuario y cumplan con los objetivos comerciales que se soliciten.",
    },
    projects: {
      headline: "Mis",
      subheadline: "Proyectos",
      buttonText: "Ver más",
    },
    skills: {
      headline: "Mis",
      subheadline: "Habilidades",
    },
    project: {
      lulynarvaezvocalcoachDes:
        'Realice el desarrollo de websites modulares para "Luly Narváez Vocal Coach" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      ajudadaurologia:
        'Realice el desarrollo de websites modulares para "Ajuda Da Urología" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      boldrinrivers:
        'Realice el desarrollo de websites modulares para "Boldrin & Rivers" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      scconstrucciones:
        'Realice el desarrollo de websites modulares para "SC Construcciones" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      eddiepinturas:
        'Realice el desarrollo de websites modulares para "Eddie Pinturas" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      empleadasunidas:
        'Realice el desarrollo de websites modulares para "Empleadas Unidas" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      tumascotasegura:
        'Realice el desarrollo de websites modulares para "Tu Mascota Segura" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      Des991:
        'Realice el desarrollo de websites modulares para "99 + 1" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      sgstrategies:
        'Realice el desarrollo de websites modulares para "S. G. Strategies" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      danzayeniruiz:
        'Realice el desarrollo de websites modulares para "Danza Yeni Ruiz" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      amobility:
        'Realice el desarrollo de websites modulares para "AMobility" utilizando React JS, Storybook, Tailwind CSS y Figma para seguir los lineamientos del área de diseño. Implementé secciones individuales reutilizables y estilizadas eficientemente con Tailwind, las cuales se integraron para crear páginas completas personalizadas según las necesidades. Este enfoque permitió un desarrollo ágil y consistente, proporcionando soluciones escalables y de alta calidad para el cliente.',
      glamper:
        "Participé en el desarrollo de una aplicación web utilizando HTML con Bootstrap para el Front-End, complementada con un backend robusto desarrollado en Django. Este aplicativo web permite publicar alojamientos tipo Glamping. Mi contribución se centró en el diseño de interfaces de usuario intuitivas, integración de API RESTfull y implementación de autenticación de usuarios.",
      kampo:
        "Participé en el desarrollo de una aplicación móvil utilizando Expo CLI y React para el Front-End estilizando sus componentes con NativeWind y Firebase para utilizar Notifications Push, complementada con un backend robusto desarrollado en Django. Esta aplicación es una red social deportiva para conectar reclutadores con jugadores mediante la visualizacion de videos cortos, mensajeria, enlace directo con reclutadores y busqueda de jugadores con ciertas caracteristicas. Mi contribución se centró en la dirección del equipo de desarrollo, el diseño de interfaces de usuario intuitivas, integración de API RESTfull, implementación de autenticación de usuarios y despliegue en Google Play y App Store.",
      healthclubespecialista:
        "Participé en el desarrollo de una aplicación móvil utilizando Expo CLI y React para el Front-End estilizando sus componentes con NativeWind y Firebase para utilizar Notifications Push, complementada con un backend robusto desarrollado en Django. Esta aplicación permite tener un control preciso de las citas médicas asignadas a un especialista, compartir información de interes para toda la comunidad y generar fórmulas médicas a los pacientes de Derma Club. Mi contribución se centró en la dirección del equipo de desarrollo, el diseño de interfaces de usuario intuitivas, integración de API RESTfull, implementación de autenticación de usuarios y despliegue en Google Play y App Store.",
      dermaclub:
        "Participé en el desarrollo de una aplicación móvil utilizando Expo CLI y React para el Front-End estilizando sus componentes con NativeWind y Firebase para utilizar Notifications Push, complementada con un backend robusto desarrollado en Django. Esta aplicación permite tener un control mas amplio y sencillo de tus citas y formulas medicas, además de brindar una tienda virtual mediante la cual podrás adquirir los medicamentos solicitados por tu especialista de confianza. Mi contribución se centró en la dirección del equipo de desarrollo, el diseño de interfaces de usuario intuitivas, integración de API RESTfull, implementación de autenticación de usuarios y despliegue en Google Play y App Store.",
      washpartnerus:
        "Participé en el desarrollo de una aplicación móvil utilizando Expo CLI y React para el Front-End estilizando sus componentes con NativeWind y Firebase para utilizar Notifications Push, complementada con un backend robusto desarrollado en Django. Esta aplicación esta destinadas para las personas que desde sus hogares desean emprender en servicios de lavanderia de ropa. Mi contribución se centró en la dirección del equipo de desarrollo, el diseño de interfaces de usuario intuitivas, integración de API RESTfull, implementación de autenticación de usuarios y despliegue en Google Play y App Store.",
      washtimeus:
        "Participé en el desarrollo de una aplicación móvil utilizando Expo CLI y React para el Front-End estilizando sus componentes con NativeWind y Firebase para utilizar Notifications Push, complementada con un backend robusto desarrollado en Django. Esta aplicación es una adaptación de WashApp Lavatodo al mercado Norteamericano, ofrece la suscripción a diferentes planes con los cuales podrá solicitar los servicios de lavado, planchado y entregado de prendas. Mi contribución se centró en la dirección del equipo de desarrollo, el diseño de interfaces de usuario intuitivas, integración de API RESTfull, implementación de autenticación de usuarios y despliegue en Google Play y App Store.",
      washapplavatodo:
        "Participé en el desarrollo de una aplicación móvil utilizando Expo CLI y React para el Front-End estilizando sus componentes con NativeWind y Firebase para utilizar Notifications Push, complementada con un backend robusto desarrollado en Django. Esta aplicación ofrece la suscripción a diferentes planes con los cuales podrá solicitar los servicios de lavado, planchado y entregado de prendas. Mi contribución se centró en la dirección del equipo de desarrollo, el diseño de interfaces de usuario intuitivas, integración de API RESTfull, implementación de autenticación de usuarios y despliegue en Google Play y App Store.",
      sangabriel:
        "Participé en el desarrollo de una aplicación móvil utilizando Expo CLI y React para el Front-End estilizando sus componentes con NativeWind y Firebase para utilizar Notifications Push, complementada con un backend robusto desarrollado en Django. Esta aplicación ofrece la administración de las rutas de viaje, listado de clientes, y cada uno de los estados del recorrido de inicio a fin. Mi contribución se centró en la dirección del equipo de desarrollo, el diseño de interfaces de usuario intuitivas, integración de API RESTfull, implementación de autenticación de usuarios y despliegue en Google Play y App Store.",
    },
  },
  EN: {
    header: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
    },
    hero: {
      headline: "Hi! I am",
      prefix: "and I am a",
      profession: "Front-End Developer",
      description:
        "Hi! I am a Front-End developer passionate about creating attractive and functional web experiences. My focus is on usability and performance, always looking for the best practices and the latest trends in technology. I am excited to collaborate on innovative projects and contribute to the creation of digital solutions that make a difference. Welcome to my portfolio!",
    },
    about: {
      headline: "About",
      subheadline: "Me",
      profession: "Front-End Developer",
      description: "Download CV",
      buttonText:
        "Engineer in Telematics and Data Systems Technology; Front-End Software Developer passionate about creating interactive and engaging experiences. With a strong background in software development technologies and experience in project management and development, I have acquired knowledge in programming languages, frameworks, and libraries that make me competent in facing any challenge. My goal is to use my technical skills and creativity to build intuitive and attractive user interfaces that enhance user experience and meet the commercial objectives required.",
    },
    projects: {
      headline: "My",
      subheadline: "Projects",
      buttonText: "See more",
    },
    skills: {
      headline: "My",
      subheadline: "Skills",
    },
    project: {
      lulynarvaezvocalcoachDes: `I developed modular websites for "Luly Narváez Vocal Coach" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      ajudadaurologia: `I developed modular websites for "Ajuda Da Urología" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      boldrinrivers: `I developed modular websites for "Boldrin & Rivers" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      scconstrucciones: `I developed modular websites for "SC Construcciones" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      eddiepinturas: `I developed modular websites for "Eddie Pinturas" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      empleadasunidas: `I developed modular websites for "Empleadas Unidas" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      tumascotasegura: `I developed modular websites for "Tu Mascota Segura" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      Des991: `I developed modular websites for "99 + 1" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      sgstrategies: `I developed modular websites for "S. G. Strategies" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      danzayeniruiz: `I developed modular websites for "Danza Yeni Ruiz" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      amobility: `I developed modular websites for "AMobility" using React JS, Storybook, Tailwind CSS, and Figma to follow the design department's guidelines. I implemented individual, reusable sections that were efficiently styled with Tailwind, which were integrated to create fully customized pages based on the needs. This approach enabled agile and consistent development, providing scalable, high-quality solutions for the client.`,
      glamper:
        "I participated in the development of a web application using HTML with Bootstrap for the Front-End, complemented with a robust backend developed in Django. This web application allows the publication of Glamping-style accommodations. My contribution focused on designing intuitive user interfaces, integrating RESTful APIs, and implementing user authentication.",
      kampo:
        "I participated in the development of a mobile application using Expo CLI and React for the Front-End, styling its components with NativeWind and Firebase for Push Notifications, complemented with a robust backend developed in Django. This application is a sports social network designed to connect recruiters with players through short video viewing, messaging, direct links with recruiters, and player searches with specific characteristics. My contribution focused on leading the development team, designing intuitive user interfaces, integrating RESTful APIs, implementing user authentication, and deploying the app on Google Play and the App Store.",
      healthclubespecialista:
        "I participated in the development of a mobile application using Expo CLI and React for the Front-End, styling its components with NativeWind and Firebase for Push Notifications, complemented with a robust backend developed in Django. This application allows precise control of medical appointments assigned to a specialist, sharing information of interest for the entire community, and generating medical prescriptions for patients at Derma Club. My contribution focused on leading the development team, designing intuitive user interfaces, integrating RESTful APIs, implementing user authentication, and deploying the app on Google Play and the App Store.",
      dermaclub:
        "I participated in the development of a mobile application using Expo CLI and React for the Front-End, styling its components with NativeWind and Firebase for Push Notifications, complemented with a robust backend developed in Django. This application allows for a broader and easier control of your medical appointments and prescriptions, as well as providing a virtual store through which you can acquire medications prescribed by your trusted specialist. My contribution focused on leading the development team, designing intuitive user interfaces, integrating RESTful APIs, implementing user authentication, and deploying the app on Google Play and the App Store.",
      washpartnerus:
        "I participated in the development of a mobile application using Expo CLI and React for the Front-End, styling its components with NativeWind and Firebase for Push Notifications, complemented with a robust backend developed in Django. This application is aimed at individuals who wish to start a laundry service business from the comfort of their homes. My contribution focused on leading the development team, designing intuitive user interfaces, integrating RESTful APIs, implementing user authentication, and deploying the app on Google Play and the App Store.",
      washtimeus:
        "I participated in the development of a mobile application using Expo CLI and React for the Front-End, styling its components with NativeWind and Firebase for Push Notifications, complemented with a robust backend developed in Django. This application is an adaptation of WashApp Lavatodo for the North American market, offering subscriptions to different plans through which users can request laundry, ironing, and delivery services for their garments. My contribution focused on leading the development team, designing intuitive user interfaces, integrating RESTful APIs, implementing user authentication, and deploying the app on Google Play and the App Store.",
      washapplavatodo:
        "I participated in the development of a mobile application using Expo CLI and React for the Front-End, styling its components with NativeWind and Firebase for Push Notifications, complemented with a robust backend developed in Django. This application offers subscriptions to different plans through which users can request laundry, ironing, and delivery services for their garments. My contribution focused on leading the development team, designing intuitive user interfaces, integrating RESTful APIs, implementing user authentication, and deploying the app on Google Play and the App Store.",
      sangabriel:
        "I participated in the development of a mobile application using Expo CLI and React for the Front-End, styling its components with NativeWind and Firebase for Push Notifications, complemented with a robust backend developed in Django. This application provides travel route management, a customer listing, and tracking of each stage of the journey from start to finish. My contribution focused on leading the development team, designing intuitive user interfaces, integrating RESTful APIs, implementing user authentication, and deploying the app on Google Play and the App Store.",
    },
  },
};

export const t = (key: TranslationKeys) => {
  const { language } = useLanguage();
  const keys = key.split(".");
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  let result: any = translations[language];

  for (let i = 0; i < keys.length; i++) {
    result = result[keys[i]];
    if (!result) return "";
  }

  return result;
};
