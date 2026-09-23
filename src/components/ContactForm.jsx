// Ruta: src/components/ContactForm.jsx
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // Estados: idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulamos el tiempo de respuesta de un servidor real (1.5 segundos)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  // Si el formulario fue enviado con éxito, renderizamos el mensaje de confirmación
  if (status === 'success') {
    return (
      <div className="bg-cyan-900/40 border border-cyan-500/30 p-10 rounded-2xl text-center max-w-xl mx-auto">
        <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">¡Solicitud Recibida!</h3>
        <p className="text-gray-300">Nos pondremos en contacto con su equipo a la brevedad para agendar la reunión técnica.</p>
      </div>
    );
  }

  // Renderizado del formulario base
  return (
    <form onSubmit={handleSubmit} className="bg-gray-800/40 border border-gray-700 p-8 rounded-2xl text-left max-w-xl mx-auto shadow-xl">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Nombre y Cargo</label>
        <input type="text" id="name" required className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="Ej. Juan Pérez - Gerente de RRHH" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Correo Corporativo</label>
        <input type="email" id="email" required className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="juan@empresa.com" />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Requerimiento de Movilidad</label>
        <textarea id="message" required rows="4" className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors" placeholder="Detalles de la clínica, proyecto de infraestructura o consultoría..."></textarea>
      </div>
      <button type="submit" disabled={status === 'submitting'} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.4)] disabled:opacity-70 disabled:cursor-not-allowed">
        {status === 'submitting' ? 'Procesando...' : 'Enviar Solicitud'}
      </button>
    </form>
  );
}