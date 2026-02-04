import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaSeedling, FaHandsHelping } from 'react-icons/fa';
import { FiAward, FiGlobe, FiArrowRight } from 'react-icons/fi';
import NewsLetter from '../../Components/NewsLetter';

const OurStory = () => {
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

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Rice grain animation variants
  const riceVariants = {
    float: {
      y: [0, -15, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    floatReverse: {
      y: [0, -20, 0],
      rotate: [0, -5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Animated Rice Background Elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.3,
            zIndex: 0
          }}
          variants={i % 2 === 0 ? riceVariants.float : riceVariants.floatReverse}
          initial="float"
          animate="float"
        >
          <svg width="40" height="40" viewBox="0 0 24 24" className="text-amber-300">
            <path fill="currentColor" d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M8.5,8C9.3,8 10,8.7 10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8M12,12C14.8,12 17,14.2 17,17V20H7V17C7,14.2 9.2,12 12,12Z" />
          </svg>
        </motion.div>
      ))}

      {/* Hero Section with Background Image */}
      <section className="relative py-32 md:py-48 bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/rice-mill-hero.jpg" 
            alt="Rice field background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 to-amber-900/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <motion.span 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <FaLeaf className="mr-2" />
              Our Heritage
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              The <span className="text-emerald-400">Jai Ambe</span> Story
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From humble beginnings in Kapilvastu to becoming a benchmark for quality rice production
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors flex items-center mx-auto">
                Explore Our Journey <FiArrowRight className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rest of your existing sections remain the same */}
      <section className="py-10 max-w-7xl mx-auto px-6 relative z-10 bg-white bg-opacity-90 backdrop-blur-sm">
        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Journey</span>
            </h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                Founded in 2014 by Mr. Tiju Kurmi, Jai Ambe Rice Mill began as a modest operation in Taulihawa-3, 
                Kapilvastu with a simple vision: to deliver rice that maintains its natural integrity from field to table.
              </p>
              <p>
                What started as a small family business has grown into one of Nepal's most respected rice producers, 
                known for our commitment to quality and sustainable practices.
              </p>
              <p>
                Today, we blend <span className="font-medium text-emerald-700">time-honored techniques</span> with modern 
                technology, creating products that honor our heritage while meeting international standards.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/rice-mill-story.webp"
                alt="Founder story"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-1000"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-xl shadow-lg w-3/4 border border-gray-100">
             <p className="text-sm text-gray-600">
  <span className="font-medium text-emerald-700">From seed to success - nurturing dreams since 2014</span>
</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
  <section className="py-10 bg-gray-50 relative z-10 overflow-hidden">
  {/* Large animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Left side animated elements */}
    <motion.div 
      className="absolute left-[-200px] top-1/4 w-[500px] h-[500px] bg-emerald-100/10 rounded-full blur-[100px]"
      animate={{
        x: [-200, -150, -200],
        y: [0, 50, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div 
      className="absolute left-[-300px] top-2/3 w-[600px] h-[600px] bg-amber-100/10 rounded-full blur-[120px]"
      animate={{
        x: [-300, -250, -300],
        y: [0, -30, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
    />
    
    {/* Right side animated elements */}
    <motion.div 
      className="absolute right-[-250px] top-1/3 w-[550px] h-[550px] bg-emerald-100/15 rounded-full blur-[110px]"
      animate={{
        x: [-250, -200, -250],
        y: [0, 40, 0],
        scale: [1, 1.08, 1]
      }}
      transition={{
        duration: 17,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
    />
    
    <motion.div 
      className="absolute right-[-350px] bottom-1/4 w-[700px] h-[700px] bg-amber-100/15 rounded-full blur-[130px]"
      animate={{
        x: [-350, -300, -350],
        y: [0, -20, 0],
        scale: [1, 1.07, 1]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 3
      }}
    />
  </div>

  <div className="max-w-5xl mx-auto px-6 relative z-10">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="overflow-visible"
    >
      <motion.h2 
        variants={item}
        className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
      >
        Our <span className="text-emerald-600">Milestones</span>
      </motion.h2>

      <div className="relative pb-12">
        {/* Timeline line */}
        <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-emerald-300 to-amber-300 transform -translate-x-1/2 z-0"></div>

        {[
          {
            year: "2014",
            title: "Humble Beginnings",
            description: "Established our first mill with traditional stone hullers",
            icon: <FaSeedling className="text-emerald-600 text-xl" />
          },
          {
            year: "2016",
            title: "Quality Breakthrough",
            description: "Developed our signature Golden Grain variety",
            icon: <FiAward className="text-amber-500 text-xl" />
          },
          {
            year: "2018",
            title: "Sustainable Expansion",
            description: "Rebuilt with eco-friendly technology after earthquake",
            icon: <FaLeaf className="text-emerald-600 text-xl" />
          },
          {
            year: "2022",
            title: "Global Recognition",
            description: "Began exporting to international markets",
            icon: <FiGlobe className="text-amber-500 text-xl" />
          },
          {
            year: "2024",
            title: "Innovation Era",
            description: "Launched carbon-neutral production initiative",
            icon: <FaHandsHelping className="text-emerald-600 text-xl" />
          }
        ].map((milestone, index) => (
          <motion.div 
            key={index}
            variants={item}
            className={`relative mb-12 w-full ${index % 2 === 0 ? 'pr-10 md:pr-0 md:pl-10 text-left md:text-right' : 'pl-10 text-left'}`}
            style={{ zIndex: 10 - index }}
          >
            <div className={`absolute top-0 w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-amber-400 border-4 border-white shadow-lg transform -translate-x-1/2 z-10 ${index % 2 === 0 ? 'left-full md:left-0 md:right-full md:translate-x-1/2' : 'left-0'}`}></div>
            
            <div className={`p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
              <div className="flex items-center mb-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-emerald-50 to-amber-50 shadow-sm mr-4">
                  {milestone.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
              </div>
              <p className="text-gray-700 mb-2">{milestone.description}</p>
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 text-sm rounded-full font-medium">
                {milestone.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white relative overflow-hidden">
  {/* Floating decorative elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-10 w-40 h-40 bg-emerald-100/30 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/3 right-20 w-60 h-60 bg-green-100/20 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className="text-center mb-16"
    >
      <div className="inline-flex mb-6">
        <span className="inline-block px-4 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-100/50 rounded-full border border-emerald-200 backdrop-blur-sm">
          Our Core Values
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        <span className="relative inline-block">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500">
            Guiding Philosophy
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400/40 to-green-400/40 rounded-full -z-0"></span>
        </span>
      </h2>
      <motion.p 
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-3xl leading-none">"</span>
        पौष्टिक अन्न, स्वस्थ जीवन
        <span className="text-3xl leading-none">"</span> — Nutritious grains for a healthy life
      </motion.p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: "Sustainable Roots",
          description: "We practice regenerative agriculture that enriches the soil and ecosystem",
          color: "text-green-600"
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          ),
          title: "Farmer First",
          description: "Fair wages and continuous training for our farming partners",
          color: "text-amber-600"
        },
        {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          ),
          title: "Quality Promise",
          description: "Every grain meets our rigorous quality and purity standards",
          color: "text-emerald-600"
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
          className="relative group"
        >
          {/* Card background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-sm border border-gray-100 group-hover:border-emerald-200 transition-all duration-300 -z-10"></div>
          
          {/* Card content */}
          <div className="relative h-full p-8 rounded-2xl backdrop-blur-sm bg-white/70 group-hover:bg-white/90 transition-all duration-500">
            <div className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-gradient-to-br from-white to-gray-50 shadow-xs border border-gray-100 ${item.color}`}>
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            
            {/* Hover effect element */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/0 via-emerald-500/0 to-emerald-500/5"></div>
            </div>
          </div>
          
          {/* Floating decorative element */}
          <div className="absolute -z-20 top-4 left-4 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl"></div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      <NewsLetter/>
    </div>
  );
};

export default OurStory;