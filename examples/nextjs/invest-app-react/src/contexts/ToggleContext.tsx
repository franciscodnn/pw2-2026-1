'use client';

import { createContext } from "react";

import { useState } from "react";

export const ToggleContext = createContext({ toggle: 'hidden', setToggle: (value: string) => {} });

export function ToggleProvider({ children }: { children: React.ReactNode }) {
    const [toggle, setToggle] = useState('hidden');

    return (
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            {children}
        </ToggleContext.Provider>
    );
}