import React from "react";
import { NextSeo } from "next-seo";
import { getSeoByPageName } from "../services/auth";

const termsConditions = ({ seo }) => {
  const SEO = {
    title: seo.attributes.title,
    description: seo.attributes.desc,

    openGraph: {
      title: seo.attributes.title,
      description: seo.attributes.desc,
      url: seo.attributes.pageurl,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <section
        className="container mx-auto mt-4 px-4 sm:pb-2 py-4 md:px-24"
        onCopy={(e) => e.preventDefault()}
        // onMouseDown={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <span style={{ fontVariant: "small-caps" }}>
          <h1 className="lg:mb-6 pb-2 md:pb-0 text-center text-primary font-medium text-4xl sm:text-5xl font-title">
            Terms & Conditions
          </h1>
        </span>
        <p className="text-justify text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
          <span className="relative">
            Welcome to our terms and conditions. Throughout this document, the
            terms {"'we', 'our', and 'us'"} refer to the company
            {"‘Bianco Bangladesh’"} and the platforms provided by Bianco
            Bangladesh governed by these terms. The terms{" "}
            {"'you', 'your', and 'user'"} refer to the individuals accessing or
            using our services, products, or platform. <br />
            <br /> By acknowledging our terms and conditions through purchase,
            or subscriptions, you confirm that you have reviewed and accepted
            this document, which forms the foundation of our agreement with you.
            When you place an order for any of our products, you consent to
            abide by these terms and conditions. Please note that Bianco
            Bangladesh retains the authority to modify any information without
            giving prior notice.
          </span>
        </p>

        <div className="lg:py-6 py-8">
          {/* Eligibility */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Eligibility
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                By accepting these Terms of Service, you affirm that you have
                reached the age of majority in your state or province of
                residence or that you have attained the age of majority and have
                provided consent for any minor dependents under your care to
                utilize this website. Failure to comply with any of the
                specified terms shall lead to an immediate termination of the
                services provided to you.
              </span>
            </p>
          </div>

          {/* Personal Information */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Personal Information
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                Bianco Bangladesh, being responsible for handling personal
                information, shall appropriately manage all personal information
                provided by you or obtained through other means. The personal
                information you provide shall be utilized for purposes such as
                facilitating deliveries to you, conducting credit assessments,
                and providing you with offers and information regarding our
                catalogue. Rest assured that the information you provide is
                strictly accessible to Bianco Bangladesh and shall not be
                disclosed to any third parties.
              </span>
            </p>
          </div>

          {/* Accuracy of Vendor Information */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Accuracy of Vendor Information
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                The content on this site is intended for general information
                purposes only and should not be solely relied upon for
                decision-making without consulting more reliable, accurate,
                complete, or timely sources of information. Any reliance on the
                material provided on this site is done at your own risk. It is
                important to note that this site may include historical
                information. However, please be aware that historical
                information is not current and is only provided for reference
                purposes. We reserve the right to modify the contents of this
                site at any time.
              </span>
            </p>
          </div>

          {/* Third Party Websites */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Third Party Websites
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                For your convenience, Bianco Bangladesh offers links to
                third-party websites. However, we do not take responsibility for
                the content, technology implemented, or privacy practices of
                these third-party websites. Your use of such websites is
                entirely at your own risk. Prior to registering or using any
                third-party website, we strongly advise you to review their
                privacy policy and terms of use to ensure they meet your
                standards.
              </span>
            </p>
          </div>

          {/* Orders and Payment */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Orders and Payment
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                By placing an order through the Website, you make an offer to
                purchase the products selected in your order. We reserve the
                right to accept or reject any order at our sole discretion. You
                are responsible for providing accurate and complete information
                when placing an order. We shall not be liable for any delays or
                errors resulting from inaccurate or incomplete information
                provided by you. Payment for the products must be made at the
                time of placing the order. We accept payment through the methods
                specified on the Website.
              </span>
            </p>
          </div>

          {/* Delivery */}
          {/* <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Delivery
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                We shall make reasonable efforts to deliver the products to the
                address provided by you within the estimated delivery time
                frame. Risk of loss or damage to the products passes to you upon
                delivery. We are not responsible for any loss or damage to the
                products after delivery.
              </span>
            </p>
          </div> */}

          {/* Returns and Refunds */}
          {/* <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Returns and Refunds
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                We strive to provide high-quality products. If you receive a
                damaged or defective product, please contact us within 48 hours
                of delivery to arrange for a return or exchange.
              </span>
            </p>
          </div> */}

          {/* Governing Law */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Governing Law
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                These Terms of Use shall be governed by and interpreted in
                accordance with the laws of the {"People's"} Republic of
                Bangladesh, specifically as they apply to agreements made and
                performed exclusively within its jurisdiction. Any disputes
                arising from or relating to the Website shall be subject solely
                and exclusively to the jurisdiction of the Supreme Court of
                Bangladesh.
              </span>
            </p>
          </div>

          {/* Questions */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Questions
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                If you have any inquiries, feedback, or apprehensions regarding
                this Policy, or if you wish to get in touch with us for any
                reason, please reach out to us using the contact details
                provided in the
                {"'Contact Us'"} section of our Website.
              </span>
            </p>
          </div>

          {/* Severability */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Severability
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                If any provision of these Terms and Conditions is found to be
                invalid, illegal, or unenforceable, the remaining provisions
                shall continue in full force and effect.
                <br /> <br />
                By using the Bianco Bangladesh Coffee Bean Seller E-commerce
                website, you acknowledge that you have read, understood, and
                agree to be bound by these Terms and Conditions. If you do not
                agree to these Terms and Conditions, please refrain from using
                the Website.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default termsConditions;

export async function getStaticProps() {
  const seo = await getSeoByPageName("termsConditions");
  return {
    props: { seo },
  };
}
