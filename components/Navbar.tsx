import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import LoginLink from './LoginLink';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between h-28'>
      <div className='hidden lg:flex lg:flex-1 lg:gap-3'>
        <Image src="/facebook.svg" alt="facebook icon" width={24} height={24} />
        <Image src="/instagram.svg" alt="Instagran icon" width={24} height={24} />
        <Image src="/x.svg" alt="x/twitter icon" width={24} height={24} />
        <Image src="/tiktok.svg" alt="tiktiok icon" width={24} height={24} />
      </div>

      <div className='flex-1 text-center font-bold text-xl lg:text-lg md:text-left md:text-2xl'>JavaScript Planet</div>

      <div className='flex flex-1 items-center gap-5 text-base justify-end lg:gap-4 sm:justify-center'>
        <ThemeToggle />
        <Link href="/" className='hidden sm:flex'>HomePage</Link>
        <Link href="/" className='hidden sm:flex'>About</Link>
        <Link href="/" className='hidden sm:flex'>Contact</Link>
        <LoginLink />
      </div>
    </div>
  );
};