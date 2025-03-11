
import { motion } from 'framer-motion';

interface LogoSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const LogoSpinner = ({ size = 'medium', className = '' }: LogoSpinnerProps) => {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16'
  };

  return (
    <motion.div 
      className={`${className}`}
      animate={{ rotateY: 360 }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <img 
        src="/lovable-uploads/8bee8404-d570-4f8a-9701-00393796cd26.png" 
        alt="Flexsurf Net Logo" 
        className={`${sizeClasses[size]} w-auto`} 
      />
    </motion.div>
  );
};

export default LogoSpinner;
