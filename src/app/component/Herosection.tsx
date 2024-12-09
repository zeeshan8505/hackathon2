const HeroSection = () => {
    return (
      <section className="relative bg-gray-50 py-16 px-6 lg:px-16">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center space-y-8 lg:space-y-0">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl font-semibold text-blue-900 mb-4">
              Best Furniture Collection For Your Interior.
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Discover the best furniture designs to match your home style. From modern to traditional, we have it all.
            </p>
            <a
              href="#shop"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Shop Now
            </a>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/Product Image.png" 
              alt="Chair"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  