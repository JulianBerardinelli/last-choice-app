export interface CardData {
    title: string;
    imageSrc: string;
    content: string;
  }
  
  const cardData: CardData[] = [
    {
      title: "Habilidades de Listening",
      imageSrc: "/assets/img/media/listening.jpg",
      content: "La habilidad de listening es esencial para comprender a hablantes nativos en conversaciones reales. Practicar esta habilidad incluye escuchar podcasts, entrevistas y películas en inglés, lo que te ayudará a identificar diferentes acentos y tonos."
    },
    {
      title: "Speaking y Fluidez",
      imageSrc: "/assets/img/media/speaking.jpg",
      content: "Hablar inglés con fluidez requiere práctica constante. Participar en intercambios lingüísticos o sesiones con profesores nativos puede ayudarte a ganar confianza y mejorar tu pronunciación."
    },
    {
      title: "Ampliación de Vocabulario",
      imageSrc: "/assets/img/media/vocabulary.jpg",
      content: "Ampliar tu vocabulario es fundamental para comunicarte de manera efectiva. Aprende nuevas palabras, expresiones idiomáticas y phrasal verbs que te serán útiles tanto en contextos formales como informales."
    },
    {
        title: "Inglés para Negocios",
        imageSrc: "/assets/img/media/lider.jpg",
        content: "El inglés empresarial se centra en habilidades específicas como redacción de correos electrónicos, presentaciones y negociaciones. Es esencial para aquellos que trabajan en entornos internacionales."
      }

  ];
  
  export default cardData;
  