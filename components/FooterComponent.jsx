
export default function FooterComponent() {

    return (
        <footer className="-z-50 rounded-lg shadow m-4 bg-black/35">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">LastChoice™</a>. Todos los derechos reservados.
                </span>
                <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="hover:text-white transition duration-300 transform hover:scale-110 me-4 md:me-6">Home</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition duration-300 transform hover:scale-110 me-4 md:me-6">¿Soy adicto?</a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-white transition duration-300 transform hover:scale-110 me-4 md:me-6">¿Qué hacer con mi dinero?</a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-white transition duration-300 transform hover:scale-110">Nosotros</a>
                    </li>
                </ul>
            </div>
        </footer>
    )

}