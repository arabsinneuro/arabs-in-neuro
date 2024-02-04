"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import LanguageContext from "../../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useRouter } from 'next/router';

function Navbar({ setPreferredLanguage }) {
  const languageContext = useContext(LanguageContext);
  const { preferredLanguage, currentContent } = languageContext;

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: currentContent.navbar.home },
    { href: "/about", label: currentContent.navbar.about },
    { href: "/school", label: currentContent.navbar.summerSchool },
    { href: "/faq", label: currentContent.navbar.faq },
    { href: "/opportunities", label: currentContent.navbar.opportunities },
  ];

  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full p-5 bg-cWhite text-black shadow-md">
      <div className="flex items-center justify-between">
        <Link href="/">
          <img
            src="/logo/banner.png"
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>

        <div className="flex items-center">
          <div className="hidden md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`mx-2 px-4 py-2 bg-white rounded shadow hover:bg-cN200 hover:no-underline ${
                  router.pathname === link.href ? 'text-cRed' : 'text-cBlack'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link key="/contact" href="/contact">
            <div className="mx-1 cursor-pointer px-2 py-2 bg-cRed rounded-full shadow-sm hover:bg-cRedLight">
              <img src="icons/phone.svg" alt="phone" />
            </div>
          </Link> 
          

          <LanguageSwitcher
            setPreferredLanguage={setPreferredLanguage}
            preferredLanguage={preferredLanguage}
          />

          {/* Mobile Menu Button */}
          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full bg-cN200 mt-2 rounded">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
