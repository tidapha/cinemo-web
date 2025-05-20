import axios from 'axios';
import { type Movie } from '../types/Movie';

export async function fetchMovies(): Promise<Movie[]> {
  const res = await axios.get('http://localhost:5000/api/movies');
  return res.data.movies;
}
