import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
      const response = await axios.post("https://softweb-back.onrender.com/send-email", formData);
      if (response.data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    
  };

  return (
    <section className="relative min-h-screen bg-black py-16 flex flex-col items-center overflow-hidden mt-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1),transparent_70%)]" />
      
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 [text-shadow:0_0_20px_#ff3333] mb-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Contact Us
      </motion.h1>
      
      <motion.div
        className="w-full max-w-3xl bg-gradient-to-br from-[#330000] to-black border-2 border-red-700/50 rounded-xl p-8 shadow-[0_0_15px_rgba(255,0,0,0.3)]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-300 text-center text-lg mb-6">
          Fill out the form below, and our team will get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-black border border-red-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-black border border-red-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full p-3 bg-black border border-red-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" required />
          <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} className="w-full p-3 bg-black border border-red-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500" rows="5" required></textarea>
          
          {status && <p className="mt-4 text-sm text-red-400">{status}</p>}

          <motion.button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      <div className="mt-8 text-center text-gray-300">
        <p className="text-lg"><span className="text-red-500">📧 Email:</span> contact@softwebelevation.com</p>
        <p className="text-lg"><span className="text-red-500">📞 Phone:</span> +123 456 7890</p>
      </div>
    </section>
  );
};

export default Contact;
