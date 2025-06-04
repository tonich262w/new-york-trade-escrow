
// Static data that can be easily replaced with WordPress content
export const siteData = {
  company: {
    name: "New York Trade & Commerce",
    tagline: "Specialized Escrow Services",
    phone: "+1 (212) 555-0123",
    emergency: "+1 (212) 555-0124",
    email: "info@nytcescrow.com",
    support: "support@nytcescrow.com",
    address: {
      street: "123 Wall Street, Suite 1500",
      city: "New York",
      state: "NY",
      zip: "10005",
      country: "Estados Unidos"
    }
  },
  
  navigation: [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/services" },
    { name: "Sobre Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ],
  
  stats: [
    { number: "$750M+", label: "En Transacciones Protegidas" },
    { number: "3,200+", label: "Familias Satisfechas" },
    { number: "99.9%", label: "Tasa de Éxito" },
    { number: "15+", label: "Años de Experiencia" }
  ],
  
  services: [
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
  ],
  
  testimonials: [
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
  ]
};
