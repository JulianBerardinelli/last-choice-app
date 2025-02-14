import { useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import CardComponent from '../CardComponent';
import ModalComponent from '../ModalComponent';
import TickerCarrousel from '../TickerCarrousel';
import FooterComponent from "../FooterComponent";
import ContentEconomia from "../content/economia/CInfoEco"
import cardData from "../content/economia/CardData";
import tickerData from "../content/economia/tickerData";


const ResultadoEconomia = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 1]);
  const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  const [selectedCard, setSelectedCard] = useState<{ title: string; content: string; link: string } | null>(null);

  const handleCardClick = (card: { title: string; content: string; link: string }) => {
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
        className="bg-green-500/15 text-white px-4 py-2 rounded-xl w-full sm:w-[90%] max-w-[700px] mx-auto mt-4"
      >
        <span>Aprender sobre Economía y Finanzas: Tu Mejor Inversión</span>
        <p>Entender cómo funciona la economía y las finanzas personales es clave para tomar mejores decisiones, evitar deudas innecesarias y aprovechar oportunidades de inversión...</p>
      </motion.div>

      <motion.section
        style={{ opacity: opacity, y: yTransform }}
        className="flex flex-col w-full justify-center items-center h-fit px-6 sm:px-12 md:px-20 bg-black/60 rounded-xl py-10 md:py-20 relative"
      >
        <h5 className="text-4xl md:text-6xl font-custom font-light text-center mb-6 absolute -top-5 left-50">
          Domina <span className="text-green-500 font-bold capitalize text-shadow-custom-glow-green">ECONOMÍA Y FINANZAS</span>
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full mt-10">
          <div className="md:col-span-3">
            <ScrollShadow hideScrollBar className="w-full h-[485px] ">
              <ContentEconomia />
            </ScrollShadow>
          </div>
          <div className="md:col-span-2">
            <article>
              <h2 className="text-3xl md:text-4xl font-bold text-white/80 font-custom">Tu Camino hacia la <span className='text-blue-500 text-shadow-custom-glow-blue'>Libertad Financiera</span></h2>
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
            <span className="text-red-500  text-shadow-custom-glow-red">CURSOS</span> RECOMENDADOS PARA TI
          </h2>
          <p className="bg-green-500/15 text-white px-4 py-2 rounded-xl w-full sm:w-[90%] max-w-[900px] mx-auto mb-3 mt-3 text-center">
            Desde Last Choice, te ofrecemos una selección de cursos diseñados para que aprendas sobre inversión, ahorro y estrategias financieras para asegurar tu futuro.
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

export default ResultadoEconomia;
