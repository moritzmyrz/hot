import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-between items-center h-20 px-5 mb-2 bg-white mx-auto border-b-2 border-gray-300">
        <div className="flex flex-row items-center h-full">
          <Image src="/logo.png" width={60} height={60} layout="fixed" />
          <p className="text-3xl font-bold font-gotham">Hot</p>
        </div>
        <div className="flex space-x-5 font-semibold text-2xl text-black">
          <Link href="/">
            <a className="hover:text-gray-400">Hjem</a>
          </Link>
          <Link href="/posts">
            <a className="hover:text-gray-400">Poster</a>
          </Link>
          <Link href="/posts">
            <a className="hover:text-gray-400">Ansatte</a>
          </Link>
          <Link href="/posts">
            <a className="hover:text-gray-400">Kontakt Oss</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
