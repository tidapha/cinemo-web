import { type Movie } from '../types/Movie';

interface Props {
  movie: Movie;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
  goBack: () => void;
}

export default function MovieDetail({ movie, isFavorite, toggleFavorite, goBack }: Props) {
  return (
    <div className="p-4 border rounded shadow">
      <button onClick={goBack} className="mb-4 text-blue-500">← Back</button>
      <img src={movie.poster_url} alt={movie.title_en} className="w-full h-full object-cover mb-4" />
      <h2 className="text-2xl font-bold mb-2">{movie.title_th}</h2>
      <p className="text-gray-600 mb-4">Category: {movie.title_en}</p>
      <p className="text-gray-500 mb-4">Release Date: {movie.release_date}</p>
      <button
        onClick={() => toggleFavorite(movie.id)}
        className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
      </button>
    </div>
  );
}
