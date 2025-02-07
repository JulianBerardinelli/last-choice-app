'use client'
import { useState } from "react";
import HomeIcon from './svg-logos/HomeIcon';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? '' : 'hidden'; // Bloquear/desbloquear el scroll
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("formulario");
  
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      document.body.style.overflow = ''; 
    } else {
      // Redirige al inicio si no está en la página principal
      window.location.href = "/#formulario";
    }
  };

  return (
    <>
      <style>{`
        /* General Styles */
        .glow-text {
          text-shadow: 
            0 0 10px rgba(0, 255, 0, 0.7), 
            0 0 20px rgba(0, 255, 0, 0.7), 
            0 0 30px rgba(0, 255, 0, 0.7);
        }

        /* Barra lateral estilos */
        @media screen and (max-width: 768px) {
          .sidebar-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(3, 4, 94, 0.95); /* Fondo oscuro */
            z-index: 1000;
            visibility: hidden;
            opacity: 0;
            transform: translateX(-100%);
            transition: all 0.3s ease;
            display: flex;
            align-items: center; /* Centrado vertical */
          }

          .sidebar-wrapper.open {
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
          }

          .sidebar-wrapper ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start; /* Alinear a la izquierda */
            justify-content: center; /* Centrar verticalmente dentro del sidebar */
            padding-left: 20px; /* Espaciado desde la izquierda */
            list-style: none;
            gap: 20px;
          }

          .sidebar-wrapper ul li {
            opacity: 0;
            transform: translateX(-20px);
            animation: fade-in 0.5s ease forwards;
          }

          /* Reiniciar animación cada vez que se abra el modal */
          .sidebar-wrapper.open ul li {
            animation-name: fade-in;
          }

          .sidebar-wrapper ul li:nth-child(1) {
            animation-delay: 0.1s;
          }

          .sidebar-wrapper ul li:nth-child(2) {
            animation-delay: 0.2s;
          }

          .sidebar-wrapper ul li:nth-child(3) {
            animation-delay: 0.3s;
          }

          .sidebar-wrapper ul li:nth-child(4) {
            animation-delay: 0.4s;
          }

          @keyframes fade-in {
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .menu-btn {
            position: fixed;
            left: 20px;
            top: 20px;
            z-index: 1100;
            cursor: pointer;
            background: none;
            border: none;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Ocultar el menú móvil en pantallas medianas o grandes */
        @media screen and (min-width: 768px) {
          .menu-btn,
          .sidebar-wrapper {
            display: none;
          }
        }
      `}</style>

      {/* Cabecera con navegación */}
      <header className="z-50 flex justify-center items-center p-4 mt-5">
        {/* Botón de menú para pantallas pequeñas */}
        <button className="menu-btn" onClick={toggleMenu}>
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icon-tabler-menu-4"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 6h10" />
              <path d="M4 12h16" />
              <path d="M7 12h13" />
              <path d="M7 18h10" />
            </svg>
          )}
        </button>

        {/* Barra lateral */}
        <div className={`sidebar-wrapper ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/" className="hover:text-green-400 transition duration-300" onClick={toggleMenu}>
                Inicio
              </a>
            </li>
            <li>
              <a className="hover:text-green-400 transition duration-300" onClick={scrollToForm}>
                ¿Soy adicto?
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-400 transition duration-300" onClick={toggleMenu}>
                ¿Qué hacer con mi dinero?
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-green-400 transition duration-300" onClick={toggleMenu}>
                Nosotros
              </a>
            </li>
          </ul>
        </div>

        {/* Navegación en pantallas grandes */}
        <ul className="hidden sm:flex space-x-4">
          <li>
            <a
              href="/"
              className="text-white/80 font-medium hover:text-white transition duration-300 transform hover:scale-110"
            >
              <HomeIcon />
            </a>
          </li>
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
              className="text-white/80 font-medium hover:text-white transition duration-300 transform hover:scale-110"
            >
              ¿Qué hacer con mi dinero?
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="text-white/80 font-medium hover:text-white transition duration-300 transform hover:scale-110"
            >
              Nosotros
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

