
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Internet Services", href: "/services/internet" },
    { name: "Networking & Computing", href: "/services/networking" },
    { name: "CCTV Installation", href: "/services/cctv" },
    { name: "ISP Billing System", href: "/services/billing" },
    { name: "Web & App Development", href: "/services/development" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "News & Blog", href: "/blog" },
    { name: "Partners", href: "/partners" },
  ];

  const support = [
    { name: "Help Center", href: "/support" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Network Status", href: "/status" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-flexsurf-blue-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-white to-flexsurf-orange animate-pulse-slow">
                <div className="absolute inset-1 rounded-full bg-flexsurf-blue-dark flex items-center justify-center">
                  <span className="text-lg font-bold text-white">F</span>
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                Flexsurf<span className="text-flexsurf-orange">Net</span>
              </span>
            </Link>
            <p className="text-blue-200 mb-6 max-w-md">
              Providing cutting-edge internet services, professional cybersecurity, and innovative technology solutions to elevate your digital presence.
            </p>
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-flexsurf-orange" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-flexsurf-orange" />
                <span>contact@flexsurfnet.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-flexsurf-orange mt-1" />
                <span>123 Tech Plaza, Suite 500<br />Silicon Valley, CA 94043</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-blue-800 pt-8 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
            <p className="text-blue-200 mb-6">Stay updated with the latest news, offers, and tech insights.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-blue-800 focus:outline-none focus:border-flexsurf-orange"
              />
              <button className="px-6 py-2 bg-flexsurf-orange hover:bg-flexsurf-orange-light text-white rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Flexsurf Net. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-blue-200 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-blue-200 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-blue-200 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
