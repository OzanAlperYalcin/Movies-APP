import { FaPlayCircle } from 'react-icons/fa'

function Header() {
  return (
    <header className='bg-gradient-header fluid'>
      <div className='h-full flex justify-between items-center text-white px-5'>
        <div className="flex items-center gap-2.5">
          <FaPlayCircle size={40} />
          <h1 className='title'>Movies APP</h1>
        </div>
        <nav className='flex gap-10 tracking-wide font-semibold'>
          <p>Movies</p>
          <p>Kids</p>
          <p>Series</p>
        </nav>
      </div>
    </header>
  )
}

export default Header