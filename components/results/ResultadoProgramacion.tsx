import { useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import ContentProgramacion from '../content/programacion/CInfoProgramacion';
import CardComponent from '../CardComponent';
import ModalComponent from '../ModalComponent';
import cardData from '../content/programacion/CardData'; // Mantener los otros datos
import TickerCarrousel from '../TickerCarrousel';

const ResultadoProgramacion = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 1]);
  const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  const [selectedCard, setSelectedCard] = useState<{ title: string; content: string } | null>(null);

  const handleCardClick = (card: { title: string; content: string }) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  const colors = ['#632bf3', '#f122c8', '#f16022', '#9ef344', '#44d3f3'];
  return (
    <>


      <motion.div 
        initial={{ y: -400, opacity: 0.5, rotateX: 10 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-blue-500/15 text-white px-4 py-2 rounded-xl w-full sm:w-[90%] max-w-[700px] mx-auto mt-4"
      >
        <span>Invertir en Programación: Tu Mejor Apuesta.</span>
        <p>En un mundo digital, aprender a programar es una habilidad con gran demanda y proyección laboral...</p>
      </motion.div>

      <motion.section
        style={{ opacity: opacity, y: yTransform }}
        className="flex flex-col w-full justify-center items-center h-fit px-6 sm:px-12 md:px-20 bg-black/60 rounded-xl py-10 md:py-20 mt-10 relative"
      >
        <h5 className="text-4xl md:text-6xl font-custom font-light text-center mb-6 absolute -top-5 left-50">
          Aprende a <span className="text-blue-500 font-bold capitalize text-shadow-custom-glow-blue"> &lt;PROGRAMAR/&gt;</span>
        </h5>

        {/* Contenido ya existente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full mt-10">
          <div className="md:col-span-3">
            <article>
              <h2 className="text-3xl md:text-4xl font-bold text-white/80 font-custom">La ruta del <span className='text-green-500 text-shadow-custom-glow-green'> Desarrollador</span></h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-4'>
                {cardData.map((card, index) => (
                  <CardComponent
                    key={index}
                    title={card.title}
                    imageSrc={card.imageSrc}
                    onOpen={() => handleCardClick(card)}
                  />
                ))}
              </div>
            </article>
          </div>

          <div className="md:col-span-2">
            <ScrollShadow hideScrollBar className="w-full h-[485px] ">
              <ContentProgramacion />
            </ScrollShadow>
          </div>
        </div>


        <div>
          <h2 className="text-4xl font-bold text-white/80 font-custom text-center mt-10"> <span className="text-red-500 text-shadow-custom-glow-red">CURSOS</span> INTERESANTES PARA TI</h2>
          <p className="bg-blue-500/15 text-white px-4 py-2 rounded-xl w-full sm:w-[90%] max-w-[900px] mx-auto mb-3 mt-3 text-center">Desde Last Choice, te ofrecemos una selección de cursos diseñados para ayudarte a desarrollar tus habilidades y avanzar en tu carrera profesional. Elige entre una variedad de temas que van desde la programación hasta el desarrollo web y más.</p>
        </div>
        <TickerCarrousel />


      </motion.section>



      {selectedCard && (
        <ModalComponent
          isOpen={!!selectedCard}
          onClose={closeModal}
          title={selectedCard.title}
          content={selectedCard.content}
        />
      )}
    </>
  );
};

export default ResultadoProgramacion;

