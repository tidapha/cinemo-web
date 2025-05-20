import { useNavigate } from 'react-router-dom';

export default function MenuBar({ onLogout }: { onLogout: () => void }) {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col p-6 space-y-6">
      <h1 className="text-2xl font-bold">Cinemo</h1>
      <button onClick={() => navigate('/')} className="text-left cursor-pointer hover:opacity-70">Movie Finder</button>
      <button onClick={() => navigate('/favorites')} className="text-left cursor-pointer hover:opacity-70">My Favorite</button>
      <button onClick={onLogout} className="mt-auto text-left text-red-400 cursor-pointer hover:opacity-70">Logout</button>
    </div>
  );
}
