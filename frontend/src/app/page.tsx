// app/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [lang, setLang] = useState('en');
  const languages = {
    en: 'Welcome to the Digital Protection Platform',
    es: 'Bienvenido a la Plataforma de Protección Digital',
    fr: 'Bienvenue sur la Plateforme de Protection Numérique',
    ha: 'Barka da zuwa Dandalin Kariya na Dijital',
    ig: 'Nnọọ na Ụdị Nchedo Dijital',
    yo: 'Kaabo si Syeed Aabo Dijitaali'
  };

  const descriptions: Record<string, string> = {
    en: 'Empowering families and young adults with cybersecurity awareness and career tools.',
    es: 'Empoderando a las familias y jóvenes con concienciación sobre ciberseguridad.',
    fr: 'Autonomiser les familles et les jeunes avec une sensibilisation à la cybersécurité.',
    ha: 'Karfin gwiwar iyalai da matasa da wayar da kai kan tsaro na yanar gizo.',
    ig: 'Inye ikike ezinụlọ na ụmụaka na ịmara nchekwa dijitalụ.',
    yo: 'Agbára fún ẹbí àti àwọn ọdọ̀ pẹ̀lú ìmọ̀ nípa aabo ayelujara.'
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-8 py-16 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_#1e3a8a_20%,_transparent_80%)] opacity-20 z-0"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to the Digital Protection Platform
        </motion.h1>
        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Empowering families and young adults with cybersecurity awareness and career development tools.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded shadow"
          >
            Parent Portal
          </a>
          <a
            href="/user"
            className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded shadow"
          >
            Student Dashboard
          </a>
          <a
            href="/admin"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 text-white rounded shadow"
          >
            Admin Console
          </a>
        </motion.div>

        <div className="mt-16 text-left">
          <h2 className="text-2xl font-semibold mb-4">What our users are saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <p className="text-sm text-gray-300">“This platform made it so easy for me to understand online safety.”</p>
              <p className="mt-2 text-xs text-gray-500">— Parent of a 12-year-old</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <p className="text-sm text-gray-300">“I earned my first cybersecurity badge and can’t wait for more!”</p>
              <p className="mt-2 text-xs text-gray-500">— Student User</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow">
              <p className="text-sm text-gray-300">“A fantastic resource for families and future professionals.”</p>
              <p className="mt-2 text-xs text-gray-500">— Industry Mentor</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
