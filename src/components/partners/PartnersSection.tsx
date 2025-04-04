
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Landmark, Scale, Briefcase } from "lucide-react";

const PartnersSection = () => {
  const { translate } = useLanguage();

  // Lists of partners by category with logos
  const developers = [
    { name: "Emaar Properties", logo: "https://seekvectors.com/files/download/emaar-logo.png" },
    { name: "Dubai Holding", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/AW_DH_PV_POS_RGB_EN_%28002%29.png" },
    { name: "Nakheel", logo: "https://cdn.worldvectorlogo.com/logos/nakheel-properties-logo.svg" },
    { name: "DAMAC Properties", logo: "https://banner2.cleanpng.com/20180425/uhq/ave9mhcdz.webp" },
    { name: "Meraas", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Meraas-logo.svg/1200px-Meraas-logo.svg.png" },
    { name: "Sobha Realty", logo: "https://raydium.ae/wp-content/uploads/2024/05/sobha-realty_eng-logo-02.png" },
    { name: "Omniyat", logo: "https://static.wixstatic.com/media/f21e62_d2cedb3aa1dc4364b33625748a94a343~mv2.png/v1/fill/w_312,h_191,al_c/Omniyat.png" },
    { name: "Azizi Developments", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Azizi-developments.png" },
    { name: "Danube Properties", logo: "https://emirates.estate/de/uploads/images/2020-12/danube.png" },
    { name: "Binghatti Developers", logo: "https://home-dubai.de/wp-content/uploads/2024/12/binghatti-logo.png" },
    { name: "RAK Properties", logo: "https://fpproperty.com/wp-content/uploads/2023/09/RAK-Properties.svg" },
    { name: "Al Hamra", logo: "https://cparamount.com/wp-content/themes/cparamount/assets/images/al-hamra-logo.png" }
  ];

  const banks = [
    { name: "Emirates NBD", logo: "https://banner2.cleanpng.com/20180617/ssv/aa6u3a670.webp" },
    { name: "ADCB", logo: "https://arabmls.org/wp-content/uploads/2024/04/Abu_Dhabi_Commercial_Bank_logo.svg.png" },
    { name: "Dubai Islamic Bank", logo: "https://cdn.freelogovectors.net/wp-content/uploads/2020/03/dubai-islamic-bank-logo-180x180.png" },
    { name: "Mashreq Bank", logo: "https://static.wixstatic.com/media/afe8e2_672ae92298fc4e4fa06fa6d0fd11d426~mv2.png/v1/fill/w_320,h_326,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mashreq.png" },
    { name: "RAKBANK", logo: "https://timg1cf.b8cdn.com/images/templates/rak_bank/rak_bank-logo-share-en.png?vid=25" },
    { name: "HSBC UAE", logo: "https://www.veryicon.com/download/png/internet--web/payment-method/hsbc-bank-1?s=256" },
    { name: "FAB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/First_Abu_Dhabi_Bank_Logo.svg/2560px-First_Abu_Dhabi_Bank_Logo.svg.png" },
    { name: "Standard Chartered UAE", logo: "https://cdn.iconscout.com/icon/free/png-256/free-standard-chartered-711808.png?f=webp" },
    { name: "Ajman Bank", logo: "https://companieslogo.com/img/orig/AJMANBANK.AE_BIG-f1b1925b.png?t=1720244490" },
    { name: "Commercial Bank of Dubai", logo: "https://companieslogo.com/img/orig/CBD.AE_BIG-7b02325d.png?t=1720244491" }
  ];

  const lawFirms = [
    { name: "Al Tamimi & Company", logo: "https://i0.wp.com/www.lexis.ae/wp-content/uploads/2022/01/WIL-Sponsor_Al-Tamimi-Co.png?resize=300%2C300&ssl=1g" },
    { name: "Baker McKenzie", logo: "https://download.logo.wine/logo/Baker_McKenzie/Baker_McKenzie-Logo.wine.png" },
    { name: "Clyde & Co", logo: "https://eagles.org.uk/wp-content/uploads/bfi_thumb/clyde-co-36n2l3t98v07j0f3l24yup16txd0pqpnarhfsg2hw9ouns7po.png" },
    { name: "Hadef & Partners", logo: "https://www.legal500.com/cdn-cgi/image/width=256/https://www.legal500.com/profiles/wp-content/uploads/sites/13/2025/01/HP-Primary-EN-Logo-RGB-AW.png" },
    { name: "BSA Ahmad Bin Hezeem & Associates", logo: "https://files.lbr.cloud/public/2023-11/main-logo-full.png?VersionId=iPIyM6xK0qdS3VBd5O2PyuTSlwvHzbyc" },
    { name: "Galadari Advocates & Legal Consultants", logo: "https://galadarilaw.com/wp-content/themes/Galadari/img/Galadari%20Logo%20-%20Full%20-%20Purple.png" },
    { name: "Meyer-Reumann & Partners", logo: "https://s2091.pcdn.co/wp-content/uploads/2019/10/MP-Logo_Color-web.png" },
    { name: "Afridi & Angell", logo: "https://d1imjpjik7kc4g.cloudfront.net/scfirm_images/e491bd95340cd4f9e355c803c53b2438.png" }
  ];

  const freeZones = [
    { name: "Dubai Multi Commodities Centre (DMCC)", logo: "https://images.seeklogo.com/logo-png/45/2/dmcc-logo-png_seeklogo-456830.png?v=1957127806031201864" },
    { name: "Dubai International Financial Centre (DIFC)", logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/DIFC_logo.png" },
    { name: "Dubai Silicon Oasis", logo: "https://solisdentalclinic.com/wp-content/uploads/2022/04/Logos-02-e1648786286935-300x184.png" },
    { name: "Dubai Media City", logo: "https://images.squarespace-cdn.com/content/v1/5b33b13596e76f3138a6dd52/1587635757844-H21E1ID1LWG4QHT1MGSH/dmc+logo.png" },
    { name: "Jebel Ali Free Zone (JAFZA)", logo: "https://images.seeklogo.com/logo-png/33/2/jafza-logo-png_seeklogo-337403.png" },
    { name: "Dubai Airport Free Zone (DAFZA)", logo: "https://dafza.audit.ae/wp-content/uploads/2024/06/image-12.webp" },
    { name: "Ras Al Khaimah Economic Zone (RAKEZ)", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/RAKEZ_Logo_-_English_-_Standard_%28Web%29_Small.png" },
    { name: "Ajman Free Zone", logo: "https://ik.imagekit.io/gssz39c8t/twsz3/wp-content/uploads/2022/01/ajmanfreezone-300x135.png" },
    { name: "Sharjah Media City (SHAMS)", logo: "https://www.aurionuae.com/wp-content/uploads/2022/09/shams-logo.webp" }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="luxury-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">{translate("Our Partners")}</h2>
          <div className="gold-separator mx-auto mb-4" />
          <p className="text-gray-600 max-w-3xl mx-auto">
            {translate("We work with the UAE's most trusted organizations to ensure seamless transactions and exceptional service for our clients.")}
          </p>
        </div>
        
        <Tabs defaultValue="developers" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4 mb-8">
            <TabsTrigger value="developers" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>{translate("Developers")}</span>
            </TabsTrigger>
            <TabsTrigger value="banks" className="flex items-center gap-2">
              <Landmark className="h-4 w-4" />
              <span>{translate("Banks")}</span>
            </TabsTrigger>
            <TabsTrigger value="law-firms" className="flex items-center gap-2">
              <Scale className="h-4 w-4" />
              <span>{translate("Law Firms")}</span>
            </TabsTrigger>
            <TabsTrigger value="free-zones" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>{translate("Free Zones")}</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="developers" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{translate("Premier Property Developers")}</h3>
              <p className="text-gray-600 mb-6">
                {translate("We've built strong relationships with the UAE's leading property developers, giving our clients access to exclusive launches and special incentives.")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {developers.map((developer, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={developer.logo} 
                        alt={developer.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm font-medium mt-auto">{developer.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="banks" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{translate("Financial Partners")}</h3>
              <p className="text-gray-600 mb-6">
                {translate("Our banking partners offer exclusive financing packages for international investors, with competitive rates and streamlined approval processes.")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {banks.map((bank, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={bank.logo} 
                        alt={bank.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm font-medium mt-auto">{bank.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="law-firms" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{translate("Legal Partners")}</h3>
              <p className="text-gray-600 mb-6">
                {translate("We work with prestigious law firms that specialize in UAE real estate law and international investment, ensuring your transactions are legally sound.")}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {lawFirms.map((firm, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={firm.logo} 
                        alt={firm.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm font-medium mt-auto">{firm.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="free-zones" className="mt-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">{translate("Free Zone Partners")}</h3>
              <p className="text-gray-600 mb-6">
                {translate("For investors looking to establish a business presence in the UAE, we have partnership agreements with major free zones offering preferential setup terms.")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {freeZones.map((zone, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center h-32">
                    <div className="h-16 flex items-center justify-center mb-2">
                      <img 
                        src={zone.logo} 
                        alt={zone.name} 
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="text-center text-sm font-medium mt-auto">{zone.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PartnersSection;
