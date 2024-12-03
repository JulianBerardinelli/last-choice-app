"use client";

import { useFormContext } from "../context/FormContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import ArrowRightIcon from "./svg-logos/ArrowrightIcon";

const FormComponent = () => {
  const router = useRouter();
  const { setFormData } = useFormContext();

  const [step, setStep] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    mail: "",
    prestamo: "",
    dificultadesDormir: "",
    perdioDineroPadres: "",
    faltadoReuniones: "",
    dineroApuestaSemana: "",
    aumentoApuesta: "",
    recuperarDinero: "",
    resultadoRecuperarDinero: "",
    lugarApuesta: "",
    opcionAprender: "",
  });

  const steps = [
    {
      title: "1. Información Personal",
      fields: [
        { name: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre" },
        { name: "edad", label: "Edad", type: "number", placeholder: "Tu edad" },
        { name: "mail", label: "Correo electrónico", type: "email", placeholder: "Tu correo" },
      ],
    },
    {
      title: "2. Impacto de las apuestas",
      fields: [
        {
          name: "prestamo",
          label: "¿Pidió prestado dinero?",
          type: "select",
          options: ["Sí", "No"],
        },
        {
          name: "dificultadesDormir",
          label: "¿El juego le ha causado dificultades para dormir?",
          type: "select",
          options: ["Sí", "No"],
        },
        {
          name: "perdioDineroPadres",
          label: "¿Ha perdido el dinero que le dieron sus padres?",
          type: "select",
          options: ["Sí", "No"],
        },
      ],
    },
    {
      title: "3. Comportamientos asociados",
      fields: [
        {
          name: "faltadoReuniones",
          label: "¿Ha faltado a reuniones debido al juego?",
          type: "select",
          options: ["Sí", "No"],
        },
        {
          name: "dineroApuestaSemana",
          label: "¿Cuánto dinero apuesta por semana?",
          type: "select",
          options: [
            "$1.000 - $10.000",
            "$10.000 - $30.000",
            "$30.000 - $60.000",
            "$60.000 - $100.000",
            "+ $100.000",
          ],
        },
        {
          name: "aumentoApuesta",
          label: "¿La cantidad apostada ha aumentado?",
          type: "select",
          options: ["Sí", "No"],
        },
      ],
    },
    {
      title: "4. Últimos pasos",
      fields: [
        {
          name: "recuperarDinero",
          label: "¿Intentó recuperar dinero con otra apuesta?",
          type: "select",
          options: ["Sí", "No"],
        },
        {
          name: "resultadoRecuperarDinero",
          label: "¿Cómo resultó?",
          type: "textarea",
          placeholder: "Describe cómo resultó",
        },
        {
          name: "opcionAprender",
          label: "¿Qué te gustaría aprender?",
          type: "select",
          options: [
            "Aprender sobre criptomonedas",
            "Aprender a programar",
            "Aprender inglés",
            "Aprender economía",
            "Aprender sobre I.A",
            "Aprender edición de videos",
            "Aprender a diseñar",
          ],
        },
      ],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mail") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setEmailError("Por favor, introduce un correo válido.");
      } else {
        setEmailError("");
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const isStepComplete = () => {
    return (
      steps[step].fields.every((field) => form[field.name]?.trim() !== "") &&
      emailError === ""
    );
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedForm = {
      ...form,
      edad: parseInt(form.edad, 10),
      prestamo: form.prestamo === "Sí",
      dificultadesDormir: form.dificultadesDormir === "Sí",
      perdioDineroPadres: form.perdioDineroPadres === "Sí",
      faltadoReuniones: form.faltadoReuniones === "Sí",
      aumentoApuesta: form.aumentoApuesta === "Sí",
      recuperarDinero: form.recuperarDinero === "Sí",
    };

    try {
      const res = await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedForm),
      });

      if (res.ok) {
        setFormData(formattedForm);
        router.push("/resultados");
      } else {
        const errorData = await res.json();
        console.error("Error al enviar el formulario:", errorData.message);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <>
      <section className="flex flex-col tablet-margin mobile-margin">
        <div className="form-wrapper desktop-form-wrapper tablet-form-wrapper mobile-form-wrapper">
          <h1 className="text-7xl font-blac font-custom text-center mt-8">
            Soy <span className="text-red-500 font-bold capitalize text-shadow-custom-glow-red">Adicto?</span>
          </h1>
          <p className="text-sm sm:text-base">
            En Last Choice, hemos creado un formulario para ayudarte a reflexionar sobre tus hábitos de apuesta. Con tus respuestas, realizaremos un análisis personalizado para guiarte hacia alternativas que se alineen con tus intereses y te permitan construir un futuro más positivo. ¡Da el primer paso y descubre el camino que mejor se adapta a ti!
          </p>
        </div>
      </section>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[95%] sm:max-w-[700px] mx-auto p-4 sm:p-8 bg-blue-900/15 shadow-lg shadow-blue-700 rounded-lg border-2 border-green-500 text-white"
      >
        <h2 className="text-2xl sm:text-3xl font-black mb-6 text-center p-4 rounded-lg">{steps[step].title}</h2>
        <div className="space-y-4 sm:space-y-6">
          {steps[step].fields.map((field) => (
            <div key={field.name} className="mb-4 sm:mb-6">
              <label className="block text-sm sm:text-lg font-black mb-2 text-white" htmlFor={field.name}>
                {field.label}
              </label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  id={field.name}
                  value={form[field.name] || ""}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-blue-900/35 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                >
                  <option value="">Selecciona</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  id={field.name}
                  value={form[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-blue-900/35 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  value={form[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-blue-900/35 border border-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                />
              )}
              {field.name === "mail" && emailError && (
                <p className="text-red-500 text-xs sm:text-sm mt-2">{emailError}</p>
              )}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-300 rounded-full overflow-hidden my-4 sm:my-6">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${((step + 1) / steps.length) * 100}%`,
              background: step === 0
                ? "rgba(254, 0, 0, 1)"
                : step === 1
                ? "rgba(255, 255, 0, 1)"
                : step === 2
                ? "rgba(0, 0, 255, 1)"
                : "rgba(0, 255, 0, 1)",
            }}
          ></div>
        </div>
        <div className="flex justify-between">
          {step > 0 && (
            <Button type="button" onClick={handleBack} className="bg-gray-500 text-white hover:bg-gray-600">
              Atrás
            </Button>
          )}
          {step < steps.length - 1 ? (
            <Button
              type="button"
              onClick={handleNext}
              disabled={!isStepComplete()}
              className={`${
                isStepComplete() ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-300 text-gray-500"
              }`}
            >
              Siguiente
              <ArrowRightIcon />
            </Button>
          ) : (
            <Button
              variant="shadow"
              type="submit"
              className="bg-green-500 text-white hover:bg-green-600"
            >
              Enviar
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default FormComponent;
