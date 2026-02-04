import React from 'react';
import { FiArrowRight, FiCheckCircle, FiUsers, FiSun, FiRepeat } from 'react-icons/fi';
import { FaLeaf, FaRecycle, FaWater, FaSeedling, FaTree } from 'react-icons/fa';
import { motion } from 'framer-motion';
import NewsLetter from '../Components/NewsLetter';

const Sustainability = () => {
  // Enhanced animations
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Modern Hero Section with Video Background */}
      <section className="relative pt-20 pb-10 md:pt-36 md:pb-24 h-screen min-h-[600px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/sustainability-video.mp4" type="video/mp4" />
            {/* Fallback image if video doesn't load */}
            <img src="/Premium-rice.jpg" alt="Sustainable rice farming" className="absolute inset-0 w-full h-full object-cover" />
          </video>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent" />
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)`,
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto relative h-full flex items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center px-4"
          >
            <motion.span 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/90 text-emerald-800 mb-6 backdrop-blur-sm border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="mr-2 text-emerald-600" />
              Sustainable Agriculture
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-white">Eco-Conscious</span> Rice Production
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Pioneering sustainable farming techniques that honor the earth while delivering premium quality rice.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/Products/Organic_rice"
                className="flex items-center justify-center px-6 py-3.5 bg-transparent text-white font-medium rounded-lg border-2 border-white hover:bg-white/10 transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Organic Products
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Glassmorphism Stats Section */}
      <section className="pt-9 bg-white relative">
  {/* Remove noise background if not essential */}
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px" }} // Reduced margin
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 }
        }
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {[
        { 
          icon: <FaTree className="w-8 h-8 text-emerald-600" />, 
          value: "250+", 
          label: "Hectares Preserved", 
          description: "Biodiversity conservation"
        },
        { 
          icon: <FaRecycle className="w-8 h-8 text-emerald-600" />, 
          value: "95%", 
          label: "Waste Recycled", 
          description: "Circular economy model"
        },
        { 
          icon: <FaWater className="w-8 h-8 text-emerald-600" />, 
          value: "60%", 
          label: "Water Efficiency", 
          description: "Smart irrigation systems"
        },
        { 
          icon: <FiSun className="w-8 h-8 text-emerald-600" />, 
          value: "80%", 
          label: "Renewable Energy", 
          description: "Solar-powered operations"
        },
      ].map((stat, index) => (
        <motion.div 
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          whileHover={{ y: -5 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-lg mb-4">
            {stat.icon}
          </div>
          <h3 className="text-3xl font-bold text-emerald-600 mb-2">
            {stat.value}
          </h3>
          <p className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</p>
          <p className="text-sm text-gray-500">{stat.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* 3D Card Initiatives Section */}
      <section id="initiatives" className="pt-10 pb-10 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] bg-[length:40px]"></div>
        </div>
        
        <div className="container py-8 mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-6"
          >
            <span className="inline-block text-sm font-semibold text-emerald-600 mb-3">
              OUR APPROACH
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Sustainable <span className="text-emerald-600">Innovation</span> in Agriculture
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              Blending traditional wisdom with cutting-edge technology for truly sustainable rice cultivation.
            </p>
          </motion.div>

          <div className="grid py-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaSeedling className="w-8 h-8 text-emerald-600" />,
                title: "Regenerative Farming",
                description: "Soil-enriching practices that increase biodiversity and improve watersheds.",
                features: [
                  "No-till cultivation",
                  "Cover cropping",
                  "Natural pest management"
                ],
                color: "from-emerald-50 to-white"
              },
              {
                icon: <FiRepeat className="w-8 h-8 text-emerald-600" />,
                title: "Closed-Loop Systems",
                description: "Zero-waste production where every byproduct finds new purpose.",
                features: [
                  "Rice husk energy",
                  "Compost production",
                  "Water recycling"
                ],
                color: "from-amber-50 to-white"
              },
              {
                icon: <FiUsers className="w-8 h-8 text-emerald-600" />,
                title: "Community Empowerment",
                description: "Investing in farmer education and fair economic partnerships.",
                features: [
                  "Training programs",
                  "Fair price guarantees",
                  "Women's cooperatives"
                ],
                color: "from-teal-50 to-white"
              }
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`bg-gradient-to-b ${practice.color} rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100/50 group relative`}
                whileHover={{ y: -10 }}
              >
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 pointer-events-none"></div>
                <div className="p-8 relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                    {practice.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{practice.title}</h3>
                  <p className="text-gray-600 mb-5">{practice.description}</p>
                  <ul className="space-y-3">
                    {practice.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheckCircle className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 py-4 bg-white/70 border-t border-gray-100/30 backdrop-blur-sm">
                  <a
                    href="/About/story"
                    className="text-emerald-600 font-medium inline-flex items-center hover:text-emerald-700 group-hover:underline"
                  >
                    Discover our methods <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax CTA Section */}
      <section className="py-28 bg-[url('/rice-field.jpg')] bg-cover bg-fixed bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-green-900/80"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              Taste the Difference <span className="text-amber-300">Sustainability</span> Makes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            >
              Experience rice that's grown with care for the environment and respect for farming communities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.a
                href="/Products/Premium_rice"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-amber-300 transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Shop Premium Varieties
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact With Us
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <NewsLetter />
    </div>
  );
};

export default Sustainability;