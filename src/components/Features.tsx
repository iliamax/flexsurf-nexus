
import { Check, Upload, Clock, Shield, Cpu, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Upload className="h-6 w-6" />,
      title: "High-Speed Connectivity",
      description: "Experience blazing-fast internet speeds with our premium fiber optic and broadband solutions."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "99.9% Uptime Guarantee",
      description: "We ensure reliable service with our industry-leading uptime guarantee for all connections."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Security",
      description: "Protect your network with our cutting-edge cybersecurity measures and proactive monitoring."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Smart Network Management",
      description: "Optimize your network performance with our intelligent management systems."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Worldwide Coverage",
      description: "Connect globally with our extensive network infrastructure spanning multiple regions."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Expert 24/7 Support",
      description: "Our dedicated support team is available around the clock to assist with any issues."
    }
  ];
  
  return (
    <section className="py-20 relative custom-gradient-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-flexsurf-orange/10 to-flexsurf-blue/10 border border-flexsurf-orange/20">
            <p className="text-sm font-medium text-flexsurf-orange">
              Why Choose Flexsurf Net
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-flexsurf-blue-dark">Innovative Features</span> for 
            <span className="bg-gradient-to-r from-flexsurf-orange to-flexsurf-orange-light bg-clip-text text-transparent"> Modern Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what sets our services apart and why thousands of customers trust Flexsurf Net.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-8 rounded-xl hover-scale bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-flexsurf-blue to-flexsurf-orange rounded-tl-xl rounded-bl-xl"></div>
              <div className="pl-3">
                <div className="p-3 rounded-lg bg-gradient-to-r from-flexsurf-blue/10 to-flexsurf-orange/10 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
