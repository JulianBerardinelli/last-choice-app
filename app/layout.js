// app/layout.js
import localFont from "next/font/local";
import "./globals.css";

// Cargar la fuente Digital-7
const digitalFont = localFont({
  src: "./fonts/digital-7.ttf",
  variable: "--font-digital",
  display: "swap", // Esto asegura que se muestre lo antes posible
});

export const metadata = {
  title: "Last Choice",
  description: "A gambling awareness site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${digitalFont.variable} antialiased`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-950/85 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:14px_24px]"></div>
        {children}
      </body>
    </html>
  );
}
