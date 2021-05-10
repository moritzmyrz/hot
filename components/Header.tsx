import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="flex flex-row items-center h-20 px-5 bg-white mx-auto my-2 rounded-3xl">
        <Image src="/logo.png" width={60} height={60} layout="fixed" />
        <p className="text-3xl font-bold font-gotham">Hot</p>
      </div>
    </header>
  );
};

export default Header;
