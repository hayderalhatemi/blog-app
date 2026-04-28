import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="/" element={<div className="page"><h1>Blog App</h1></div>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/posts' element={<Posts />} />
    </Routes>
    </>
  );
}

export default App;