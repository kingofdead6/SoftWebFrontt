import { motion } from 'framer-motion';

const processSteps = [
  {
    title: "Discovery & Strategy",
    description: "We analyze your business needs, market trends, and target audience.",
  },
  {
    title: "Design & Prototyping",
    description: "Our UI/UX experts create intuitive and visually appealing designs.",
  },
  {
    title: "Development & Implementation",
    description: "Our developers bring the vision to life with robust coding.",
  },
  {
    title: "Testing & Optimization",
    description: "We ensure performance, security, and seamless functionality.",
  },
  {
    title: "Launch & Support",
    description: "Your website goes live, and we provide ongoing maintenance and improvements.",
  },
  {
    title: "Growth & Analytics",
    description: "We monitor performance and provide insights to scale your digital presence.",
  },
];

const OurProcess = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-black to-[#330000] py-8 sm:py-16 overflow-hidden flex flex-col justify-center items-center text-center">
      <motion.div
        className="max-w-5xl w-full mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h1
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff0000] [text-shadow:0_0_35px_#ff3333] mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Process
        </motion.h1>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-black bg-opacity-60 border-2 border-red-600 rounded-lg p-4 sm:p-6 flex flex-col justify-between min-h-[200px] w-full max-w-[300px] sm:max-w-[350px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "10px 20px 20px rgba(255, 0, 0, 0.7)",
              }}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-red-400 mb-2 sm:mb-4">
                  {step.title}
                </h3>
                <p className="text-white text-sm sm:text-base md:text-lg">
                  {step.description}
                </p>
              </div>
              <div className="mt-4">
                <span className="text-red-600 text-xs sm:text-sm font-bold">
                  Step {index + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default OurProcess;