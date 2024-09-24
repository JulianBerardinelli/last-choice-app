// app/page.js
/* eslint-disable react/no-unescaped-entities */

import Title from '../components/Title.js';
import Header from '../components/Header.js';

import FormComponent from '../components/FormComponent.tsx';

export default function HomePage() {
  return (
    <>
      <Header/>

      <main className="flex-1 flex justify-center items-center h-screen relative">
        <div className="flex flex-col justify-center items-center gap-6 text-appear absolute inset-0 z-0 transform translate-y-[-10%]">
          <Title />
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-blue-200 text-center">
            The home <span className="font-semibold text-red-500">always wins</span>, Don&apos;t forget it. <br />
            But now, you are at <span className="font-bold text-green-500">home</span>
          </p>
        </div>
      </main>
      <div className='mt-50 bg-white'>
          <h1>Formulario</h1>
          <FormComponent/>
        </div>
    </>
  );
}


