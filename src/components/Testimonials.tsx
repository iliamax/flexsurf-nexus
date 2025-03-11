
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechVision",
    content: "Flexsurf Net transformed our company's internet infrastructure. Their high-speed connections and dedicated support team have been instrumental to our growth. I highly recommend their services to any business looking for reliable internet solutions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Michael Chen",
    position: "CTO, DataFlow Systems",
    content: "The cybersecurity services provided by Flexsurf Net have significantly improved our network security posture. Their team's expertise and proactive approach to threat detection have given us peace of mind knowing our data is protected.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "Emily Rodriguez",
    position: "IT Director, Global Retail Inc.",
    content: "We've been using Flexsurf Net's networking solutions for over three years now, and their service has been consistently exceptional. The CCTV installation they performed for our multiple locations was professional and efficient.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    name: "David Wilson",
    position: "Owner, Wilson's Hardware",
    content: "As a small business owner, I needed an affordable but reliable internet solution. Flexsurf Net delivered exactly what I needed, with excellent customer service and technical support whenever I had questions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      nextTestimonial();
    }, 6000);
  };
  
  useEffect(() => {
    resetInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-flexsurf-blue/10 to-flexsurf-orange/10 border border-flexsurf-blue/20">
            <p className="text-sm font-medium text-flexsurf-blue-dark">
              Customer Testimonials
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-flexsurf-blue-dark">What Our</span>
            <span className="bg-gradient-to-r from-flexsurf-blue to-flexsurf-orange bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our valued customers have to say about their experience with Flexsurf Net.
          </p>
        </div>
        
        {/* Testimonials Slider */}
        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full px-4"
                >
                  <div className="glass-card p-8 md:p-12 rounded-2xl">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="relative">
                          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -top-2 -right-2 p-2 rounded-full bg-flexsurf-orange text-white">
                            <Quote size={16} />
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/3 text-center md:text-left">
                        <p className="text-gray-700 text-lg mb-6 italic">"{testimonial.content}"</p>
                        <h4 className="text-xl font-semibold text-flexsurf-blue-dark">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={() => {
                prevTestimonial();
                resetInterval();
              }}
              className="p-2 rounded-full border border-gray-300 hover:bg-flexsurf-blue hover:text-white hover:border-flexsurf-blue transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetInterval();
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'bg-flexsurf-blue scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={() => {
                nextTestimonial();
                resetInterval();
              }}
              className="p-2 rounded-full border border-gray-300 hover:bg-flexsurf-blue hover:text-white hover:border-flexsurf-blue transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
