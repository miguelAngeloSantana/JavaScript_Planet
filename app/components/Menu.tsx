import React from 'react';
import MenuPosts from './MenuPosts';
import PostsSalvos from './PostsSalvos';

export default function Menu() {
  return (
    <div className='mt-4 hidden lg:flex lg:flex-col' style={{ flex: 2 }}>
      <h2 className='font-medium'>Recommend Posts</h2>
      <MenuPosts />
      <h2 className='font-medium'>Posts Salvos</h2>
      <PostsSalvos />
    </div>
  );
}