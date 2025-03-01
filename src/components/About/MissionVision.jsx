import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-[#330000] to-black py-8 sm:py-16 overflow-hidden flex flex-col justify-center items-center text-center mt-30 pb-5">
      <motion.div
        className="max-w-4xl w-full mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff0000] [text-shadow:0_0_35px_#ff3333] mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          Mission & Vision
        </motion.h1>

        {/* Mission & Vision Content */}
        <motion.p
          className="text-white text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          At <span className="font-semibold text-red-400">SoftWebElevation</span>, we are dedicated to revolutionizing the digital landscape with cutting-edge web solutions. Our mission is to craft high-performance, visually stunning, and user-centric websites that empower businesses to thrive in the digital age. We envision a world where every brand has access to seamless, scalable, and innovative online experiences.
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          className="w-24 sm:w-32 h-1 bg-[#ff0000] mx-auto rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        />
      </motion.div>

      
    </section>
  );
};

export default MissionVision;