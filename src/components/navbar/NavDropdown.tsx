
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
  isActive: boolean;
  onToggle: () => void;
  isMobile?: boolean;
  onMobileItemClick?: () => void;
}

const NavDropdown = ({ 
  label, 
  items, 
  isActive, 
  onToggle, 
  isMobile = false,
  onMobileItemClick
}: NavDropdownProps) => {
  return (
    <div className={`${isMobile ? '' : 'relative group'}`}>
      <button
        onClick={onToggle}
        className={`
          flex items-center ${isMobile ? 'justify-between w-full py-2' : 'space-x-1'} 
          text-gray-700 hover:text-flexsurf-blue transition-colors
          dark:text-gray-300 dark:hover:text-flexsurf-orange
        `}
      >
        <span>{label}</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${isActive ? 'rotate-180' : ''}`}
        />
      </button>

      {isMobile ? (
        <div
          className={`transition-all duration-200 ${
            isActive
              ? 'max-h-screen opacity-100 py-2'
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
        >
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block pl-4 py-2 text-sm text-gray-600 hover:text-flexsurf-blue transition-colors dark:text-gray-400 dark:hover:text-flexsurf-orange"
              onClick={onMobileItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : (
        <div
          className={`absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg glass-card transition-all duration-200 z-20 ${
            isActive
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-2'
          }`}
        >
          <div className="py-2">
            {items.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-flexsurf-blue hover:text-white transition-colors dark:text-gray-300 dark:hover:bg-flexsurf-orange dark:hover:text-white"
                onClick={onToggle}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavDropdown;
