"use client";

import { Suspense, useEffect, useState } from 'react';
import { useFormContext, FormValues } from '../../context/FormContext';
import ResultComponent from '../../components/ResultComponent';
import personalizedMessages from '../../data/personalizedMessages.json'; 
import { motion } from 'framer-motion';
import LoadingChip from '../../components/LoadingChip';

export default function ResultPage() {
  const { formData, clearFormData } = useFormContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!formData) {
      const storedFormData = localStorage.getItem("formData");
      if (storedFormData) {
        const parsedData: FormValues = JSON.parse(storedFormData);
        console.log("Datos recuperados de localStorage:", parsedData);
      }
    }
  }, [formData]);

    // Mostrar el spinner durante 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!formData) {
    return <div className='flex justify-center align-middle'>No se han encontrado los datos necesarios. Por favor, vuelve al formulario e inténtalo de nuevo.</div>;
  }

  // Mostrar el spinner mientras se carga el contenido
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingChip />
      </div>
    );
  }


  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ResultPageContent formData={formData} />
    </Suspense>
  );
}

type ResultPageContentProps = {
  formData: FormValues;
};

function getPersonalizedMessages(formData: FormValues) {
  const { dineroApuestaSemana, edad, recuperarDinero } = formData;
  const { conditions } = personalizedMessages;

  const messageDineroApuesta = conditions.dineroApuestaSemana[dineroApuestaSemana] || '';
  let messageEdad = '';
  if (edad >= 18 && edad <= 25) {
    messageEdad = conditions.edad['18-25'];
  } else if (edad > 25 && edad <= 40) {
    messageEdad = conditions.edad['25-40'];
  } else if (edad > 40) {
    messageEdad = conditions.edad['40+'];
  }

  const messageRecuperarDinero = conditions.recuperarDinero[recuperarDinero.toString()] || '';

  return {
    messageDineroApuesta,
    messageEdad,
    messageRecuperarDinero
  };
}

function ResultPageContent({ formData }: ResultPageContentProps) {
  const { messageDineroApuesta, messageEdad, messageRecuperarDinero } = getPersonalizedMessages(formData);

  
  return (

    <>
      <motion.section 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className='flex-1 flex justify-center items-center h-screen relative custom-margin'
      >
        <div className="flex flex-col justify-center items-center text-left gap-6 text-appear absolute inset-0 z-0 transform translate-y-[10%] px-6 sm:px-20 ">
          <h1 className='text-4xl sm:text-7xl font-medium font-custom text-white/80 text-center'>
            Hola <span className='text-green-500 capitalize font-bold text-shadow-custom-glow-green'>{formData.nombre}!</span>
          </h1>
          <div className='max-w-full sm:max-w-[700px] space-y-4'>
            <p dangerouslySetInnerHTML={{ __html: messageDineroApuesta }} />
            <p dangerouslySetInnerHTML={{ __html: messageEdad }} />
            <p className='text-white/80' dangerouslySetInnerHTML={{ __html: messageRecuperarDinero }} />
          </div>
          
          <ResultComponent opcionElegida={formData.opcionAprender} />
        </div>
      </motion.section>
    </>
  );
}
