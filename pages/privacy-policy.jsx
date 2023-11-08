import React from "react";
import { NextSeo } from "next-seo";
import { getSeoByPageName } from "../services/auth";

const privacyPolicy = ({ seo }) => {
  const SEO = {
    title: seo.attributes.title,
    description: seo.attributes.desc,

    openGraph: {
      title: seo.attributes.title,
      description: seo.attributes.desc,
      url: seo.attributes.pageurl,
    },
  };

  const tips = [
    "Contact us when necessary",
    "Respond to your inquiries and provide requested information",
    "Communicate with you about the Websites and the products available on them",
    "Deliver customized content, advertising, products, or services",
    "Administer the Websites, monitor usage, and diagnose issues",
    "Remember your preferences and information upon your return to the Websites to avoid resubmission",
    "Send you information, promotional materials, and offers from us, affiliates, partners, and third parties if you have given consent",
    "Conduct research to enhance our products, content, and services",
    "Safeguard the security and integrity of the Websites and our business",
  ];

  return (
    <>
      <NextSeo {...SEO} />
      <section
        className="container mx-auto mt-4 px-4 sm:pb-2 py-4 md:px-24"
        onCopy={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <span style={{ fontVariant: "small-caps" }}>
          <h1 className="lg:mb-6 pb-2 md:pb-0 text-center text-primary font-medium text-4xl sm:text-5xl font-title">
            Privacy Policy
          </h1>
        </span>
        <div className="text-justify text-secondary font-regular text-md font-raleway bg-cover bg-center animate-fadeIn relative">
          <span className="relative">
            Bianco Bangladesh, referred to as the {"'Company', 'we', and 'us',"}{" "}
            manages the website www.bianco-bd.com. This Privacy Policy, known as
            the {"'Policy',"} outlines the {"Company's"} approach to gathering,
            utilizing, and, if applicable, sharing personal information obtained
            from you through this website and the {"Company's"} additional
            websites (collectively referred to as the {"'Websites'"}). The
            Policy aligns with the principles established in the Data Protection
            Act (DPA) of the
            {" People's"} Republic of Bangladesh and other jurisdictions where
            the Websites are accessible.
            <br />
            <br />
            At Bianco Bangladesh, we value the privacy and security of our
            customers personal information. By accessing our website or
            providing us with your personal information, you consent to the
            practices described below.
          </span>
        </div>

        <div className="lg:py-6 py-8">
          {/* Collection and Use of Personal Information */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Collection and Use of Personal Information
              </header>
            </span>
            <div className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                We may collect personal information such as your name, email
                address, phone number, and postal address when you place an
                order, create an account, or subscribe to our newsletter. This
                information is used to process your orders, communicate with you
                regarding your purchases, and provide you with updates about our
                products and promotions. <br /> <br />
                The Company does not rent or sell personal information and
                non-personal information to other companies. The collected
                information is used only for the purpose listed below,
              </span>
              <br />
              <br />

              <ul className="text-start pl-2 sm:pl-6">
                {tips.map((tip, index) => (
                  <li
                    key={index}
                    className="mb-2 text-secondary font-regular text-sm font-raleway bg-cover bg-center relative animate-fadeIn"
                    //   style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {" "}
                    &diams; {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Protection of Personal Information */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Protection of Personal Information
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                We are committed to maintaining the security of your personal
                information and take appropriate measures to safeguard it
                against unauthorized access, loss, or disclosure. We utilize
                industry-standard security protocols to protect your data during
                transmission and storage.
              </span>
            </p>
          </div>

          {/* Data Sharing and Third Parties */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Data Sharing and Third Parties
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                We may share your personal information with trusted third-party
                service providers who assist us in delivering our products and
                services. These third parties are contractually obligated to
                maintain the confidentiality and security of your data and are
                prohibited from using your information for any other purposes.
              </span>
            </p>
          </div>

          {/* Cookies and Tracking Technologies */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Cookies and Tracking Technologies
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                Our website uses cookies and similar tracking technologies to
                enhance your browsing experience and collect information about
                how you interact with our site. These technologies enable us to
                analyze website traffic, customize content, and provide you with
                personalized recommendations. You have the option to disable
                cookies in your browser settings, but please note that this may
                affect the functionality of our website.
              </span>
            </p>
          </div>

          {/* Links to External Websites
           */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Links to External Websites
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                Our website may contain links to external websites that are not
                operated by us. We do not have control over the content or
                practices of these third-party sites and are not responsible for
                their privacy policies. We encourage you to review the privacy
                statements of any external websites you visit.
              </span>
            </p>
          </div>

          {/* Safeguards */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                Safeguards
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                The website www.bianco-bd.com employs SSL (Secure Socket Layers)
                to safeguard your personal information. Typically, your personal
                information will be stored in our databases or in databases
                maintained by the Company or its service providers. <br />{" "}
                <br /> To maintain the confidentiality, security, and integrity
                of your personal information, we have implemented various
                physical, electronic, contractual, and administrative measures.
                However, it is important to note that no method of transmission
                over the Internet or electronic storage is entirely foolproof,
                and we cannot guarantee absolute security. It is your
                responsibility to keep your account information, including your
                username and password, confidential. You are accountable for all
                activities carried out on the Websites using your account.
                Should you become aware of any unauthorized use of your account
                or any actual or suspected security breach related to the
                Websites, please promptly notify us at info@bianco-bd.com.
              </span>
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="lg:pt-8 pt-4 animate-fadeIn">
            <span style={{ fontVariant: "small-caps" }}>
              <header className="text-justify text-secondary font-semi-bold text-lg font-raleway">
                {"Children's"} Privacy
              </header>
            </span>
            <p className="mt-1 mb-4 text-justify text-secondary font-regular text-sm font-raleway bg-cover bg-center relative">
              <span className="relative z-10">
                Our services are not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children. If you are a parent or guardian and believe that your
                child has provided us with their personal information, please
                contact us immediately, and we will take appropriate steps to
                remove that information from our records
                <br /> <br /> <br />
                If you have any questions or concerns regarding our Privacy and
                Policy, please contact us at{" "}
                <a href="mailto:info@bianco-bd.com" className="underline">
                  info@bianco-bd.com
                </a>
                . We are committed to addressing any inquiries promptly and
                ensuring the protection of your personal information.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default privacyPolicy;

export async function getStaticProps() {
  const seo = await getSeoByPageName("privacyPolicy");
  return {
    props: { seo },
  };
}
