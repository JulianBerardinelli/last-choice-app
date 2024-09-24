// app/resultados/page.tsx
"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import ResultComponent from '../../components/ResultComponent';

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ResultPageContent />
    </Suspense>
  );
}

function ResultPageContent() {
  const searchParams = useSearchParams();
  const nombre = searchParams?.get('nombre');
  const opcionAprender = searchParams?.get('opcionAprender');

  if (!nombre || !opcionAprender) {
    return <div>No se han encontrado los datos necesarios. Por favor, vuelve al formulario e inténtalo de nuevo.</div>;
  }

  return (
    <div>
      <h1>Hola {nombre},</h1>
      <ResultComponent opcionElegida={opcionAprender as string} />
    </div>
  );
}


