
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bitcoin, DollarSign, ShieldCheck, FileText, Building, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const CryptoBuying = () => {
  const { translate } = useLanguage();
  
  const cryptoLogos = [
    { 
      name: "Bitcoin (BTC)", 
      logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      color: "#F7931A"
    },
    { 
      name: "Ethereum (ETH)", 
      logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      color: "#627EEA"
    },
    { 
      name: "Tether (USDT)", 
      logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      color: "#26A17B"
    },
    { 
      name: "Binance Coin (BNB)", 
      logo: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
      color: "#F0B90B"
    },
    { 
      name: "USD Coin (USDC)", 
      logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
      color: "#2775CA"
    },
    { 
      name: "Solana (SOL)", 
      logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
      color: "#00FFA3"
    }
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <HeroSection
          title={translate("Buying Property with Cryptocurrency")}
          subtitle={translate("The future of real estate transactions in Dubai")}
          videoUrl="https://player.vimeo.com/external/483429590.sd.mp4?s=cbc49afb83b8e39f178d08f3a7fbe357263dbc8a&profile_id=164&oauth2_token_id=57447761"
          backgroundImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVHlknobgVF9RKPRw5cpME8H70VbhWwMhiQ&s"
          showCta={false}
        />
        
        <section className="section-padding">
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-4">{translate("Cryptocurrency Real Estate Purchases in Dubai")}</h2>
                <div className="gold-separator" />
                
                <div className="mt-6 space-y-6">
                  <p className="text-lg">
                    {translate("Dubai has positioned itself as a global hub for cryptocurrency innovation, embracing digital assets in real estate transactions. As the market evolves, more developers and sellers are accepting cryptocurrency as payment for property purchases.")}
                  </p>
                  
                  <div className="my-8">
                    <h3 className="text-2xl font-bold mb-4">{translate("The Process of Buying Property with Crypto")}</h3>
                    
                    <div className="space-y-6 mt-4">
                      <div className="flex items-start">
                        <div className="bg-luxury-navy/10 p-3 rounded-full mr-4 mt-1">
                          <Bitcoin className="h-6 w-6 text-luxury-navy" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{translate("Direct Crypto Transactions")}</h4>
                          <p>
                            {translate("Some developers in Dubai now accept direct cryptocurrency payments. This typically involves transferring the agreed amount from your crypto wallet to the developer's wallet. The transaction is then recorded on the blockchain, providing transparency and security.")}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-luxury-navy/10 p-3 rounded-full mr-4 mt-1">
                          <DollarSign className="h-6 w-6 text-luxury-navy" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{translate("Crypto-to-Fiat Conversion")}</h4>
                          <p>
                            {translate("For sellers who prefer traditional currency, you can convert your cryptocurrency to fiat at the time of purchase. This involves working with a specialized conversion service or exchange that handles the conversion and transfers the equivalent amount to the seller.")}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-luxury-navy/10 p-3 rounded-full mr-4 mt-1">
                          <ShieldCheck className="h-6 w-6 text-luxury-navy" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{translate("Regulatory Compliance")}</h4>
                          <p>
                            {translate("While buying property with cryptocurrency is legal in Dubai, transactions must comply with UAE regulations regarding anti-money laundering (AML) and Know Your Customer (KYC) requirements. Our team can guide you through the compliance process to ensure a smooth transaction.")}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-luxury-navy/10 p-3 rounded-full mr-4 mt-1">
                          <FileText className="h-6 w-6 text-luxury-navy" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold mb-2">{translate("Documentation and Registration")}</h4>
                          <p>
                            {translate("The Dubai Land Department (DLD) recognizes cryptocurrency transactions, but the property registration will be recorded in UAE Dirhams (AED). The exchange rate at the time of transaction will be used for official documentation purposes.")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="my-8">
                    <h3 className="text-2xl font-bold mb-4">{translate("Benefits of Crypto Property Transactions")}</h3>
                    
                    <ul className="list-disc pl-6 space-y-3">
                      <li>{translate("Speed: Cryptocurrency transactions can be processed quickly, often within minutes or hours, compared to traditional bank transfers which may take days.")}</li>
                      <li>{translate("Lower Fees: Crypto transactions typically involve lower fees than international wire transfers or currency conversion charges.")}</li>
                      <li>{translate("No Borders: Cryptocurrency is not bound by geographical limitations, making international property investments simpler.")}</li>
                      <li>{translate("Security: Blockchain technology provides a secure and transparent record of all transactions.")}</li>
                      <li>{translate("Privacy: While complying with all regulations, crypto transactions offer a degree of privacy that traditional banking may not.")}</li>
                    </ul>
                  </div>
                  
                  {/* Cryptocurrency Logos Section */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">{translate("Popular Cryptocurrencies Accepted")}</h3>
                    <p className="mb-4">{translate("Many Dubai developers accept the following cryptocurrencies:")}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {cryptoLogos.map((crypto, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center justify-center">
                          <div className="h-16 w-16 flex items-center justify-center mb-3">
                            <img 
                              src={crypto.logo} 
                              alt={crypto.name} 
                              className="max-h-full max-w-full"
                            />
                          </div>
                          <p className="font-semibold" style={{ color: crypto.color }}>
                            {translate(crypto.name)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="my-8">
                    <h3 className="text-2xl font-bold mb-4">{translate("Our Crypto Buying Service")}</h3>
                    <p className="mb-4">
                      {translate("We provide end-to-end support for investors looking to purchase property using cryptocurrency:")}
                    </p>
                    
                    <ul className="list-disc pl-6 space-y-3">
                      <li>{translate("Property selection based on your investment goals and preferences")}</li>
                      <li>{translate("Negotiation with developers or sellers who accept cryptocurrency")}</li>
                      <li>{translate("Coordination with crypto payment processors when needed")}</li>
                      <li>{translate("Arrangement of secure crypto transactions")}</li>
                      <li>{translate("Assistance with all legal documentation and property registration")}</li>
                      <li>{translate("Guidance on regulatory compliance for cryptocurrency investments")}</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white" asChild>
                    <Link to="/contact">{translate("Schedule a Crypto Consultation")}</Link>
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                  <h3 className="text-xl font-bold mb-4">{translate("Featured Crypto-Ready Projects")}</h3>
                  <div className="space-y-4">
                    <div className="group">
                      <img 
                        src="https://images.mansionglobal.com/im-11435563" 
                        alt="Luxury villa" 
                        className="w-full h-48 object-cover rounded-lg mb-2 group-hover:opacity-90 transition-opacity"
                      />
                      <h4 className="font-semibold group-hover:text-luxury-gold transition-colors">Palm Jumeirah Villas</h4>
                      <p className="text-sm text-gray-600">Bitcoin & Ethereum accepted</p>
                    </div>
                    
                    <div className="group">
                      <img 
                        src="https://www.visitdubai.com/-/media/gathercontent/poi/b/burj-khalifa/fallback-image/poi-burj-khalifa-3-dtcm-jun-2023.jpg" 
                        alt="Downtown apartment" 
                        className="w-full h-48 object-cover rounded-lg mb-2 group-hover:opacity-90 transition-opacity"
                      />
                      <h4 className="font-semibold group-hover:text-luxury-gold transition-colors">Downtown Crypto Towers</h4>
                      <p className="text-sm text-gray-600">Multiple cryptocurrencies accepted</p>
                    </div>
                    
                    <Link to="/properties" className="text-luxury-gold hover:underline inline-block mt-2">
                      {translate("View All Crypto-Friendly Properties")} →
                    </Link>
                  </div>
                </div>
                
                <div className="bg-luxury-navy text-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">{translate("Need Cryptocurrency Guidance?")}</h3>
                  <p className="mb-4">
                    {translate("Our team includes crypto experts who can guide you through the entire process of buying property with digital assets.")}
                  </p>
                  <Button className="w-full bg-white text-luxury-navy hover:bg-gray-100" asChild>
                    <Link to="/contact">{translate("Contact Our Crypto Experts")}</Link>
                  </Button>
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

export default CryptoBuying;
