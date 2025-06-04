
import React from 'react';
import { Button } from "@/components/ui/button";
import { Lock, Phone, ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  stats: Array<{ number: string; label: string }>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ stats }) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-400/30 mb-6">
              <Lock className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Licenciado y Asegurado en NY</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Protección Total para sus
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                Inversiones Vacacionales
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
              El único servicio de escrow en Nueva York especializado exclusivamente en tiempos compartidos y propiedades vacacionales de marcas premium.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <Phone className="h-5 w-5 mr-2" />
                Consulta Gratuita Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300">
                <Link to="/about" className="flex items-center">
                  Ver Nuestros Casos de Éxito
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-2xl md:text-3xl font-bold text-blue-200">{stat.number}</div>
                  <div className="text-sm text-blue-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Proceso Garantizado</h3>
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  "Fondos depositados en cuenta fiduciaria FDIC",
                  "Verificación completa de títulos y documentos", 
                  "Inspección y due diligence coordinada",
                  "Cierre seguro con seguimiento 24/7",
                  "Transferencia protegida de fondos y títulos"
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-blue-100">{step}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-green-500/20 backdrop-blur-sm rounded-xl border border-green-400/30">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-400" />
                  <span className="text-green-300 font-semibold">Tiempo promedio de cierre: 5-7 días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
