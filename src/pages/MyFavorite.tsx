import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import { type Movie } from '../types/Movie';
import MovieDetail from './MovieDetail';

interface Props {
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export default function MyFavorite({ favorites, toggleFavorite }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetchMovies().then(setMovies).catch(console.error);
  }, []);

  const favoriteMovies = movies.filter(m => favorites.includes(m.id));

  if (selectedMovie) {
    return (
      <MovieDetail
        movie={selectedMovie}
        isFavorite={favorites.includes(selectedMovie.id)}
        toggleFavorite={toggleFavorite}
        goBack={() => setSelectedMovie(null)}
      />
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">My Favorite Movies</h2>
      {favoriteMovies.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favoriteMovies.map((movie) => (
            <div
              key={movie.id}
              className="border rounded p-4 shadow cursor-pointer hover:bg-gray-100"
              onClick={() => setSelectedMovie(movie)}
            >
              <img src={movie.poster_url} alt={movie.title_en} className="w-full h-40 object-cover mb-2" />
              <h3 className="text-lg font-semibold">{movie.title_th}</h3>
              <p className="text-sm text-gray-500">{movie.title_en}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
