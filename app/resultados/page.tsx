"use client";

import { Suspense } from 'react';
import { useFormContext, FormValues } from '../../context/FormContext';
import ResultComponent from '../../components/ResultComponent';
import personalizedMessages from '../../data/personalizedMessages.json'; 

export default function ResultPage() {
  const { formData } = useFormContext();

  if (!formData) {
    return <div>No se han encontrado los datos necesarios. Por favor, vuelve al formulario e inténtalo de nuevo.</div>;
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

  // Buscar mensaje de dineroApuestaSemana
  const messageDineroApuesta = conditions.dineroApuestaSemana[dineroApuestaSemana] || '';

  // Buscar mensaje de edad
  let messageEdad = '';
  if (edad >= 18 && edad <= 25) {
    messageEdad = conditions.edad['18-25'];
  } else if (edad > 25 && edad <= 40) {
    messageEdad = conditions.edad['25-40'];
  } else if (edad > 40) {
    messageEdad = conditions.edad['40+'];
  }

  // Buscar mensaje de recuperarDinero
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
    <div>
      <h1>Hola {formData.nombre},</h1>
      <p dangerouslySetInnerHTML={{ __html: messageDineroApuesta }} />
      <p dangerouslySetInnerHTML={{ __html: messageEdad }} />
      <p className='text-white/80' dangerouslySetInnerHTML={{ __html: messageRecuperarDinero }} />
      <ResultComponent opcionElegida={formData.opcionAprender} />
    </div>
  );
}
