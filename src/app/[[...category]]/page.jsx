import { fetchPopularMovies, fetchTopRatedMovies, fetchGenres, fetchMoviesByGenre } from '@/services/movie'
import HomeContainer from '@/containers/home'

export default async function Home({ params }) {
  const promises = [
    fetchPopularMovies(),
    fetchTopRatedMovies(),
    fetchGenres()
  ]

  if (params.category) {
    promises.push(fetchMoviesByGenre(params.category))
  }

  const [popularMovies, topRatedMovies, genres, moviesByGenre] = await Promise.all(promises)

  return (
    <HomeContainer
      genres={genres}
      category={params.category}
      moviesByGenre={moviesByGenre}
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
    />
  )
}
