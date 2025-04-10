
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { translate } = useLanguage();
  
  return (
    <footer className="bg-luxury-navy text-white pt-16 pb-8">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-luxury-gold">ME MY</span>DUBAI
            </h3>
            <p className="text-gray-300 mb-4">
              {translate("Your premier partner for luxury property investments in Dubai and Ras Al Khaimah.")}
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-luxury-gold">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">{translate("Quick Links")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Home")}
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Properties")}
                </Link>
              </li>
              <li>
                <Link to="/roi" className="text-gray-300 hover:text-luxury-gold">
                  {translate("ROI & Investment")}
                </Link>
              </li>
              <li>
                <Link to="/company-setup" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Company Setup")}
                </Link>
              </li>
              <li>
                <Link to="/financing" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Financing")}
                </Link>
              </li>
              <li>
                <Link to="/crypto-buying" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Crypto Buying")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Blog")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Contact Us")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-xl font-bold mb-4">{translate("Property Types")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/properties?type=apartments" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Luxury Apartments")}
                </Link>
              </li>
              <li>
                <Link to="/properties?type=villas" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Premium Villas")}
                </Link>
              </li>
              <li>
                <Link to="/properties?type=penthouses" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Exclusive Penthouses")}
                </Link>
              </li>
              <li>
                <Link to="/properties?type=offplan" className="text-gray-300 hover:text-luxury-gold">
                  {translate("Off-Plan Projects")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">{translate("Contact Us")}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-luxury-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Emirates Towers, Sheikh Zayed Road, Dubai, UAE
                </span>
              </li>
              <li className="flex items-center">
  <MessageCircle className="mr-2 h-5 w-5 text-luxury-gold" />
  <span className="text-gray-300">
    <a href="https://wa.me/4915560882539" className="text-gray-300 hover:underline">
      Call or Message us now
    </a>
  </span>
</li>

              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-luxury-gold" />
<a href="/contact" className="text-gray-300 hover:text-white underline">
        info@memydubai.com
      </a>              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} ME MY DUBAI. {translate("All rights reserved")}.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-luxury-gold text-sm">
                {translate("Privacy Policy")}
              </Link>
	      <Link to="/impressum" className="text-gray-400 hover:text-luxury-gold text-sm">
                {translate("Impressum")}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-luxury-gold text-sm">
                {translate("Terms of Service")}
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-luxury-gold text-sm">
                {translate("Cookie Policy")}

              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
