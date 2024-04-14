import React from 'react';

import {
  // emailLink,
  // emailName,
  facebookLink,
  facebookName,
  instagramLink,
  instagramName,
  twiterLink,
  twiterName,
  linkedinLink,
  linkedinName,
} from "../../../app/constants";

const SocialMediaLinksComponent = () => {
  return (
    <div className="flex flex-wrap justify-center py-10">
      {/* <a href={emailLink} className="flex items-center mx-2 my-2">
        <img src="/assets/contact/email.svg" alt="email" />
        <span className="mx-2">{emailName}</span>
      </a> */}
      <a href={facebookLink} className="flex items-center mx-2 my-2" target="_blank" rel="noopener noreferrer">
        <img src="/assets/contact/facebook.svg" alt={facebookName} />
        <span className="mx-2">{facebookName}</span>
      </a>
      <a href={linkedinLink} className="flex items-center mx-2 my-2" target="_blank" rel="noopener noreferrer">
        <img src="/assets/contact/linkedin.svg" alt={linkedinName} />
        <span className="mx-2">{linkedinName}</span>
      </a>
      <a href={instagramLink} className="flex items-center mx-2 my-2" target="_blank" rel="noopener noreferrer">
        <img src="/assets/contact/instagram.svg" alt={instagramName} />
        <span className="mx-2">{instagramName}</span>
      </a>
      <a href={twiterLink} className="flex items-center mx-2 my-2" target="_blank" rel="noopener noreferrer">
        <img src="/assets/contact/twitter.svg" alt={twiterName} />
        <span className="mx-2">{twiterName}</span>
      </a>
    </div>
  );
};

export default SocialMediaLinksComponent;
