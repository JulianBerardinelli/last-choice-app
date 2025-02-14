export interface CardData {
  title: string;
  imageSrc: string;
  content: string;
  link: string;
}

const cardData: CardData[] = [
  {
    title: "¿Qué es la economía? | Conceptos básicos de economía",
    imageSrc: "/assets/img/finanzas/finanzas4.jpg",
    content: "Aprende: ¿qué es la economía?, ¿qué son los bienes?, ¿qué son los servicios?, ¿qué es el proceso económico?, ¿cuáles son las actividades del proceso económico?, ¿qué es la producción, la distribución, la comercialización y el consumo?",
    link: "https://www.youtube.com/watch?v=XX2QXRazErs&ab_channel=GCFAprendeLibre",
  },
  {
    title: "Los 4 Economistas Más Importantes de la Historia",
    imageSrc: "/assets/img/finanzas/finanzas3.jpg",
    content: "Descubre quiénes son los economistas más influyentes de la historia y sus aportes significativos al desarrollo de la teoría económica.",
    link: "https://www.youtube.com/watch?v=msVU9rGz-Vo",
  },
  {
    title: "Sobre Finanzas Personales en 16 Minutos",
    imageSrc: "/assets/img/finanzas/finanzas1.jpg",
    content: "Una guía rápida que resume los conceptos clave de las finanzas personales y ofrece consejos prácticos para alcanzar la libertad financiera.",
    link: "https://www.youtube.com/watch?v=7sMFOxcTAN0",
  },
  {
    title: "Cómo Gestionar tu Dinero: Guía de Finanzas Personales",
    imageSrc: "/assets/img/finanzas/finanzas2.jpg",
    content: "Este video ofrece una guía paso a paso sobre cómo gestionar tu dinero, desde la creación de un presupuesto hasta la inversión inteligente.",
    link: "https://www.youtube.com/watch?v=40nEm-3zaAs",
  },
];

export default cardData;
