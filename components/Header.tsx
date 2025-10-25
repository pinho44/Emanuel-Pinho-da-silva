import React from 'react';
import { LogoIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <LogoIcon className="w-8 h-8 text-teal-500" />
        <h1 className="ml-3 text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600">
          Diva Esmalteria
        </h1>
      </div>
    </header>
  );
};

export default Header;