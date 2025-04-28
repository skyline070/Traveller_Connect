import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaPaperPlane } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Escalations() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [escalations, setEscalations] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('escalations')) || [];
    setEscalations(saved);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!title || !description) {
      toast.error('Title and description are required!');
      return;
    }

    const newEscalation = {
      id: Date.now(),
      title,
      description,
      image,
      status: 'Pending',
      createdAt: new Date().toLocaleString()
    };

    const updatedEscalations = [newEscalation, ...escalations];
    localStorage.setItem('escalations', JSON.stringify(updatedEscalations));
    setEscalations(updatedEscalations);

    toast.success('Escalation raised successfully!');
    setTitle('');
    setDescription('');
    setImage(null);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Raise Query Form */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-xl font-bold text-red-500 mb-4 flex items-center">
            <FaExclamationTriangle className="mr-2" /> Raise a Query
          </h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <input
            type="file"
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 mb-4"
          />
          {image && <img src={image} alt="preview" className="w-full h-40 object-cover rounded mb-4" />}
          <button
            onClick={handleSubmit}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" /> Submit Escalation
          </button>
        </motion.div>

        {/* Escalation History */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Escalation History</h3>
          {escalations.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center">No queries raised yet.</p>
          ) : (
            <ul className="space-y-6">
              {escalations.map((esc) => (
                <li key={esc.id} className="border-b pb-4">
                  <h4 className="text-lg font-bold text-gray-700 dark:text-white mb-2">{esc.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{esc.description}</p>
                  {esc.image && <img src={esc.image} alt="escalation" className="w-full h-32 object-cover rounded mb-2" />}
                  <p className="text-sm text-gray-400">Status: <span className="font-semibold text-yellow-500">{esc.status}</span></p>
                  <p className="text-xs text-gray-400">Raised at: {esc.createdAt}</p>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
