'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description, delay = 0 }: { 
  icon: string, 
  title: string, 
  description: string, 
  delay?: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.4, 
      delay: delay * 0.2,
      ease: "easeOut"
    }}
    className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg transition-all hover:border-blue-500"
  >
    <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-lg mb-4 mx-auto">
      <span className="text-2xl text-blue-400">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">
      {title}
    </h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto text-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-700 relative overflow-hidden mb-16"
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            ContactPro
          </span>
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          La herramienta <span className="font-semibold text-blue-400">definitiva</span> para gestionar tus contactos profesionales
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg px-8 py-3 shadow-lg transition-all hover:from-blue-600 hover:to-blue-700"
          >
            Comenzar Ahora
          </Link>
          
          <Link
            href="/login"
            className="bg-gray-700 text-white font-medium rounded-lg px-8 py-3 border border-gray-600 shadow-lg transition-all hover:bg-gray-600"
          >
            Iniciar Sesión
          </Link>
        </motion.div>
      </motion.div>
      
      {/* Sección de características */}
      <div className="mb-16">
        <motion.h2
          className="text-3xl font-bold mb-12 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          Funcionalidades Clave
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon="📞" 
            title="Llamar Directamente" 
            description="Realiza llamadas con un solo clic desde la aplicación" 
            delay={0}
          />
          <FeatureCard 
            icon="💬" 
            title="Contactar por WhatsApp" 
            description="Envía mensajes directos a tus contactos via WhatsApp" 
            delay={0.2}
          />
          <FeatureCard 
            icon="⚡" 
            title="Alto Rendimiento" 
            description="Interfaz optimizada para máxima velocidad y fluidez" 
            delay={0.4}
          />
        </div>
      </div>
      
      {/* Sección de cierre */}
      <motion.div
        className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">¿Listo para optimizar tu gestión de contactos?</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Con ContactPro tendrás todas tus comunicaciones profesionales en un solo lugar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/register"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg px-8 py-3 shadow-lg transition-all hover:from-blue-600 hover:to-blue-700"
          >
            Registrarse Gratis
          </Link>
          <Link
            href="/features"
            className="bg-gray-700 text-white font-medium rounded-lg px-8 py-3 border border-gray-600 shadow-lg transition-all hover:bg-gray-600"
          >
            Ver más características
          </Link>
        </div>
      </motion.div>
    </div>
  );
}