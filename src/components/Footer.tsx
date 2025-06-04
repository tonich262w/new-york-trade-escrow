
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">NYC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">New York Trade & Commerce</h3>
                <p className="text-gray-400">Escrow Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Protegemos sus transacciones inmobiliarias con servicios de escrow seguros y confiables, especializados en propiedades vacacionales y tiempos compartidos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">123 Wall Street, New York, NY 10005</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">+1 (212) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-400">info@nytcescrow.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Escrow Inmobiliario</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Tiempos Compartidos</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Propiedades Vacacionales</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Consultoría</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 New York Trade & Commerce. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
