import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-[100] top-0 left-0 pointer-events-none">
      {/* Hanging Sign - Top Left (Global Nav Logo) */}
      <Link to="/" className="absolute top-[0] left-[8%] md:left-[10%] flex flex-col items-center pointer-events-auto cursor-pointer transition-transform hover:-translate-y-1">
        <div className="flex justify-between w-[70%] h-[26px] md:h-[34px] xl:h-[42px]">
           <div className="w-[4px] h-full bg-navy"></div>
           <div className="w-[4px] h-full bg-navy"></div>
        </div>
        <div className="border-[4px] px-3 md:px-4 py-1.5 md:py-2 font-black text-lg md:text-2xl tracking-tighter shadow-sm font-sans border-navy bg-cream text-navy">
           seventy two<span className="font-serif italic font-normal ml-1">mg.</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
