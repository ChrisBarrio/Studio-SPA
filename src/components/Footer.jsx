import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="my-20 grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-4">
      <div>
        <Link
          to="hero"
          spy={true} smooth={true} offset={0} duration={800}
          className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-lg font-extrabold text-transparent"
        >
          Screen Studio
        </Link>
        <p className="text-xs text-slate-400">
          © 2023 chbwdev. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col gap-2 text-slate-400">
        <Link to="pricing" spy={true} smooth={true} offset={0} duration={800}>
          Pricing
        </Link>
        <Link to="help" spy={true} smooth={true} offset={0} duration={800}>
          Help
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-slate-400">
        <Link href="#">Follow me on Twitter</Link>
        <Link href="#">Feedback</Link>
        <Link href="#">Get it touch</Link>
      </div>
    </footer>
  );
};

export default Footer;
