export interface CardData {
  title: string;
  imageSrc: string;
  content: string;
  link: string;
}

const cardData: CardData[] = [
  {
    title: "¿Qué es la INTELIGENCIA ARTIFICIAL?",
    imageSrc: "/assets/img/ia/ia-1.jpg",
    content: "¿Qué es la inteligencia artificial? , ¿cómo funciona?, ¿se parece a una inteligencia humana? En este video, Derivando ofrece una introducción a la inteligencia artificial y muestra cómo aplicarla en la resolución de problemas.",
    link: "https://www.youtube.com/watch?v=_tA5cinv0U8&ab_channel=Derivando",
  },
  {
    title: "Machine Learning: ruta para ser programador de IA",
    imageSrc: "/assets/img/ia/ia-2.jpg",
    content: "Machine Learning: la ruta ser desarrollador de Inteligencia Artificial (científico de datos)",
    link: "https://www.youtube.com/watch?v=JDW0lfFg1tQ&ab_channel=ProgramadorX",
  },
  {
    title: "Tu primera red neuronal en Python y Tensorflow",
    imageSrc: "/assets/img/ia/ia-3.jpg",
    content: "Entrenamiento y uso de una red neuronal desde cero, con Python y Tensorflow: El objetivo del video es usar una red simple, que cumpla una función y nos permita ver cómo funciona.",
    link: "https://www.youtube.com/watch?v=iX_on3VxZzk&list=PLZ8REt5zt2Pn0vfJjTAPaDVSACDvnuGiG&ab_channel=RingaTech",
  },
  {
    title: "PROGRAMAR RÁPIDO usando ChatGPT",
    imageSrc: "/assets/img/ia/ia-4.jpg",
    content: "En este video, Dalto analiza si se puede aprender a programar con ChatGPT, dando consejos clave sobre prompts, interacción y recursos. Además, pone a prueba la IA con un desafío de Payoneer y comparte tips sobre Prompt Engineering. ¡Ideal para sacarle el máximo provecho a la IA!",
    link: "https://www.youtube.com/watch?v=NNFILURqLv8&ab_channel=SoyDalto",
  },
];

export default cardData;
