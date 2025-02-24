'use client'
import { motion } from "framer-motion";
import ResultadoIA from "../../../components/results/ResultadoIA";


export default function IAPage() {
    return (
        <motion.section
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
            }}
            className='flex-1 flex justify-center items-center h-screen relative custom-margin'
        >
            <div className="flex flex-col justify-center items-center text-left gap-6 text-appear absolute inset-0 z-0 transform translate-y-[10%] sm:px-20 ">
                <h1 className='text-4xl sm:text-7xl font-medium font-custom text-white/80 text-center'>
                    TU <span className='text-red-500 capitalize font-bold text-shadow-custom-glow-red'>GUIA DEFINITIVA</span>
                </h1>

                <ResultadoIA />
            </div>
        </motion.section>
    );
}