import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqData = [
  {
    question: "What services does SoftWebElevation offer?",
    answer:
      "We specialize in web development, UI/UX design, website maintenance, and branding solutions. Our goal is to create digital experiences that elevate your brand.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the project. A basic website may take as short as 3 days, while more complex projects can take up to 3 weeks. We ensure transparency and efficiency throughout the process.",
  },
  {
    question: "Do you offer custom web development?",
    answer:
      "Yes! We tailor every project to your business needs, creating fully customized web solutions that align with your goals.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We can revamp your website to enhance its design, functionality, and performance, ensuring it meets modern standards and user expectations.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer ongoing support, performance optimization, security updates, and troubleshooting to keep your website running smoothly.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with businesses across all industries, including startups, e-commerce, healthcare, finance, and more. Our solutions are adaptable to any sector.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Pricing varies depending on the scope and complexity of the project. Contact us for a personalized quote tailored to your needs and budget.",
  },
  {
    question: "How can I get started?",
    answer:
      "Simply reach out through our contact form, email, or phone. We'll discuss your project, goals, and how we can bring your vision to life!",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
    setExpanded(null);
  };

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-[#330000] to-black py-8 sm:py-16 overflow-hidden">
      <motion.h1
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff0000] text-center [text-shadow:0_0_35px_#ff3333] mb-8 sm:mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6">
        {faqData.slice(0, showAll ? faqData.length : 3).map((faq, index) => (
          <motion.div
            key={index}
            className="mb-4 sm:mb-6 rounded-lg bg-black bg-opacity-60 border-2 border-red-600 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "10px 20px 20px rgba(255, 0, 0, 0.7)",
            }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-1 bg-[#ff0000]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 sm:px-6 sm:py-4 text-base xs:text-lg sm:text-xl font-semibold text-white hover:text-[#ff0000] focus:outline-none transition-colors duration-300 flex justify-between items-center"
            >
              {faq.question}
              <motion.span
                className="text-xl sm:text-2xl text-[#ff0000]"
                initial={{ rotate: 0 }}
                animate={{ rotate: expanded === index ? 68 : 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {expanded === index ? '/' : '+'}
              </motion.span>
            </button>

            <AnimatePresence>
              {expanded === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="px-4 pb-4 sm:px-6 sm:pb-4 text-white text-base sm:text-lg text-center"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
        <div className="text-center mt-6 sm:mt-8">
          {!showAll ? (
            <button
              onClick={handleShowAll}
              className="relative px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white uppercase rounded-full transition-all duration-300 transform 
            bg-gradient-to-r from-[#ff1e1e] via-[#d50000] to-[#e90000] 
            shadow-[0_15px_30px_rgba(255,30,30,0.7)] 
            hover:shadow-[0_20px_50px_rgba(255,30,30,0.9)] 
            focus:outline-none focus:ring-4 focus:ring-[#ff1e1e]/50 
            before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#ff5d5d] before:to-[#8b0000] before:blur-3xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-70 
            after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:to-[#ff1e1e] after:blur-xl after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-80 hover:after:scale-110"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="relative px-6 py-3 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white uppercase rounded-full transition-all duration-300 transform 
            bg-gradient-to-r from-[#ff1e1e] via-[#d50000] to-[#e90000] 
            shadow-[0_15px_30px_rgba(255,30,30,0.7)] 
            hover:shadow-[0_20px_50px_rgba(255,30,30,0.9)] 
            focus:outline-none focus:ring-4 focus:ring-[#ff1e1e]/50 
            before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-[#ff5d5d] before:to-[#8b0000] before:blur-3xl before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-70 
            after:absolute after:inset-0 after:bg-gradient-to-r after:from-transparent after:to-[#ff1e1e] after:blur-xl after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-80 hover:after:scale-110"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;