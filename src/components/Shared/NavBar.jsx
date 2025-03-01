import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../../assets/Logo.png';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: "Home", path: "/SoftWeb-Front/" },
  { name: "About", path: "/SoftWeb-Front/aboutus" },
  { name: "Services", path: "/SoftWeb-Front/service" },
  { name: "Contact", path: "/SoftWeb-Front/contact" }
];

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 100;
      
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      className="w-full bg-gradient-to-br from-gray-800 to-black text-white shadow-lg p-4 fixed top-0 left-0 z-50"
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center">
          <motion.img
            src={Logo}
            alt="Logo"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 1 }}
            className="cursor-pointer w-16 h-12 sm:w-[100px] sm:h-[80px]"
          />
          <motion.div
            className="text-xl sm:text-4xl font-semibold text-[#f50000] ml-2 whitespace-nowrap"
            animate={{ scale: [1, 1.2, 1, 1.2, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'loop',
              delay: 0.2,
              ease: ['easeInOut', 'easeInOut', 'easeInOut', 'easeOut', 'easeInOut'],
            }}
          >
            SoftWeb Elevation
          </motion.div>
        </div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <motion.ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-8 w-full md:w-auto mt-4 md:mt-0 text-lg`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="text-white hover:text-red-500 transition font-semibold relative 
                        after:content-[''] after:absolute after:w-full after:h-px 
                        after:bg-red-500 after:bottom-0 after:left-0 after:scale-x-0 
                        hover:after:scale-x-100 after:transition-transform after:duration-300 
                        md:inline-block block py-2 md:py-0"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default NavBar;