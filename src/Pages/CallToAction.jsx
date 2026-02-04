import { Link } from "react-router-dom";

const CallToAction = () => (
  <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
    {/* Background Image with modern gradient overlay */}
    <div className="absolute inset-0 -z-10">
      <img
        src="/Premium-rice.jpg"
        alt="Premium rice selection"
        className="h-full w-full object-cover object-center"
        loading="lazy"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20"
        aria-hidden="true"
      />
    </div>

    {/* Content with modern typography and spacing */}
    <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Elevate Your Culinary Experience
      </h2>
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Discover the perfect harmony of tradition and innovation with our 
        premium rice selection. Sourced for quality, crafted for excellence.
      </p>
      
      {/* Button group with modern hover effects */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/products"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-700 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:scale-105"
        >
          Explore Our Products
        </Link>
        <Link
          to="/contact"
          className="rounded-full bg-transparent px-6 py-3 text-sm font-semibold text-white ring-1 ring-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
        >
          Contact Our Experts
        </Link>
      </div>
    </div>
    
    {/* Decorative element for modern touch */}
    <div 
      className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      aria-hidden="true"
    >
      <div
        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#16a34a] to-[#fdba74] opacity-20"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  </section>
);

export default CallToAction;