
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import NavDropdown from './NavDropdown';
import { NavItem } from './navTypes';

interface MobileNavProps {
  isMenuOpen: boolean;
  navItems: NavItem[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
  toggleMenu: () => void;
}

const MobileNav = ({ 
  isMenuOpen, 
  navItems, 
  activeDropdown, 
  toggleDropdown, 
  toggleMenu 
}: MobileNavProps) => {
  return (
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
              <NavDropdown
                label={item.label}
                items={item.items || []}
                isActive={activeDropdown === item.key}
                onToggle={() => toggleDropdown(item.key || '')}
                isMobile={true}
                onMobileItemClick={toggleMenu}
              />
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
  );
};

export default MobileNav;
