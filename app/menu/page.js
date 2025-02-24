'use client'
import { motion, useScroll, useTransform } from 'framer-motion';
import FooterComponent from '../../components/FooterComponent';
import { Input } from '@nextui-org/react';
import { IconSearch, IconChartBar, IconRobot, IconCode, IconMessageLanguage, IconBrandBinance } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

export default function MiDinero() {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0.3, 1]);
    const yTransform = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

    const router = useRouter();

    const cardsData = [
        {
            title: 'Crypto',
            description: 'Aprende a invertir y entender el mercado cripto.',
            icon: IconBrandBinance,
            color: 'border-yellow-500',
            bgColor: 'bg-yellow-500',
            link: '/menu/cripto'
        },
        {
            title: 'Economía y Finanzas',
            description: 'Maneja eficientemente tus finanzas personales.',
            icon: IconChartBar,
            color: 'border-green-500',
            bgColor: 'bg-green-500',
            link: '/menu/economia'
        },
        {
            title: 'Programación',
            description: 'Desarrolla habilidades técnicas y crea aplicaciones.',
            icon: IconCode,
            color: 'border-purple-500',
            bgColor: 'bg-purple-500',
            link: '/menu/programacion'
        },
        {
            title: 'Inteligencia Artificial',
            description: 'Aprovecha el poder de la IA en tu carrera profesional.',
            icon: IconRobot,
            color: 'border-blue-500',
            bgColor: 'bg-blue-500',
            link: '/menu/ia'
        },
        {
            title: 'Inglés',
            description: 'Mejora tu nivel de inglés y abre nuevas oportunidades.',
            icon: IconMessageLanguage,
            color: 'border-red-500',
            bgColor: 'bg-red-500',
            link: '/menu/ingles'
        },
    ];

    const handleCardClick = (link) => {
        router.push(link);
    };

    return (
        <>
            <motion.section
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ opacity, y: yTransform }}
                className="flex flex-col justify-center items-center min-h-screen relative custom-margin-midinero"
            >
                <div className="flex flex-col justify-center items-center gap-6 text-appear absolute inset-0 z-0 transform translate-y-[-10%]">
                    <h1 className="text-5xl sm:text-7xl font-medium font-custom text-white/80 text-center">
                        Que hacer con mi <span className="text-green-500 capitalize font-bold text-shadow-custom-glow-green">Dinero!</span>
                    </h1>
                    <div className="max-w-full sm:max-w-[700px] space-y-4">
                        <p>
                            Desde <span className="text-success">Last Choice</span>, creemos en la importancia de utilizar sabiamente nuestro <span className="text-highlight">dinero y tiempo</span>. En lugar de arriesgarnos con <span className="text-danger">apuestas</span>, apostamos por invertir en <span className="text-success">nuestro crecimiento personal y financiero</span>, aprendiendo nuevas habilidades que aumentan nuestro valor a largo plazo.
                        </p>
                        <p className='px-4 py-2 rounded-xl bg-green-500/25 w-full mx-auto mt-4'>
                            Frente al creciente riesgo de caer en la <span className="text-danger">adicción al juego</span>, en <span className="text-success">Last Choice</span> ofrecemos <span className="text-caution">alternativas reales</span>. Seleccionamos las mejores opciones educativas y financieras para que tomes decisiones inteligentes y evites el círculo vicioso de las apuestas.
                        </p>
                    </div>

                    <div className='flex flex-col justify-center gap-7 items-center mt-10 max-w-full sm:max-w-[700px]'>
                        <h2 className='text-2xl'>¿Qué querés aprender?</h2>
{/* 
                        <Input
                            classNames={{
                                base: "w-full h-10",
                                input: "text-small text-white placeholder:text-gray-300 border-none",
                                inputWrapper:
                                    "h-full bg-blue-900/35 rounded-lg shadow-none transition-colors duration-300 ease-in-out hover:!bg-blue-900/50 focus-within:!bg-blue-900/50 border border-transparent focus-within:border-green-500",
                            }}
                            placeholder="Type to search..."
                            size="lg"
                            startContent={<IconSearch stroke={2} className="text-white transition-colors duration-300" />}
                            type="search"
                        /> */}

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {cardsData.map((card, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleCardClick(card.link)}
                                    className={`bg-blue-900/35 rounded-lg flex items-center gap-4 p-4 transition duration-300 hover:bg-blue-900/50 cursor-pointer border-2 ${card.color} shadow-lg shadow-blue-700`}
                                >
                                    <div className={`w-12 h-12 rounded-full ${card.bgColor} flex items-center justify-center`}>
                                        <card.icon className="text-white" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg text-white font-semibold">{card.title}</h3>
                                        <p className="text-sm text-gray-300">{card.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            <section className='mt-20'>
                <FooterComponent />
            </section>
        </>
    );
}
