import GrammarIcon from '../../svg-logos/GrammarIcon'; // Componente SVG para Gramática
import VocabularyIcon from '../../svg-logos/VocabularyIcon'; // Componente SVG para Vocabulario
import SpeakingIcon from '../../svg-logos/SpeakingIcon'; // Componente SVG para Speaking
import ListeningIcon from '../../svg-logos/ListeningIcon'; // Componente SVG para Listening
import WritingIcon from '../../svg-logos/WritingIcon'; // Componente SVG para Writing
import IELTSIcon from '../../svg-logos/IELTSIcon'; // Componente SVG para IELTS
import TOEFLIcon from '../../svg-logos/TOEFLIcon'; // Componente SVG para TOEFL
import BusinessEnglishIcon from '../../svg-logos/BuisnessEnglishIcon' // Componente SVG para Business English

const tickerData = [
  {
    title: "Curso de Gramática Inglesa",
    content: "Domina las reglas gramaticales esenciales para construir frases correctamente en inglés.",
    icon: GrammarIcon,
    TAGS: ["Present Simple", "Past Continuous", "Conditional Sentences"],
    url: "https://www.coursera.org/specializations/grammar"
  },
  {
    title: "Ampliación de Vocabulario",
    content: "Aprende palabras y expresiones clave para diferentes situaciones cotidianas y profesionales.",
    icon: VocabularyIcon,
    TAGS: ["Phrasal Verbs", "Idioms", "Slang"],
    url: "https://www.udemy.com/course/english-vocabulary/"
  },
  {
    title: "Curso de Speaking",
    content: "Mejora tu pronunciación y fluidez hablando con profesores nativos.",
    icon: SpeakingIcon,
    TAGS: ["Pronunciation", "Fluency", "Conversation"],
    url: "https://www.italki.com/"
  },
  {
    title: "Entrenamiento en Listening",
    content: "Comprende diferentes acentos y mejora tus habilidades para escuchar.",
    icon: ListeningIcon,
    TAGS: ["Podcasts", "Movies", "Interviews"],
    url: "https://www.ted.com/"
  },
  {
    title: "Curso de Writing",
    content: "Aprende a escribir ensayos, correos electrónicos y documentos en inglés.",
    icon: WritingIcon,
    TAGS: ["Essays", "Emails", "Reports"],
    url: "https://www.edx.org/course/academic-and-business-writing"
  },
  {
    title: "Preparación para I",
    content: "Obtén la mejor puntuación en el examen de inglés internacional IELTS.",
    icon: IELTSIcon,
    TAGS: ["Reading", "Writing", "Speaking", "Listening"],
    url: "https://www.britishcouncil.org/"
  },
  {
    title: "Preparación para TOEFL",
    content: "Domina todas las secciones del TOEFL y mejora tus posibilidades de admisión.",
    icon: TOEFLIcon,
    TAGS: ["Listening", "Speaking", "Writing", "Reading"],
    url: "https://www.toefl.org/"
  },
  {
    title: "Inglés para Negocios",
    content: "Desarrolla habilidades en inglés enfocadas en el ámbito profesional y empresarial.",
    icon: BusinessEnglishIcon,
    TAGS: ["Presentations", "Emails", "Negotiations"],
    url: "https://www.udemy.com/course/business-english/"
  }
];

export default tickerData;