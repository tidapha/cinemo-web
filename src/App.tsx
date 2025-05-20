import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import MovieFinder from './pages/MovieFinder';
import MyFavorite from './pages/MyFavorite';
import { useState } from 'react';
import MenuBar from './components/MenuBar';

function App() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [favorites, setFavorites] = useState<string[]>(JSON.parse(localStorage.getItem('favorites') || '[]'));

  const login = (username: string) => {
    localStorage.setItem('user', username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const toggleFavorite = (id: string) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  if (!user) return <Login onLogin={login} />;

  return (
    <Router>
      <div className="flex h-screen">
        <MenuBar onLogout={logout} />
        <div className="flex-1 overflow-auto p-4">
          <Routes>
            <Route path="/" element={<MovieFinder favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="/favorites" element={<MyFavorite favorites={favorites} toggleFavorite={toggleFavorite} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
