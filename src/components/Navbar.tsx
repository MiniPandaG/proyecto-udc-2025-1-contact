'use client';

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors flex items-center"
            >
              <span className="text-blue-400">Contact</span>
              <span className="text-white">Pro</span>
            </Link>
          </div>

          {/* Menú para desktop */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {status === "authenticated" ? (
              <>
                <Link 
                  href="/contacts" 
                  className="px-3 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors flex items-center text-sm lg:text-base"
                >
                  <span className="mr-2">📇</span>
                  Contactos
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-blue-600 text-white px-3 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center shadow-lg text-sm lg:text-base"
                >
                  <span className="mr-2">🚪</span>
                  Salir
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="px-3 py-2 rounded-md font-medium hover:bg-gray-700 transition-colors flex items-center text-sm lg:text-base"
                >
                  <span className="mr-2">🔑</span>
                  Ingresar
                </Link>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-3 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center shadow-lg text-sm lg:text-base"
                >
                  <span className="mr-2">✨</span>
                  Registrarse
                </Link>
              </>
            )}
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
          {status === "authenticated" ? (
            <>
              <Link 
                href="/contacts" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2">📇</span>
                Contactos
              </Link>
              <button
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center"
              >
                <span className="mr-2">🚪</span>
                Salir
              </button>
            </>
          ) : (
            <>
              <Link 
                href="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2">🔑</span>
                Ingresar
              </Link>
              <Link
                href="/register"
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2">✨</span>
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}