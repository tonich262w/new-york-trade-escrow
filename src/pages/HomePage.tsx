
import React from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';
import { Shield, Clock, Users, Award } from "lucide-react";
import { siteData } from '@/data/siteData';

const HomePage: React.FC = () => {
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

  return (
    <Layout>
      <HeroSection stats={siteData.stats} />
      <FeaturesSection features={features} />
      <ServicesSection services={siteData.services} />
      <TestimonialsSection testimonials={siteData.testimonials} />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
