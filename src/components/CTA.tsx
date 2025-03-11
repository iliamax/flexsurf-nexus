
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-flexsurf-blue to-flexsurf-blue-dark opacity-90"></div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-white animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-flexsurf-orange animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have elevated their digital presence with Flexsurf Net's premium services.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-flexsurf-blue hover:text-flexsurf-blue-dark w-full sm:w-auto">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
              View Pricing Plans
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-white/10">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-blue-100 text-sm">Call us at</p>
                <p className="text-white font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
            
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-white/10">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-blue-100 text-sm">Email us at</p>
                <p className="text-white font-medium">contact@flexsurfnet.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
