
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  videoUrl?: string;
  backgroundImage?: string;
  showCta?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  videoUrl = "", // Default Dubai video
  backgroundImage = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80", // Default Dubai skyline image (fallback)
  showCta = true,
}) => {
  const { translate } = useLanguage();
  
  return (
    <div
      className="relative h-[50vh] min-h-[500px] flex items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <video 
          className="w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster={backgroundImage}
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </video>
        <div className="absolute inset-0 bg-luxury-navy/60" />
      </div>

      <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        <div className="gold-separator mx-auto" />
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto animate-slide-up">
          {subtitle}
        </p>
        {showCta && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold/80 text-white px-6"
              asChild
            >
              <Link to="/properties">
                {translate("Properties")}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-luxury-gold hover:bg-white/80 hover:text-luxury-gold"
              asChild
            >
              <Link to="/contact">
                {translate("Book Consultation")}
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;

