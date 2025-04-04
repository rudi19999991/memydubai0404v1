import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, languages } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, setLanguage, translate } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Properties", path: "/properties" },
    { name: "About Us", path: "/about-us" },
    { name: "UAE Know How", path: "/uae-know-how" },
    { name: "ROI & Investment", path: "/roi" },
    { name: "Company Setup", path: "/company-setup" },
    { name: "Financing", path: "/financing" },
    { name: "Crypto Buying", path: "/crypto-buying" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

// Function to handle language change
  const handleLanguageChange = (lang: typeof languages[0]) => {
    setLanguage(lang.code);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="luxury-container">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-luxury-navy">
              <span className="text-luxury-gold">ME MY</span>DUBAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors font-medium ${
                  isActive(link.path)
                    ? "text-luxury-gold"
                    : "text-luxury-charcoal hover:text-luxury-gold"
                }`}
              >
                {translate(link.name)}
              </Link>
            ))}

            <div className="flex items-center space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>{currentLanguage.code.toUpperCase()}</span>
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem 
                      key={lang.code}
                      onClick={() => setLanguage(lang)}
                      className={currentLanguage.code === lang.code ? "bg-muted" : ""}
                    >
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white" asChild>
                <Link to="/contact">{translate("Book Consultation")}</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-luxury-navy p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white animate-fade-in">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`py-2 transition-colors ${
                    isActive(link.path)
                      ? "text-luxury-gold"
                      : "text-luxury-charcoal hover:text-luxury-gold"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {translate(link.name)}
                </Link>
              ))}
              
              <div className="py-2 border-t border-gray-100">
                <p className="text-sm text-luxury-charcoal/70 mb-2">Language</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Button 
                      key={lang.code} 
                      variant={currentLanguage.code === lang.code ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setLanguage(lang)}
                      className={currentLanguage.code === lang.code ? "bg-luxury-gold text-white" : ""}
                    >
                      {lang.name}
                    </Button>
                  ))}
                </div>
              </div>
              
              <Button 
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <Link to="/contact">{translate("Book Consultation")}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
