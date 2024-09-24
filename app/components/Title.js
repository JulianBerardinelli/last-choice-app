// app/components/Title.js
'use client'; // Para usar useEffect en el lado del cliente

import { useEffect } from 'react';

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
    <h1 id="glitch-text" className="text-8xl font-semibold text-blue-500 uppercase font-custom">
      <span id="last-text" className="text-blue-500">Last</span>
      <span id="dynamic-word" className="text-8xl font-custom neon-text">Bet<span className="filler text-blue-500">. . .</span></span>
    </h1>
  );
}