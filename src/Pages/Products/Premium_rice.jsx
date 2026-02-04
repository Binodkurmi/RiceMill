
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaStar, FaCheck, FaLeaf } from 'react-icons/fa';
import NewsLetter from '../../Components/NewsLetter';
import PremiumRiceModel from '../../Model/PremiumRiceModel';

const Premium_rice = () => {
  const [wishlist, setWishlist] = useState([]);
  const [selectedRice, setSelectedRice] = useState(null);

  const riceVarieties = [
    {
      id: 1,
      name: 'Himalayan Basmati',
      description: 'Aromatic long-grain rice from the Himalayan foothills',
      rating: 4.8,
      category: 'basmati',
      image: '/Basmati.jpg',
      available: true,
      origin: 'Himalayan Region',
      grainType: 'Long',
      cookingTime: 15,
      texture: 'Fluffy',
      aroma: 'Strong',
      reviewCount: 128
    },
    {
      id: 2,
      name: 'Black Forbidden Rice',
      description: 'Nutrient-rich ancient grain with deep purple hue',
      rating: 4.9,
      category: 'specialty',
      image: '/Black_Forbidden_Rice.jpg',
      available: true,
      origin: 'China',
      grainType: 'Medium',
      cookingTime: 30,
      texture: 'Chewy',
      aroma: 'Nutty',
      reviewCount: 95
    },
    {
      id: 3,
      name: 'Red Cargo Rice',
      description: 'Unpolished rice with nutty flavor and chewy texture',
      rating: 4.6,
      category: 'specialty',
      image: '/Red_Cargo_Rice.jpg',
      available: false,
      origin: 'Thailand',
      grainType: 'Medium',
      cookingTime: 25,
      texture: 'Chewy',
      aroma: 'Nutty',
      reviewCount: 76
    }
  ];

  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const openDetailsModal = (id) => {
    const rice = riceVarieties.find((r) => r.id === id);
    setSelectedRice(rice);
  };

  const closeModal = () => {
    setSelectedRice(null);
  };


  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-green-50 to-emerald-100">
      {/* Animated Rice Paddy Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Rice field */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-600 to-green-500">
          {/* Water waves */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 h-6 w-full bg-green-700 opacity-20"
              style={{
                borderRadius: '50%',
                bottom: `${i * 8}px`,
                left: `${i % 2 === 0 ? '-10%' : '0%'}`,
                width: '120%'
              }}
              animate={{
                x: [0, i % 2 === 0 ? 15 : -15],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Rice plants */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-10 text-green-700"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${10 + Math.random() * 15}%`,
              fontSize: `${1 + Math.random() * 0.5}rem`
            }}
            animate={{
              y: [0, -5, 0],
              rotate: [0, Math.random() > 0.5 ? -2 : 2, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaLeaf />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-4">
            Premium Rice Selection
          </h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto">
            Hand-harvested, sustainably grown rice varieties from the world's finest paddies
          </p>
        </motion.section>

        {/* Product Grid */}
       <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>
  {riceVarieties.map((rice) => (
    <motion.div
      key={rice.id}
      variants={item}
      whileHover={{ y: -5 }}
      className="bg-white mt-20 bg-opacity-90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100"
    >
      <div className="relative h-64 overflow-hidden group">
        <motion.img
          src={`${rice.image}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80`}
          alt={rice.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <button 
          onClick={() => toggleWishlist(rice.id)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition"
        >
          <FaHeart className={wishlist.includes(rice.id) ? "text-red-500" : "text-gray-300"} />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-green-900">{rice.name}</h3>
          <span className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">
            {rice.origin}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {rice.description}
        </p>
        
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar 
              key={i} 
              className={`${i < Math.floor(rice.rating) ? 'text-amber-400' : 'text-gray-300'}`} 
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">({rice.reviewCount} reviews)</span>
        </div>
        
   
        
        <button 
          onClick={() => openDetailsModal(rice.id)}
          className="mt-4 w-full py-2 text-sm font-medium text-green-700 hover:text-green-800 border border-green-200 rounded-lg hover:bg-green-50 transition"
        >
          View Detailed Information
        </button>
      </div>
    </motion.div>
  ))}
</motion.div>

        {/* Features Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">Why Our Premium Rice?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainable Farming",
                description: "Grown using traditional methods that protect the environment",
                icon: <FaLeaf className="text-3xl text-green-600" />
              },
              {
                title: "Premium Quality",
                description: "Hand-selected grains for superior texture and flavor",
                icon: <FaStar className="text-3xl text-amber-400" />
              },
              {
                title: "Direct from Farmers",
                description: "Supporting small-scale farmers with fair prices",
                icon: <FaHeart className="text-3xl text-red-500" />
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        {selectedRice && <PremiumRiceModel rice={selectedRice} onClose={closeModal} />}

      </div>
      <NewsLetter/>
    </div>
  );
};

export default Premium_rice;