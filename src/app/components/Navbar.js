import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full p-5 bg-gray-500 text-white">
      <div className="flex items-center justify-between">
       
        <div>
          <div className="hidden md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mx-2 hover:underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>

        <Link href="/">
          <img
            src="/logo/banner.png"
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />
        </Link>
      </div>

      
      {isOpen && (
        <div className="md:hidden w-full bg-gray-500 mt-2">
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
