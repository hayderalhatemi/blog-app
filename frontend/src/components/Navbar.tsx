import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <Link to="/" className='navbar-brand'>
          Blog App
        </Link>

        <div className="navbar-links">
          <Link to="/posts">Posts</Link>

          {token ? (
            <button className='logout-button' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register" className='register-link'>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;