import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRegHeart, FaRegCommentDots, FaPlusCircle, FaEdit, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';

export default function Feed() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState({});
  const [editingPostId, setEditingPostId] = useState(null);
  const [editedCaption, setEditedCaption] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(saved);
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const createPost = () => {
    const user = JSON.parse(localStorage.getItem('session'));
    if (!caption || !image) {
      toast.error('Caption and image required!');
      return;
    }

    const newPost = {
      id: Date.now(),
      user: user.email,
      image,
      caption,
      likes: 0,
      comments: []
    };

    const updatedPosts = [newPost, ...posts];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);

    const coinData = JSON.parse(localStorage.getItem('coins')) || { balance: 0, history: [] };
    if (coinData.balance < 1000) {
      coinData.balance += 100;
      coinData.history.push({ type: 'Post Created', amount: 100, date: new Date().toLocaleString() });
      localStorage.setItem('coins', JSON.stringify(coinData));
    }

    toast.success('Post created successfully!');
    setCaption('');
    setImage(null);
  };

  const handleLike = (id) => {
    const updated = posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post);
    setPosts(updated);
    localStorage.setItem('posts', JSON.stringify(updated));
    toast.success('You liked the post ❤️');
  };
  

  const handleComment = (id) => {
    if (!commentText[id]) return;

    const updated = posts.map(post => {
      if (post.id === id) {
        return { ...post, comments: [...post.comments, commentText[id]] };
      }
      return post;
    });

    setPosts(updated);
    setCommentText(prev => ({ ...prev, [post.id]: '' }));
    localStorage.setItem('posts', JSON.stringify(updated));
  };

  const startEditing = (id, currentCaption) => {
    setEditingPostId(id);
    setEditedCaption(currentCaption);
  };

  const saveEditedCaption = (id) => {
    let updated = posts.map(post =>
      post.id === id ? { ...post, caption: editedCaption, edited: true } : post
    );
    setPosts(updated);
    localStorage.setItem('posts', JSON.stringify(updated));
    setEditingPostId(null);
    toast.success('Caption updated!');
  
    // Automatically remove "edited" badge after 5 seconds
    setTimeout(() => {
      updated = updated.map(post =>
        post.id === id ? { ...post, edited: false } : post
      );
      setPosts(updated);
      localStorage.setItem('posts', JSON.stringify(updated));
    }, 5000); // 5 seconds
  };
  

  const deletePost = (id) => {
    const updated = posts.filter(post => post.id !== id);
    setPosts(updated);
    localStorage.setItem('posts', JSON.stringify(updated));
    toast.success('Post deleted!');
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Post Form */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <FaPlusCircle className="mr-2 text-blue-600" /> Create a Post
          </h2>
          <input
            type="file"
            onChange={handleImageUpload}
            className="mb-4 block w-1/3 text-sm px-4 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600"
          />
          {image && <img src={image} alt="preview" className="w-full h-48 object-cover rounded mb-4" />}
          <textarea
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white mb-4"
          ></textarea>
          <button
            onClick={createPost}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg"
          >
            Post
          </button>
        </motion.div>

        {/* Posts List */}
        {posts.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400"
          >
            No posts yet. Create your first post!
          </motion.p>
        ) : (
          posts.map(post => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 mb-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4 justify-between">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="user"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <h4 className="font-bold text-gray-800 dark:text-white">{post.user}</h4>
                </div>

                {/* Edit and Delete Buttons */}
                {post.user === JSON.parse(localStorage.getItem('session'))?.email && (
                <div className="flex space-x-2">
                  <button
                  onClick={() => startEditing(post.id, post.caption)}
                  className="text-blue-500 hover:text-blue-700"
                  >
                    <FaEdit />
                    </button>
                    <button
                    onClick={() => deletePost(post.id)}
                    className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                      </button>
                      </div>
                    )}
               </div>

              <img src={post.image} alt="Post" className="w-full h-60 object-cover rounded mb-4" />

              {editingPostId === post.id ? (
                <>
                  <textarea
                    value={editedCaption}
                    onChange={(e) => setEditedCaption(e.target.value)}
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white mb-2"
                  />
                  <button
                    onClick={() => saveEditedCaption(post.id)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded-lg"
                  >
                    Save
                  </button>
                </>
              ) : (
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {post.caption}
                  {post.edited && (
                    <span className="ml-2 px-2 py-0.5 text-xs bg-yellow-300 text-black rounded-full">
                      Edited
                      </span>
                    )}
                    </p>
                  )}

              <div className="flex items-center justify-between">
              <motion.button
              whileTap={{ scale: 1.3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              onClick={() => handleLike(post.id)}
              className="flex items-center text-red-500 hover:text-red-700"
              >
                <FaRegHeart className="mr-1" /> {post.likes} Likes
                </motion.button>
              </div>

              {/* Comment Input */}
              <div className="mt-4">
                <div className="flex w-1/2">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={commentText[post.id] || ''}
                    onChange={(e) =>
                      setCommentText(prev => ({ ...prev, [post.id]: e.target.value }))
                    }
                    className="flex-1 p-2 rounded-l-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    onClick={() => handleComment(post.id)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-r-lg"
                  >
                    <FaRegCommentDots />
                  </button>
                </div>

                {/* Show Comments */}
                <ul className="mt-2 space-y-2">
                  {post.comments.map((c, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 text-sm">• {c}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
