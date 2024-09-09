"use client";

import Link from 'next/link';
import React, { useState } from 'react';

import "../app/globals.css";

export default function LoginLink() {

    const [ open, setOpen ] = useState(false);
    const status = "notauthenticated";

  return (
    <>
      { status === "notauthenticated"? (
          <Link href={"/login"} className='hidden sm:flex'>Login</Link>
      ) : (
          <span>Logaoudo</span>
      )}

      <div 
        className='w-5 h-4 flex flex-col justify-between cursor-pointer sm:hidden' 
        onClick={(() => setOpen(!open))}
      >
        <div className='w-[100%] h-[2px] bg-[--text]'></div>
        <div className='w-[100%] h-[2px] bg-[--text]'></div>
        <div className='w-[100%] h-[2px] bg-[--text]'></div>
      </div>

        { open && (
          <div className='absolute top-[100px] left-0 h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-12 bg-[--bg]'>
            <Link href="/">HomePage</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            { status === "notauthenticated"? (
              <Link href={"/login"}>Login</Link>
            ) : (
                <span>Logaoudo</span>
            )}
          </div>
        )}
    </>
  );
};