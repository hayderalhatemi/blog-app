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
  const [form, setForm] = useState({ title: '', content: '' });

  // Fetch all posts on load
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setPosts(res.data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/api/posts',
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPosts([res.data, ...posts]);
      setForm({ title: '', content: '' });
    } catch {
      alert('Failed to create post. Are you logged in?');
    }
  };

  return (
    <div>
      <h2>Posts</h2>

      {token && (
        <div>
          <h3>Create Post</h3>
          <input name="title" placeholder="Title" value={form.title} onChange={handleChange} />
          <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} />
          <button onClick={handleSubmit}>Publish</button>
        </div>
      )}

      {posts.map(post => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>By {post.author.username}</small>
        </div>
      ))}
    </div>
  );
}

export default Posts;