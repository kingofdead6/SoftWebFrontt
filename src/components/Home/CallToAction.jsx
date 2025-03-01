import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-[50vh] bg-gradient-to-bl from-black to-[#330000] overflow-hidden py-8 sm:py-16">
      <motion.div
        className="max-w-3xl w-full px-4 sm:px-6 mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#ff0000] [text-shadow:0_0_25px_#ff3333] mb-4 sm:mb-6">
          Ready to elevate your brand?
        </h2>
        <p className="text-white text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
          Let’s create something extraordinary.
        </p>
        <Link to="/SoftWeb_Front/contact" >
         <motion.a
          className="inline-block px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-transparent border-2 border-red-600 rounded-lg hover:bg-red-600 hover:border-red-700"
          whileHover={{
            scale: 1.05,
            boxShadow: "10px 20px 20px rgba(255, 0, 0, 0.7)", 
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          
          Schedule a FREE Consultation
         
        </motion.a>
        </Link>
      </motion.div>
    </section>
  );
};

export default CallToAction;