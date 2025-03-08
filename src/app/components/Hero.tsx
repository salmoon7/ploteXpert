"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaMapMarkerAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { Home, MapPin, Building } from "lucide-react";

const propertyOptions = [
  {
    name: "Land",
    bg: "bg-green-800",
    image: "/land.jpg",
    location: "Ikoyi, Lagos",
    price: "₦100,000,000",
  },
  {
    name: "House",
    bg: "bg-blue-700",
    image: "/house.png",
    location: "Lekki, Lagos",
    price: "₦50,000,000",
  },
  {
    name: "Apartment",
    bg: "bg-purple-700",
    image: "/apartment.jpg",
    location: "Victoria Island, Lagos",
    price: "₦80,000,000",
  },
];

const getIcon = (name: any) => {
  switch (name) {
    case "Land":
      return <MapPin size={20} />;
    case "House":
      return <Home size={20} />;
    case "Apartment":
      return <Building size={20} />;
    default:
      return <Home size={20} />;
  }
};

export default function HeroSection() {
  const [selectedProperty, setSelectedProperty] = useState(propertyOptions[0]);
  const [hydrated, setHydrated] = useState(false);
  const discoverRef = useRef<HTMLDivElement | null>(null);
  const [currentLocation, setCurrentLocation] = useState(
    "Fetching location..."
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select a city");

  const locations = {
    Lagos: ["Ikoyi", "Lekki"],
    Ogun: ["Abeokuta", "Sagamu"],
    Oyo: ["Ibadan", "Ogbomosho"],
  };

  useEffect(() => {
    setHydrated(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setCurrentLocation(
              data.address.city || data.address.town || "Unknown Location"
            );
          } catch (error) {
            setCurrentLocation("Location unavailable");
          }
        },
        () => setCurrentLocation("Location unavailable")
      );
    } else {
      setCurrentLocation("Geolocation not supported");
    }
  }, []);

  if (!hydrated) return null;

  const scrollToDiscover = () => {
    discoverRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nextProperty = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyOptions.length);
  };

  const prevProperty = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + propertyOptions.length) % propertyOptions.length
    );
  };

  return (
    <>
      <section className="w-full  flex flex-col md:flex-row gap-2 items-center justify-between p-6 md:px-16 transition-all duration-500 mt-[2rem] ">
        <div className="md:w-1/2 text-left space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-dark leading-tight"
          >
            Secure Your Land <br /> With Confidence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 font-sans"
          >
            Verify land ownership & legitimacy in seconds.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#4f7b3d] transition"
            onClick={scrollToDiscover}
          >
            Discover Now
          </motion.button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex flex-col items-center relative">
          {/* Property Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative w-full max-w-md h-screen md:h-96 rounded-2xl overflow-hidden shadow-xl md:mt-20"
          >
            <Image
              src={selectedProperty.image}
              alt={selectedProperty.name}
              width={400}
              height={300}
              className="rounded-2xl object-cover w-full h-full"
              priority
            />

            {/* Property Selector Overlay */}
            <div className="absolute top-20 right-15  bg-white p-3 rounded-full shadow-lg flex items-center gap-2 ">
              {propertyOptions.map((property) => (
                <button
                  key={property.name}
                  className={`px-4 py-2 rounded-full transition ${
                    selectedProperty.name === property.name
                      ? "text-white bg-green-600"
                      : "bg-gray-300 text-black"
                  }`}
                  onClick={() => setSelectedProperty(property)}
                >
                  {/* Show text on large screens, only icons on small screens */}
                  <span className="hidden sm:block">{property.name}</span>
                  <span className="sm:hidden">{getIcon(property.name)}</span>
                </button>
              ))}
            </div>

            {/* Card Overlay */}
            <div className="absolute bottom-22 right-15 bg-white bg-opacity-80 p-4 rounded-2xl shadow-lg flex flex-col w-[65%]">
              <div className="relative inline-block text-left">
                {/* Button to toggle dropdown */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="mt-2 bg-transparent border-2 border-softCreamy text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:opacity-80 transition"
                >
                  {selectedCity === "Select a city" ? "Location" : selectedCity}
                  <FaChevronDown
                    size={18}
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {Object.entries(locations).map(([state, cities]) => (
                      <div key={state} className="p-2">
                        <p className="text-gray-600 font-semibold">{state}</p>
                        {cities.map((city) => (
                          <button
                            key={city}
                            onClick={() => {
                              setSelectedCity(city);
                              setIsOpen(false);
                            }}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            {city}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                className="mt-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 transition"
                onClick={scrollToDiscover}
              >
                Discover
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discover Section */}
      <section
        ref={discoverRef}
        className="w-full min-h-screen p-10 bg-gray-100"
      >
        <div className="flex items-center justify-between  gap-4 mb-8">
          <h2 className="text-4xl font-serif font-bold">DISCOVER</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="border-2 rounded-full p-8">
              <FaMapMarkerAlt className="text-black  text-2xl" />
            </div>
            <p className="text-lg text-gray-700">{currentLocation}</p>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            className="absolute left-0 bg-gray-200 p-3 rounded-full"
            onClick={prevProperty}
          >
            <FaArrowLeft className="text-gray-600" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {propertyOptions
              .slice(currentIndex, currentIndex + 3)
              .map((property, index) => (
                <div
                  key={index}
                  className="bg-white p-6 shadow-lg rounded-lg text-center"
                >
                  <Image
                    src={property.image}
                    alt={property.name}
                    width={300}
                    height={200}
                    className="rounded-lg"
                  />
                  <h3 className="text-xl font-semibold mt-4">
                    {property.name}
                  </h3>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-gray-800 font-bold">{property.price}</p>
                  <button className="mt-3 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
                    Verify Property
                  </button>
                </div>
              ))}
          </div>

          <button
            className="absolute right-0 bg-gray-200 p-3 rounded-full"
            onClick={nextProperty}
          >
            <FaArrowRight className="text-gray-600" />
          </button>
        </div>
      </section>
    </>
  );
}
