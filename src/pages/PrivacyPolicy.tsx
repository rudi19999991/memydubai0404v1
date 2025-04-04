import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const PrivacyPolicy = () => {
  const { translate } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          title={translate("Privacy Policy")}
          subtitle={translate("How we collect, use, and protect your personal information")}
          backgroundImage="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          showCta={false}
        />

        <section className="section-padding">
          <div className="luxury-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">{translate("Our Privacy Policy")}</h2>
              <p className="mb-4">
                {translate("Last updated: March 2025")}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Introduction")}</h3>
                  <p className="text-gray-700 mb-3">
                    {translate('ME MY DUBAI ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.')}
                  </p>
                  <p className="text-gray-700">
                    {translate("Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website or use our services.")}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Information We Collect")}</h3>
                  <p className="text-gray-700 mb-3">
                    {translate("We may collect the following types of information:")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <strong>{translate("Personal Information:")}</strong> {translate("Name, email address, phone number, and other contact details you provide when you contact us, sign up for our newsletter, or use our services.")}
                    </li>
                    <li>
                      <strong>{translate("Usage Information:")}</strong> {translate("Information about how you use our website, such as pages visited, time spent on pages, links clicked, and interactions with our content.")}
                    </li>
                    <li>
                      <strong>{translate("Device Information:")}</strong> {translate("Information about the device you use to access our website, including IP address, browser type, operating system, and device settings.")}
                    </li>
                    <li>
                      <strong>{translate("Cookies and Similar Technologies:")}</strong> {translate("We use cookies and similar technologies to enhance your browsing experience. See our Cookie Policy for more information.")}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("How We Use Your Information")}</h3>
                  <p className="text-gray-700 mb-3">
                    {translate("We may use the information we collect for various purposes, including:")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>{translate("To provide and maintain our services")}</li>
                    <li>{translate("To respond to your inquiries and provide customer support")}</li>
                    <li>{translate("To send you information about our properties, services, and events")}</li>
                    <li>{translate("To improve our website and services")}</li>
                    <li>{translate("To comply with legal obligations")}</li>
                    <li>{translate("To detect and prevent fraud and abuse")}</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Data Sharing and Disclosure")}</h3>
                  <p className="text-gray-700 mb-3">
                    {translate("We may share your information with:")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>{translate("Service providers who assist us in operating our website and providing our services")}</li>
                    <li>{translate("Professional advisors, such as lawyers, accountants, and insurers")}</li>
                    <li>{translate("Regulatory authorities, law enforcement agencies, or other third parties when required by law")}</li>
                    <li>{translate("Business partners with your consent or when necessary to provide services you have requested")}</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Your Rights")}</h3>
                  <p className="text-gray-700 mb-3">
                    {translate("Depending on your location, you may have certain rights regarding your personal information, including:")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>{translate("Right to access your personal information")}</li>
                    <li>{translate("Right to rectify inaccurate or incomplete information")}</li>
                    <li>{translate("Right to erasure (right to be forgotten)")}</li>
                    <li>{translate("Right to restrict processing")}</li>
                    <li>{translate("Right to data portability")}</li>
                    <li>{translate("Right to object to processing")}</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    {translate("To exercise any of these rights, please contact us using the information provided below.")}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Data Security")}</h3>
                  <p className="text-gray-700">
                    {translate("We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.")}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Changes to This Privacy Policy")}</h3>
                  <p className="text-gray-700">
                    {translate("We may update our Privacy Policy from time to time. Any changes will be posted on this page and, where appropriate, notified to you.")}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Contact Us")}</h3>
                  <p className="text-gray-700">
                    {translate("If you have any questions about our Privacy Policy, please contact us at")} <a href="mailto:contact@memydubai.com" className="text-luxury-gold hover:underline">contact@memydubai.com</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;