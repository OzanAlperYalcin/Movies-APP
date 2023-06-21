import Image from 'next/image'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa'

function Featured({ movie, isTruncate = true }) {

    const { poster_path, title, overview } = movie

    return (
        <section>
            <div className='absolute inset-0 bg-gradient-back -z-40' />
            <Image
                fill
                unoptimized
                alt={title}
                style={{ objectFit: 'fill', zIndex: -50 }}
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
            />
            <div className='grid gap-5 my-14 px-5'>
                <h1 className='text-7xl font-semibold tracking-tight'>{title}</h1>
                <p className={`w-full md:w-1/2 ${isTruncate ? 'line-clamp-2 leading-8':''}`}>{overview}</p>
                <div className='flex items-center gap-10'>
                    <Link
                        href='/'
                        className='h-full flex justify-center items-center bg-zinc-50 hover:bg-zinc-200 w-[300px] rounded-xl text-black font-semibold text-lg transition-all'
                    >
                        Play
                    </Link>
                    <button className='flex items-center justify-center border border-zinc-50 h-16 w-16 rounded-full'>
                        <FaPlus />
                    </button>
                </div>
            </div>
        </section >
    )
}

export default Featured