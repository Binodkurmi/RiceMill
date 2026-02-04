import React from "react"
import NewsLetter from "../Components/NewsLetter";
import HeroSlider from "./HeroSlider";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const products = [
    { 
      id: 1, 
      name: 'Premium Basmati Rice', 
      image: '/Basmati.jpg', 
      description: 'Long grain, aromatic rice perfect for special dishes.', 
      features: ['Aged 1 year', 'Extra long grain', 'Low GI index']
    },
    { 
      id: 2, 
      name: 'Organic Brown Rice', 
      image: '/brown-rice.jpg', 
      description: 'High fiber, unpolished rice for healthy living.', 
      features: ['100% organic', 'High in antioxidants', 'Slow digesting']
    },
    { 
      id: 3, 
      name: 'Jeera Masino', 
      image: '/Jeera_Masino_rice.jpg', 
      description: 'Short‑grain rice perfect for daily meals.', 
      features: ['Quick cooking', 'Fluffy texture', 'Budget friendly']
    },
  ];

  const features = [
    {
      title: "Top Quality",
      desc: "We deliver the finest rice processed with high standards.",
      icon: "/icons8-quality-50.png",
    },
    {
      title: "Trusted Farmers",
      desc: "Sourced directly from local, certified farmers.",
      icon: "/icons8-farmer-50.png",
    },
    {
      title: "Fast Delivery",
      desc: "Timely delivery across Nepal at your convenience.",
      icon: "/icons8-truck-50.png",
    },
    {
      title: "Affordable Pricing",
      desc: "Premium quality at reasonable prices.",
      icon: "/icons8-rice-bag-50.png",
    },
  ];

  const steps = [
    { title: "Planting", desc: "Seeds are carefully selected and planted.", icon: "/icons8-planting-64.png" },
    { title: "Processing", desc: "Grains are cleaned and processed with care.", icon: "/icons8-processing-64.png" },
    { title: "Quality Check", desc: "Every batch is tested for quality.", icon: "/icons8-quality-checked-64.png" },
    { title: "Delivery", desc: "Rice is delivered fresh to your doorstep.", icon: "/icons8-home-delivery-64.png" },
  ];

  const testimonials = [
    { 
      msg: "Excellent rice quality and service! The aroma when cooking is unmatched.", 
      name: "Sita Thapa", 
      location: "Kathmandu", 
      avatar: "/avatar1.jpg",
      rating: 5
    },
    { 
      msg: "Very affordable and fast delivery. My family loves the organic brown rice.", 
      name: "Sunil Kumar", 
      location: "Pokhara", 
      avatar: "/avatar2.jpg",
      rating: 5
    },
    { 
      msg: "Trusted supplier, recommended! Consistent quality for 3 years now.", 
      name: "Sunita Sharma", 
      location: "Biratnagar", 
      avatar: "/avatar3.jpg",
      rating: 4
    },
  ];
 const Counter = ({ value, suffix = "", duration = 2000 }) => {
  const [count, setCount] = React.useState(0);
  const target = parseInt(value);
  const step = Math.ceil(target / (duration / 16)); // 60fps

  React.useEffect(() => {
    let start = 0;
    const end = target;
    
    if (start === end) return;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(start);
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [target, step]);

  return (
    <span className="animate-counter">
      {count}{suffix}
    </span>
  );
}

  return (
    <main className="bg-[#f8fafc] text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <HeroSlider height="h-[80vh] md:h-[90vh]" autoInterval={4000} />

      {/* About Section */}
   <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#f0fdf4] via-[#e0f7ed] to-[#d1f1e5]">
  {/* Background elements remain the same */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">
    <div className="text-center mb-16">
      {/* Heritage Badge */}
      <div className="inline-flex mb-8 relative group">
        <span className="relative px-5 py-2.5 text-sm font-bold tracking-widest text-emerald-900 uppercase bg-white/90 rounded-full shadow-sm backdrop-blur-sm border border-emerald-100 z-10 group-hover:bg-white transition-all duration-300">
          <span className="relative z-10">Himalayan Heritage Since 2014</span>
        </span>
      </div>
      
      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
        <span className="relative inline-block">
          <span className="relative z-10 bg-clip-text text-transparent bg-[linear-gradient(73deg,#059669_0%,#10b981_30%,#84cc16_100%)]">
            JAI AMBE SHELLER
          </span>
        </span>
        <br />
        <span className="relative inline-block mt-2">
          <span className="relative z-10 bg-clip-text text-transparent bg-[linear-gradient(73deg,#84cc16_0%,#10b981_50%,#059669_100%)]">
            RICE MILL
          </span>
        </span>
      </h1>
      
      {/* Elaborated Description */}
      <div className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12 space-y-6">
        <p>
          Nestled in the fertile foothills of the Himalayas, <strong>Jai Ambe Sheller Rice Mill</strong> has been the cornerstone of Nepal's rice production for three generations. 
          Our family-owned mill combines <span className="font-semibold bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">traditional farming wisdom</span> with 
          <span className="font-semibold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent"> state-of-the-art milling technology</span> to deliver the purest, most flavorful rice varieties.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
          <div className="bg-white/80 p-6 rounded-xl border border-emerald-100 shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-800 mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Process
            </h3>
            <p className="text-gray-600">
              From seed selection to packaging, we maintain rigorous quality control at every stage. Our modern parboiling and milling processes preserve the natural nutrients while achieving perfect grain integrity.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Traditional sun-drying methods</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Computerized color sorting technology</span>
              </li>
              <li className="flex items-start">
                <svg className="w-4 h-4 mt-1 mr-2 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Chemical-free polishing process</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/80 p-6 rounded-xl border border-emerald-100 shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-800 mb-3 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Our Promise
            </h3>
            <p className="text-gray-600">
              We partner directly with local farmers to ensure fair trade practices while maintaining the highest agricultural standards. Every grain tells a story of Himalayan purity and our commitment to sustainability.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">100% Natural</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">Farm-to-Table</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-medium rounded-full">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <NavLink
        to="/about"
        className="relative px-12 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
      >
        <span className="relative z-10 flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          OUR HERITAGE
        </span>
        <span className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-700 opacity-95 group-hover:opacity-100 transition-opacity duration-300"></span>
      </NavLink>

      <NavLink
        to="/products"
        className="relative px-12 py-5 text-lg font-bold text-emerald-900 rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-lg bg-white border-2 border-emerald-200/80 hover:border-emerald-300"
      >
        <span className="relative z-10 flex items-center gap-3">
          <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          EXPLORE PRODUCTS
        </span>
        <span className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
      </NavLink>
    </div>

    {/* Quality Seal */}
    <div className="mt-20 flex flex-col items-center">
      <div className="bg-white p-4 rounded-full shadow-lg border-2 border-emerald-200">
        <svg className="w-12 h-12 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
      <p className="mt-4 text-sm text-gray-600 font-medium max-w-md text-center">
        Certified by Nepal Food Authority | ISO 22000:2018 Certified | Regular Quality Audits
      </p>
    </div>
  </div>
</section>

{/* Products Section */}
<section className="relative py-16 overflow-hidden bg-gradient-to-b from-white to-[#f8fafc]">
  {/* Floating rice grain accents */}
  <div className="absolute inset-0 overflow-hidden z-0">
    {[...Array(15)].map((_, i) => (
      <div 
        key={i}
        className="absolute bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzA1OTY2OSIgZD0iTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41IDIgMTIgMnptLTEgMTVoLTJ2LTJoMnYyem0wLTNoLTJWN2gydjd6Ii8+PC9zdmc+')] bg-contain bg-no-repeat"
        style={{
          width: `${Math.random() * 12 + 8}px`,
          height: `${Math.random() * 12 + 8}px`,
          opacity: Math.random() * 0.1 + 0.05,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 15 + 10}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
          transform: `rotate(${Math.random() * 360}deg)`
        }}
      />
    ))}
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        <span className="relative inline-block">
          <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-500">
            Premium Rice Collection
          </span>
          <span className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-400/40 to-green-400/40 rounded-full -z-0"></span>
        </span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Experience the finest Himalayan rice varieties, cultivated with care and tradition
      </p>
    </div>

    {/* Modern glassmorphic cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <div 
          key={product.id}
          className="group relative flex flex-col h-full"
        >
          {/* Glassmorphic card container */}
          <div className="relative h-full bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-100/50 transition-all duration-300 group-hover:shadow-xl group-hover:border-emerald-200/50">
            {/* Image with gradient overlay */}
            <div className="relative h-60 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-white shadow-md">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Premium
                </span>
              </div>
            </div>
            
            {/* Card content */}
            <div className="p-6 flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">48 reviews</span>
                </div>
                
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                {/* Features with animated dots */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span className="flex items-center justify-center w-5 h-5 mr-2 mt-0.5 flex-shrink-0">
                        <span className="absolute w-2 h-2 bg-emerald-500 rounded-full animate-ping opacity-75"></span>
                        <span className="relative w-2 h-2 bg-emerald-500 rounded-full"></span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* CTA button with hover effect */}
              <NavLink
                to="/products"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-sm transition-all duration-300 group-hover:shadow-md"
              >
                View Products
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NavLink>
            </div>
          </div>
          
          {/* Floating decorative element */}
          <div className="absolute -z-10 top-4 left-4 w-24 h-24 bg-emerald-200/20 rounded-full blur-xl"></div>
        </div>
      ))}
    </div>

    {/* View all button */}
    <div className="text-center mt-16">
      <NavLink
        to="/products"
        className="inline-flex items-center px-8 py-3.5 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
      >
        Browse All Varieties
        <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NavLink>
    </div>
  </div>

  <style jsx global>{`
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(2deg); }
    }
  `}</style>
</section>

      {/* Testimonials Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
  {/* Animated gradient background */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400/30 via-transparent to-transparent animate-pulse-slow"></div>
  </div>
  
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="inline-block px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 rounded-full mb-4">
        Trusted by thousands
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Loved by users, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">recommended</span> by experts
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Join 10,000+ satisfied customers across Nepal who trust our products daily.
      </p>
    </div>
    
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, i) => (
        <div 
          key={i} 
          className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-emerald-200/50 hover:-translate-y-1"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-16 h-16 -mr-4 -mt-4 bg-emerald-400/10 rounded-full"></div>
          
          <div className="flex mb-4">
            {[...Array(5)].map((_, starIndex) => (
              <svg 
                key={starIndex} 
                className={`w-5 h-5 ${starIndex < testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            <span className="text-3xl font-serif text-gray-300 dark:text-gray-600 leading-none mr-1">"</span>
            {testimonial.msg}
            <span className="text-3xl font-serif text-gray-300 dark:text-gray-600 leading-none ml-1">"</span>
          </p>
          
          <div className="flex items-center">
            <div className="relative mr-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-700 shadow-sm"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-700"></div>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <svg className="w-3 h-3 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {testimonial.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Trust indicators */}
   <div className="mt-24 relative">
  {/* Animated floating gradient bubbles */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-20 left-1/4 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl animate-float"></div>
    <div className="absolute top-10 right-1/3 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
  </div>

  <div className="relative z-10">
    {/* Animated title with gradient underline */}
    <div className="text-center mb-12">
      <p className="inline-flex text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 tracking-wider">
        <span className="relative px-2">
          TRUSTED BY INNOVATORS
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></span>
        </span>
      </p>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
        Featured in <span className="relative whitespace-nowrap">
          <span className="relative z-10">top industry</span>
          <span className="absolute bottom-0 left-0 w-full h-3 bg-emerald-400/30 -rotate-1 -z-0"></span>
        </span> leaders
      </h3>
    </div>

    {/* Logo cloud with 3D tilt effect - Updated with real logos */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-4 max-w-6xl mx-auto">
      {[
        { id: 1, logo: "/company1.png", name: "Golyan Group", width: 400 },
        { id: 2, logo: "/company2.jpg", name: "Shreenagar Agro", width: 140 },
        { id: 3, logo: "/company3.png", name: "Kheti Food", width: 100 },
        { id: 4, logo: "/company4.jpg", name: "FreshKtm", width: 130 },
        { id: 5, logo: "/company5.png", name: "NepalPay", width: 110 }
      ].map((company) => (
        <div 
          key={company.id} 
          className="group relative flex flex-col items-center"
          data-tilt
          data-tilt-max="8"
          data-tilt-perspective="1000"
        >
          {/* Logo container with glass morphism */}
          <div className="relative w-full aspect-[3/2] flex items-center justify-center p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-100 dark:border-gray-700/50 shadow-xs hover:shadow-sm transition-all duration-300 group-hover:border-emerald-300/30 mb-3">
            {/* Actual logo implementation */}
            <img 
              src={company.logo}
              alt={company.name}
              className="w-auto max-w-full h-20 object-contain opacity-90 group-hover:opacity-100 transition-opacity dark:brightness-0 dark:invert-[.9]"
              style={{ width: `${company.width}px` }}
            />
            
            {/* Subtle hover effect */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Company name with fade-in animation */}
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {company.name}
          </p>
        </div>
      ))}
    </div>

    {/* Animated progress bar at bottom */}
    <div className="mt-14 relative h-0.5 w-full max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-1/3 h-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-progress"></div>
    </div>
  </div>
</div>
  </div>
</section>



      {/* Newsletter */}
      <NewsLetter />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes terrace-flow {
          0% { background-position-x: 0; }
          100% { background-position-x: 1000px; }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes underline-expand {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes text-rise {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 8px rgba(5, 150, 105, 0.3); }
          50% { text-shadow: 0 0 16px rgba(5, 150, 105, 0.6); }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .animate-underline-expand {
          animation: underline-expand 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          animation-delay: 0.5s;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-text-rise {
          animation: text-rise 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards;
          animation-delay: 0.8s;
        }
        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
        }
        .animate-terrace-flow {
          animation: terrace-flow 60s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </main>
  );
};

export default Home;