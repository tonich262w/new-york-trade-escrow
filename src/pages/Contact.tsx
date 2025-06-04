
import React from 'react';
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/forms/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData } from '@/data/siteData';

const Contact: React.FC = () => {
  return (
    <Layout 
      pageTitle="Contacto"
      pageDescription="Estamos aquí para ayudarle con sus necesidades de escrow inmobiliario"
    >
      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hablemos de su Proyecto
              </h2>
              <p className="text-gray-600 mb-8">
                Complete el formulario y uno de nuestros especialistas se pondrá en contacto con usted en menos de 24 horas.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Dirección</h4>
                    <p className="text-gray-600">
                      {siteData.company.address.street}<br />
                      {siteData.company.address.city}, {siteData.company.address.state} {siteData.company.address.zip}<br />
                      {siteData.company.address.country}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">{siteData.company.phone}</p>
                    <p className="text-gray-600">{siteData.company.emergency} (Emergencias)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">{siteData.company.email}</p>
                    <p className="text-gray-600">{siteData.company.support}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <p className="text-gray-600">
                      Lunes - Viernes: 8:00 AM - 6:00 PM EST<br />
                      Sábado: 9:00 AM - 2:00 PM EST<br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">
                  Consulta de Emergencia
                </h4>
                <p className="text-blue-700 text-sm">
                  Para asuntos urgentes fuera del horario comercial, contamos con servicio de emergencia 24/7 para nuestros clientes activos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
