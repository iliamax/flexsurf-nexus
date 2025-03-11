
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const navItems = [
    {
      label: 'Services',
      dropdown: true,
      key: 'services',
      items: [
        { label: 'Internet Services', href: '/services/internet' },
        { label: 'Networking & Computing', href: '/services/networking' },
        { label: 'CCTV Installation', href: '/services/cctv' },
        { label: 'ISP Billing System', href: '/services/billing' },
        { label: 'Web & App Development', href: '/services/development' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
      ],
    },
    { label: 'About', href: '/about', dropdown: false },
    { label: 'Pricing', href: '/pricing', dropdown: false },
    { label: 'Support', href: '/support', dropdown: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-white bg-opacity-80 backdrop-blur-md shadow-md'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-flexsurf-blue to-flexsurf-orange animate-pulse-slow">
              <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center">
                <span className="text-lg font-bold bg-gradient-to-r from-flexsurf-blue to-flexsurf-orange bg-clip-text text-transparent">
                  F
                </span>
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-flexsurf-blue-dark to-flexsurf-blue bg-clip-text text-transparent">
              Flexsurf<span className="text-flexsurf-orange">Net</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-flexsurf-blue transition-colors"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === item.key ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className="text-gray-700 hover:text-flexsurf-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg glass-card transition-all duration-200 z-20 ${
                        activeDropdown === item.key
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 pointer-events-none -translate-y-2'
                      }`}
                    >
                      <div className="py-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-flexsurf-blue hover:text-white transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hover:text-flexsurf-blue">
                Login
              </Button>
              <Button className="bg-flexsurf-blue hover:bg-flexsurf-blue-dark text-white transition-colors">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-flexsurf-blue focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <div key={item.label} className="py-2">
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.key)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-flexsurf-blue transition-colors py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === item.key ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-200 ${
                      activeDropdown === item.key
                        ? 'max-h-screen opacity-100 py-2'
                        : 'max-h-0 opacity-0 pointer-events-none'
                    } overflow-hidden`}
                  >
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="block pl-4 py-2 text-sm text-gray-600 hover:text-flexsurf-blue transition-colors"
                        onClick={toggleMenu}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href || '/'}
                  className="block text-gray-700 hover:text-flexsurf-blue transition-colors py-2"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-4 flex flex-col space-y-3">
            <Button variant="ghost" className="w-full justify-center">
              Login
            </Button>
            <Button className="w-full justify-center bg-flexsurf-blue hover:bg-flexsurf-blue-dark text-white">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
