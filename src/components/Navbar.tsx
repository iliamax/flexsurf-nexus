
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import DesktopNav from './navbar/DesktopNav';
import MobileNav from './navbar/MobileNav';
import { NavItem } from './navbar/navTypes';

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

  const navItems: NavItem[] = [
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
            <img 
              src="/lovable-uploads/8bee8404-d570-4f8a-9701-00393796cd26.png" 
              alt="Flexsurf Net Logo" 
              className="h-12 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav 
            navItems={navItems} 
            activeDropdown={activeDropdown} 
            toggleDropdown={toggleDropdown} 
          />

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

      {/* Mobile Navigation */}
      <MobileNav 
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        activeDropdown={activeDropdown}
        toggleDropdown={toggleDropdown}
        toggleMenu={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
