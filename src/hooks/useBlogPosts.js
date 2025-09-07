import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://your-api.execute-api.region.amazonaws.com/prod';

export const useBlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts`);
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};