import { useState } from "react";
import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='header relative'>
      <NavLink to='/' onClick={closeMenu}>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>

      {/* Hamburger Icon - visible on small screens */}
      <button
        className='md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5'
        onClick={toggleMenu}
        aria-label='Toggle menu'
      >
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop Navigation - hidden on small screens */}
      <nav className='hidden md:flex text-base gap-7'>
        <NavLink to='/' style={({ isActive }) => isActive ? { color: '#4ade80', fontWeight: 'bold' } : { color: '#111827' }}>
          Home
        </NavLink>
        <NavLink to='/about' style={({ isActive }) => isActive ? { color: '#4ade80', fontWeight: 'bold' } : { color: '#111827' }}>
          About
        </NavLink>
        <NavLink to='/projects' style={({ isActive }) => isActive ? { color: '#4ade80', fontWeight: 'bold' } : { color: '#111827' }}>
          Projects
        </NavLink>
        <NavLink to='/blog' style={({ isActive }) => isActive ? { color: '#4ade80', fontWeight: 'bold' } : { color: '#111827' }}>
          Blog
        </NavLink>
        <NavLink to='/contact' style={({ isActive }) => isActive ? { color: '#4ade80', fontWeight: 'bold' } : { color: '#111827' }}>
          Contact
        </NavLink>
      </nav>

      {/* Mobile Navigation - visible when menu is open */}
      <nav className={`md:hidden absolute top-20 right-2 bg-white shadow-lg transition-all duration-300 z-50 rounded-lg w-48 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className='flex flex-col py-2'>
          <NavLink 
            to='/' 
            className={({ isActive }) => `px-4 py-2 text-base rounded-lg mx-1 ${isActive ? "font-bold text-green-400 bg-green-100" : "font-normal text-black hover:bg-gray-100"}`}
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to='/about' 
            className={({ isActive }) => `px-4 py-2 text-base rounded-lg mx-1 ${isActive ? "font-bold text-green-400 bg-green-100" : "font-normal text-black hover:bg-gray-100"}`}
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            to='/projects' 
            className={({ isActive }) => `px-4 py-2 text-base rounded-lg mx-1 ${isActive ? "font-bold text-green-400 bg-green-100" : "font-normal text-black hover:bg-gray-100"}`}
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink 
            to='/blog' 
            className={({ isActive }) => `px-4 py-2 text-base rounded-lg mx-1 ${isActive ? "font-bold text-green-400 bg-green-100" : "font-normal text-black hover:bg-gray-100"}`}
            onClick={closeMenu}
          >
            Blog
          </NavLink>
          <NavLink 
            to='/contact' 
            className={({ isActive }) => `px-4 py-2 text-base rounded-lg mx-1 ${isActive ? "font-bold text-green-400 bg-green-100" : "font-normal text-black hover:bg-gray-100"}`}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;