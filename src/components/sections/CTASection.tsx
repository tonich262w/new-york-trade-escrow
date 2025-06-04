
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          ¿Listo para Proteger su Inversión?
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
          Únase a las miles de familias que han confiado en nosotros para proteger sus sueños vacacionales. 
          Consulta gratuita con nuestros expertos certificados.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link to="/contact" className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Solicitar Consulta Gratuita
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 transition-all duration-300">
            <Link to="/about" className="flex items-center">
              Conocer Nuestra Historia
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h3 className="text-lg font-semibold mb-2">Respuesta Inmediata</h3>
            <p className="text-blue-200">Contáctenos y obtenga respuesta en menos de 2 horas</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h3 className="text-lg font-semibold mb-2">Sin Compromisos</h3>
            <p className="text-blue-200">Consulta gratuita sin obligaciones ni costos ocultos</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <h3 className="text-lg font-semibold mb-2">Proceso Transparente</h3>
            <p className="text-blue-200">Tarifas claras y proceso completamente transparente</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
