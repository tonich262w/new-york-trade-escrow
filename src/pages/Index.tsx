
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Users, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Máxima Seguridad",
      description: "Sus fondos están protegidos en cuentas fiduciarias aseguradas con tecnología bancaria de última generación."
    },
    {
      icon: Clock,
      title: "Proceso Ágil",
      description: "Transacciones eficientes con seguimiento en tiempo real y comunicación constante durante todo el proceso."
    },
    {
      icon: Users,
      title: "Expertos Dedicados",
      description: "Equipo especializado en el sector vacacional con más de 9 años de experiencia en transacciones complejas."
    }
  ];

  const testimonials = [
    {
      name: "María González",
      location: "Miami, FL",
      text: "Excelente servicio en la compra de nuestro tiempo compartido en Vidanta. Todo fue muy transparente y seguro.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      location: "Los Angeles, CA",
      text: "Profesionales de primera. Nos ayudaron con una transacción compleja de Marriott Vacation Club sin problemas.",
      rating: 5
    },
    {
      name: "Ana Pérez",
      location: "Houston, TX",
      text: "Recomiendo totalmente sus servicios. La tranquilidad de saber que nuestros fondos estaban seguros no tiene precio.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Protegemos sus 
                <span className="text-blue-200"> Inversiones Vacacionales</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Servicios especializados de escrow para tiempos compartidos y propiedades vacacionales con la confianza de Wall Street.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Consulta Gratuita
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/about">Conocer Más</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-blue-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>$500M+ Protegidos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>2,500+ Familias</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Transacción Segura Garantizada</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span>Fondos en cuentas fiduciarias aseguradas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span>Verificación completa de documentos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span>Proceso transparente paso a paso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <span>Seguimiento en tiempo real</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir New York Trade & Commerce?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La confianza de Wall Street aplicada a sus transacciones vacacionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <feature.icon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Especialistas en Propiedades Vacacionales
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Desde tiempos compartidos en Vidanta hasta condominios en Marriott Vacation Club, protegemos cada aspecto de su inversión vacacional.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">Tiempos Compartidos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">Propiedades Resort</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">Inversiones Comerciales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">Condominios Vacacionales</span>
                </div>
              </div>
              
              <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                <Link to="/services" className="flex items-center space-x-2">
                  <span>Ver Todos los Servicios</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Marcas con las que Trabajamos</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <h4 className="font-bold text-gray-900">Vidanta</h4>
                  <p className="text-sm text-gray-600">Resorts México</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <h4 className="font-bold text-gray-900">Marriott</h4>
                  <p className="text-sm text-gray-600">Vacation Club</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <h4 className="font-bold text-gray-900">Hilton</h4>
                  <p className="text-sm text-gray-600">Grand Vacations</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow">
                  <h4 className="font-bold text-gray-900">Disney</h4>
                  <p className="text-sm text-gray-600">Vacation Club</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-xl text-gray-600">
              Miles de familias confían en nosotros para proteger sus inversiones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">$500M+</div>
              <div className="text-blue-200">En Transacciones Protegidas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">2,500+</div>
              <div className="text-blue-200">Familias Satisfechas</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.8%</div>
              <div className="text-blue-200">Tasa de Éxito</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">9+</div>
              <div className="text-blue-200">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Listo para Proteger su Inversión Vacacional?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Obtenga una consulta gratuita con nuestros expertos en escrow inmobiliario y descubra cómo podemos hacer su transacción más segura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Solicitar Consulta Gratuita</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/about">Conocer Nuestra Historia</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
