import React from 'react';

const LanguageContext = React.createContext({
  preferredLanguage: 'en',
  currentContent: {},
});

export default LanguageContext;
