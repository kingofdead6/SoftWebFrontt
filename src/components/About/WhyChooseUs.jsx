import { motion } from 'framer-motion';
import gear from '../../assets/gear.png'
const whyChooseUsData = [
  {
    title: "Innovation-Driven",
    description: "We stay ahead of trends to deliver cutting-edge solutions.",
  },
  {
    title: "User-Centered Approach",
    description: "Every design choice is made with the end-user in mind.",
  },
  {
    title: "Custom Solutions",
    description: "Tailored services to meet your unique business goals.",
  },
  {
    title: "Reliability & Support",
    description: "We ensure long-term success with continuous optimization.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-bl from-[#330000] to-black text-white py-16 flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-red-500 opacity-20 blur-3xl top-[-200px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-red-700 opacity-30 blur-3xl bottom-[-150px] right-[-150px]" />
      </div>

      {/* Spinning Images */}
      <motion.img
        src={gear}
        alt="Spinning Image Left"
        className="absolute left-[5%] top-[38%] w-40 h-40 object-cover"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
       <motion.img
        src={gear}
        alt="Spinning Image Left"
        className="absolute right-[5%] top-[38%] w-40 h-40 object-cover"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      <motion.h1
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff0000] [text-shadow:0_0_35px_#ff3333] mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Why Choose Us?
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
        {whyChooseUsData.map((reason, index) => (
          <motion.div
            key={index}
            className="relative bg-black border border-red-600 rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(255,0,0,0.6)] transition-transform duration-300 hover:scale-105 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.05,
                boxShadow: "10px 20px 20px rgba(255, 0, 0, 0.7)",
              }}
          >
            <div className="absolute inset-0 flex justify-between items-center">
              <div className="w-1 h-full bg-red-600 opacity-40 animate-pulse"></div>
              <div className="w-1 h-full bg-red-600 opacity-40 animate-pulse"></div>
            </div>
            
            <div className="absolute inset-0 border-2 border-red-500 rounded-xl animate-[spin_10s_linear_infinite] opacity-30" />
            
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-3">
              {reason.title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xs">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
