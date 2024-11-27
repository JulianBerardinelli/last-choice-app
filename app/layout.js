// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import { FormProvider } from "../context/FormContext";
import Header from "../components/Header";

// Cargar la fuente Digital-7
const digitalFont = localFont({
  src: "./fonts/digital-7.ttf",
  variable: "--font-digital",
  display: "swap",
});

export const metadata = {
  title: "Last Choice",
  description: "A gambling awareness site",
};

export default function RootLayout({ children }) {
  return (
    <FormProvider>
      <html lang="en">
        <body
          className={`${digitalFont.variable} antialiased`}
        >
          {/* Fondo con patrón transparente */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950/85 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:14px_24px]"></div>

          {/* El fondo de gradient del body */}
          <div className="fixed inset-0 -z-20 h-full w-full bg-[linear-gradient(to_bottom,#0004ff,#020024)] bg-cover bg-fixed"></div>

          {/* Header y contenido */}
          <div className="relative">
          <Header />
          </div>
          <main className="relative z-0">
            {children}
          </main>
        </body>
      </html>
    </FormProvider>
  );
}
