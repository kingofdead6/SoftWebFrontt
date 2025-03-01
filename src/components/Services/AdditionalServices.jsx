import { motion } from 'framer-motion';

const additionalServicesData = [
  { name: "Visual Identity & Branding Kit", price: "20,000 DZD" },
  { name: "AI-Powered Chatbot Integration", price: "5,000 DZD" },
  { name: "Login & User Accounts System", price: "From 10,000 DZD" },
  { name: "E-commerce Store Setup", price: "From 5,000 DZD" },
  { name: "Advanced SEO   Package", price: "10,000 DZD" },
  { name: "Email Marketing Setup", price: "2,900 DZD" },
  { name: "Mobile App Development", price: "From 100,000 DZD" },
  { name: "Google Ads & PPC Campaigns", price: "18,500 DZD" },
  { name: "Event Management System", price: "12,000 DZD" },
  { name: "Website Maintenance & Support", price: "10,000 DZD/year" },
];

const AdditionalServices = () => {
  return (
    <section className="relative bg-black py-16 flex flex-col items-center overflow-hidden">
         <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-[#ff0000]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
       <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-[#ff0000]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
      {/* Simplified Background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(45deg,rgba(255,0,0,0.05),transparent_50%)]" />

      {/* Header */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-12 relative z-10 will-change-transform"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        💡 Additional Services
      </motion.h2>

      {/* Larger Scrollable Services Container */}
      <motion.div
        className="relative max-w-[120vw] w-full px-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        viewport={{ once: true }}
      >
        <div className="flex overflow-x-auto space-x-8 pb-8 snap-x snap-mandatory scrollbar scrollbar-thumb-red-600 scrollbar-track-black">
          {additionalServicesData.map((service, index) => (
            <motion.div
              key={index}
              className="group min-w-[280px] bg-gradient-to-br from-[#2a0000] via-[#1a0000] to-black border border-red-900/50 rounded-2xl p-6 flex flex-col items-center text-center snap-center will-change-transform relative overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                ease: [0.4, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 0.95,
                boxShadow: "0 10px 30px rgba(255, 0, 0, 0.3)",
              }}
            >
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-red-600/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {/* Subtle Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              {/* Decorative Top Accent */}
              <div className="absolute top-0 left-1/2 w-16 h-1 bg-red-600 rounded-b-md transform -translate-x-1/2" />

              {/* Content */}
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-3 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                {service.name}
              </h3>
              <p className="text-red-500 font-bold text-lg mb-2 relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                {service.price}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="relative mt-12 w-48 h-1 mx-auto">
      <div className="relative mt-12 w-48 h-[800px] mx-auto">
  <motion.div
    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent rounded-full z-10"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: true }}
  />
  {/* Rising Inverted Flared Shadow Light (Narrower at Top, Wider at Bottom) */}
  <motion.div
  className="absolute bottom-0 left-1/2 h-[1000px] bg-gradient-to-t from-red-600/60 via-red-600/30 to-transparent transform -translate-x-1/2 opacity-0 will-change-transform"
  initial={{ y: -800, opacity: 1 }}
  transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
  viewport={{ once: true }}
  style={{
    clipPath: 'polygon(0% 20%, 120% 0%, 65% 100%, 35% 100%)', 
    width: '600px', 
    boxShadow: '0 0 100px rgba(255, 0, 0, 0.8), 0 0 100px rgba(255, 0, 0, 0)', 
  }}
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.3),transparent_60%)] opacity-0 animate-[pulse_3s_ease-in-out_infinite]" />
</motion.div>
</div>
      </div>
    </section>
  );
};

export default AdditionalServices;