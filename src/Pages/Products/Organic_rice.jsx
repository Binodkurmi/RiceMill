import React, { useState, useEffect } from 'react';
import { 
  FaStar, 
  FaHeart, 
  FaRegHeart, 
  FaSearch, 
  FaTimes, 
  FaLeaf, 
  FaSeedling 
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import NewsLetter from "../../Components/NewsLetter";

const Organic_rice = () => {
  
  const products = [
    { 
      id: 1, 
      name: 'Premium Basmati Rice', 
      image: '/Premium_Basmati_Rice.jpg', 
      description: 'Long grain, aromatic rice perfect for special dishes. Grown organically in the fertile fields of Nepal.', 
      rating: 4.8,
      reviews: 124,
      category: 'basmati',
      benefits: ['Aromatic fragrance', 'Extra long grains', 'Non-sticky texture'],
      available: true,
    },
    { 
      id: 2, 
      name: 'Organic Brown Rice', 
      image: '/brown-rice.jpg', 
      description: 'High fiber, unpolished rice for healthy living. Retains all natural nutrients and minerals.', 
      rating: 4.5,
      reviews: 89,
      category: 'brown',
      benefits: ['Rich in fiber', 'High in nutrients', 'Low glycemic index'],
      available: true,
    },
    { 
      id: 3, 
      name: 'Jeera Masino', 
      image: '/Jeera_Masino_rice.jpg', 
      description: 'Short-grain rice perfect for daily meals. Naturally cultivated with traditional methods.', 
      rating: 4.7,
      reviews: 156,
      category: 'special',
      benefits: ['Quick cooking', 'Soft texture', 'Ideal for daily meals'],
      available: true,
    },
    { 
      id: 4, 
      name: 'Sona Masoori', 
      image:'/sona-masoori.jpg',
      description: 'Lightweight and aromatic rice ideal for pulao and biryani. Grown without chemical fertilizers.', 
      rating: 4.9,
      reviews: 210,
      category: 'masoori',
      benefits: ['Light texture', 'Perfect for biryani', 'Less water required'],
      available: true,
    },
    { 
      id: 5, 
      name: 'Red Rice', 
      image: '/Red_Rice.jpg', 
      description: 'Nutrient-packed red rice with antioxidant properties. Traditional Himalayan variety.', 
      rating: 4.6,
      reviews: 78,
      category: 'special',
      benefits: ['Rich in antioxidants', 'High in iron', 'Distinct nutty flavor'],
      available: false,
    },
    { 
      id: 6, 
      name: 'Black Rice', 
      image: '/Black_Forbidden_Rice.jpg', 
      description: 'Rare and nutritious black rice with high anthocyanin content. Known as "forbidden rice".', 
      rating: 4.7,
      reviews: 92,
      category: 'special',
      benefits: ['Highest in antioxidants', 'Rich in protein', 'Natural purple color'],
      available: true,
    },
  ];

  // State management
  const [wishlist, setWishlist] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  const [showAlert, setShowAlert] = useState(false);
const [alertMessage, setAlertMessage] = useState('');
const [alertType, setAlertType] = useState('');
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'basmati', name: 'Basmati' },
    { id: 'brown', name: 'Brown Rice' },
    { id: 'masoori', name: 'Masoori' },
    { id: 'special', name: 'Specialty' }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle image loading errors
  const handleImageError = (id) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  // Toggle wishlist
  const toggleWishlist = (id) => {
    setWishlist(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  // Handle check availability
 const handleCheckAvailability = (product) => {
  const message = product.available 
    ? `${product.name} is available ✅\n\nKey Features:\n${product.benefits.join('\n')}`
    : `${product.name} is currently out of stock ❌\n\nWe'll notify you when it's available again.`;
  
  setAlertMessage(message);
  setAlertType(product.available ? 'success' : 'error');
  setShowAlert(true);
  setSelectedProduct(null); // Close the product modal
};

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const ricePlantAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Loading skeleton component
  const ProductSkeleton = () => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
      <div className="animate-pulse">
        <div className="bg-gray-200 h-52 w-full"></div>
        <div className="p-5">
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-4 bg-gray-200 rounded-full"></div>
            ))}
          </div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative overflow-hidden">
      {/* Animated Rice Paddy Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-emerald-100"></div>
        
        {/* Rice field waves */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-600 to-green-500 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 h-8 w-full bg-green-700 opacity-20"
              style={{
                borderRadius: '50%',
                bottom: `${i * 10}px`,
                left: `${i % 2 === 0 ? '-10%' : '0%'}`,
                width: '120%'
              }}
              animate={{
                x: [0, i % 2 === 0 ? 20 : -20],
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
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-10"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${10 + Math.random() * 15}%`
            }}
            variants={ricePlantAnimation}
            animate="animate"
          >
            <FaSeedling className="text-green-700 text-xl opacity-70" />
          </motion.div>
        ))}

        {/* Sun */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 bg-yellow-200 rounded-full filter blur-sm"
          animate={{
            opacity: [0.8, 0.9, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-green-800 mb-6"
            >
              Organic Rice Collection
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-green-700 mb-8 max-w-2xl mx-auto"
            >
              Naturally grown, hand-picked rice varieties from the fertile fields of Nepal
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <button className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition shadow-lg flex items-center gap-2">
                <FaLeaf /> Explore Varieties
              </button>
              <button className="px-8 py-3 bg-white text-green-700 rounded-full font-medium hover:bg-gray-50 transition shadow-lg">
                Our Farming Process
              </button>
            </motion.div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-4 bg-white bg-opacity-90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                Our Premium Selection
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Hand-crafted rice varieties grown with organic practices and traditional wisdom
              </p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                [...Array(3)].map((_, index) => <ProductSkeleton key={index} />)
              ) : (
                [products[0], products[1], products[2]].map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: index * 0.2 }}
                    className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-green-100"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="absolute top-4 left-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                      Best Seller
                    </div>

                    <div className="absolute top-4 right-4 z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition"
                      >
                        {wishlist.includes(product.id) ? (
                          <FaHeart className="text-red-500" />
                        ) : (
                          <FaRegHeart className="text-gray-400 hover:text-red-500" />
                        )}
                      </button>
                    </div>

                    <div className="overflow-hidden h-60 relative">
                      <motion.img
                        src={imageErrors[product.id] ? '/placeholder-rice.jpg' : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        animate={{ scale: hoveredProduct === product.id ? 1.05 : 1 }}
                        transition={{ duration: 0.5 }}
                        onError={() => handleImageError(product.id)}
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h3>
                      <div className="flex items-center mb-3 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`text-sm ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-gray-500 text-sm ml-1">
                          ({product.rating.toFixed(1)})
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <button className="py-2 px-4 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* All Products Section */}
        <section className="py-16 px-4 bg-green-50 bg-opacity-50">
          <div className="max-w-7xl mx-auto">
            {/* Filters and Search */}
            <div className="mb-8 bg-white p-4 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-green-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-green-100 border border-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
                
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    placeholder="Search rice varieties..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      <FaTimes />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                [...Array(6)].map((_, index) => <ProductSkeleton key={index} />)
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-green-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <div className="relative overflow-hidden h-52">
                      <motion.img
                        src={imageErrors[product.id] ? '/placeholder-rice.jpg' : product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        animate={{ scale: hoveredProduct === product.id ? 1.05 : 1 }}
                        transition={{ duration: 0.5 }}
                        onError={() => handleImageError(product.id)}
                      />
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product.id);
                        }}
                        className={`absolute top-2 right-3 p-2 rounded-full shadow-md transition ${
                          wishlist.includes(product.id) 
                            ? 'bg-red-50 text-red-500' 
                            : 'bg-white text-gray-400 hover:text-red-500'
                        }`}
                      >
                        {wishlist.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
                      </button>
                    </div>

                    <div className="p-5">
                      <h2 className="text-lg font-semibold text-green-800 mb-2">{product.name}</h2>
                      <div className="flex items-center mb-3 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`text-sm ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-gray-500 text-xs ml-1">({product.reviews})</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Organic Certified
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto"
                  >
                    <div className="text-gray-400 mb-4">
                      <FaSearch className="inline-block text-4xl" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-700 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-500 mb-4">
                      We couldn't find any rice varieties matching your search.
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                      }}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200 transition"
                    >
                      Reset filters
                    </button>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {selectedProduct && (
<div className="fixed mt-[60px] sm:mt-15 inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition"
                >
                  <FaTimes className="text-gray-600" />
                </button>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="h-80 md:h-full">
                    <img 
                      src={imageErrors[selectedProduct.id] ? '/placeholder-rice.jpg' : selectedProduct.image}
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                      onError={() => handleImageError(selectedProduct.id)}
                    />
                  </div>
                  
                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-2xl font-bold text-green-800">
                        {selectedProduct.name}
                      </h2>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => toggleWishlist(selectedProduct.id)}
                          className="p-2 text-lg"
                        >
                          {wishlist.includes(selectedProduct.id) ? (
                            <FaHeart className="text-red-500" />
                          ) : (
                            <FaRegHeart className="text-gray-400 hover:text-red-500" />
                          )}
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`${i < Math.floor(selectedProduct.rating) ? 'text-amber-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">
                        {selectedProduct.rating.toFixed(1)} ({selectedProduct.reviews} reviews)
                      </span>
                    </div>
                    
                    <p className="text-gray-700 mb-6">{selectedProduct.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-medium text-green-800 mb-3">Key Benefits:</h3>
                      <ul className="space-y-2">
                        {selectedProduct.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <FaLeaf className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mt-8">
                      <button
                        onClick={() => handleCheckAvailability(selectedProduct)}
                        className="flex-1 min-w-[200px] py-3 bg-white text-green-700 border border-green-600 rounded-lg font-medium hover:bg-green-50 transition shadow-md"
                      >
                        Check Availability
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        <NewsLetter />
      </div>
      {showAlert && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`relative max-w-md w-full rounded-lg p-6 shadow-xl ${
        alertType === 'success' ? 'bg-green-50' : 'bg-red-50'
      }`}
    >
      <button
        onClick={() => setShowAlert(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <FaTimes />
      </button>
      
      <div className="flex items-start">
        <div className={`flex-shrink-0 text-2xl mr-4 ${
          alertType === 'success' ? 'text-green-500' : 'text-red-500'
        }`}>
          {alertType === 'success' ? '✓' : '✗'}
        </div>
        <div className="overflow-y-auto max-h-[60vh]">
          <h3 className={`text-lg font-medium ${
            alertType === 'success' ? 'text-green-800' : 'text-red-800'
          }`}>
            {alertType === 'success' ? 'Available' : 'Out of Stock'}
          </h3>
          <div className="mt-2 whitespace-pre-line text-sm text-gray-700">
            {alertMessage}
          </div>
          <div className="mt-6">
            <button
              onClick={() => setShowAlert(false)}
              className={`w-full px-4 py-2 rounded-md text-sm font-medium ${
                alertType === 'success' 
                  ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                  : 'bg-red-100 text-red-800 hover:bg-red-200'
              }`}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
)}
    </div>
  );
};

export default Organic_rice;