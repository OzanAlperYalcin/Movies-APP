import Link from 'next/link'
import Image from 'next/image'

function Movies({ movies, title = 'Movies' }) {
  return (
    <div className='grid gap-10 my-9'>
      <h2 className='title'> {title} </h2>
      <div className='flex flex-wrap justify-evenly gap-5'>
        {movies.map((movie, i) => (
          <div className='flex-shrink-0 relative overflow-hidden rounded-xl hover:scale-110 transition-all h-80 w-52 border border-zinc-700'>
            <Link
              href={`/movie/${movie.id}`}
            >
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Movies