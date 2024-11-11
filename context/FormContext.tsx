"use client"; 

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Tipo para los datos del formulario (renombrado a FormValues)
export type FormValues = {
  nombre: string;
  edad: number;
  mail: string;
  prestamo: boolean;
  dificultadesDormir: boolean;
  perdioDineroPadres: boolean;
  faltadoReuniones: boolean;
  dineroApuestaSemana: string;
  aumentoApuesta: boolean;
  recuperarDinero: boolean;
  resultadoRecuperarDinero: string;
  lugarApuesta: string;
  opcionAprender: string;
};

type FormContextType = {
  formData: FormValues | null;
  setFormData: (data: FormValues) => void;
  clearFormData: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext debe ser usado dentro de FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormValues | null>(null);

  // Cargar datos del formulario desde localStorage al iniciar
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  // Guardar datos del formulario en localStorage cuando cambian
  const updateFormData = (data: FormValues) => {
    setFormData(data);
    localStorage.setItem("formData", JSON.stringify(data));
  };

  // Limpiar datos del formulario y localStorage
  const clearFormData = () => {
    setFormData(null);
    localStorage.removeItem("formData");
  };

  return (
    <FormContext.Provider value={{ formData, setFormData: updateFormData, clearFormData }}>
      {children}
    </FormContext.Provider>
  );
};

