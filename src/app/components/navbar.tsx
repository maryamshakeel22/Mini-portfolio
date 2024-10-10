import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='sticky top-0'>
        <header className="text-black-600 body-font bg-cyan-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">Maryam</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#Hero" className="mr-6 hover:text-slate-700 text-2xl">Home</Link>
            <Link href="#About" className="mr-6 hover:text-slate-700 text-2xl">About</Link>
            <Link href="#Contact" className="mr-6 hover:text-slate-700 text-2xl">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-cyan-500 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-200 rounded text-base mt-4 md:mt-0">
      <a href="#Contact">Contact</a>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>
    </div>
  )
}

export default Navbar