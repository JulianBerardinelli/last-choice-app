// app/page.js
import Image from 'next/image';
import Title from './components/Title.js';

export default function HomePage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center p-4 bg-transparent pt-6">
        <Image src="/favicon.svg" alt="Favicon" width={40} height={40} />
        <ul className="flex space-x-4">
          <li><a href="/formulario">¿Soy adicto?</a></li>
          <li><a href="/contact">¿Qué hacer con mi dinero?</a></li>
          <li><a href="/about">Nosotros</a></li>
        </ul>
      </header>

      <main className="flex-1 flex justify-center items-center h-screen relative">
        <div className="flex flex-col justify-center items-center gap-6 text-appear absolute inset-0 z-0 transform translate-y-[-10%]">
          <Title />
          <p className="text-xl font-light text-blue-200 text-center">
            The home <span className="font-semibold text-red-500">always wins</span>, Don't forget it. <br />
            But now, you are at <span className="font-bold text-green-500">home</span>
          </p>
        </div>
      </main>
    </>
  );
}

