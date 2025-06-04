
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Users, CheckCircle, ArrowRight, Star, TrendingUp, Award, Lock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Máxima Seguridad",
      description: "Sus fondos están protegidos en cuentas fiduciarias aseguradas con tecnología bancaria de última generación y seguros FDIC."
    },
    {
      icon: Clock,
      title: "Proceso Ágil",
      description: "Transacciones eficientes completadas en 5-7 días hábiles con seguimiento digital en tiempo real durante todo el proceso."
    },
    {
      icon: Users,
      title: "Expertos Especializados",
      description: "Equipo certificado en escrow inmobiliario con más de 15 años de experiencia específica en el sector vacacional."
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Licenciados y regulados por el Departamento de Seguros de Nueva York, miembros de ALTA y ESCROW.org."
    }
  ];

  const services = [
    {
      title: "Escrow para Tiempos Compartidos",
      description: "Especialistas en transacciones de timeshare con Vidanta, Marriott, Hilton y otras marcas premium.",
      features: ["Verificación de títulos", "Transferencias seguras", "Documentación completa"]
    },
    {
      title: "Propiedades Vacacionales",
      description: "Protección integral para compras de condominios, villas y propiedades resort en destinos turísticos.",
      features: ["Due diligence completo", "Inspecciones coordinadas", "Cierre remoto disponible"]
    },
    {
      title: "Inversiones Comerciales",
      description: "Servicios especializados para inversiones en hoteles, resorts y desarrollos comerciales vacacionales.",
      features: ["Análisis financiero", "Estructuración compleja", "Múltiples jurisdicciones"]
    }
  ];

  const testimonials = [
    {
      name: "María González",
      location: "Miami, FL",
      property: "Vidanta Riviera Maya",
      text: "Proceso impecable en la compra de nuestro tiempo compartido. La comunicación fue excelente y nos sentimos seguros en todo momento.",
      rating: 5,
      amount: "$85,000"
    },
    {
      name: "Carlos Rodríguez", 
      location: "Los Angeles, CA",
      property: "Marriott Vacation Club",
      text: "Profesionales excepcionales. Manejaron una transacción compleja internacional sin ningún problema. Altamente recomendados.",
      rating: 5,
      amount: "$125,000"
    },
    {
      name: "Ana Pérez",
      location: "Houston, TX", 
      property: "Hilton Grand Vacations",
      text: "La tranquilidad de saber que nuestros fondos estaban completamente protegidos no tiene precio. Servicio de primera clase.",
      rating: 5,
      amount: "$95,000"
    }
  ];

  const stats = [
    { number: "$750M+", label: "En Transacciones Protegidas" },
    { number: "3,200+", label: "Familias Satisfechas" },
    { number: "99.9%", label: "Tasa de Éxito" },
    { number: "15+", label: "Años de Experiencia" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"grid\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"%3E%3Cpath d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23grid)\"/%3E%3C/svg%3E')] opacity-30"></div>
        
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

      {/* Enhanced Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
              <Award className="h-4 w-4 mr-2 text-blue-600" />
              <span className="text-blue-800 font-medium">Líderes en el Sector</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir New York Trade & Commerce?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La experiencia de Wall Street aplicada exclusivamente a transacciones de propiedades vacacionales y tiempos compartidos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Servicios Especializados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protección integral para cada tipo de inversión vacacional
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 group">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4" size="lg">
              <Link to="/services" className="flex items-center space-x-2">
                <span>Ver Todos los Servicios</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Casos de Éxito Reales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de familias han protegido sus inversiones vacacionales con nosotros
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600">{testimonial.amount}</div>
                    <div className="text-xs text-gray-500">Valor Transacción</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.property}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"grid\" width=\"60\" height=\"60\" patternUnits=\"userSpaceOnUse\"%3E%3Cpath d=\"M 60 0 L 0 0 0 60\" fill=\"none\" stroke=\"rgba(255,255,255,0.1)\" stroke-width=\"1\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23grid)\"/%3E%3C/svg%3E')] opacity-30"></div>
        
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

      <Footer />
    </div>
  );
};

export default Index;
