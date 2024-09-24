

export default function Header() {
    return (
      <>
      <style>{`
        .glow-text {
          text-shadow: 
            0 0 10px rgba(0, 255, 0, 0.7), 
            0 0 20px rgba(0, 255, 0, 0.7), 
            0 0 30px rgba(0, 255, 0, 0.7);
        }
      `}</style>
        <header className="fixed top-0 left-0 right-0 z-10 flex justify-center items-center p-4 bg-transparent pt-10">
          <ul className="flex space-x-4">
            <li>
              <a 
                href="/formulario" 
                className="text-white/80 font-medium hover:text-white transition duration-300 transform hover:scale-110" 
              >
                ¿Soy adicto?
              </a>
            </li>
            <li>
              <a 
                href="/contact" 
                className="text-white/80 font-medium hover:text-white transition duration-300 transform hover:scale-110 " 
              >
                ¿Qué hacer con mi dinero?
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="text-white/80 font-medium hover:text-white transition duration-300 transform hover:scale-110 " 
              >
                Nosotros
              </a>
            </li>
          </ul>
        </header>
      </>
    );
  }

  