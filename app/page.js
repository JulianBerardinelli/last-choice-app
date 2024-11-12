// app/page.js
/* eslint-disable react/no-unescaped-entities */

import Title from '../components/Title.js';

import FormComponent from '../components/FormComponent.tsx';

export default function HomePage() {
  return (
    <>


    <main>
      <section className="flex-1 flex justify-center items-center h-screen relative">
          <div className="flex flex-col justify-center items-center gap-6 text-appear absolute inset-0 z-0 transform translate-y-[-10%]">
            <Title />
          </div>
      </section>
      <section>
        <div>
          <img></img>
          <h3>
            Introducción a Last Choice
          </h3>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

        </div>
      </section>

      <section>
        <FormComponent/>
      </section>

        
      {/* <section>
          <div className=' bg-white'>
            <h1>Formulario</h1>
            <FormComponent/>
          </div>
      </section> */}
    </main>

    </>
  );
}


