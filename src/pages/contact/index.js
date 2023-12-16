import RootLayout from "../../app/layout";
import { useState, useContext } from "react";
import LanguageContext from '../../context/LanguageContext';
import OverviewComponent from './components/overview';
import FormComponent from './components/form';
import SocialMediaLinksComponent from './components/socialLinks';

function ContactPage() {

  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;
  const { connectWithUs,embarkJourney,virtualDoorsOpen,exploreWonders,sharedCuriosity } = currentContent.contact;
  return (
    <div className="bg-cover bg-blend-soft-light bg-[url('/backgrounds/contact.svg')] " >
    <div className="px-4">
      <div className="lg:flex lg:space-x-8 py-20">
        <OverviewComponent
          connectWithUs={connectWithUs}
          embarkJourney={embarkJourney}
          virtualDoorsOpen={virtualDoorsOpen}
          exploreWonders={exploreWonders}
          sharedCuriosity={sharedCuriosity}
        />
  
        <FormComponent />
      </div>
  
      <SocialMediaLinksComponent />
    </div>
    </div>
  );
}
ContactPage.Layout = RootLayout;

export default ContactPage;
