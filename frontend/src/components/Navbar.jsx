import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    research: false
  });

  // Navigation data
  const navigationData = {
    about: {
      title: "About",
      sublinks: [
        { name: "Our Mission", path: "/about/mission" },
        { name: "Leadership", path: "/about/leadership" },
        { name: "History", path: "/about/history" },
        { name: "Careers", path: "/about/careers" }
      ]
    },
    research: {
      title: "Research",
      sublinks: [
        { name: "Research Areas", path: "/research/areas" },
        { name: "Current Projects", path: "/research/projects" },
        { name: "Publications", path: "/research/publications" },
        { name: "Research Grants", path: "/research/grants" }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Reset dropdowns when menu is closed
    if (isOpen) {
      setMobileDropdowns({ about: false, research: false });
    }
  };

  const toggleMobileDropdown = (dropdown) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white border-b-1 border-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Website Name */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center group">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-800 group-hover:to-blue-600 transition-all duration-300">
                ResearchHub
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300">
              Home
            </a>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 group-hover:after:w-full after:transition-all after:duration-300">
                {navigationData.about.title}
                <FaChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden">
                  {navigationData.about.sublinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Research Dropdown */}
            <div className="relative group">
              <button className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 group-hover:after:w-full after:transition-all after:duration-300">
                {navigationData.research.title}
                <FaChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-white/95 backdrop-blur-sm shadow-lg rounded-lg overflow-hidden">
                  {navigationData.research.sublinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/publications" className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300">
              Publications
            </a>
            <a href="/contact" className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 focus:outline-none transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
            >
              Home
            </a>
            
            {/* Mobile About Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('about')}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
              >
                {navigationData.about.title}
                <FaChevronDown 
                  className={`h-4 w-4 transition-transform duration-300 ${
                    mobileDropdowns.about ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdowns.about ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="pl-4">
                  {navigationData.about.sublinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Research Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown('research')}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
              >
                {navigationData.research.title}
                <FaChevronDown 
                  className={`h-4 w-4 transition-transform duration-300 ${
                    mobileDropdowns.research ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  mobileDropdowns.research ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="pl-4">
                  {navigationData.research.sublinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.path}
                      className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/publications"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
            >
              Publications
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50/50 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 