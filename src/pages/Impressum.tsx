
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";

const Impressum = () => {
  const { translate } = useLanguage();

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-28 pb-16">
        <div className="luxury-container">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-luxury-navy">
            {translate("Impressum")} / {translate("Legal Notice")}
          </h1>
          <Separator className="mb-8" />

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-luxury-navy">
              {translate("Company Information")}
            </h2>
            <p className="mb-2">
              <strong>ME MY DUBAI</strong>
            </p>
            <p className="mb-2">Business Bay, Dubai, UAE</p>
            <p className="mb-2">
              {translate("Email")}: contact@memydubai.com
            </p>
            <p className="mb-2">
              {translate("Phone")}: +971 58 599 9458
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-luxury-navy">
              {translate("Represented by")}
            </h2>
            <p className="mb-2">[Name of the Managing Director]</p>
            <p className="mb-2">{translate("Managing Director")}</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-luxury-navy">
              {translate("Registration")}
            </h2>
            <p className="mb-2">
              {translate("Commercial Registry Number")}: [Number]
            </p>
            <p className="mb-2">
              {translate("Tax Identification Number")}: [Number]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-luxury-navy">
              {translate("Regulatory Authority")}
            </h2>
            <p className="mb-2">
              {translate("Real Estate Regulatory Authority (RERA) License Number")}: [Number]
            </p>
            <p className="mb-2">
              {translate("Dubai Land Department Registration")}: [Number]
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-luxury-navy">
              {translate("Disclaimer")}
            </h2>
            <p className="mb-4">
              {translate("The contents of our website have been created with the greatest possible care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content. As a service provider, we are responsible for our own content on these pages according to general laws. However, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.")}
            </p>
            <p>
              {translate("Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. If we become aware of such infringements, we will remove this content immediately.")}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Impressum;
