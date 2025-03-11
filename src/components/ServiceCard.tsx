
import { ReactNode } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  onClick?: () => void;
}

const ServiceCard = ({ title, description, icon, color, onClick }: ServiceCardProps) => {
  return (
    <div 
      className="group glass-card hover-scale overflow-hidden"
      style={{ 
        background: `linear-gradient(145deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)` 
      }}
    >
      <div className="p-8">
        <div 
          className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110`}
          style={{ backgroundColor: `${color}25` }} // 25 is for 15% opacity in hex
        >
          <div className="text-[${color}]">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button 
          variant="ghost" 
          className="group-hover:text-flexsurf-blue group-hover:bg-flexsurf-blue/5 p-0 transition-all"
          onClick={onClick}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
