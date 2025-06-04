
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Clock, FileText, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Escrow para Tiempos Compartidos",
      description: "Protección completa para compras de tiempos compartidos en resorts de prestigio como Vidanta, Marriott, Hilton y más.",
      features: ["Verificación de títulos", "Protección de depósitos", "Gestión de documentos legales", "Comunicación con desarrolladores"]
    },
    {
      icon: FileText,
      title: "Propiedades Vacacionales",
      description: "Servicios especializados para la adquisición de condominios, villas y casas vacacionales en destinos turísticos.",
      features: ["Inspección de propiedades", "Validación legal", "Transferencia segura de fondos", "Asesoría fiscal"]
    },
    {
      icon: Users,
      title: "Transacciones Comerciales",
      description: "Escrow para inversiones comerciales en el sector hotelero y turístico, incluyendo participaciones en resorts.",
      features: ["Due diligence", "Estructuración de transacciones", "Gestión de múltiples partes", "Reportes detallados"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consulta Initial",
      description: "Evaluamos sus necesidades y explicamos el proceso completo de escrow."
    },
    {
      step: "2",
      title: "Configuración",
      description: "Establecemos la cuenta de escrow y definimos los términos y condiciones."
    },
    {
      step: "3",
      title: "Depósito",
      description: "Los fondos se depositan de forma segura en nuestra cuenta fiduciaria."
    },
    {
      step: "4",
      title: "Verificación",
      description: "Validamos documentos, títulos y cumplimiento de condiciones."
    },
    {
      step: "5",
      title: "Cierre",
      description: "Una vez cumplidas todas las condiciones, liberamos los fondos."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Servicios especializados de escrow para el sector inmobiliario vacacional
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Solicitar Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios de Escrow Especializados
            </h2>
            <p className="text-xl text-gray-600">
              Protección integral para sus inversiones vacacionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Más Información
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso
            </h2>
            <p className="text-xl text-gray-600">
              Un proceso claro y transparente en 5 pasos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resort Partners */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trabajamos con las Mejores Marcas
            </h2>
            <p className="text-xl text-gray-600">
              Experiencia comprobada con los principales desarrolladores vacacionales
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-900">Vidanta Resorts</h3>
              <p className="text-sm text-gray-600">México</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-900">Marriott Vacation Club</h3>
              <p className="text-sm text-gray-600">Global</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-900">Hilton Grand Vacations</h3>
              <p className="text-sm text-gray-600">Global</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <h3 className="font-bold text-gray-900">Disney Vacation Club</h3>
              <p className="text-sm text-gray-600">USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Proteger su Inversión?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contacte a nuestros expertos para una consulta gratuita y descubra cómo podemos proteger su transacción inmobiliaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Consulta Gratuita
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Ver Casos de Éxito
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
