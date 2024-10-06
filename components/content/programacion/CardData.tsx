export interface CardData {
  title: string;
  imageSrc: string;
  content: string;
}

const cardData: CardData[] = [
  {
    title: "Desarrollador Front-End",
    imageSrc: "/assets/img/media/frontend.jpg",
    content: "El desarrollo front-end es la parte de la creación de sitios web o aplicaciones que se enfoca en la interfaz de usuario (UI) y en la experiencia del usuario (UX). Involucra la construcción de todo lo que los usuarios ven e interactúan en un navegador web, como botones, formularios, menús de navegación, y el diseño general de la página. Utiliza tecnologías clave como HTML para la estructura, CSS para el estilo y JavaScript para la interactividad. El objetivo del front-end es hacer que las interfaces sean atractivas, funcionales y fáciles de usar, optimizando la experiencia del usuario."
  },
  {
    title: "Desarrollador Back-End",
    imageSrc: "/assets/img/media/backend.jpg",
    content: "El desarrollo back-end es la parte del desarrollo web que se encarga de la lógica del servidor, las bases de datos y la interacción con los sistemas y aplicaciones del lado del servidor. Es responsable de gestionar la lógica de la aplicación, la autenticación, la seguridad, el almacenamiento y recuperación de datos, y la comunicación entre el servidor y el front-end. Los desarrolladores back-end trabajan con lenguajes como Python, Java, Ruby, C# y frameworks como Node.js, Django o .NET. El objetivo del back-end es asegurar que el sistema funcione correctamente, sea escalable y pueda manejar las solicitudes de los usuarios de manera eficiente."
  },
  {
    title: "Desarrollo de Base de Datos",
    imageSrc: "/assets/img/media/databases.jpg",
    content: "Esta etapa se encarga del diseño, implementación y mantenimiento de la base de datos que almacenará la información de la aplicación. Incluye la creación de estructuras como tablas, relaciones entre datos, consultas, y optimización del rendimiento de las bases de datos. Los desarrolladores de bases de datos utilizan sistemas de gestión como MySQL, PostgreSQL, MongoDB o SQL Server. Su objetivo es asegurar que los datos se almacenen de manera eficiente, segura y estén fácilmente accesibles para el back-end."
  },
  {
    title: "Testing y Control de Calidad (QA)",
    imageSrc: "/assets/img/media/testing.jpg",
    content: "Esta etapa se enfoca en probar el software para identificar errores o fallos y asegurar que cumple con los requisitos del cliente. Involucra pruebas manuales o automatizadas para evaluar aspectos como la funcionalidad, rendimiento, seguridad y usabilidad. Los testers utilizan herramientas como Selenium, JUnit o Cypress. El objetivo es entregar un producto de alta calidad, libre de errores, que funcione bien en diferentes entornos y condiciones."
  },
  // Agrega más tarjetas aquí...
];

export default cardData;
