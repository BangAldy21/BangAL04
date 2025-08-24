
import React from 'react'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-neutral-900/80 backdrop-blur-md shadow-glow z-50">
      <div className="flex items-center space-x-2">
        <img src="/src/assets/logo.png" alt="logo" className="w-10 h-10 rounded-full" />
        <span className="text-xl font-bold text-purple-400">My Portfolio</span>
      </div>
      <ul className="flex space-x-6 text-gray-300">
        <li><a href="#hero" className="hover:text-purple-400">Home</a></li>
        <li><a href="#about" className="hover:text-purple-400">About</a></li>
        <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
      </ul>
    </nav>
  )
}
