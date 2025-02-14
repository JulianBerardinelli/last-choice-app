import { useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import ContentIA from '../content/ia/CInfoIa';
import CardComponent from '../CardComponent';
import ModalComponent from '../ModalComponent';
import cardData from '../content/ia/CardData'; // Mantener los otros datos
import TickerCarrousel from '../TickerCarrousel';
import YoutubeIcon from "../svg-logos/YoutubeIcon";
import tickerData from "../content/ia/tickerData";
import FooterComponent from "../FooterComponent";

// components/ResultadoIA.tsx
const ResultadoIA = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 1]);
  const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  const [selectedCard, setSelectedCard] = useState<{ title: string; content: string; link: string; } | null>(null);

  const handleCardClick = (card: { title: string; content: string; link: string; }) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <motion.div 
        initial={{ y: -400, opacity: 0.5, rotateX: 10 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-blue-500/15 text-white px-4 py-2 rounded-xl w-full max-w-[700px] mx-auto mt-4"
      >
        <span>Descubre el Futuro: Aprende sobre Inteligencia Artificial.</span>
        <p>La inteligencia artificial está transformando múltiples industrias y revolucionando la forma en que interactuamos con la tecnología. Comprender este campo puede abrirte nuevas oportunidades en el mundo digital y ayudarte a estar a la vanguardia de la innovación...</p>
      </motion.div>

      <motion.section
        style={{ opacity: opacity, y: yTransform }}
        className="flex flex-col w-full justify-center items-center h-fit px-6 sm:px-12 md:px-20 bg-black/60 rounded-xl py-10 md:py-20 relative"
      >
        <h5 className="text-4xl md:text-6xl font-custom font-light text-center mb-6 absolute -top-5 left-50">
          Aprende sobre <span className="text-blue-500 font-bold capitalize text-shadow-custom-glow-blue"> INTELIGENCIA ARTIFICIAL</span>
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full mt-10">
          <div className="md:col-span-3">
            <ScrollShadow hideScrollBar className="w-full h-[485px] ">
              <ContentIA />
            </ScrollShadow>
          </div>
          
          <div className="md:col-span-2">
            <article>
              <h2 className="flex items-center gap-2 text-2xl md:text-4xl font-bold text-white/80 font-custom">Aprende de los <span className='text-green-500 text-shadow-custom-glow-green'> Mejores</span>
              <YoutubeIcon size={40} />
              </h2>
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
        </div>

        <div>
          <h2 className="text-4xl font-bold text-white/80 font-custom text-center mt-10">
            <span className="text-red-500 text-shadow-custom-glow-red">CURSOS</span> PARA ADENTRARTE EN EL MUNDO DE LA IA
          </h2>
          <p className="bg-blue-500/15 text-white px-4 py-2 rounded-xl w-full sm:w-[90%] max-w-[900px] mx-auto mb-3 mt-3 text-center">
            Te presentamos una selección de cursos diseñados para ayudarte a comprender los fundamentos y las aplicaciones avanzadas de la inteligencia artificial. Desde aprendizaje automático hasta redes neuronales, estos cursos te proporcionarán el conocimiento necesario para aprovechar todo el potencial de la IA.
          </p>
        </div>
        <TickerCarrousel data={tickerData} />
      </motion.section>

      {selectedCard && (
        <ModalComponent
          isOpen={!!selectedCard}
          onClose={closeModal}
          title={selectedCard.title}
          content={selectedCard.content}
          link={selectedCard.link}
        />
      )}
      <section className='mt-20'>
        <FooterComponent/>
      </section>
    </>
  );
};

export default ResultadoIA;
