"use client"; 

import { useFormContext } from '../context/FormContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';  

const FormComponent = () => {
  const router = useRouter(); 
  const { setFormData } = useFormContext();

  const [form, setForm] = useState({
    nombre: '',
    edad: '',
    mail: '',
    prestamo: '',
    dificultadesDormir: '',
    perdioDineroPadres: '',
    faltadoReuniones: '',
    dineroApuestaSemana: '',
    aumentoApuesta: '',
    recuperarDinero: '',
    resultadoRecuperarDinero: '',
    lugarApuesta: '',
    opcionAprender: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formattedForm = {
      ...form,
      prestamo: form.prestamo === 'Si' ? true : false,
      dificultadesDormir: form.dificultadesDormir === 'Si' ? true : false,
      perdioDineroPadres: form.perdioDineroPadres === 'Si' ? true : false,
      faltadoReuniones: form.faltadoReuniones === 'Si' ? true : false,
      aumentoApuesta: form.aumentoApuesta === 'Si' ? true : false,
      recuperarDinero: form.recuperarDinero === 'Si' ? true : false,
      edad: parseInt(form.edad, 10), // Convertir edad a número
    };

  
    console.log('Datos del formulario antes de enviar:', form);  // Verificación de los datos del formulario
  
    try {
      const res = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedForm),
      });
  
      if (res.ok) {
        console.log('Formulario enviado correctamente');
    
        setFormData(formattedForm);
      // Redirigir a la página de resultados sin parámetros en la URL
        router.push('/resultados');
      } else {
        const errorData = await res.json();
        console.error('Error al enviar el formulario:', errorData.message);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Formulario Last Choice</h2>

      {/* Nombre */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="nombre">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={form.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Edad */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="edad">Edad</label>
        <input
          type="number"
          name="edad"
          id="edad"
          value={form.edad}
          onChange={handleChange}
          placeholder="Tu edad"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Mail */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="mail">Correo electrónico</label>
        <input
          type="email"
          name="mail"
          id="mail"
          value={form.mail}
          onChange={handleChange}
          placeholder="Tu correo"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* ¿Pidió prestado dinero? */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="prestamo">¿Pidió prestado dinero?</label>
        <select
          name="prestamo"
          id="prestamo"
          value={form.prestamo}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Dificultades para dormir */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="dificultadesDormir">¿El juego le ha causado dificultades para dormir?</label>
        <select
          name="dificultadesDormir"
          id="dificultadesDormir"
          value={form.dificultadesDormir}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Perdió el dinero dado por sus padres */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="perdidoDineroPadres">¿Ha perdido el dinero que le dieron sus padres por el fin de semana por el juego?</label>
        <select
          name="perdioDineroPadres"
          id="perdioDineroPadres"
          value={form.perdioDineroPadres}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Faltó a reuniones por perder dinero */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="faltadoReuniones">¿Ha faltado a reuniones con amigos debido a que perdió el dinero apostando?</label>
        <select
          name="faltadoReuniones"
          id="faltadoReuniones"
          value={form.faltadoReuniones}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Cantidad de dinero apostado por semana */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="dineroApuestaSemana">¿Cuánto dinero apuesta por semana? ($ Arg)</label>
        <select
          name="dineroApuestaSemana"
          id="dineroApuestaSemana"
          value={form.dineroApuestaSemana}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="$1.000 - $10.000">$1.000 - $10.000</option>
          <option value="$10.000 - $30.000">$10.000 - $30.000</option>
          <option value="$30.000 - $60.000">$30.000 - $60.000</option>
          <option value="$60.000 - $100.000">$60.000 - $100.000</option>
          <option value="+ $100.000">+ $100.000</option>
        </select>
      </div>

      {/* ¿Aumentó la cantidad apostada en relación con las primeras apuestas? */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="aumentoApuesta">¿La cantidad que apuesta ha aumentado respecto a sus primeras apuestas?</label>
        <select
          name="aumentoApuesta"
          id="aumentoApuesta"
          value={form.aumentoApuesta}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Intentó recuperar el dinero perdido */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="recuperarDinero">¿Intentó recuperar el dinero perdido con otra apuesta?</label>
        <select
          name="recuperarDinero"
          id="recuperarDinero"
          value={form.recuperarDinero}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      {/* Resultado de la recuperación del dinero */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="resultadoRecuperarDinero">¿Cómo resultó?</label>
        <textarea
          name="resultadoRecuperarDinero"
          id="resultadoRecuperarDinero"
          value={form.resultadoRecuperarDinero}
          onChange={handleChange}
          placeholder="Explicar cómo resultó"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Lugar habitual donde apuesta */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="lugarApuesta">¿Dónde suele apostar habitualmente?</label>
        <select
          name="lugarApuesta"
          id="lugarApuesta"
          value={form.lugarApuesta}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="Colegio">Colegio</option>
          <option value="Casa">Casa</option>
          <option value="Casa de amigos">Casa de amigos</option>
          <option value="Trabajo">Trabajo</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      {/* Opción de aprendizaje */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="opcionAprender">Si pudieras hacer otra cosa con ese dinero, ¿cuál de estas elegirías?</label>
        <select
          name="opcionAprender"
          id="opcionAprender"
          value={form.opcionAprender}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Selecciona</option>
          <option value="Aprender edición de videos">Aprender edición de videos</option>
          <option value="Aprender a programar">Aprender a programar</option>
          <option value="Aprender inglés">Aprender inglés</option>
          <option value="Aprender finanzas">Aprender finanzas</option>
          <option value="Aprender sobre criptomonedas">Aprender sobre criptomonedas</option>
          <option value="Aprender sobre I.A">Aprender sobre I.A</option>
          <option value="Aprender sobre Marketing digital">Aprender sobre Marketing digital</option>
          <option value="Aprender economía">Aprender economía</option>
          <option value="Aprender a diseñar">Aprender a diseñar</option>
          <option value="Cómo hacer mi primera inversión">Cómo hacer mi primera inversión</option>
        </select>
      </div>

      {/* Botón de envío */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default FormComponent;




