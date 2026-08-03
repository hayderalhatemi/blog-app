import { Link } from 'react-router-dom'

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <span className="hero-badge">Full-Stack Blog Platform</span>

        <h1>Share ideas. Discover stories.</h1>

        <p>
          A simple blog application where users can register, publish posts, and
          manage their own content.
        </p>

        <div className="hero-actions">
          <Link to="/posts" className="button-link primary-link">
            View Posts
          </Link>

          <Link to="/register" className="button-link secondary-link">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
