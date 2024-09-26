"use client"; 

import { Suspense } from 'react';
import { useFormContext, FormValues } from '../../context/FormContext';
import ResultComponent from '../../components/ResultComponent';

export default function ResultPage() {
  const { formData } = useFormContext();

  // Verificamos si formData es null
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
  formData: FormValues;  // Cambiamos a FormValues
};

function ResultPageContent({ formData }: ResultPageContentProps) {
  return (
    <div>
      <h1>Hola {formData.nombre},</h1>
      <ResultComponent opcionElegida={formData.opcionAprender} />
    </div>
  );
}
