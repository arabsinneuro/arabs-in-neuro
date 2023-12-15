import React from 'react';
import '../app/styles/tailwind.css';
import LanguageContext from '../context/LanguageContext';
import Navbar from '../app/components/Navbar';
import Footbar from '../app/components/FootBar';

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
    <div className="flex flex-col min-h-screen">
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