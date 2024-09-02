"use client";

import React, {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

type ThemeProviderProps = {
    children: React.ReactNode
};

export default function ThemeProvider({ children }: ThemeProviderProps) {

    const context = useContext(ThemeContext);

  return (
    <div className={context?.theme}>{children}</div>
  );
};