import React from 'react';
import '../app/styles/tailwind.css';
import LanguageContext from '../context/LanguageContext';
import Navbar from '../app/components/Navbar';

function MyApp({ Component, pageProps }) {
    const enContent = require('../locales/enContent.json');
    const arContent = require('../locales/arContent.json');
  const [preferredLanguage, setPreferredLanguage] = React.useState('en');
  const currentContent = preferredLanguage === 'en' ? enContent : arContent;
  const Layout = Component.Layout || ((children) => <>{children}</>);

  return (
    <LanguageContext.Provider
      value={{
        preferredLanguage,
        currentContent,
        setPreferredLanguage,
      }}
    >
      <div className="pt-28">
      <Navbar setPreferredLanguage={setPreferredLanguage} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </LanguageContext.Provider>
  );
}

export default MyApp;