
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Wifi, Server, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const icons = container.querySelectorAll('.floating-icon');
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      icons.forEach((icon) => {
        const speed = Number((icon as HTMLElement).dataset.speed) || 1;
        (icon as HTMLElement).style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px)`;
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-flexsurf-blue animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-flexsurf-orange animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-flexsurf-blue-light animate-pulse-slow"></div>
      </div>
      
      {/* Floating Icons */}
      <div className="floating-icon absolute top-20 right-[15%] p-4 rounded-lg glass-card" data-speed="2">
        <Wifi className="text-flexsurf-blue h-8 w-8" />
      </div>
      <div className="floating-icon absolute bottom-40 left-[10%] p-4 rounded-lg glass-card" data-speed="1.5">
        <Server className="text-flexsurf-orange h-8 w-8" />
      </div>
      <div className="floating-icon absolute top-40 left-[20%] p-4 rounded-lg glass-card" data-speed="1">
        <Shield className="text-flexsurf-blue-dark h-8 w-8" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-flexsurf-blue/10 to-flexsurf-orange/10 border border-flexsurf-blue/20">
              <p className="text-sm font-medium text-flexsurf-blue-dark">
                Your Premier ISP Provider
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-flexsurf-blue-dark">Transforming Your</span>
              <span className="block bg-gradient-to-r from-flexsurf-blue to-flexsurf-orange bg-clip-text text-transparent">
                Digital Experience
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Cutting-edge internet services, professional cybersecurity solutions,
              and innovative technology services to elevate your digital presence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-flexsurf-blue hover:bg-flexsurf-blue-dark text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-flexsurf-blue to-flexsurf-orange p-0.5">
                    <div className="w-full h-full rounded-full bg-white"></div>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">4.9 from 2,000+ reviews</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 perspective flex justify-center animate-fade-in-slow">
            <img 
              src="/lovable-uploads/8bee8404-d570-4f8a-9701-00393796cd26.png" 
              alt="Flexsurf Net Logo" 
              className="w-4/5 max-w-md animate-float drop-shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
