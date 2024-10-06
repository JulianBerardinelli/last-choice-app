import WebDevIcon from '../../svg-logos/WebDevIcon';
import JavaScriptIcon from '../../svg-logos/JavaScriptIcon';
import ReactIcon from '../../svg-logos/ReactIcon';
import PythonIcon from '../../svg-logos/PythonIcon';
import NodeIcon from '../../svg-logos/NodeIcon';
import JavaIcon from '../../svg-logos/JavaIcon'; // Componente SVG para Java
import AngularIcon from '../../svg-logos/AngularIcon'; // Componente SVG para Angular
import NextJSIcon from '../../svg-logos/NextJSIcon'; // Componente SVG para Next.js
import FlutterIcon from '../../svg-logos/FlutterIcon'; // Componente SVG para Flutter

const tickerData = [
  {
    title: "Curso de HTML y CSS",
    content: "Aprende a crear páginas web con HTML y CSS desde cero.",
    icon: WebDevIcon, // Componente SVG
    TAGS: ["Responsive Design", "Flexbox", "Grid"],
    url: "https://www.coderhouse.com/es/?pipe_source=google&pipe_medium=cpc&pipe_campaign=0&gad_source=1&gclid=Cj0KCQjw6oi4BhD1ARIsAL6pox2_eoQAlj-BiCZKQYkG7JL2GQQCb4M7znkzeIufhy6Ea95Bbu5B24gaApxXEALw_wcB"
  },
  {
    title: "Curso de JavaScript",
    content: "Aprende JavaScript desde cero y domina el lenguaje de la web.",
    icon: JavaScriptIcon, // Componente SVG
    TAGS: ["ES6+", "DOM Manipulation", "Async/Await", "APIs"],
    url: "https://platzi.com/escuela/javascript/"
  },
  {
    title: "Curso de React",
    content: "Desarrolla aplicaciones dinámicas con React.",
    icon: ReactIcon, // Componente SVG
    TAGS: ["Components", "Hooks", "State Management", "JSX"],
    url: "https://codigofacilito.com/cursos/react-profesional"
  },
  {
    title: "Curso de Node.js",
    content: "Construye aplicaciones backend robustas con Node.js.",
    icon: NodeIcon, // Reutiliza el logo de JavaScript para Node.js
    TAGS: ["Express", "APIs", "Database Integration"],
    url: "https://www.educacionit.com/curso-de-nodejs-y-mongodb"
  },
  {
    title: "Curso de Python",
    content: "Domina Python para desarrollo web, análisis de datos y más.",
    icon: PythonIcon, // Componente SVG
    TAGS: ["Data Science", "Machine Learning", "Django"],
    url: "https://www.coursera.org/specializations/python"
  },
  {
    title: "Curso de Java",
    content: "Aprende los fundamentos de Java y crea aplicaciones robustas.",
    icon: JavaIcon, // Componente SVG para Java
    TAGS: ["Spring", "OOP", "Multithreading"],
    url: "https://www.udemy.com/course/java-the-complete-java-developer-course/"
  },
  {
    title: "Curso de Angular",
    content: "Domina el desarrollo de aplicaciones frontend con Angular.",
    icon: AngularIcon, // Componente SVG para Angular
    TAGS: ["TypeScript", "RxJS", "State Management"],
    url: "https://www.udemy.com/course/the-complete-guide-angular/"
  },
  {
    title: "Curso de Next.js",
    content: "Aprende a crear aplicaciones web estáticas y dinámicas con Next.js.",
    icon: NextJSIcon, // Componente SVG para Next.js
    TAGS: ["SSR", "SSG", "API Routes"],
    url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/"
  },
  {
    title: "Curso de Flutter",
    content: "Crea aplicaciones móviles nativas con Flutter.",
    icon: FlutterIcon, // Componente SVG para Flutter
    TAGS: ["Cross-Platform", "Dart", "UI Design", "State Management"],
    url: "https://www.udemy.com/course/flutter-dart-the-complete-guide/"
  }
];

export default tickerData;
