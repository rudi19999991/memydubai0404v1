
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Stamp, 
  Building, 
  GraduationCap, 
  School, 
  Globe, 
  Scale, 
  Wrench, 
  Paintbrush, 
  Calendar, 
  Home 
} from "lucide-react";

const KnowHowCategories = () => {
  const { translate } = useLanguage();
  const navigate = useNavigate();

  const categories = [
    {
      title: translate("Visa Information"),
      icon: <Stamp className="h-10 w-10 text-luxury-gold" />,
      description: translate("Learn about UAE visa types, requirements, and benefits for residents and investors."),
      details: [
        translate("Golden Visa: 10-year residency for investors and professionals"),
        translate("Investor Visa: 3-year residency with property investment"),
        translate("Employment Visa: Sponsored by UAE companies"),
        translate("Tourist Visa: 30-90 days for visitors"),
        translate("Retirement Visa: 5-year visa for retirees")
      ],
    },
    {
      title: translate("Bank Account Opening"),
      icon: <Building className="h-10 w-10 text-luxury-gold" />,
      description: translate("Guidelines for opening personal and corporate bank accounts in the UAE."),
      details: [
        translate("Personal Account Requirements: Emirates ID, passport, visa"),
        translate("Corporate Account Documents: Trade license, ownership proof"),
        translate("International Bank Options: HSBC, Emirates NBD, RAK Bank"),
        translate("Minimum Balance Requirements: 3,000-5,000 AED"),
        translate("Online Banking Features: Digital transfers, bill payments")
      ],
    },
    {
      title: translate("Schools"),
      icon: <School className="h-10 w-10 text-luxury-gold" />,
      description: translate("Information about international and local schools in Dubai and Ras Al Khaimah."),
      details: [
        translate("British Curriculum Schools: GEMS, Kings School"),
        translate("American Curriculum: American School of Dubai"),
        translate("IB Schools: Dubai International Academy"),
        translate("Annual Fees: 45,000-100,000 AED"),
        translate("Admission Process: Assessment tests, interviews")
      ],
    },
    {
      title: translate("Universities"),
      icon: <GraduationCap className="h-10 w-10 text-luxury-gold" />,
      description: translate("Explore higher education options in the UAE including international campuses."),
      details: [
        translate("Top Universities: NYU Abu Dhabi, Heriot-Watt Dubai"),
        translate("Scholarship Programs: Merit-based, Emirati support"),
        translate("Program Types: Undergraduate, Masters, PhD"),
        translate("Tuition Range: 40,000-120,000 AED per year"),
        translate("Student Visa Process: University sponsorship")
      ],
    },
    {
      title: translate("Offshore Company Setup"),
      icon: <Globe className="h-10 w-10 text-luxury-gold" />,
      description: translate("Complete guide to establishing offshore companies in the UAE free zones."),
      details: [
        translate("Free Zone Options: JAFZA, DMCC, RAK ICC"),
        translate("Setup Cost: Starting from 15,000 AED"),
        translate("Required Documents: Passport copies, bank reference"),
        translate("Timeline: 3-7 working days"),
        translate("Benefits: 0% tax, 100% ownership")
      ],
    },
    {
      title: translate("Legal Assistance"),
      icon: <Scale className="h-10 w-10 text-luxury-gold" />,
      description: translate("Legal services for property purchase, company formation, and residency matters."),
      details: [
        translate("Property Purchase Legal Support"),
        translate("Business Setup Documentation"),
        translate("Residency Permit Applications"),
        translate("Contract Review and Drafting"),
        translate("Dispute Resolution Services")
      ],
    },
    {
      title: translate("Property Maintenance"),
      icon: <Wrench className="h-10 w-10 text-luxury-gold" />,
      description: translate("Maintenance services and solutions for property owners in the UAE."),
      details: [
        translate("24/7 Emergency Services"),
        translate("Annual Maintenance Contracts"),
        translate("HVAC System Servicing"),
        translate("Pool and Garden Maintenance"),
        translate("Building Systems Inspection")
      ],
    },
    {
      title: translate("Interior Design"),
      icon: <Paintbrush className="h-10 w-10 text-luxury-gold" />,
      description: translate("Interior design and property upgrade services for investors and homeowners."),
      details: [
        translate("Full Home Design Services"),
        translate("Furniture Selection and Procurement"),
        translate("Kitchen and Bathroom Renovation"),
        translate("Smart Home Integration"),
        translate("Project Management Services")
      ],
    },
    {
      title: translate("Short Term Rentals"),
      icon: <Calendar className="h-10 w-10 text-luxury-gold" />,
      description: translate("Guide to short-term rental regulations, management, and potential returns."),
      details: [
        translate("License Requirements: DTCM approval"),
        translate("Average Daily Rates: 500-2,000 AED"),
        translate("Property Management Services"),
        translate("Marketing Platforms: Airbnb, Booking.com"),
        translate("ROI: 8-12% annual returns")
      ],
    },
    {
      title: translate("Long Term Rentals"),
      icon: <Home className="h-10 w-10 text-luxury-gold" />,
      description: translate("Everything you need to know about long-term property rentals in the UAE."),
      details: [
        translate("Tenancy Contract Requirements"),
        translate("Security Deposit: 5% of annual rent"),
        translate("Maintenance Responsibilities"),
        translate("Annual Rent Increases: RERA calculator"),
        translate("ROI: 5-8% annual returns")
      ],
    },
  ];

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">{translate("UAE Know How Categories")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translate("Explore our comprehensive guides on various aspects of living, investing, and doing business in the UAE.")}
          </p>
          <div className="gold-separator mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              onClick={() => handleCategoryClick(category.path)}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              <div className="hidden group-hover:block w-full">
                <div className="h-px bg-gray-200 my-3"></div>
                <ul className="text-left text-sm text-gray-600 space-y-2">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-luxury-gold mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowHowCategories;
