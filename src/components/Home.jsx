import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCoins, FaBlog, FaMapMarkedAlt, FaPlaneDeparture, FaExclamationCircle, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('session'));

  const handleLogout = () => {
    localStorage.removeItem('session');
    navigate('/');
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-white">
            Traveller Connect
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center text-red-600 hover:text-red-800 dark:hover:text-red-400 transition"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Hello, {user?.email.split('@')[0]} 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Where are you heading today?</p>
          <img
            src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Travel"
            className="mt-6 rounded-lg shadow-lg mx-auto w-full max-w-md"
          />
        </motion.div>

        {/* Navigation Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 gap-6"
        >
          {/* Travel Feed */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/feed')}
            className="flex items-center p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <FaPlaneDeparture className="text-blue-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Travel Feed</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">Share your journey and see others’ updates.</p>
            </div>
          </motion.div>

          {/* Coins */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/coins')}
            className="flex items-center p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <FaCoins className="text-yellow-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Coins & Rewards</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">Track your earned virtual coins.</p>
            </div>
          </motion.div>

          {/* Escalations */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/escalations')}
            className="flex items-center p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <FaExclamationCircle className="text-red-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Escalations</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">Raise a query or issue to the agency.</p>
            </div>
          </motion.div>

          {/* Itinerary */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/itinerary')}
            className="flex items-center p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <FaMapMarkedAlt className="text-green-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Itinerary & Driver Info</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">View your travel plan and driver details.</p>
            </div>
          </motion.div>

          {/* Blogs */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => navigate('/blogs')}
            className="flex items-center p-5 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <FaBlog className="text-pink-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Blogs & Stories</h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">Explore travel blogs and inspiring stories.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
