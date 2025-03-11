
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import NavDropdown from './NavDropdown';
import { NavItem } from './navTypes';
import { ThemeToggle } from '../theme/ThemeToggle';

interface DesktopNavProps {
  navItems: NavItem[];
  activeDropdown: string | null;
  toggleDropdown: (dropdown: string) => void;
}

const DesktopNav = ({ navItems, activeDropdown, toggleDropdown }: DesktopNavProps) => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <div className="flex items-center space-x-6">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            {item.dropdown ? (
              <NavDropdown
                label={item.label}
                items={item.items || []}
                isActive={activeDropdown === item.key}
                onToggle={() => toggleDropdown(item.key || '')}
              />
            ) : (
              <Link
                to={item.href || '/'}
                className="text-gray-700 hover:text-flexsurf-blue transition-colors dark:text-gray-300 dark:hover:text-flexsurf-orange"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
        <Button variant="ghost" className="hover:text-flexsurf-blue dark:text-gray-300 dark:hover:text-flexsurf-orange">
          Login
        </Button>
        <Button className="bg-flexsurf-blue hover:bg-flexsurf-blue-dark text-white transition-colors dark:bg-flexsurf-orange dark:hover:bg-flexsurf-orange-light">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default DesktopNav;
