import Featured from '@/components/featured'
import Categories from '@/components/categories'
import Movies from '@/components/movies'

function HomeContainer({ popularMovies, topRatedMovies, genres, moviesByGenre, category }) {
    return (
        <>
            <Featured movie={topRatedMovies[Math.floor(Math.random() * topRatedMovies.length)]} />
            <Categories categories={genres} />
            {moviesByGenre &&
                <Movies movies={moviesByGenre.slice(0, 18)} title={genres.find(genre => genre.id == category).name} />
            }
            <Movies movies={topRatedMovies.slice(0, 18)} title='Top Movies' />
            <Movies movies={popularMovies.slice(0, 18)} />
        </>
    )
}

export default HomeContainer