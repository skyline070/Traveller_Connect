import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCoins, FaHistory } from 'react-icons/fa';

export default function Coins() {
  const [coins, setCoins] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const coinData = JSON.parse(localStorage.getItem('coins')) || { balance: 0, history: [] };
    setCoins(coinData.balance);
    setHistory(coinData.history);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-yellow-500 mb-2 flex justify-center items-center">
            <FaCoins className="mr-2" /> Your Coins
          </h2>
          <p className="text-4xl font-extrabold text-gray-900 dark:text-white">{coins}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <FaHistory className="mr-2 text-blue-500" /> Transaction History
          </h3>
          {history.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center">No transactions yet.</p>
          ) : (
            <ul className="space-y-4">
              {history.map((item, index) => (
                <li key={index} className="flex justify-between text-gray-700 dark:text-gray-300 border-b pb-2">
                  <span>{item.type}</span>
                  <span className="font-bold text-green-500">+{item.amount}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
