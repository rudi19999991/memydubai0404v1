import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const CookiePolicy = () => {
  const { translate } = useLanguage();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          title={translate("Cookie Policy")}
          subtitle={translate("How we use cookies on our website")}
          backgroundImage="https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          showCta={false}
        />

        <section className="section-padding">
          <div className="luxury-container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">{translate("Our Cookie Policy")}</h2>
              <p className="mb-4">
                {translate("Last updated: March 2025")}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("What Are Cookies")}</h3>
                  <p className="text-gray-700 mb-3">
                    {translate("Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.")}
                  </p>
                  <p className="text-gray-700">
                    {translate("ME MY DUBAI uses cookies to enhance your browsing experience, analyze site traffic, and personalize content.")}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Types of Cookies We Use")}</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <strong>{translate("Essential Cookies:")}</strong> {translate("These cookies are necessary for the website to function properly and cannot be switched off. They are usually set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.")}
                    </li>
                    <li>
                      <strong>{translate("Analytics Cookies:")}</strong> {translate("These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve our website and services.")}
                    </li>
                    <li>
                      <strong>{translate("Functional Cookies:")}</strong> {translate("These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.")}
                    </li>
                    <li>
                      <strong>{translate("Marketing Cookies:")}</strong> {translate("These cookies may be set through our site by our advertising partners. They may be used to build a profile of your interests and show you relevant advertisements on other sites.")}
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Managing Cookies")}</h3>
                  <p className="text-gray-700 mb-3">
                    {translate("You can manage your cookie preferences through our cookie consent banner that appears when you first visit our site. You can change your preferences at any time by clicking the 'Cookie Settings' link in the footer.")}
                  </p>
                  <p className="text-gray-700">
                    {translate("Most web browsers also allow you to manage cookies through browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit")} <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-luxury-gold hover:underline">www.allaboutcookies.org</a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Third-Party Cookies")}</h3>
                  <p className="text-gray-700">
                    {translate("We may use third-party services such as Google Analytics and social media integration that may set cookies on your device. We do not have control over these cookies. Please refer to the respective third party's cookie policy for more information.")}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Changes To This Cookie Policy")}</h3>
                  <p className="text-gray-700">
                    {translate("We may update our Cookie Policy from time to time. Any changes will be posted on this page and, where appropriate, notified to you.")}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">{translate("Contact Us")}</h3>
                  <p className="text-gray-700">
                    {translate("If you have any questions about our Cookie Policy, please contact us at")} <a href="mailto:contact@memydubai.com" className="text-luxury-gold hover:underline">contact@memydubai.com</a>.
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

export default CookiePolicy;