import React, { useState, useEffect } from 'react';
import Ticker from 'framer-motion-ticker';
import { Button } from '@nextui-org/react';
import CourseIcon from './svg-logos/CourseIcon'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

type TickerCarrouselProps = {
  data: {
    title: string;
    content: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    TAGS: string[];
    url: string;
  }[];
};

function TickerCarrousel({ data }: TickerCarrouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof data[0] | null>(null);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (item: typeof data[0]) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="ticker-wrapper overflow-hidden w-full">
      {/* Vista para desktop y tablet (carrusel) */}
      {!isMobile && (
        <Ticker duration={100}>
          {data.map((item, index) => (
            <div
              key={index}
              className="ticker-item relative bg-slate-900 bg-cover bg-center bg-no-repeat m-1 h-[450px] w-[250px] p-5 rounded-lg flex flex-col justify-between items-center text-white shadow-lg border-1 border-green-500 shadow-blue-700 overflow-hidden"
            >
              {/* Icono del curso */}
              <div className="h-[80px] flex justify-center items-center">
                <item.icon className="w-16 h-16" />
              </div>

              {/* Título y descripción */}
              <div className="flex-grow flex flex-col justify-center items-center text-center space-y-2">
                <h3 className="text-lg font-bold line-clamp-2">{item.title}</h3>
                <p className="text-sm overflow-hidden text-ellipsis">{item.content}</p>
              </div>

              {/* Etiquetas */}
              <div className="flex flex-wrap justify-center mt-4 w-full max-h-20 overflow-hidden">
                {item.TAGS.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-black bg-opacity-50 px-2 py-1 rounded-md text-xs m-1 truncate"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botón de Ver Más */}
              <div className="mt-4">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <Button color="primary" variant="shadow">
                    Ver más
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </Ticker>
      )}

      {/* Vista para mobile (cards en dos columnas + modal) */}
      {isMobile && (
        <div className="grid grid-cols-2 gap-4 p-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="
              cursor-pointer bg-slate-900 m-1 h-[200px] w-full p-3 rounded-lg flex flex-col justify-center items-center text-white shadow-lg border-1 border-green-500 shadow-blue-700 gap-5 text-center"
              onClick={() => handleCardClick(item)}
            >
              <div className="h-[50px] flex justify-center items-center">
                <item.icon className="w-12 h-12" />
              </div>
              <h3 className="text-sm font-bold line-clamp-2">{item.title}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Modal para mobile */}
      {selectedItem && (
        <Modal isOpen={!!selectedItem} onOpenChange={closeModal} className="border-spacing-2 border-red-500">
          <ModalContent className="bg-black/90 before:blur-lg border-r-0 shadow-lg shadow-blue-700 border-2 border-green-500 flex flex-col">
            {() => (
              <>
                <ModalHeader className="flex justify-start gap-4 items-center bg-blue-900/35 text-white">
                  {selectedItem.title}
                  {selectedItem.icon && <selectedItem.icon className="w-7 h-7" />}
                </ModalHeader>
                <ModalBody className="bg-blue-900/35">
                  <p>{selectedItem.content}</p>
                  <div className="flex flex-wrap justify-center mt-4">
                    {selectedItem.TAGS.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-black bg-opacity-50 px-2 py-1 rounded-md text-xs m-1 truncate text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {selectedItem.url && (
                    <a
                      href={selectedItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 text-white"
                    >
                      <CourseIcon size={40} />
                      Ver Curso
                    </a>
                  )}
                </ModalBody>
                <ModalFooter className="bg-blue-900/35">
                  <Button color="danger" variant="light" onPress={closeModal}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default TickerCarrousel;

