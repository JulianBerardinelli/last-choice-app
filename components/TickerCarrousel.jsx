import React from 'react';
import Ticker from 'framer-motion-ticker';
import tickerData from './content/programacion/tickerData'; // Asegúrate de que la ruta de importación sea correcta
import { Button } from '@nextui-org/react';

function TickerCarrousel() {
  return (
    <div className="App overflow-hidden"> {/* Aseguramos que el contenedor no tenga desbordamientos */}
      <Ticker duration={100}>
        {tickerData.map((item, index) => (
          <div
            key={index}
            className="relative bg-slate-900 bg-cover bg-center bg-no-repeat m-1 h-[450px] w-[250px] p-5 rounded-lg flex flex-col justify-between items-center text-white shadow-lg border-1 border-green-500 shadow-blue-700 overflow-hidden"
          >
            {/* Renderizamos el componente del SVG */}
            <div className="h-[80px] flex justify-center items-center">
              <item.icon className="w-16 h-16" /> {/* Renderiza el icono SVG */}
            </div>

            {/* Contenedor del título y descripción */}
            <div className="flex-grow flex flex-col justify-center items-center text-center space-y-2">
              <h3 className="text-lg font-bold line-clamp-2">{item.title}</h3>
              <p className="text-sm overflow-hidden text-ellipsis">{item.content}</p>
            </div>

            {/* Contenedor de las etiquetas */}
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
              <a href={item.url} target="_blank" rel="noopener noreferrer"> {/* Usamos <a> con _blank */}
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

