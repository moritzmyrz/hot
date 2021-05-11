import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center h-20 px-5 bg-white mx-auto my-2 rounded-3xl">
        <div className="flex flex-row items-center h-full">
          <Image src="/logo.png" width={60} height={60} layout="fixed" />
          <p className="text-3xl font-bold font-gotham">Hot</p>
        </div>
        <div className="flex space-x-5 font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-blue-200 to-red-600">
          <Link href="/">
            <a>Hjem</a>
          </Link>
          <Link href="/posts">
            <a>Poster</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
