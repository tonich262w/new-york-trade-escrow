
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contacto</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Estamos aquí para ayudarle con sus necesidades de escrow inmobiliario
            </p>
          </div>
        </div>
      </section>

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
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre *
                    </label>
                    <Input placeholder="Su nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellido *
                    </label>
                    <Input placeholder="Su apellido" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input type="email" placeholder="su.email@ejemplo.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input placeholder="+1 (212) 555-0123" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Propiedad
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Tiempo Compartido</option>
                    <option>Propiedad Vacacional</option>
                    <option>Condominio Resort</option>
                    <option>Inversión Comercial</option>
                    <option>Otro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <Textarea 
                    placeholder="Cuéntenos sobre su proyecto, monto de la transacción, timeline, y cualquier pregunta específica..."
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  Enviar Consulta
                </Button>
              </form>
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
                      123 Wall Street, Suite 1500<br />
                      New York, NY 10005<br />
                      Estados Unidos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+1 (212) 555-0123</p>
                    <p className="text-gray-600">+1 (212) 555-0124 (Emergencias)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@nytcescrow.com</p>
                    <p className="text-gray-600">support@nytcescrow.com</p>
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

      <Footer />
    </div>
  );
};

export default Contact;
