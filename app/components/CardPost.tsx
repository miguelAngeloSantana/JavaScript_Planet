import React from 'react';
import Pagination from './Pagination';
import Card from './Card';

export default function  CardPost() {
  return (
    <div className='flex flex-[5] flex-col items-center md:items-start'>
      <h1 className='text-xl font-bold mb-12 mt-2 mx-auto lg:mx-0'>Recents Posts</h1>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}