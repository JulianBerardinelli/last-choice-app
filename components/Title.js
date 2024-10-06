
'use client'; 

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Title() {
  useEffect(() => {
    const dynamicWord = document.getElementById('dynamic-word');
    const lastText = document.getElementById('last-text');
    const filler = document.querySelector('.filler');

    function glitchEffect() {
      if (dynamicWord && filler) {
        dynamicWord.innerHTML = 'stake';
        dynamicWord.style.color = '#ff0000';
        dynamicWord.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.7), 0 0 20px rgba(255, 0, 0, 0.7), 0 0 30px rgba(255, 0, 0, 0.7)';
        filler.style.display = 'none';

        setTimeout(() => {
          dynamicWord.innerHTML = 'Choice';
          dynamicWord.style.color = '#00ff00';
          dynamicWord.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.7), 0 0 30px rgba(0, 255, 0, 0.7)';
          dynamicWord.classList.add('glitch-choice');
          lastText?.classList.add('glitch-last');
        }, 200);
      }
    }

    setTimeout(() => {
      glitchEffect();
    }, 3000);
  }, []);

  return (
    <>
    <motion.h1
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      
      id="glitch-text" 
      className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold text-blue-500/70 uppercase font-custom"
    >
      <span id="last-text" className="text-blue-500/70">Last</span>
      <span 
        id="dynamic-word" 
        className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-custom neon-text"
      >
        Bet<span className="filler text-blue-500/70">. . .</span>
      </span>
    </motion.h1>
    <motion.p 
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      transition={{
        delay: 3.5, // Retardo para aparecer después del título
        duration: 0.3,
        ease: "easeOut",
      }}
      style={{ transformOrigin: "top" }} 
      className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-blue-200 text-center">
      The home <span className="font-semibold text-red-500">always wins</span>, Don&apos;t forget it. <br />
      But now, you are at <span className="font-bold text-green-500">home</span>
    </motion.p>
    </>
  );
}
