'use client';

import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import ArrowRightIcon from '../../components/svg-logos/ArrowrightIcon';

export default function AboutUsPage() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 1]);
    const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

    return (
        <>
            {/* Primer motion.section */}
            <motion.section
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                style={{ opacity: opacity, y: yTransform }}
                className="flex flex-col justify-center items-center min-h-screen relative custom-margin-about"
            >
                <div className="flex flex-col justify-center items-center gap-6 text-appear absolute inset-0 z-0 transform translate-y-[-10%]">
                    <h1 className="text-5xl sm:text-7xl font-medium font-custom text-white/80 text-center">
                        Sobre <span className="text-green-500 capitalize font-bold text-shadow-custom-glow-green">Mi!</span>
                    </h1>
                    <div className="max-w-full sm:max-w-[700px] space-y-4">
                        <p>
                            Tengo <span className="text-success">18 años</span> y, al igual que muchos de mis amigos he <span className="text-danger">apostado</span>. La primera vez que jugué, <span className="text-success">gané mucho</span>, y en ese momento pensé que había encontrado la manera de <span className="text-highlight">vivir para siempre</span>, dedicarme a las <span className="text-caution">apuestas deportivas</span>. Sin embargo, ya sabrás cómo terminó esa historia…
                        </p>
                        <p>
                            Pero con el paso de los meses, lo que me llamó la atención fue ver en varios <span className="text-highlight">amigos</span> una <span className="text-danger">tendencia adictiva</span> al juego y a la <span className="text-danger">ludopatía</span> fuera de lo común. Sabía que esto siempre termina mal, y lo puedo confirmar con mi propia <span className='text-success'>historia familiar.</span>
                        </p>
                        <p className='px-4 py-2 rounded-xl bg-red-500/25 w-full  mx-auto mt-4'>
                            Mi <span className="text-highlight">bisabuelo</span> fue ludópata toda su vida. Perdió su <span className="text-danger">casa</span> debido a su adicción, dejando a mi <span className="text-highlight">abuela</span> en la calle. Hasta el día de hoy, cada vez que ella lo cuenta, le es imposible no perder alguna <span className="text-caution">lágrima</span>.
                        </p>
                        <p>
                            Con el acceso y la <span className="text-caution">libertad</span> que nos da la <span className="text-highlight">tecnología</span>, apostar es cada vez más <span className="text-danger">fácil</span>.
                            Este mercado crece <span className="text-success">exponencialmente</span> cada año y el promedio de <span className="text-highlight">edad</span> sobre esta <span className="text-danger">adicción</span> fue bajando.
                        </p>
                        <p className='px-4 py-2 rounded-xl bg-green-500/25 w-full  mx-auto mt-4'>
                            Un día, viendo a un <span className="text-highlight">influencer</span> que solía seguir mucho, empezó a <span className="text-danger">promocionar</span> casinos y a apostar en vivo.
                            En ese momento me di cuenta de que algo estaba <span className="text-danger">mal</span> y que nadie iba a hacer nada para <span className="text-caution">solucionarlo</span>, así que lo llamé a un amigo y le dije, <span className="text-success">armemos una página web</span> para hacerle frente a esto, y asi nació <span className='text-success'>Last Choice</span>
                        </p>
                        <div className='flex justify-center items-center '>
                            <p className='flex gap-2'>
                                Enterate más 
                                <ArrowRightIcon />
                                <a
                                    href='/'
                                    className='cursor-pointer'
                                >
                                <span className='text-success'> ¿Qué es Last Choice?</span>
                                </a>
                            </p>
                        </div>





                    </div>
                </div>
            </motion.section>

        </>
    );
}
