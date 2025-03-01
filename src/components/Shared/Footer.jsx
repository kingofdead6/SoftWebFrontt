import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const socialLinks = [
  { icon: FaInstagram, url: "https://www.instagram.com/softweb_elevation/" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/kahlouche-youcef-8b4288306/" },
  { icon: FaGithub, url: "https://github.com/kingofdead6" }
];

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#000000] to-[#760810] py-8 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-6 sm:gap-0">
        <motion.div
          className="flex flex-col items-center sm:items-start"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-[#00000000] rounded-full flex items-center justify-center text-white font-bold text-2xl mb-2 [text-shadow:0_0_15px_#ff3333]">
            <motion.img
              src={Logo}
              alt="Logo"
              whileHover={{ scale: 1.1, rotate: 360 }}  
              transition={{ duration: 1 }}
              className="cursor-pointer w-[100px] h-[80px]"
            />
          </div>
          <h3 className="text-xl font-bold text-[#ff0000] [text-shadow:0_0_15px_#ff3333]">
            SoftWebElevation
          </h3>
          <p className="text-sm">Cutting-edge Web Solutions</p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col items-center sm:items-start text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p>
            📍{" "}
            <a
              href="https://www.google.com/maps/place/Algiers,+Algeria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition font-medium relative 
                         after:content-[''] after:absolute after:w-full after:h-px 
                         after:bg-red-500 after:bottom-0 after:left-0 after:scale-x-0 
                         hover:after:scale-x-100 after:transition-transform after:duration-300 
                         hover:animate-flicker"
            >
              Algiers, Algeria
            </a>
          </p>
          <p>
            📞{" "}
            <a
              href="tel:+2134567890"
              className="text-white hover:text-red-500 transition font-medium relative 
                         after:content-[''] after:absolute after:w-full after:h-px 
                         after:bg-red-500 after:bottom-0 after:left-0 after:scale-x-0 
                         hover:after:scale-x-100 after:transition-transform after:duration-300 
                         hover:animate-flicker"
            >
              +213 456 7890
            </a>
          </p>
          <p>
            ✉️{" "}
            <a
              href="mailto:contact@softwebelevation.com"
              className="text-white hover:text-red-500 transition font-medium relative 
                         after:content-[''] after:absolute after:w-full after:h-px 
                         after:bg-red-500 after:bottom-0 after:left-0 after:scale-x-0 
                         hover:after:scale-x-100 after:transition-transform after:duration-300 
                         hover:animate-flicker"
            >
              contact@softwebelevation.com
            </a>
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-[#ff0000] transition-colors duration-300"
              whileHover={{ 
                scale: 1.2,
                textShadow: "0px 20px 15px rgba(255, 0, 0, 0.8), 0px 0px 25px rgba(255, 0, 0, 0.6), 0px 0px 35px rgba(255, 0, 0, 0.4)",
                y: -2
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut",
                textShadow: { 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
            >
              <Icon size={24} />
            </motion.a>
            
            );
          })}
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        className="text-center text-sm text-gray-400 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p>© 2025 SoftWebElevation. All Rights Reserved.</p>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-[#ff0000]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </footer>
  );
};

export default Footer;