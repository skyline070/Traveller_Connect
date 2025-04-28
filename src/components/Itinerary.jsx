import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCar, FaTicketAlt, FaHotel } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Itinerary() {
  const [itinerary, setItinerary] = useState([]);
  const [driverInfo, setDriverInfo] = useState({});

  useEffect(() => {
    // Mock static itinerary data
    const mockItinerary = [
      {
        day: 1,
        hotel: 'Hotel Paradise',
        inclusions: ['Breakfast', 'City Tour'],
        exclusions: ['Lunch', 'Dinner'],
      },
      {
        day: 2,
        hotel: 'Sea View Resort',
        inclusions: ['Breakfast', 'Beach Visit'],
        exclusions: ['Drinks', 'Personal Expenses'],
      },
    ];

    const mockDriver = {
      name: 'John Doe',
      phone: '+1234567890',
      carNumber: 'XYZ 1234',
      photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };

    setItinerary(mockItinerary);
    setDriverInfo(mockDriver);
  }, []);

  const handleDownload = (type) => {
    toast.success(`${type} download simulated!`);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Itinerary Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> Itinerary Plan
          </h2>
          {itinerary.map((item, idx) => (
            <div key={idx} className="border-b border-gray-300 dark:border-gray-600 pb-4 mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 flex items-center">
                <FaHotel className="mr-2 text-purple-500" /> Day {item.day}: {item.hotel}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                <span className="font-semibold">Inclusions:</span> {item.inclusions.join(', ')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                <span className="font-semibold">Exclusions:</span> {item.exclusions.join(', ')}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Driver Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-blue-600 mb-4 flex items-center">
            <FaCar className="mr-2" /> Today's Driver
          </h2>
          <div className="flex items-center space-x-4">
            <img src={driverInfo.photo} alt="Driver" className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">{driverInfo.name}</h4>
              <p className="text-gray-500 dark:text-gray-300 text-sm">Phone: {driverInfo.phone}</p>
              <p className="text-gray-500 dark:text-gray-300 text-sm">Car No.: {driverInfo.carNumber}</p>
            </div>
          </div>
        </motion.div>

        {/* Ticket Download Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
        >
          <h2 className="text-2xl font-bold text-pink-500 mb-6 flex justify-center items-center">
            <FaTicketAlt className="mr-2" /> Tickets & Vouchers
          </h2>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => handleDownload('Ticket')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-lg"
            >
              Download Ticket
            </button>
            <button
              onClick={() => handleDownload('Voucher')}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 rounded-lg"
            >
              Download Voucher
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
