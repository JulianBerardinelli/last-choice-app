// pages/api/submitForm.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Verifica si los datos llegan correctamente
    const {
      nombre,  edad, mail, prestamo, dificultadesDormir, perdioDineroPadres, 
      faltadoReuniones, dineroApuestaSemana, aumentoApuesta, recuperarDinero, resultadoRecuperarDinero,
      lugarApuesta, opcionAprender
    } = req.body;

    console.log('Datos recibidos en el API:', req.body);  // Verificar datos recibidos

    try {
      const { data, error } = await supabase
        .from('form_responses')
        .insert([
          {
            nombre_apodo: nombre,  // Mapeo correcto de 'nombre' a 'nombre_apodo'
            edad,
            mail,
            pidio_prestamo: prestamo,  // Mapeo correcto de 'prestamo' a 'pidio_prestamo'
            dificultades_dormir: dificultadesDormir,
            perdio_dinero_padres: perdioDineroPadres,
            faltado_reuniones: faltadoReuniones,
            dinero_apuesta_semana: dineroApuestaSemana,
            aumento_apuesta: aumentoApuesta,
            recuperar_dinero: recuperarDinero,
            resultado_recuperar_dinero: resultadoRecuperarDinero,
            lugar_apuesta: lugarApuesta,
            opcion_aprender: opcionAprender,
          },
        ]);

      if (error) {
        console.error('Error al insertar en la base de datos:', error);
        throw new Error('Error al insertar en la base de datos');
      }

      console.log('Datos insertados correctamente:', data);
      res.status(200).json({ message: 'Datos guardados correctamente', data });
    } catch (error) {
      console.error('Error en el servidor:', error);
      res.status(500).json({ message: 'Error al guardar los datos en Supabase', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
