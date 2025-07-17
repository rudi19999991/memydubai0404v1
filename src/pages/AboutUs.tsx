import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { Building, Award, Users, Landmark, BadgeCheck, TrendingUp } from "lucide-react";

const AboutUs = () => {
  const { translate } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("About MeMyDubai")}
          subtitle={translate("Your trusted partner in Dubai and Ras Al Khaimah real estate since 2005")}
          backgroundImage="https://www.rci.com/content/dam/panorama/images/eu_all/post-rci/holiday-ideas/dubai/dubai-banner.jpg"
          showCta={false}
        />
        
        {/* ... Our Story and Achievements sections stay unchanged ... */}

        <section className="section-padding">
          <div className="luxury-container">
            <h2 className="text-3xl font-bold mb-3">{translate("Our Team")}</h2>
            <div className="gold-separator mb-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/team/marvin.jpeg" 
                    alt="Marvin Bennett" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">Marvin Bennett</h3>
                  <p className="text-luxury-gold mb-3">{translate("Founder & CEO")}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {translate("A visionary leader with over 20 years of experience in UAE real estate and global investments.")}
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/team/anna.jpeg" 
                    alt="Anna Ryboeva" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">Anna Ryboeva</h3>
                  <p className="text-luxury-gold mb-3">{translate("Managing Director")}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {translate("An expert with 20 years experience in luxury properties with deep connections to Dubai's most exclusive communities.")}
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/team/rudolf.jpeg" 
                    alt="Rudolf Becker" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">Rudolf Becker</h3>
                  <p className="text-luxury-gold mb-3">{translate("Investment Director")}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {translate("Specializes in high-ROI investments and portfolio diversification strategies across the Emirates.")}
                  </p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/images/team/emely.jpeg" 
                    alt="Emely Steiner" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-1">Emely Steiner</h3>
                  <p className="text-luxury-gold mb-3">{translate("Legal Director")}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {translate("Ensures seamless transactions with expertise in UAE property law and international investments.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
