import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Categories() {
  return (
    <div>
      <h1 className='mb-7 text-center font-medium text-base lg:text-left'>Categorias</h1>

      <div className='flex items-center justify-between flex-wrap gap-8 mb-9'>
        <Link 
          href="/blog?cat=frontend" 
          className='flex items-center justify-center w-full gap-3 capitalize h-9
            md:w-[45%] lg:w-[25%] xl:w-[13%]'
        >
          <Image 
            src="/front-end.png"
            alt="front end icon"
            width={24}
            height={24}
          />
          Front-End
        </Link>

        <Link 
          href="/blog"
          className='flex items-center justify-center w-[98%] gap-3 capitalize h-9 
            md:w-[48%] lg:w-[25%] xl:w-[13%]'
        >
          <Image 
            src="/nodejs.svg"
            alt="node icon"
            width={24}
            height={24}
          />
          Back-End
        </Link>

        <Link 
          href="/blog"
          className='flex items-center justify-center w-[95%] gap-3 capitalize h-9 
            md:w-[43%] lg:w-[25%] xl:w-[13%]'
        >
          <Image 
            src="/mobile-developing.svg"
            alt="mobile developing icon"
            width={24}
            height={24}
          />
          Mobile
        </Link>

        <Link 
          href="/blog?cat"
          className='flex items-center justify-center w-[97%] gap-3 capitalize h-9 
            md:w-[49%] lg:w-[23%] xl:w-[13%]'
        >
          <Image 
            src="/cyber-security.png"
            alt="cyber security illustration"
            width={24}
            height={24}
          />
          Security
        </Link>

        <Link 
          href="/blog"
          className='flex items-center justify-center w-[93%] gap-3 capitalize h-9 
            md:w-[42%] lg:w-[25%] xl:w-[13%]'
        >
          <Image 
            src="/news.png"
            alt="news icon"
            width={24}
            height={24}
          />
          News
        </Link>

        <Link 
          href="/blog"
          className='flex items-center justify-center w-[94%] gap-3 capitalize h-9 
            md:w-[50%] lg:w-[25%] xl:w-[13%]'
        >
          <Image 
            src="/career.png"
            alt="carrer illustration"
            width={24}
            height={24}
          />
          Carrer
        </Link>

      </div>
    </div>
  );
};