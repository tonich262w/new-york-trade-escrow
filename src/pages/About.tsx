
import React from 'react';
import Layout from "@/components/layout/Layout";
import { Shield, Target, Heart, Users, CheckCircle, Award } from "lucide-react";

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparencia",
      description: "Operamos con total claridad en cada transacción, manteniendo informados a todos los participantes."
    },
    {
      icon: CheckCircle,
      title: "Integridad",
      description: "Nuestro compromiso inquebrantable con la honestidad y la ética profesional nos distingue."
    },
    {
      icon: Users,
      title: "Profesionalismo",
      description: "Equipo altamente capacitado con años de experiencia en el sector inmobiliario."
    },
    {
      icon: Award,
      title: "Seguridad",
      description: "Protocolos avanzados de seguridad que garantizan la protección de fondos y documentos."
    }
  ];

  return (
    <Layout 
      pageTitle="Sobre Nosotros"
      pageDescription="Construyendo confianza en cada transacción inmobiliaria desde el corazón de Nueva York"
    >
      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  En 2015, después de presenciar numerosas transacciones inmobiliarias fallidas por falta de confianza entre las partes, los fundadores de New York Trade & Commerce decidieron crear una solución. Habíamos visto demasiadas familias perder sus ahorros y sueños vacacionales por intermediarios poco confiables.
                </p>
                <p>
                  Nuestra misión nació de una simple pero poderosa convicción: toda persona merece seguridad y tranquilidad al invertir en su futuro vacacional. Comenzamos especializándonos en tiempos compartidos y propiedades vacacionales, sectores donde la confianza es fundamental.
                </p>
                <p>
                  Desde nuestras oficinas en Wall Street, hemos protegido más de $500 millones en transacciones, ayudando a miles de familias a realizar sus sueños vacacionales de manera segura.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <Heart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Nuestro Propósito
                </h3>
                <p className="text-gray-700 italic">
                  "Creemos que cada transacción inmobiliaria debe ser una experiencia positiva y segura. Por eso existimos."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser el intermediario neutral y confiable que protege las transacciones inmobiliarias de nuestros clientes, especializándonos en propiedades vacacionales y tiempos compartidos. Garantizamos la seguridad de fondos y documentos mientras facilitamos procesos transparentes y eficientes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocidos como el líder en servicios de escrow inmobiliario en el sector vacacional, estableciendo el estándar de excelencia en seguridad, transparencia y servicio personalizado. Expandir nuestra presencia para proteger transacciones a nivel internacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada decisión y acción en nuestra empresa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">$500M+</div>
              <div className="text-blue-200">En transacciones protegidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2,500+</div>
              <div className="text-blue-200">Familias atendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">9+</div>
              <div className="text-blue-200">Años de experiencia</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-blue-200">Tasa de satisfacción</div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que nos hace únicos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tecnología Avanzada</h3>
              <p className="text-gray-600">
                Sistemas de seguridad de última generación y procesos digitalizados que garantizan la protección de sus fondos las 24 horas del día.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Servicio Personalizado</h3>
              <p className="text-gray-600">
                Cada cliente tiene un agente dedicado que lo acompaña durante todo el proceso, brindando atención personalizada y comunicación constante.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Especialización</h3>
              <p className="text-gray-600">
                Expertos en el sector vacacional con conocimiento profundo de las complejidades de tiempos compartidos y propiedades resort.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
