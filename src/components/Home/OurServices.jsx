import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Webdev from '../../assets/WebDev.png';
import Support from '../../assets/help-desk.png';
import UIUX from '../../assets/UIUX.png';
import Branding from '../../assets/Branding.png';

const servicesData = [
  {
    img: Webdev,
    title: "Web Development",
    description: "Custom, scalable, and high-performing websites."
  },
  {
    img: UIUX,
    title: "UI/UX Design",
    description: "Sleek, intuitive, and user-friendly interfaces."
  },
  {
    img: Support,
    title: "Website Maintenance & Support",
    description: "Performance, security, and ongoing optimization."
  },
  {
    img: Branding,
    title: "Branding & Graphics",
    description: "Stunning visuals that define your brand."
  }
];

const OurServices = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-[85vh] bg-gradient-to-br from-black to-[#330000] overflow-hidden px-4 py-8 sm:py-12 md:pb-[10%]">
      <motion.h1
        className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff0000] z-10 [text-shadow:0_0_35px_#ff3333]"
        animate={{ opacity: [0, 1], y: [-30, 0] }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        Our Services
      </motion.h1>

      <motion.p
        className="relative text-lg xs:text-xl sm:text-2xl mt-4 max-w-md xs:max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto z-10 text-white [text-shadow:0_0_20px_rgba(255,255,255,0.8)]"
        animate={{ opacity: [0, 1], y: [30, 0] }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        We bring expertise, innovation, and unwavering support to every project, ensuring your success in the digital world.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 xs:gap-8 mt-8 sm:mt-10 mb-12 sm:mb-20 md:mb-30">
        {servicesData.map((service, index) => (
          <motion.div 
            key={index}
            className="relative p-4 xs:p-6 bg-[#1a0000] rounded-lg shadow-lg w-full xs:w-64 sm:w-72 md:w-64 text-white border border-[#ff3333]"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "10px 20px 20px rgba(255, 0, 0, 0.7)",
            }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-12 xs:w-14 sm:w-16 mx-auto" 
            />
            <h3 className="mt-3 xs:mt-4 text-base xs:text-lg sm:text-xl font-semibold text-[#ff3333]">
              {service.title}
            </h3>
            <p className="text-xs xs:text-sm sm:text-base">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10"
        animate={{ opacity: [0, 1], scale: [0.8, 1] }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link
          to="/contact"
          className="relative px-6 xs:px-8 sm:px-10 py-3 xs:py-3 sm:py-4 text-base xs:text-lg sm:text-xl font-semibold text-white uppercase rounded-full transition-all duration-300 transform 
            bg-gradient-to-r from-[#ff1e1e] via-[#d50000] to-[#e90000] 
            shadow-[0_15px_30px_rgba(255,30,30,0.7)] 
            hover:shadow-[0_20px_50px_rgba(255,30,30,0.9)] 
            focus:outline-none focus:ring-4 focus:ring-[#ff1e1e]/50 
            before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#ff5d5d] before:to-[#8b0000] before:blur-3xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-70 
            after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:to-[#ff1e1e] after:blur-xl after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-80 hover:after:scale-110"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
};

export default OurServices;