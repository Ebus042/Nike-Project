import { useState, useEffect } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { XMarkIcon } from "@heroicons/react/24/solid"; // ✅ correct path is /24/solid

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  // Detect scroll for background
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="padding-x py-8 w-full z-50">
      <nav
        className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center max-container">
          {/* Logo */}
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex gap-16 items-center">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger / X icon */}
          <div className="block lg:hidden cursor-pointer z-50">
            {isMenuOpen ? (
              <button onClick={toggleMenu} className="w-7 h-7 text-gray-700">
                <XMarkIcon />
              </button>
            ) : (
              <img
                src={hamburger}
                alt="hamburger"
                width={25}
                height={25}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[70%] max-w-xs bg-white shadow-lg z-40 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <a href="/">
              <img src={headerLogo} alt="logo" width={120} />
            </a>
            <ul className="flex flex-col gap-6 mt-8">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-lg text-slate-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backdrop */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30"
            onClick={toggleMenu}
          />
        )}
      </nav>
    </header>
  );
};

export default Nav;
