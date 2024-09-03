import React, { useState, useEffect } from 'react';

const UserHomePage = () => {
    // Carousel state
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
      "https://static.vecteezy.com/system/resources/previews/021/607/823/large_2x/family-with-car-travel-driving-road-trip-summer-vacation-in-car-in-the-sunset-dad-mom-and-daughter-happy-traveling-enjoy-holidays-and-relaxation-together-get-the-atmosphere-and-go-to-destination-photo.jpg",
      "https://www.zoomcar.com/img/vistara_banner.jpg",
      "https://storage.googleapis.com/cms-assets-jucy-oconee-prod-28a1ed/public/NZ-LIFESTYLE-IMAGERY/3100-x-2074_COVER/CARS/COMPACT-SUV/two-friends-laughing-drinking-coffee-back-of-compact-suv.jpg",
    ];
  
    // Change slide every 5 seconds
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
  
      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    }, [slides.length]);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
  
    return (
      <div>
        <div>
        <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">ENJOY WITH OUR CARS..</h3>
        </div>
        {/* Carousel Section */}
        <section className="relative w-4/5 mx-auto h-[600px] overflow-hidden py-16">
          <div className="relative w-full h-full">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%' }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full">
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
            >
              ›
            </button>
          </div>
        </section>

        {/* Text Area */}
        <section
          className="bg-cover bg-center h-96 text-white"
          style={{ backgroundImage: 'url(https://advertising.expedia.com/wp-content/uploads/2020/08/Car-Hero_1920x800.jpg)' }}
        >
          <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                Find the Perfect Car for Your Journey
              </h2>
              <p className="text-xl mb-8">
                Explore a wide range of vehicles for all your needs
              </p>
            </div>
          </div>
        </section>

        {/* Booking and Image Section */}
        <div className="flex flex-col md:flex-row bg-white p-8 rounded-lg shadow-md">
          {/* Left Side: Booking Form */}
          <div className="w-full md:w-1/2 pr-4">
            <h2 className="text-2xl font-bold mb-6">Book Your Car</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Pickup Location</label>
                <input 
                  type="text" 
                  placeholder="Enter pickup location"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Pickup Date</label>
                  <input 
                    type="date" 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Pickup Time</label>
                  <input 
                    type="time" 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Drop-off Location</label>
                <input 
                  type="text" 
                  placeholder="Enter drop-off location"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">Drop-off Date</label>
                  <input 
                    type="date" 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Drop-off Time</label>
                  <input 
                    type="time" 
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Book Now
              </button>
            </form>
          </div>

          {/* Right Side: Static Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <img 
              src="https://img.freepik.com/premium-photo/modern-automobile-classic-technology-wheel-traffic_665346-119.jpg" 
              alt="Car"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Key Features Section */}
        <div className="max-w-xxl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Our Key Features</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
              <svg className="w-12 h-12 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7a4 4 0 018 0v1a4 4 0 01-8 0V7zM7 10V6a2 2 0 014 0v4M7 10h10m0 0v4a2 2 0 01-4 0v-4m4 4h2m-6 2v2M7 20h10a2 2 0 002-2V9M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="text-lg text-gray-700">Doorstep Delivery</span>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
              <svg className="w-12 h-12 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-3H8v3H7v-6h6v6zM5 12H4a2 2 0 00-2 2v3a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2zm13 0h-1a2 2 0 00-2 2v3a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2zM5 9h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2zM3 5a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"/>
              </svg>
              <span className="text-lg text-gray-700">24/7 Customer Support</span>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
              <svg className="w-12 h-12 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8a4 4 0 11-8 0 4 4 0 018 0zM8 8v2m8-2v2m-1 7a4 4 0 11-4-4 4 4 0 014 4zM5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"/>
              </svg>
              <span className="text-lg text-gray-700">Free Cancellation</span>
            </div>
            <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-md">
              <svg className="w-12 h-12 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 8a2 2 0 11-4 0 2 2 0 014 0zM5 16v-2a2 2 0 014 0v2a2 2 0 01-4 0zM5 8a2 2 0 114 0 2 2 0 01-4 0zm14 8v-2a2 2 0 00-4 0v2a2 2 0 004 0zM5 16a2 2 0 004 0v-2a2 2 0 00-4 0v2zm14-8a2 2 0 11-4 0 2 2 0 014 0zM5 4a2 2 0 00-4 0v2a2 2 0 004 0V4zM5 4h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
              </svg>
              <span className="text-lg text-gray-700">Wide Selection of Cars</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
            {/* Content Section */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side: Static Image */}
                    <div className="lg:w-1/2">
                        <img 
                            src=" https://c4.wallpaperflare.com/wallpaper/560/552/994/car-bmw-m2-headlights-wallpaper-preview.jpg" 
                            alt="Auto Car"
                            className="w-full h-full object-cover rounded-t-lg lg:rounded-t-none lg:rounded-l-lg transition-transform transform hover:scale-105 ease-in-out duration-300"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-1/2 p-8 bg-gray-100">
                        <div className="text-center lg:text-left space-y-6">
                            <h1 className="text-4xl font-extrabold text-blue-700 mb-4">Why Choose Auto Car?</h1>
                            <h2 className="text-xl font-medium text-gray-800 mb-6">The Ideal Ride for Your Adventures</h2>
                            <p className="text-base text-gray-700 mb-4 leading-relaxed">
                            Auto Car offers a top-notch experience for renting self-drive vehicles across the scenic landscapes of Kerala. Established in 1952 by the distinguished Auto Car Group, we pride ourselves on decades of excellence in the automobile industry and our commitment to unparalleled customer satisfaction.
                            </p>
                            <p className="text-base text-gray-700 mb-4 leading-relaxed">
                                With our presence in Trivandrum, Cochin, Calicut, and other key locations, we are the premier choice for travelers who wish to explore Kerala's beauty. Our diverse fleet, from compact hatchbacks to luxurious vehicles, gives you the freedom to design your perfect journey.
                            </p>
                            <p className="text-base text-gray-700 leading-relaxed">
                                As specialists in affordable rental car services, Auto Car captures Kerala's warmth and charm, allowing visitors and locals alike to travel at their own pace and experience the vibrant culture.
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* Featured Cars Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Featured Cars</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Car 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-rear-three-quarter-12.jpeg?isig=0&q=80"
                alt="Car"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">TATA HARIER</h4>
              <p className="text-xl text-blue-600">₹2000/day</p>
            </div>
            {/* Car 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg"
                alt="Car"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">MAHINDRA THAR</h4>
              <p className="text-xl text-blue-600">₹2300/day</p>
            </div>
            {/* Car 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src=" https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-front-view.jpeg?q=80"
                alt="Car"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">TOYOTA INNOVA</h4>
              <p className="text-xl text-blue-600">₹2500/day</p>
            </div>
          </div>
        </div>
      </section>
   {/* Reviews Section */}
   <section className="container mx-auto py-16 text-center">
  <h3 className="text-3xl font-bold mb-12 text-gray-900 dark:text-gray-100">What Our Customers Say</h3>
  <div className="flex flex-row justify-center space-x-8">
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <p className="text-gray-600 dark:text-gray-300 mb-4">"The rental process was seamless and the car was in excellent condition. Highly recommend for anyone in need of a reliable rental service!"</p>
      <p className="font-semibold">John Doe</p>
      <p className="text-sm text-gray-500">Frequent Traveler</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <p className="text-gray-600 dark:text-gray-300 mb-4">"Great experience from start to finish. The staff were friendly and the car exceeded my expectations. Will definitely use this service again."</p>
      <p className="font-semibold">Jane Smith</p>
      <p className="text-sm text-gray-500">Business Executive</p>
    </div>
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
      <p className="text-gray-600 dark:text-gray-300 mb-4">"Affordable rates and exceptional service. The car was clean and well-maintained. I was very pleased with the overall experience."</p>
      <p className="font-semibold">Alex Johnson</p>
      <p className="text-sm text-gray-500">Weekend Traveler</p>
    </div>
  </div>
</section>
        </div>

      </div>
    );
};

export default UserHomePage;
