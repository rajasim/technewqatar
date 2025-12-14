import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-secondary-foreground">T</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">Techneqatar</span>
                <span className="text-xs opacity-80">Building Qatar's Future</span>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Leading construction company specializing in government and infrastructure projects across Qatar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">Services</Link></li>
              <li><Link to="/projects" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">Projects</Link></li>
              <li><Link to="/certifications" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">Certifications</Link></li>
              <li><Link to="/careers" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="opacity-90">Civil & Structural Construction</li>
              <li className="opacity-90">Government Infrastructure</li>
              <li className="opacity-90">Roads & Utilities</li>
              <li className="opacity-90">Commercial Buildings</li>
              <li className="opacity-90">Turnkey Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Doha, Qatar</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">+974 XXXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">info@techneqatar.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">MMUP/MME Registered</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="opacity-90">
              {currentYear} Techneqatar
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/terms" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
