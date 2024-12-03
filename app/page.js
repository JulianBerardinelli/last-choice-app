'use client';

/* eslint-disable react/no-unescaped-entities */

import Title from '../components/Title.js';
import FormComponent from '../components/FormComponent.tsx';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const sectionsRef = useRef([]);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 1]);
  const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  const handleScrollToNext = (currentIndex) => {
    if (sectionsRef.current[currentIndex + 1]) {
      sectionsRef.current[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Primera sección */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="flex-1 flex justify-center items-center h-screen relative cursor-pointer"
        onClick={() => handleScrollToNext(0)} // Mover a la segunda sección
      >
        <div className="flex flex-col justify-center items-center gap-6 text-appear absolute inset-0 z-0 transform translate-y-[-10%]">
          <Title />
        </div>
      </section>

      {/* Segunda sección */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="h-screen flex flex-col items-center cursor-pointer gap-5 mb-36"
        onClick={() => handleScrollToNext(1)} // Mover a la tercera sección
      >
        <div className='mt-10'>
        <h2 className="text-5xl sm:text-7xl font-medium font-custom text-white/80 text-center">
          Queres<span className="text-red-500 capitalize font-semibold text-shadow-custom-glow-red"> Apostar?</span>
        </h2>
        <div className='max-w-full sm:max-w-[700px] space-y-4'>
        <p>
          Queremos cambiar el destino del <span className="text-success">dinero</span> que los usuarios gastan en <span className="text-caution">apuestas</span>, para que, en lugar de perderlo, puedan invertirlo en algo que realmente les interese y que, en el futuro, pueda generarles <span className="text-highlight">ingresos</span>. ¿Te interesa <span className="text-success">programar</span>? ¿Aprender a <span className="text-caution">invertir</span>? ¿Estudiar marketing, economía o diseño?
        </p>

        <p className='px-4 py-2 rounded-xl bg-blue-500/25 w-full  mx-auto mt-4'>
          En <span className="text-success">Last Choice</span> queremos guiarte de la mejor manera posible, para que con una mínima <span className="text-highlight">inversión</span> puedas aprender y empezar a generar <span className="text-highlight">ingresos</span> con el dinero que antes usabas para <span className="text-danger">apostar</span>.
        </p>

        <p>
          Todavía estamos a tiempo de revertir esta situación. El primer paso es reconocer el <span className="text-danger">problema</span> y no negarlo. Ayudemos a cambiar el rumbo de los <span className="text-caution">adolescentes</span>. <span className="text-success">¡Te espero!</span>
        </p>

        </div>
        </div>

        <motion.section
        style={{ opacity: opacity, y: yTransform }}
        className="flex flex-col  justify-center items-center h-fit px-5 md:px-20 bg-black/60 rounded-xl py-6 relative mt-20"
        >
          <h5 className="text-5xl md:text-6xl font-custom font-light text-center mb-4 absolute -top-5 left-50">
            
            El  <span className="text-green-500 font-bold capitalize text-shadow-custom-glow-green"> Primer</span> Paso
          </h5>
          <div className='max-w-full sm:max-w-[700px] space-y-4 mt-5'>
            <p>
              Todo cambio comienza con una pregunta: <span className="text-highlight">¿esto está sumando o restando en mi vida?</span> Apostar puede parecer <span className="text-caution">inofensivo</span>, incluso emocionante, pero detrás de cada apuesta hay pequeñas decisiones que construyen <span className="text-danger">grandes consecuencias</span>.
            </p>

            <p>
              <span className="text-success">Reflexionar</span> es el primer paso para <span className="text-highlight">recuperar el control</span>. Piensa en las veces que apostaste más de lo planeado, en el <span className="text-danger">dinero</span> que pudo haberse usado para algo <span className="text-success">significativo</span> o en los momentos en los que el <span className="text-caution">juego</span> ocupó un lugar que no le correspondía.
            </p>

            <p>
              Este no es el final de la historia, es el principio de un <span className="text-highlight">cambio</span>. Darte cuenta de cómo afecta tu vida es el primer paso para construir un futuro donde cada decisión esté alineada con lo que realmente <span className="text-success">importa</span>. El camino no es fácil, pero <span className="text-highlight">reconocerlo</span> es el comienzo.
            </p>

          </div>
        </motion.section>
      </section>

      {/* Tercera sección */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="h-screen flex flex-col items-center justify-center text-white sm:mt-20"
      >
        <FormComponent />
      </section>
    </>
  );
}
