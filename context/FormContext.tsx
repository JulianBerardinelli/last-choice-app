"use client"; 

import { createContext, useContext, useState, ReactNode } from 'react';

// Tipo para los datos del formulario (renombrado a FormValues)
export type FormValues = {
  nombre: string;
  edad: number;
  mail: string;
  prestamo: boolean;
  dificultadesDormir: boolean;
  perdioDineroPadres: boolean;
  faltadoReuniones: boolean;
  dineroApuestaSemana: number;
  aumentoApuesta: boolean;
  recuperarDinero: boolean;
  resultadoRecuperarDinero: string;
  lugarApuesta: string;
  opcionAprender: string;
};

type FormContextType = {
  formData: FormValues | null;
  setFormData: (data: FormValues) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

// Hook para usar el contexto
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext debe ser usado dentro de FormProvider');
  }
  return context;
};

// Proveedor del contexto
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormValues | null>(null);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

