import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Navbar from './components/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Blog App</h1>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/posts' element={<Posts />} />
    </Routes>
  );
}

export default App;