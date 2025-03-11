
import { Server, Users, Globe, Award } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: <Server className="h-8 w-8" />,
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Ensuring your services are always available"
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "10,000+",
      label: "Happy Customers",
      description: "Businesses and individuals trust our services"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "50+",
      label: "Cities Covered",
      description: "Expanding our network reach continuously"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "15+",
      label: "Years Experience",
      description: "Providing reliable technology solutions"
    }
  ];
  
  return (
    <section className="py-16 bg-flexsurf-blue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              {index > 0 && (
                <div className="absolute left-0 top-1/2 w-px h-16 bg-white/20 -translate-y-1/2 hidden lg:block"></div>
              )}
              <div className="flex flex-col items-center text-center p-4">
                <div className="p-4 rounded-full bg-white/10 mb-4">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-xl font-medium mb-2 text-blue-100">{stat.label}</p>
                <p className="text-blue-200 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
