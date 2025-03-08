"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const cityData = [
  { name: "Ikeja", properties: 120, coords: [6.6018, 3.3515] }, // Ikeja, Lagos
  { name: "Lekki", properties: 85, coords: [6.4654, 3.4064] }, // Lekki, Lagos
  { name: "Abeokuta", properties: 95, coords: [7.1505, 3.3466] }, // Abeokuta, Ogun
  { name: "Ota", properties: 60, coords: [6.6924, 3.2346] }, // Ota, Ogun
];

const ExploreCities = () => {
  return (
    <div className="bg-[#f8f9fa] py-16 px-6 md:px-16 lg:px-32">
      <h2
        className="text-4xl font-bold text-center text-[#1a1a1a] mb-10"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        Explore Popular Cities
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cityData.map((city, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {/* City Name & Property Count */}
            <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl shadow-md flex items-center gap-2">
              <MapPin size={18} className="text-[#002147]" />
              <div>
                <h3 className="text-lg font-semibold text-[#002147]">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {city.properties} properties
                </p>
              </div>
            </div>

            {/* Leaflet Map */}
            <MapContainer
              center={city.coords}
              zoom={13}
              style={{ height: "200px", width: "100%" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={city.coords}>
                <Popup>{city.name}</Popup>
              </Marker>
            </MapContainer>

            {/* Explore Button */}
            <div className="p-4 text-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="w-full bg-[#28a745] text-white py-2 rounded-xl transition-all hover:bg-[#218838]"
              >
                Explore {city.name}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCities;
