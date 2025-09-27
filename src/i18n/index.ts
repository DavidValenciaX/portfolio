export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'theme.toggle': 'Cambiar tema',
    'lang.toggle': 'Cambiar idioma',
    'hero.greeting': '¡Hola! Soy',
    'hero.contact': 'Contáctame',
    'hero.downloadResume': 'Descargar CV',
    'hero.visitProfile': 'Visitar perfil de',
    'about.title': 'Acerca de mí',
    'about.subtitle': 'Conoce más sobre mi experiencia, habilidades y formación profesional',
    'about.summary.title': 'Resumen Profesional',
    'about.education': 'Educación',
    'about.certifications': 'Certificaciones',
    'about.certificates': 'certificados',
    'about.languages': 'Idiomas',
    'about.downloadResume': 'Descargar CV',
    'about.contact': 'Contáctame',
    'about.skills.title': 'Habilidades Técnicas',
    'about.present': 'Presente',
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'theme.toggle': 'Toggle theme',
    'lang.toggle': 'Change language',
    'hero.greeting': 'Hello! I\'m',
    'hero.contact': 'Contact Me',
    'hero.downloadResume': 'Download Resume',
    'hero.visitProfile': 'Visit profile on',
    'about.title': 'About Me',
    'about.subtitle': 'Learn more about my experience, skills and professional background',
    'about.summary.title': 'Professional Summary',
    'about.education': 'Education',
    'about.certifications': 'Certifications',
    'about.certificates': 'certificates',
    'about.languages': 'Languages',
    'about.downloadResume': 'Download Resume',
    'about.contact': 'Contact Me',
    'about.skills.title': 'Technical Skills',
    'about.present': 'Present',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}