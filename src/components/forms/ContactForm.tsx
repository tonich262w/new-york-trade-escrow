
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm: React.FC = () => {
  return (
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
  );
};

export default ContactForm;
