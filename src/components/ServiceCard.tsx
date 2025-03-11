
import { ReactNode, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  onClick?: () => void;
  features?: string[];
}

const ServiceCard = ({ title, description, icon, color, onClick, features = [] }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="group glass-card overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ 
        background: `linear-gradient(145deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)` 
      }}
    >
      <div className={`absolute top-0 left-0 w-full h-1`} style={{ backgroundColor: color }}></div>
      
      <div className="p-8">
        <motion.div 
          className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
          style={{ backgroundColor: `${color}25` }} // 25 is for 15% opacity in hex
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div style={{ color: color }}>{icon}</div>
        </motion.div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {features.length > 0 && (
          <ul className="mb-6 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <Button 
          variant="ghost" 
          className="group-hover:text-white group-hover:bg-gradient-to-r from-flexsurf-blue to-flexsurf-blue-dark group-hover:border-transparent transition-all duration-300"
          onClick={onClick}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-transparent group-hover:to-flexsurf-blue/5 transition-all duration-500"></div>
    </motion.div>
  );
};

export default ServiceCard;
