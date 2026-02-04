import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaHandshake, FaLightbulb, FaLeaf } from 'react-icons/fa';
import { FiAward, FiUser, FiGlobe, FiArrowRight } from 'react-icons/fi';
import NewsLetter from '../../Components/NewsLetter';
import TeamMembers from './TeamMembers'; // Import your TeamMembers component

const Team = () => {
  const [showTeamMember, setShowTeamMember] = useState(false);
  
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
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  // Floating animation for decorative elements
  const float = {
    y: [0, -15, 0],
    transition: {
      duration: 6 + Math.random() * 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // If showTeamMember is true, render the TeamMembers page
  if (showTeamMember) {
    return <TeamMembers onBack={() => setShowTeamMember(false)} />;
  }

  return (
    <div className="bg-white overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-amber-100/30 backdrop-blur-sm z-0"
        animate={float}
      />
      <motion.div 
        className="absolute bottom-1/3 right-16 w-20 h-20 rounded-full bg-emerald-100/20 backdrop-blur-sm z-0"
        animate={{
          ...float,
          transition: { ...float.transition, delay: 2 }
        }}
      />

      {/* Hero Section */}
      <section className="relative mt-20 py-24 md:py-32 bg-gradient-to-br from-amber-50 to-emerald-50 overflow-hidden">
        {/* Floating elements animation - bottom to top */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => {
            const duration = 20 + Math.random() * 20;
            const delay = Math.random() * 10;
            const startY = 100 + Math.random() * 20;
            const endY = -20 - Math.random() * 20;
            const startX = Math.random() * 100;
            const size = 1 + Math.random();
            const opacity = 0.2 + Math.random() * 0.3;
            
            return (
              <motion.div
                key={i}
                className="absolute pointer-events-none"
                style={{
                  left: `${startX}%`,
                  fontSize: `${size}rem`,
                  opacity: opacity,
                }}
                initial={{ y: `${startY}%`, rotate: Math.random() * 360 }}
                animate={{ 
                  y: `${endY}%`,
                  rotate: Math.random() > 0.5 ? 360 : -360,
                }}
                transition={{
                  duration: duration,
                  delay: delay,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              >
                {i % 3 === 0 ? (
                  <FaLeaf className="text-emerald-400/70" />
                ) : i % 3 === 1 ? (
                  <svg className="text-amber-400/70 w-full h-full" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M15.5,8C16.3,8 17,8.7 17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8M8.5,8C9.3,8 10,8.7 10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8M12,12C14.8,12 17,14.2 17,17V20H7V17C7,14.2 9.2,12 12,12Z" />
                  </svg>
                ) : (
                  <svg className="text-emerald-500/60 w-full h-full" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,5C8.14,5 5,8.14 5,12C5,15.86 8.14,19 12,19C15.86,19 19,15.86 19,12C19,8.14 15.86,5 12,5Z" />
                  </svg>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center"
          >
            <motion.span 
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium bg-white text-amber-600 shadow-sm border border-amber-100 mb-6"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(245, 158, 11, 0.1)" }}
            >
              <FaUsers className="mr-2" />
              Our Collective Strength
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-emerald-600">Jai Ambe</span> Family
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
            >
              Passionate individuals united by a common vision of quality, sustainability, and innovation in rice production
            </motion.p>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <button 
                onClick={() => setShowTeamMember(true)}
                className="mt-10 px-8 py-4 bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all flex items-center mx-auto shadow-lg hover:shadow-amber-500/20"
              >
                Meet Our Team <FiArrowRight className="ml-3 animate-pulse" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative py-10 max-w-7xl mx-auto px-6">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeInUp}
    className="text-center mb-10"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      Guiding <span className="text-amber-600">Leadership</span>
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Visionary leaders driving our mission forward
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        name: "Tiju Kurmi",
        role: "Founder & CEO",
        bio: "With 20+ years in rice cultivation, Mr. Tiju established Jai Ambe with a vision for sustainable agriculture",
        img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      },
      {
        name: "Sita Kurmi",
        role: "Operations Director",
        bio: "Oversees daily production ensuring quality standards are met at every stage",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
      },
      {
        name: "Rajesh Yadav",
        role: "Agricultural Head",
        bio: "Leads our farmer partnerships and sustainable farming initiatives",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      }
    ].map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, type: "spring" }}
        className="group relative bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
      >
        <div className="h-80 overflow-hidden">
          <img
            src={member.img}
            alt={member.name}
            className="w-[400px] h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-start">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <span className="inline-block px-2.5 py-1 bg-gradient-to-r from-amber-100 to-emerald-100 text-amber-800 text-xs rounded-full mb-3 font-medium">
                {member.role}
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-3 line-clamp-3">{member.bio}</p>
          <button className="text-xs text-amber-600 hover:text-amber-700 font-medium">
            View Profile →
          </button>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      {/* Team Values Section */}
      <section className="py-10 bg-gray-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-emerald-600">Core Values</span>
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and action we take
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandshake className="text-amber-500 text-4xl" />,
                title: "Collaboration",
                description: "We believe in working together across departments for the best results",
                color: "from-amber-50 to-amber-100"
              },
              {
                icon: <FaLightbulb className="text-emerald-500 text-4xl" />,
                title: "Innovation",
                description: "Continually seeking better methods and technologies to improve our processes",
                color: "from-emerald-50 to-emerald-100"
              },
              {
                icon: <FiAward className="text-amber-500 text-4xl" />,
                title: "Excellence",
                description: "Striving for the highest standards in every grain we produce",
                color: "from-amber-50 to-emerald-50"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all hover:border-amber-300 group`}
              >
                <div className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-emerald-600">Specialized</span> Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated departments working in harmony to deliver excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Agriculture",
                count: "45+",
                description: "Field experts working directly with farmers",
                icon: <FiUser className="text-emerald-500 text-2xl" />,
                color: "bg-emerald-50"
              },
              {
                name: "Production",
                count: "60+",
                description: "Milling and processing specialists",
                icon: <FiAward className="text-amber-500 text-2xl" />,
                color: "bg-amber-50"
              },
              {
                name: "Quality Control",
                count: "12+",
                description: "Ensuring every grain meets our high standards",
                icon: <FiGlobe className="text-emerald-500 text-2xl" />,
                color: "bg-emerald-50"
              },
              {
                name: "Administration",
                count: "8+",
                description: "Supporting our operations backbone",
                icon: <FaHandshake className="text-amber-500 text-2xl" />,
                color: "bg-amber-50"
              }
            ].map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:border-amber-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${dept.color} shadow-sm mr-4 group-hover:scale-110 transition-transform`}>
                    {dept.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{dept.name}</h3>
                    <span className="text-amber-600 font-medium">{dept.count} professionals</span>
                  </div>
                </div>
                <p className="text-gray-600">{dept.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
   <section className="relative py-10 bg-gradient-to-br from-amber-50/70 to-emerald-50/70 overflow-hidden">
  {/* Floating grain animations */}
  <div className="absolute inset-0 opacity-30 pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: 0.2 + Math.random() * 0.3,
          scale: 0.5 + Math.random() * 0.7
        }}
        animate={{
          y: [0, -50, 0],
          x: [0, Math.random() > 0.5 ? 20 : -20, 0],
          rotate: [0, Math.random() > 0.5 ? 25 : -25, 0]
        }}
        transition={{
          duration: 18 + Math.random() * 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg 
          className="w-10 h-10 text-emerald-400/60" 
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H8v-2h3v2zm0-3H8V8h3v6zm4 3h-3v-2h3v2zm0-3h-3V8h3v6z" />
        </svg>
      </motion.div>
    ))}
  </div>

  {/* Floating circles */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={`circle-${i}`}
        className="absolute rounded-full bg-gradient-to-br from-amber-200/30 to-emerald-200/30"
        style={{
          width: `${100 + Math.random() * 150}px`,
          height: `${100 + Math.random() * 150}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: 0.1 + Math.random() * 0.2,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, Math.random() > 0.5 ? 15 : -15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 20 + Math.random() * 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>

  {/* Floating bubbles with motivational text */}
  <div className="absolute inset-0 pointer-events-none">
    {[
      { text: "Tradition Meets Innovation", size: "120px", color: "text-amber-600/70" },
      { text: "Grow With Purpose", size: "100px", color: "text-emerald-600/70" },
      { text: "Rooted in Excellence", size: "110px", color: "text-amber-700/60" },
      { text: "Sustainable Future", size: "90px", color: "text-emerald-700/60" }
    ].map((bubble, i) => (
      <motion.div
        key={`bubble-${i}`}
        className={`absolute font-medium ${bubble.color} text-center`}
        style={{
          width: bubble.size,
          height: bubble.size,
          top: `${15 + Math.random() * 70}%`,
          left: `${5 + Math.random() * 90}%`,
          fontSize: `${0.6 + Math.random() * 0.4}rem`,
          opacity: 0.7,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, Math.random() > 0.5 ? 5 : -5, 0]
        }}
        transition={{
          duration: 25 + Math.random() * 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          {bubble.text}
        </div>
      </motion.div>
    ))}
  </div>

  <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-flex mb-6">
        <span className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-emerald-700 bg-emerald-100/50 rounded-full border border-emerald-200 backdrop-blur-sm">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Grow With Us
        </span>
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        <span className="relative inline-block">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-emerald-700">
            Cultivate Your Future
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400/50 to-emerald-400/50 rounded-full -z-0"></span>
        </span>
        <br />
        <span className="text-gray-800">With Jai Ambe Heritage</span>
      </h2>

      <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Join a team that's revolutionizing rice production while preserving centuries-old traditions. 
         - we offer purpose.
      </p>
    </motion.div>
  </div>
</section>
      <NewsLetter/>
    </div>
  );
};

export default Team;