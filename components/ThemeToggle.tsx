"use client"

import Image from 'next/image';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {

    const context = useContext(ThemeContext);
    

  return (
    <div 
      className='flex items-center justify-between w-11 h-5 cursor-pointer relative'
      style={ 
        context?.theme === "dark" 
          ? ({ backgroundColor: "white", borderRadius: "50px" })
          : ({ backgroundColor: "#0f172a", borderRadius: "50px" }) 
        }
      onClick={context?.toggle}
    >
        <Image src="/moon.svg" alt="moon icon" width={14} height={14} />
        <div 
          className='w-4 h-4 bg-white absolute ' 
          style={ 
            context?.theme === "dark" 
              ? ({ left: 1, backgroundColor: "#0f172a", borderRadius: "50%" })
              : ({ right: 1, borderRadius: "50%", backgroundColor: "white" }
          )}
        ></div> 
        <Image src="/sun.svg" alt="sun icon" width={14} height={14} />
    </div>
  );
};