import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { motion } from 'framer-motion';

import { FaCheese, FaChessQueen } from 'react-icons/fa';
import BtnPrimary from './BtnPrimary';

const navLinks = [
  {
    name: 'Pricing',
    href: 'pricing',
  },
  {
    name: 'Help',
    href: 'help',
  },
  {
    name: 'Twitter',
    href: '#',
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(true); // menu toggle

  return (
    <header className="my-4 flex justify-between">
      <Link
        href="/"
        className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-3xl font-extrabold text-transparent"
      >
        Studio
      </Link>
      <div className="my-auto flex gap-10">
        <nav
          className={
            toggle
              ? 'my-auto flex items-center gap-10 max-md:hidden '
              : ' absolute left-0 right-0 top-20 z-10 my-auto hidden h-3/4 flex-col items-center gap-10 bg-black pt-10 shadow-sm shadow-white max-md:flex'
          }
          
        >
          {navLinks.map((e) => (
            <Link
              key={e.name}
              to={e.href}
              spy={true}
              smooth={true}
              offset={0}
              duration={800}
              className="cursor-pointer select-none text-slate-400 duration-300 ease-linear hover:text-white hover:transition"
            >
              {e.name}
            </Link>
          ))}
          <BtnPrimary title="Download" className="select-none" />
        </nav>
      </div>
      <motion.button
        className="hidden max-md:block"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <FaCheese
          size={30}
          color="#faed33e1"
          onClick={() => setToggle(!toggle)}
          className="hidden max-md:block"
        />
      </motion.button>
    </header>
  );
};

export default Header;
