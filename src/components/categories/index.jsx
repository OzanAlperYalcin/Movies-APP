import Link from 'next/link'

function Categories({ categories }) {

  return (
    <div className='flex items-center justify-around h-[72px] gap-10 overflow-scroll'>
      {categories.map((category, i) => (
        <Link
        href={(category.id).toString()}
        className=' flex-shrink-0 h-[calc(100%_-_1rem)] w-60 flex justify-center items-center border border-zinc-600 rounded-md bg-black hover:bg-white/10 hover:scale-105 transition-all'
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
}

export default Categories