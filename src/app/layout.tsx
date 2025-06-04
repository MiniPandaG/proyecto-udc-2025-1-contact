import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ContactPro - Gestión de Contactos",
  description: "Solución profesional para gestión de contactos - Proyecto TCC Universidad de Cartagena",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Providers>
          <Navbar />
          <main className="container mx-auto px-4 py-8 min-h-[calc(100vh-80px)]">
            {children}
          </main>
          <footer className="bg-gray-800 py-8 border-t border-gray-700">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-400">Proyecto TCC - Desarrollo Web y Bases de Datos</h3>
                  <p className="text-gray-300">
                    Actividad académica desarrollada para la Universidad de Cartagena
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-400">Desarrolladores</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Andrés Camilo De Oro Pérez</li>
                    <li>Estudiante 2</li>
                    <li>Estudiante 3</li>
                    <li>Estudiante 4</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-400">Tecnologías</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">NextJS</span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">MongoDB</span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">JWT</span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">NextAuth</span>
                    <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">PM2</span>
                  </div>
                  <a 
                    href="https://github.com/tu-usuario/tu-repositorio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Código en GitHub
                  </a>
                  <div className="mt-4">
                    <a 
                      href="/documentacion.pdf" 
                      className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Ver PDF de la actividad
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}