import React from 'react';
import Ticker from 'framer-motion-ticker';
import { Button } from '@nextui-org/react';

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
  return (
    <div className="App overflow-hidden">
      <Ticker duration={100}>
        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-slate-900 bg-cover bg-center bg-no-repeat m-1 h-[450px] w-[250px] p-5 rounded-lg flex flex-col justify-between items-center text-white shadow-lg border-1 border-green-500 shadow-blue-700 overflow-hidden"
          >
            {/* Icono del curso */}
            <div className="h-[80px] flex justify-center items-center">
              <item.icon className="w-16 h-16"/>
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
    </div>
  );
}

export default TickerCarrousel;

