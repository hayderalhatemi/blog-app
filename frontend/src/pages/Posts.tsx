import { useEffect, useState } from 'react'
import api from '../api/axios'
import { useAuth } from '../context/useAuth'

interface Post {
  _id: string
  title: string
  content: string
  author: { _id: string; username: string }
}

function Posts() {
  const { token, userId } = useAuth()
  const [posts, setPosts] = useState<Post[]>([])
  const [form, setForm] = useState({ title: '', content: '' })

  // Fetch all posts on load
  useEffect(() => {
    api.get('/api/posts').then((res) => setPosts(res.data))
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await api.post('/api/posts', form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setPosts([res.data, ...posts])
      setForm({ title: '', content: '' })
    } catch {
      alert('Failed to create post. Are you logged in?')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/api/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setPosts(posts.filter((p) => p._id !== id))
    } catch {
      alert('Failed to delete post')
    }
  }

  return (
    <main className="posts-page">
      <section className="posts-container">
        <div className="posts-header">
          <div>
            <span className="posts-badge">Community Posts</span>

            <h1>Latest Posts</h1>

            <p>Read ideas from the community or publish your own post.</p>
          </div>
        </div>

        {token && (
          <form className="create-post" onSubmit={handleSubmit}>
            <div className="section-heading">
              <h2>Create a new post</h2>

              <p>Share something useful, interesting, or inspiring.</p>
            </div>

            <input
              name="title"
              placeholder="Post title"
              value={form.title}
              onChange={handleChange}
              required
            />

            <textarea
              name="content"
              placeholder="Write your post..."
              value={form.content}
              onChange={handleChange}
              rows={5}
              required
            />

            <button type="submit">Publish</button>
          </form>
        )}

        <section className="posts-list">
          {posts.length === 0 ? (
            <div className="empty-state">
              <h2>No posts yet</h2>

              <p>Be the first person to publish something.</p>
            </div>
          ) : (
            posts.map((post) => (
              <article key={post._id} className="post-card">
                <div className="post-card-header">
                  <div>
                    <h2>{post.title}</h2>

                    <span className="post-author">
                      By {post.author.username}
                    </span>
                  </div>

                  {userId === post.author._id && (
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(post._id)}
                    >
                      Delete
                    </button>
                  )}
                </div>

                <p>{post.content}</p>
              </article>
            ))
          )}
        </section>
      </section>
    </main>
  )
}

export default Posts
