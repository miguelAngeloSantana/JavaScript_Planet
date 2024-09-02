"use client";

import { createContext, useState, useEffect } from "react";

interface ThemeContextProps {
    children: React.ReactNode 
};

type ThemeContextValues = "light" | "dark";

interface ThemeProviderProps {
    theme: ThemeContextValues
    toggle: () => void
};

const themeLocalStore = () => {
    if (typeof window !== "undefined") {
        let value = localStorage.getItem("theme") || "";

        return value || "light";
    };
};

export const ThemeContext = createContext<ThemeProviderProps | undefined>(undefined);


export const ThemeContextProvider = ({ children }: ThemeContextProps) => {

    const [ teste ] = useState(() => {
        return themeLocalStore();
    });

    const [ theme, setTheme ] = useState<ThemeContextValues>("light") || teste;

    const toggle = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
};