import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaNewspaper, FaAward, FaGraduationCap } from 'react-icons/fa';

const HomeComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data for updates and highlights
  const updates = [
    {
      id: 1,
      title: "New Research Grant Awarded",
      date: "March 15, 2024",
      description: "Our team has been awarded a $2M grant for advanced AI research in healthcare applications.",
      link: "https://example.com/grant-details",
      category: "Research",
      icon: <FaAward className="h-6 w-6 text-blue-600" />
    },
    {
      id: 2,
      title: "International Conference Success",
      date: "March 10, 2024",
      description: "Our researchers presented groundbreaking findings at the International AI Conference 2024.",
      link: "https://example.com/conference",
      category: "Events",
      icon: <FaNewspaper className="h-6 w-6 text-blue-600" />
    },
    {
      id: 3,
      title: "New PhD Program Launch",
      date: "March 5, 2024",
      description: "We're excited to announce our new PhD program in Advanced Computing starting Fall 2024.",
      link: "https://example.com/phd-program",
      category: "Education",
      icon: <FaGraduationCap className="h-6 w-6 text-blue-600" />
    }
  ];

  const highlights = [
    {
      id: 1,
      title: "AI in Healthcare",
      date: "Feb 28, 2024",
      description: "Revolutionary approach to early disease detection using machine learning algorithms.",
      link: "https://example.com/ai-healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Quantum Computing",
      date: "Feb 15, 2024",
      description: "Breakthrough in quantum algorithm optimization for complex problem-solving.",
      link: "https://example.com/quantum-computing",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Sustainable Technology",
      date: "Jan 30, 2024",
      description: "Innovative solutions for reducing carbon footprint in data centers.",
      link: "https://example.com/sustainable-tech",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const slides = [
    {
      image: "https://i.postimg.cc/zX1hTMfT/nit-patna-003.jpg",
      title: "Advancing Research Excellence",
      description: "Join us in pushing the boundaries of knowledge and innovation"
    },
    {
      image: "https://i.postimg.cc/fyY06783/nit-patna-005.jpg",
      title: "Collaborative Innovation",
      description: "Working together to solve complex global challenges"
    },
    {
      image: "https://i.postimg.cc/h4mxzgKS/nit-patna-004.jpg",
      title: "Future of Technology",
      description: "Shaping tomorrow's solutions through cutting-edge research"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modern Highlights & Updates Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Highlights */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">📄 Highlights</h2>
            </div>
            <hr className="mb-4" />
            <div className="flex-1 overflow-y-auto max-h-96 pr-2 hide-scrollbar">
              {highlights.map((item, idx) => (
                <div key={item.id} className="flex items-center gap-4 bg-blue-50/60 rounded-xl p-4 mb-4 last:mb-0 shadow-sm hover:shadow-md transition-shadow duration-200 group">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{item.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.date}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors whitespace-nowrap self-center">Read More</a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Updates */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">🔥 Recent Updates</h2>
            </div>
            <hr className="mb-4" />
            <div className="flex-1 overflow-y-auto max-h-96 pr-2 hide-scrollbar">
              {updates.map((item, idx) => (
                <div key={item.id} className="flex items-center gap-4 bg-blue-50/60 rounded-xl p-4 mb-4 last:mb-0 shadow-sm hover:shadow-md transition-shadow duration-200 group">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{item.title}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.date}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.description}</div>
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="ml-4 px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors whitespace-nowrap self-center">View</a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Hide scrollbar but keep scrollability */}
      <style>{`
        .hide-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default HomeComponent; 