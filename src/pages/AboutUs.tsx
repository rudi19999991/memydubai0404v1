
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
        
        <section className="section-padding">
          <div className="luxury-container">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-3">{translate("Our Story")}</h2>
                <div className="gold-separator mb-6" />
                
                <p className="text-gray-600 mb-6">
                  {translate("Founded in 2005, Invest Dubai has grown from a small consultancy to one of the UAE's premier real estate investment advisory firms. Our journey began with a simple mission: to help international investors navigate the exciting but complex Dubai property market with confidence and clarity.")}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {translate("With the rapid expansion of Dubai's skyline and the introduction of freehold property ownership for foreigners, we positioned ourselves as specialists in helping international clients capitalize on the incredible investment opportunities that the UAE offers.")}
                </p>
                
                <p className="text-gray-600 mb-6">
                  {translate("Today, we're proud to have assisted over 3,000 clients from more than 70 countries, managing a portfolio worth over AED 5 billion. Our team of 45 multilingual consultants combines local expertise with global perspective, ensuring that every client receives personalized guidance tailored to their investment goals.")}
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden h-full">
                  <img 
                    src="https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/PQD4YM5BJZGGNLUDDWUEJWO24Y.gif" 
                    alt="Dubai Skyline" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-gray-50">
          <div className="luxury-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">{translate("Our Achievements")}</h2>
              <div className="gold-separator mx-auto mb-6" />
              <p className="text-gray-600 max-w-3xl mx-auto">
                {translate("Over the past two decades, we've established ourselves as leaders in the UAE real estate market, earning recognition and trust through our unwavering commitment to excellence.")}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-luxury-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">{translate("AED 5+ Billion")}</h3>
                <p className="text-gray-600">
                  {translate("Total value of properties sold since our founding, including some of the most prestigious addresses in Dubai and Ras Al Khaimah.")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-luxury-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">{translate("3,000+ Clients")}</h3>
                <p className="text-gray-600">
                  {translate("Happy investors from over 70 countries who've trusted us with their property investments in the UAE.")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-luxury-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">{translate("15+ Awards")}</h3>
                <p className="text-gray-600">
                  {translate("Recognized for excellence with multiple industry awards, including 'Best International Property Consultancy' for 5 consecutive years.")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-luxury-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Landmark className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">{translate("25+ Developer Partners")}</h3>
                <p className="text-gray-600">
                  {translate("Exclusive relationships with the UAE's top developers, giving our clients priority access to premium properties and special incentives.")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-luxury-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <BadgeCheck className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">{translate("RERA Certified")}</h3>
                <p className="text-gray-600">
                  {translate("Fully licensed and regulated by Dubai's Real Estate Regulatory Authority and Ras Al Khaimah's real estate authorities, ensuring complete legal compliance.")}
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-luxury-navy/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-luxury-navy" />
                </div>
                <h3 className="text-xl font-bold mb-3">{translate("12% Average ROI")}</h3>
                <p className="text-gray-600">
                  {translate("Our property selections have consistently outperformed market averages, delivering exceptional returns for our investment clients.")}
                </p>
              </div>
            </div>
          </div>
        </section>
        
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
                    src="/images/team/emily.jpeg" 
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
