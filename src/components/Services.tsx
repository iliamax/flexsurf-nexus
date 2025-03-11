
import { Wifi, Server, Monitor, Shield, Globe, CreditCard } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Internet Services",
      description: "High-speed internet installation and management for businesses and individuals.",
      icon: <Wifi size={30} />,
      color: "#0B63E5",
      route: "/services/internet",
      features: [
        "Speeds up to 1Gbps",
        "99.9% uptime guarantee",
        "24/7 technical support",
        "Flexible plans for home and business"
      ]
    },
    {
      title: "Networking & Computing",
      description: "Professional networking equipment and computing devices for all your needs.",
      icon: <Server size={30} />,
      color: "#0A2463",
      route: "/services/networking",
      features: [
        "Enterprise-grade routers and switches",
        "Secure VPN solutions",
        "Network design and installation",
        "Ongoing maintenance and monitoring"
      ]
    },
    {
      title: "CCTV Installation",
      description: "Secure your premises with our professional CCTV installation services.",
      icon: <Monitor size={30} />,
      color: "#FF8600",
      route: "/services/cctv",
      features: [
        "HD and 4K camera options",
        "Remote monitoring capabilities",
        "Motion detection alerts",
        "Cloud storage solutions"
      ]
    },
    {
      title: "ISP Billing System",
      description: "Streamlined billing system for efficient account management and payments.",
      icon: <CreditCard size={30} />,
      color: "#FFB703",
      route: "/services/billing",
      features: [
        "Automated monthly billing",
        "Multiple payment options",
        "Usage tracking and reporting",
        "Customer account management"
      ]
    },
    {
      title: "Web & App Development",
      description: "Custom web and mobile application development for your business needs.",
      icon: <Globe size={30} />,
      color: "#8ECAE6",
      route: "/services/development",
      features: [
        "Responsive web design",
        "Cross-platform mobile apps",
        "E-commerce solutions",
        "API development and integration"
      ]
    },
    {
      title: "Cybersecurity Services",
      description: "Comprehensive cybersecurity solutions to protect your digital assets.",
      icon: <Shield size={30} />,
      color: "#0A2463",
      route: "/services/cybersecurity",
      features: [
        "Threat detection and prevention",
        "Security audits and assessments",
        "Endpoint protection",
        "Employee security training"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              features={service.features}
              onClick={() => navigate(service.route)}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-flexsurf-blue/5 animate-pulse-slow"></div>
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full bg-flexsurf-orange/5 animate-pulse-slow"></div>
    </section>
  );
};

export default Services;
