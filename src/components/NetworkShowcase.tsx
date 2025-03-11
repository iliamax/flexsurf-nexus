
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Server, Share2, Globe, Shield, Activity } from 'lucide-react';

const NetworkShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate normalized position (0 to 1)
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      setMousePosition({ x, y });
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovering(true));
      container.addEventListener('mouseleave', () => setIsHovering(false));
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovering(true));
        container.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);
  
  // Network nodes
  const nodes = [
    { icon: <Server className="h-6 w-6" />, label: "Server", color: "#0B63E5" },
    { icon: <Wifi className="h-6 w-6" />, label: "WiFi", color: "#FF8600" },
    { icon: <Share2 className="h-6 w-6" />, label: "Network", color: "#0A2463" },
    { icon: <Globe className="h-6 w-6" />, label: "Internet", color: "#8ECAE6" },
    { icon: <Shield className="h-6 w-6" />, label: "Security", color: "#FFB703" },
    { icon: <Activity className="h-6 w-6" />, label: "Performance", color: "#3a86ff" }
  ];
  
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-flexsurf-orange/10 to-flexsurf-blue/10 border border-flexsurf-orange/20">
            <p className="text-sm font-medium text-flexsurf-orange">
              Advanced Network Technology
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-flexsurf-blue-dark">Powering Your </span>
            <span className="bg-gradient-to-r from-flexsurf-orange to-flexsurf-blue bg-clip-text text-transparent">
              Digital Infrastructure
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our integrated network solutions provide the foundation for your digital transformation.
          </p>
        </motion.div>
        
        <div 
          ref={containerRef}
          className="relative h-[500px] max-w-4xl mx-auto glass-card perspective rounded-xl p-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-flexsurf-blue/5 to-flexsurf-orange/5 rounded-xl"></div>
          
          {/* Central node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div 
              className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-flexsurf-blue to-flexsurf-blue-dark text-white shadow-lg"
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: isHovering ? "0 0 30px rgba(11, 99, 229, 0.5)" : "0 0 15px rgba(11, 99, 229, 0.3)"
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>
            <div className="text-center mt-2 font-medium text-flexsurf-blue-dark">Flexsurf Net</div>
          </div>
          
          {/* Network nodes */}
          {nodes.map((node, index) => {
            // Calculate position based on index and add some randomness
            const angle = (index * (2 * Math.PI / nodes.length));
            const radius = 180;
            
            // Base position in a circle
            let x = Math.cos(angle) * radius;
            let y = Math.sin(angle) * radius;
            
            // Add mouse interaction effect
            if (isHovering) {
              const mouseInfluence = 30;
              const mouseXOffset = (mousePosition.x - 0.5) * 2 * mouseInfluence;
              const mouseYOffset = (mousePosition.y - 0.5) * 2 * mouseInfluence;
              
              x += mouseXOffset;
              y += mouseYOffset;
            }
            
            // Position relative to center
            const left = `calc(50% + ${x}px)`;
            const top = `calc(50% + ${y}px)`;
            
            return (
              <motion.div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left, top }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative">
                  {/* Connection line to center */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-[1px] h-[180px] bg-gradient-to-b from-gray-300 to-transparent origin-top"
                    style={{ 
                      transformOrigin: 'top',
                      transform: `rotate(${angle + Math.PI}rad)`,
                      opacity: 0.5
                    }}
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  
                  {/* Node */}
                  <motion.div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center shadow-md relative z-10"
                    style={{ backgroundColor: `${node.color}25`, color: node.color }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      y: { duration: 2, repeat: Infinity, delay: index * 0.5 },
                    }}
                  >
                    {node.icon}
                    <motion.div 
                      className="absolute -inset-1 rounded-lg z-[-1]"
                      style={{ backgroundColor: node.color }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.1, 0.2, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </motion.div>
                  <div className="text-center mt-2 text-sm font-medium" style={{ color: node.color }}>
                    {node.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
          
          {/* Animated particles */}
          {[...Array(20)].map((_, index) => {
            const angle = Math.random() * 2 * Math.PI;
            const startRadius = 10;
            const endRadius = 200;
            
            const startX = Math.cos(angle) * startRadius;
            const startY = Math.sin(angle) * startRadius;
            
            const endX = Math.cos(angle) * endRadius;
            const endY = Math.sin(angle) * endRadius;
            
            return (
              <motion.div
                key={`particle-${index}`}
                className="absolute w-1.5 h-1.5 rounded-full bg-flexsurf-blue/50"
                style={{ 
                  left: `calc(50% + ${startX}px)`, 
                  top: `calc(50% + ${startY}px)`,
                }}
                animate={{
                  left: [`calc(50% + ${startX}px)`, `calc(50% + ${endX}px)`],
                  top: [`calc(50% + ${startY}px)`, `calc(50% + ${endY}px)`],
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "linear",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NetworkShowcase;
