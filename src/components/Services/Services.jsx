import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Import useState for managing click state

const mainServicesData = [
  {
    name: "Starter Package",
    tagline: "The Launchpad",
    idealFor: "New clubs, small businesses, personal portfolios, freelancers",
    features: [
      "3-Page Professional Website (Home, About, Contact)",
      "5 Professional Emails",
      "Basic Hosting & Domain (1-year free)",
      "Mobile & SEO Optimization",
      "3 months of free support",
    ],
    price: "40,000 DZD",
    offerPrice: "8,000 DZD (TEDx Algeria Offer)",
    emoji: "🚀",
  },
  {
    name: "Business Essentials Package",
    tagline: "The Pro Setup",
    idealFor: "Growing student clubs, startups, professionals, NGOs",
    features: [
      "5-Page Website (Home, Services/Portfolio, Blog, About, Contact)",
      "10 Professional Emails",
      "Fast & Secure Hosting (1-year free)",
      "6 months of basic website maintenance",
      "Mobile Optimization & SEO",
      "Google Business Setup",
    ],
    price: "80,000 DZD",
    offerPrice: "16,000 DZD (TEDx Algeria Offer)",
    emoji: "💼",
  },
  {
    name: "Premium Growth Package",
    tagline: "The Brand Builder",
    idealFor: "Well-established clubs, businesses, influencers, organizations",
    features: [
      "10-Page Dynamic Website (Blog, Portfolio, Testimonials)",
      "15 Professional Emails",
      "Premium Hosting & Security",
      "Advanced SEO & Analytics",
      "Chatbot & Contact Forms",
      "12 Months Maintenance & Updates",
    ],
    price: "150,000 DZD",
    offerPrice: "22,500 DZD (TEDx Algeria Offer)",
    emoji: "🌟",
  },
  {
    name: "Elite Corporate Package",
    tagline: "The Powerhouse",
    idealFor: "Large-scale businesses, agencies, serious entrepreneurs",
    features: [
      "Custom-Built Website (Fully tailored, unlimited pages)",
      "20+ Professional Emails",
      "Ultra-Fast Hosting & Security",
      "Complete Digital Marketing Setup",
      "Full Analytics & Business Optimization",
      "2-Year Maintenance & Priority Support",
      "E-commerce Ready (Optional)",
    ],
    price: "Customized",
    offerPrice: null,
    emoji: "🏆",
  },
  {
    name: "Custom Solutions",
    tagline: "Tailored to Your Needs",
    idealFor: "Unique projects requiring specialized development",
    features: [
      "Fully customized website solutions",
      "Advanced integrations (AI, automation)",
      "Scalable web applications",
    ],
    price: "Based on project scope",
    offerPrice: null,
    emoji: "⚡",
  },
];

const Services = () => {
  const [flippedCards, setFlippedCards] = useState({}); // State to track flipped cards

  // Toggle the flip state for a specific card
  const handleCardClick = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the clicked card's state
    }));
  };

  return (
    <section className="relative min-h-screen bg-black py-16 flex flex-col items-center overflow-hidden mt-[5%]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)]" />

      {/* Header */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 [text-shadow:0_0_20px_#ff3333] mb-20 relative z-10 will-change-transform"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.6, 0.05, 0.25, 0.95] }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h1>

      {/* Main Services Container */}
      <div className="relative max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {mainServicesData.map((service, index) => (
          <motion.div
            key={index}
            className="group relative w-full h-[450px] perspective-1000 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
            viewport={{ once: true }}
            onClick={() => handleCardClick(index)} // Handle click to flip
          >
            <motion.div
              className="absolute inset-0 w-full h-full transition-transform duration-500 [transform-style:preserve-3d] will-change-transform"
              animate={{ rotateY: flippedCards[index] ? 180 : 0 }} // Rotate based on state
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Front Face */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#330000] to-black border-2 border-red-700/50 rounded-xl p-6 flex flex-col items-center justify-center text-center backface-hidden shadow-[0_0_10px_rgba(255,0,0,0.3)]">
                  <p className="text-xs text-white absolute top-2">Click to see the package</p>   
                  <span className="text-5xl mb-4">{service.emoji}</span>
                  <h3 className="text-2xl font-bold text-red-500 mb-2">{service.name}</h3>
                  <p className="text-red-400 text-lg italic">{service.tagline}</p>
                  <p className="text-gray-300 text-sm mt-4">Ideal for: {service.idealFor}</p>
              
               </div>


              {/* Back Face */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black to-[#1a0000] border-2 border-red-600 rounded-xl p-6 flex flex-col justify-between text-center backface-hidden [transform:rotateY(180deg)]">
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-4">{service.name}</h3>
                  <ul className="text-gray-200 text-sm space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 space-y-3">
                  <p className="text-red-500 font-bold text-lg">{service.offerPrice || service.price}</p>
                  {service.offerPrice && <p className="text-gray-400 line-through text-sm">{service.price}</p>}
                  <Link to="/SoftWeb-Front/contact">
                    <motion.button
                      className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()} 
                    >
                      Contact Me
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Simplified Floor Glow */}
      <motion.div
        className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-red-600/10 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </section>
  );
};

export default Services;