import React from "react";
import "../app/styles/tailwind.css";
import LanguageContext from "../context/LanguageContext";
import Navbar from "../app/components/Navbar";
import Footbar from "../app/components/FootBar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const enContent = require("../locales/enContent.json");
  const arContent = require("../locales/arContent.json");
  const [preferredLanguage, setPreferredLanguage] = React.useState("en");
  const currentContent = preferredLanguage === "en" ? enContent : arContent;

  const isArabic = preferredLanguage === "ar";

  const direction = isArabic ? "rtl" : "ltr";
  const Layout = Component.Layout || (({ children }) => <>{children}</>);

  return (
    <LanguageContext.Provider
      value={{
        preferredLanguage,
        currentContent,
        setPreferredLanguage,
      }}
    >
      <div dir={direction} className="flex flex-col min-h-screen">
        <Head>
          <link rel="icon" href="/logo/ain.png" />
        </Head>
        <Navbar setPreferredLanguage={setPreferredLanguage} />
        <div className="mt-20 flex-grow">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
        <Footbar setPreferredLanguage={setPreferredLanguage} />
      </div>
    </LanguageContext.Provider>
  );
}

export default MyApp;
