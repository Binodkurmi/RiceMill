import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import Footer from "../Components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [submissionAttempts, setSubmissionAttempts] = useState(0);

  // Test API connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        console.log('Testing API connection to:', API_URL);
        const response = await fetch(`${API_URL}/api/health`);
        const data = await response.json();
        console.log('✅ API Health check:', data);
      } catch (error) {
        console.error('❌ API Connection test failed:', error);
      }
    };
    testConnection();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.firstName?.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName?.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^[\d\s+-]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message?.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);
    setIsSubmitting(true); // CRITICAL FIX: Added this line

    // Prevent too many submission attempts
    if (submissionAttempts >= 3) {
      setSubmitError('Too many attempts. Please wait a moment before trying again.');
      setIsSubmitting(false);
      return;
    }

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      
      // Add timeout for fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || '',
          message: formData.message.trim()
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Failed to submit form (Status: ${response.status})`);
      }

      const data = await response.json();
      console.log('✅ Form submission successful:', data);
      
      setSubmitSuccess(true);
      setSubmissionAttempts(0); // Reset attempt counter on success

      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('❌ Submission error:', error);
      
      // Increment submission attempts
      setSubmissionAttempts(prev => prev + 1);
      
      // User-friendly error messages
      if (error.name === 'AbortError') {
        setSubmitError('Request timed out. Please check your connection and try again.');
      } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        setSubmitError('Network error. Please check your internet connection.');
      } else if (error.message.includes('CORS')) {
        setSubmitError('Connection issue. Please try again or contact support.');
      } else {
        setSubmitError(error.message || 'An error occurred while submitting. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-b from-green-50 to-white text-green-800 font-sans py-18 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 px-4"
          >
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
              CONTACT US
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Harvesting happiness—grain by grain, purity in every harvest;
              that's the RiceMill promise.
            </p>
          </motion.div>

          {/* Map */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              title="Google Map - Rice Mill Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4337.861091760946!2d83.07246317829858!3d27.561506507020102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996e5dbdd5b1ed3%3A0x5cd311b2f529d492!2sTiju%20galla%20bhandar%20and%20Jai%20ambe%20shellar%20rice%20mill!5e0!3m2!1sen!2sin!4v1754713596631!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.section>

          {/* Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 text-green-700">CONTACT INFO</h2>
              <address className="not-italic space-y-5 text-base">
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="mt-1 text-green-600" size={20} />
                  <div>
                    <strong className="block text-green-700 mb-1">Address:</strong>
                    Kapilvastu‑3, Laxminagar, NEPAL‑32800
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaPhone className="mt-1 text-green-600" size={18} />
                  <div>
                    <strong className="block text-green-700 mb-1">Phone:</strong>
                    +977‑9876543210<br />
                    +977‑9876587655
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaEnvelope className="mt-1 text-green-600" size={18} />
                  <div>
                    <strong className="block text-green-700 mb-1">Email:</strong>
                    jaiambericemill2014@gmail.com
                  </div>
                </div>
              </address>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold mb-6 text-green-700">DROP A MESSAGE</h2>

              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Thank you! Your message has been received. We'll get back to you soon.
                </motion.div>
              )}

              {/* Error Message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {submitError}
                </motion.div>
              )}

              {submissionAttempts >= 3 && (
                <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
                  <strong>Note:</strong> Multiple submission attempts detected. Please wait a moment before trying again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full p-3 bg-green-50 border ${validationErrors.firstName ? 'border-red-500' : 'border-green-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    required
                    disabled={isSubmitting}
                  />
                  {validationErrors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full p-3 bg-green-50 border ${validationErrors.lastName ? 'border-red-500' : 'border-green-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    required
                    disabled={isSubmitting}
                  />
                  {validationErrors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.lastName}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 bg-green-50 border ${validationErrors.email ? 'border-red-500' : 'border-green-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="abc@gmail.com"
                    required
                    disabled={isSubmitting}
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full p-3 bg-green-50 border ${validationErrors.phone ? 'border-red-500' : 'border-green-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    placeholder="+977 9876543210"
                    disabled={isSubmitting}
                  />
                  {validationErrors.phone && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.phone}
                    </p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full p-3 bg-green-50 border ${validationErrors.message ? 'border-red-500' : 'border-green-200'} rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500`}
                    required
                    minLength={10}
                    disabled={isSubmitting}
                  />
                  {validationErrors.message && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {validationErrors.message}
                    </p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    Minimum 10 characters required ({formData.message.trim().length}/10)
                  </p>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submissionAttempts >= 3}
                  className="md:col-span-2 mt-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      {submissionAttempts >= 3 ? 'Try Again Later' : 'Submit Queries'}
                    </>
                  )}
                </motion.button>
                <p className="md:col-span-2 text-center text-sm text-gray-500">
                  * Required fields
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}