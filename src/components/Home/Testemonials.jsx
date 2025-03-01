import { motion } from 'framer-motion';

const testimonialsData = [
  {
    text: "SoftWebElevation turned our outdated website into a modern masterpiece. Their creative vision and technical expertise doubled our online engagement in just months!",
    author: "Samia D., Marketing Director"
  },
  {
    text: "The designs are jaw-dropping, and the user experience is flawless. SoftWebElevation’s team made our vision a reality—pure brilliance!",
    author: "Sarah L., Small Business Owner"
  },
  {
    text: "Our new site doesn’t just look good—it performs. SoftWebElevation gave us a competitive edge with a platform that’s fast, intuitive, and unforgettable.",
    author: "Michael R., E-commerce Founder"
  },
  {
    text: "From concept to launch, SoftWebElevation’s team brought unmatched skill and dedication. They’re true partners in success!",
    author: "John P., Startup CEO"
  },
  {
    text: "They delivered a stunning custom solution ahead of schedule, surpassing every expectation. Working with SoftWebElevation was a game-changer for us.",
    author: "Emily R., Nonprofit Coordinator"
  },
  {
    text: "SoftWebElevation’s attention to detail and innovative approach elevated our brand beyond what we thought possible. They’re the real deal!",
    author: "Alex T., Creative Agency Owner"
  }
];

const Testimonials = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-[85vh] bg-gradient-to-bl from-[#330000] to-black overflow-hidden pb-[10%]">
      <div className="mb-16 sm:mb-20 md:mb-24 px-4">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#ff0000] z-10 [text-shadow:0_0_35px_#ff3333]"
          animate={{ opacity: [0, 1], y: [-30, 0] }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          Testimonials
        </motion.h1>
        <motion.p
          className="text-white text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto"
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
        >
          Hear from our satisfied clients who’ve experienced the SoftWebElevation difference. From stunning designs to flawless execution, we turn visions into reality.
        </motion.p>
      </div>
      
      <div className="text-white space-x-8 px-4 mx-auto animate-marquee-horizontal flex">
        {testimonialsData.map((testimonial, index) => (
          <motion.blockquote
            key={index}
            className="border-2 border-red-600 p-4 rounded-lg bg-black bg-opacity-50 w-[300px] h-auto flex flex-col justify-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "10px 20px 20px rgba(255, 0, 0, 0.7)",
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <p className="text-xl italic">{testimonial.text}</p>
            <footer className="mt-2 text-red-400">{testimonial.author}</footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;