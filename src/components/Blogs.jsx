import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaSearch } from 'react-icons/fa';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const mockBlogs = [
      {
        id: 1,
        title: 'Exploring the Alps',
        shortDesc: 'An amazing journey through the snow-capped Alps.',
        content: 'Full story about traveling across the Alps, with beautiful landscapes, hidden villages, and wonderful experiences.',
      },
      {
        id: 2,
        title: 'Desert Adventures',
        shortDesc: 'A thrilling desert safari experience.',
        content: 'We rode camels across golden dunes, camped under starry skies, and enjoyed the local culture in the heart of the desert.',
      },
      {
        id: 3,
        title: 'Island Getaway',
        shortDesc: 'Relaxing trip to tropical islands.',
        content: 'We spent days snorkeling, exploring beaches, and soaking in the sun in a perfect island paradise.',
      },
    ];
    setBlogs(mockBlogs);
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
        >
          <FaSearch className="text-gray-400 dark:text-gray-300 mr-2" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 rounded-md bg-transparent outline-none text-gray-700 dark:text-white"
          />
        </motion.div>

        {/* Blog Content */}
        {selectedBlog ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">{selectedBlog.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{selectedBlog.content}</p>
            <button
              onClick={() => setSelectedBlog(null)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Back to Blogs
            </button>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {filteredBlogs.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-500 dark:text-gray-400"
              >
                No blogs found.
              </motion.p>
            ) : (
              filteredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 flex items-center">
                    <FaBookOpen className="mr-2 text-blue-500" /> {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{blog.shortDesc}</p>
                </motion.div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
