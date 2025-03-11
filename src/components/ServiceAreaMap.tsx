
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Check, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ServiceAreaMap = () => {
  const [zipCode, setZipCode] = useState('');
  const [checkResult, setCheckResult] = useState<'available' | 'unavailable' | null>(null);
  
  // Simulated service areas (in real app, this would come from an API)
  const servicedZipCodes = ['12345', '23456', '34567', '45678', '56789', '67890'];
  
  const checkAvailability = () => {
    if (!zipCode || zipCode.length < 5) {
      toast.error("Please enter a valid ZIP code");
      return;
    }
    
    // Simulate API check with a timeout
    setTimeout(() => {
      const isAvailable = servicedZipCodes.includes(zipCode);
      setCheckResult(isAvailable ? 'available' : 'unavailable');
      
      if (isAvailable) {
        toast.success("Service Available!", {
          description: `We provide service in ${zipCode}`
        });
      } else {
        toast.error("Service Unavailable", {
          description: `Unfortunately, we don't service ${zipCode} yet`
        });
      }
    }, 500);
  };
  
  const serviceAreas = [
    { city: "New York", state: "NY", coverage: "Full city coverage" },
    { city: "Los Angeles", state: "CA", coverage: "Metropolitan area" },
    { city: "Chicago", state: "IL", coverage: "Downtown and suburbs" },
    { city: "Houston", state: "TX", coverage: "Select neighborhoods" },
    { city: "Phoenix", state: "AZ", coverage: "Citywide service" },
    { city: "Philadelphia", state: "PA", coverage: "Central districts" }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-flexsurf-blue/10 to-flexsurf-orange/10 border border-flexsurf-blue/20">
            <p className="text-sm font-medium text-flexsurf-blue-dark">
              Our Coverage Areas
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-flexsurf-blue-dark">Check If We</span>
            <span className="bg-gradient-to-r from-flexsurf-blue to-flexsurf-orange bg-clip-text text-transparent"> Service Your Area</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Flexsurf Net provides service in major cities across the country. Enter your ZIP code to check availability.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side - ZIP Checker */}
          <div className="lg:w-1/2">
            <motion.div 
              className="glass-card p-8 rounded-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-flexsurf-blue-dark">Check Availability</h3>
              <div className="flex gap-3 mb-6">
                <input
                  type="text"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-flexsurf-blue/50"
                  placeholder="Enter your ZIP code"
                  maxLength={5}
                  value={zipCode}
                  onChange={(e) => {
                    // Only allow digits
                    const value = e.target.value.replace(/\D/g, '');
                    setZipCode(value);
                    if (checkResult) setCheckResult(null);
                  }}
                />
                <Button 
                  className="bg-flexsurf-blue hover:bg-flexsurf-blue-dark"
                  onClick={checkAvailability}
                >
                  Check
                </Button>
              </div>
              
              {checkResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`rounded-lg p-4 ${
                    checkResult === 'available' 
                      ? 'bg-green-50 border border-green-100' 
                      : 'bg-red-50 border border-red-100'
                  }`}
                >
                  <div className="flex items-start">
                    {checkResult === 'available' ? (
                      <Check className="text-green-500 h-5 w-5 mr-2 mt-0.5" />
                    ) : (
                      <AlertCircle className="text-red-500 h-5 w-5 mr-2 mt-0.5" />
                    )}
                    <div>
                      <p className={`font-medium ${
                        checkResult === 'available' ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {checkResult === 'available' 
                          ? 'Service Available!' 
                          : 'Service Not Available'}
                      </p>
                      <p className="text-sm mt-1">
                        {checkResult === 'available' 
                          ? `Great news! Flexsurf Net is available in ${zipCode}. You can sign up for our services today.` 
                          : `Unfortunately, we don't currently service ${zipCode}. Please leave your email and we'll notify you when we expand to your area.`}
                      </p>
                      
                      {checkResult === 'unavailable' && (
                        <div className="mt-3 flex gap-2">
                          <input
                            type="email"
                            className="flex-1 px-3 py-2 text-sm rounded border border-red-200 focus:outline-none focus:ring-1 focus:ring-red-300"
                            placeholder="Your email address"
                          />
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-red-300 text-red-700 hover:bg-red-50"
                            onClick={() => toast.success("We'll notify you when service becomes available")}
                          >
                            Notify Me
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
          
          {/* Right Side - Coverage Map */}
          <div className="lg:w-1/2">
            <motion.div
              className="relative aspect-[4/3] rounded-xl overflow-hidden glass-card bg-white/60"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Simulated map - in a real implementation, use Google Maps or another map provider */}
              <div className="absolute inset-0 bg-blue-50/50">
                <img 
                  src="https://www.mapquestapi.com/staticmap/v5/map?key=KEY_PLACEHOLDER&center=United%20States&size=600,400&zoom=3"
                  alt="Service Area Map"
                  className="w-full h-full object-cover opacity-70"
                />
                
                {/* Service area pins */}
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{
                      top: `${15 + Math.random() * 70}%`,
                      left: `${10 + Math.random() * 80}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 * index, type: "spring" }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  >
                    <div className="relative">
                      <div className="absolute -top-16 -left-24 w-48 p-2 bg-white rounded-lg shadow-md text-center opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100 z-10">
                        <p className="font-medium text-flexsurf-blue-dark">{area.city}, {area.state}</p>
                        <p className="text-xs text-gray-500">{area.coverage}</p>
                      </div>
                      <div className="relative group">
                        <div className="p-2 bg-flexsurf-blue rounded-full text-white cursor-pointer">
                          <MapPin size={16} />
                        </div>
                        <div className="absolute -top-16 -left-24 w-48 p-2 bg-white rounded-lg shadow-md text-center opacity-0 group-hover:opacity-100 pointer-events-none z-10">
                          <p className="font-medium text-flexsurf-blue-dark">{area.city}, {area.state}</p>
                          <p className="text-xs text-gray-500">{area.coverage}</p>
                        </div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-flexsurf-blue/20"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {serviceAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <div className="w-2 h-2 rounded-full bg-flexsurf-blue"></div>
                  <p>{area.city}, {area.state}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
