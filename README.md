# ContactPro - Gestor de Contactos

**ContactPro** es una aplicación web para la gestión de contactos, desarrollada como parte de un proyecto académico para la Universidad de Cartagena.

---

## ✨ Características Principales

- ✅ Gestión de Contactos  
- ✅ Llamadas Directas  
- ✅ Contacto por WhatsApp  
- ✅ Envío de Correos Electrónicos  
- ✅ Autenticación Segura  
- ✅ Interfaz Responsiva  
- ✅ Diseño Oscuro Moderno  

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Next.js 14 (App Router)**
- **React 18**
- **Tailwind CSS**
- **Framer Motion** (animaciones)
- **NextAuth.js** (autenticación)
- **React Icons**

### Backend

- **Next.js API Routes**
- **MongoDB** (base de datos)
- **JWT** (autenticación)
- **Bcrypt** (hash de contraseñas)

### Deployment

- **PM2** (gestión de procesos)
- **Vercel** (hosting frontend)
- **MongoDB** (base de datos en la nube)

---

## 🚀 Instalación Local

### 1. Clonar el repositorio:

```bash
git clone https://github.com/MiniPandaG/proyecto-desarrollo-web
cd contactpro
```

### 2. Instalar dependencias:

```bash
npm install
```

### 3. Configurar variables de entorno:

```bash
cp .env.local
```

Edita el archivo `.env.local` con tus credenciales.

### 4. Iniciar la aplicación:

```bash
npm run dev
```

---

## 📁 Estructura del Proyecto

```plaintext
contactpro/
├── app/
│   ├── auth/               # Páginas de autenticación
│   ├── contacts/           # Gestión de contactos
│   ├── api/                # Endpoints API
│   └── layout.tsx          # Layout principal
├── components/             # Componentes reutilizables
├── lib/                    # Utilidades y configuraciones
├── public/                 # Archivos estáticos
└── styles/                 # Estilos globales
```

---

## 👨‍💻 Equipo de Desarrollo

Este proyecto fue desarrollado por:

- **[Andrés Camilo De Oro Pérez]**   
- **[Jean Pierre Angulo Vergara]**
- **[Israel David Prada Chinchilla]** 
- **[Armando Rafael Morales Yepes]**

---

## 📝 Licencia

CC0 1.0 Universal (CC0 1.0) - Dedicación al Dominio Público

Este proyecto ha sido entregado al dominio público por sus autores.

Puedes copiarlo, modificarlo, distribuirlo y usarlo para cualquier propósito, incluso comercial, sin pedir permiso.

No se ofrece ninguna garantía. Usa el software bajo tu propio riesgo.
