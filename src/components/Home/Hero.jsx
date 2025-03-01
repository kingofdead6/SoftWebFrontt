import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Laptop from '../../assets/Laptop.png';
import networking from '../../assets/networking.png';
import code from '../../assets/coding.png';

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-[85vh] bg-gradient-to-br from-[#060015] to-black overflow-hidden mt-16 md:mt-30 px-4">
      
      {/* Title */}
      <motion.h1
        className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff0000] z-10 [text-shadow:0_0_35px_#FF5733]"
        animate={{ opacity: [0, 1], y: [-30, 0] }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Empowering Your Digital Presence
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="relative text-lg xs:text-xl sm:text-2xl mt-4 max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto z-10 text-white [text-shadow:0_0_20px_rgba(255,255,255,0.8)]"
        animate={{ opacity: [0, 1], y: [30, 0] }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        At SoftWeb Elevation, we craft beautiful, responsive, and user-friendly websites that turn your ideas into reality.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        className="relative z-10 mt-8 md:mt-15"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
        whileHover={{
          scale: 1.12,
          rotate: [0, -2, 2, -2, 0],
          transition: { duration: 0.4, ease: 'easeInOut' }
        }}
        whileTap={{
          scale: 0.95,
          rotate: 0,
          transition: { duration: 0.2, ease: 'easeIn' }
        }}
      >
        <Link
          to="/SoftWeb_Front/service"
          className="relative px-6 py-3 xs:px-8 xs:py-3 sm:px-10 sm:py-4 text-base xs:text-lg sm:text-xl font-semibold text-white uppercase rounded-full transition-all duration-300 transform 
            bg-gradient-to-r from-[#ff1e1e] via-[#d50000] to-[#e90000] 
            shadow-[0_15px_30px_rgba(255,30,30,0.7)] 
            hover:shadow-[0_20px_50px_rgba(255,30,30,0.9)] 
            focus:outline-none focus:ring-4 focus:ring-[#ff1e1e]/50 
            before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#ff5d5d] before:to-[#8b0000] before:blur-3xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-70 
            after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:to-[#ff1e1e] after:blur-xl after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-80 hover:after:scale-110"
        >
          <motion.span
            className="absolute inset-0 rounded-full bg-white opacity-10"
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span className="relative z-10">Get Started</span>
        </Link>
      </motion.div>

      {/* Floating Images */}
      <motion.img
        src={Laptop}
        alt="Laptop"
        className="absolute top-[60%] left-4 xs:left-8 sm:left-[12%] md:left-1/8 w-16 xs:w-20 sm:w-24 md:w-32 h-16 xs:h-20 sm:h-24 md:h-32 object-contain z-1 hidden sm:block"
        animate={{ y: [0, -20, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src={code}
        alt="Code Icon"
        className="absolute top-[55%] right-4 xs:right-8 sm:right-[15%] md:right-1/4 w-16 xs:w-20 sm:w-24 md:w-32 h-16 xs:h-20 sm:h-24 md:h-32 object-contain z-10 hidden sm:block"
        animate={{ y: [0, 20, 0], x: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.img
        src={networking}
        alt="Teamwork"
        className="absolute top-10 right-4 xs:right-8 sm:right-[10%] md:right-1/10 w-16 xs:w-20 sm:w-24 md:w-32 h-16 xs:h-20 sm:h-24 md:h-32 object-contain z-1 hidden sm:block"
        animate={{ y: [0, -10, 0], x: [0, 5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Hero;