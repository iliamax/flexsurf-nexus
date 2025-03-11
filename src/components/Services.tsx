
import { Wifi, Server, Monitor, Shield, Globe, CreditCard } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Internet Services",
      description: "High-speed internet installation and management for businesses and individuals.",
      icon: <Wifi size={30} />,
      color: "#0B63E5",
      route: "/services/internet"
    },
    {
      title: "Networking & Computing",
      description: "Professional networking equipment and computing devices for all your needs.",
      icon: <Server size={30} />,
      color: "#0A2463",
      route: "/services/networking"
    },
    {
      title: "CCTV Installation",
      description: "Secure your premises with our professional CCTV installation services.",
      icon: <Monitor size={30} />,
      color: "#FF8600",
      route: "/services/cctv"
    },
    {
      title: "ISP Billing System",
      description: "Streamlined billing system for efficient account management and payments.",
      icon: <CreditCard size={30} />,
      color: "#FFB703",
      route: "/services/billing"
    },
    {
      title: "Web & App Development",
      description: "Custom web and mobile application development for your business needs.",
      icon: <Globe size={30} />,
      color: "#8ECAE6",
      route: "/services/development"
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive cybersecurity solutions to protect your digital assets.",
      icon: <Shield size={30} />,
      color: "#0A2463",
      route: "/services/cybersecurity"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-flexsurf-blue/10 to-flexsurf-orange/10 border border-flexsurf-blue/20">
            <p className="text-sm font-medium text-flexsurf-blue-dark">
              Our Comprehensive Services
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-flexsurf-blue-dark to-flexsurf-blue bg-clip-text text-transparent">
              Cutting-Edge Solutions
            </span> for Your Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of services designed to meet all your internet and technology requirements.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              onClick={() => navigate(service.route)}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-flexsurf-blue/5 animate-pulse-slow"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-flexsurf-orange/5 animate-pulse-slow"></div>
    </section>
  );
};

export default Services;
