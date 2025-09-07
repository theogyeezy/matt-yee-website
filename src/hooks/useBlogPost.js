import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://your-api.execute-api.region.amazonaws.com/prod';

export const useBlogPost = (id) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/posts/${id}`);
        setPost(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching post:', err);
        if (err.response?.status === 404) {
          setError('Post not found');
        } else {
          setError(err.message);
        }
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, loading, error };
};