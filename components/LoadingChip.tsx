"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingChip = () => {
  // Array de fichas (rutas a tus imágenes SVG)
  const pokerChips = [
    '/assets/img/poker-chips/poker-chip-red.svg',
    '/assets/img/poker-chips/poker-chip-black.svg',
    '/assets/img/poker-chips/poker-chip-blue.svg',
    '/assets/img/poker-chips/poker-chip-white.svg',
    '/assets/img/poker-chips/poker-chip-green.svg',
  ];

  // Estado para controlar la ficha activa
  const [currentChipIndex, setCurrentChipIndex] = useState(0);

  // Cambia la ficha cada vez que la animación completa una rotación
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentChipIndex((prevIndex) => (prevIndex + 1) % pokerChips.length);
    }, 600); // Cambia de ficha cada 1.5 segundos (ajusta según la duración de la rotación)
    
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [pokerChips.length]);

  return (
      <motion.div className="flex flex-col items-center mt-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
      }}
      >
        {/* Poker chip que rota y cambia */}
        <motion.img
          key={currentChipIndex} // React key para forzar el cambio de imagen
          src={pokerChips[currentChipIndex]} // Mostrar la ficha actual del array
          alt="Poker Chip"
          className="w-10 h-10"  // Ajusta el tamaño de la ficha
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5, 
            ease: "linear", 
            repeat: Infinity 
          }}
        />
      </motion.div>
  );
};

export default LoadingChip;


