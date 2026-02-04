import React, { useState } from 'react';
import { FiMail, FiSend, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

function NewsLetter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulated API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section className="relative py-4 overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 50],
              y: [0, (Math.random() - 0.5) * 50],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Glowing orb */}
      <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full bg-emerald-400/10 blur-xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <motion.div className="relative h-64 lg:h-full" whileHover={{ scale: 1.01 }}>
              <img
                src="/Newsletters.jpg"
                alt="Stay updated"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full mb-2">
                  ✨ Exclusive Content
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Join Our <span className="text-emerald-300">Community</span>
                </h3>
              </div>
            </motion.div>

            {/* Form side */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get the latest news and exclusive offers
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FiMail size={18} />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 dark:border-gray-700 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all bg-white/70 dark:bg-gray-700/70"
                    required
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                    isSubmitting
                      ? 'bg-emerald-600'
                      : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-md'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : (
                    <span className="inline-flex items-center justify-center">
                      Subscribe <FiSend className="ml-2" />
                    </span>
                  )}
                </button>
              </form>

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 flex items-center space-x-2 text-emerald-600"
                  >
                    <FiCheck size={24} />
                    <span className="font-semibold">Subscribed!</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NewsLetter;
