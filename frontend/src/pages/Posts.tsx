import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: { username: string };
}

function Posts() {
  const { token } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState({ title: '', content: ''});

   // Fetch all posts on load
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
}