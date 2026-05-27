'use client';

import { useState, createContext } from "react";

export const VisualizavelContext = createContext({
  visualizavel: true,
  setVisualizavel: (value: boolean) => {}
});

export function VisualizavelProvider( { children }: { children: React.ReactNode } ) {
    const [visualizavel, setVisualizavel] = useState<boolean>(true);

    return (
        <VisualizavelContext.Provider value={ { visualizavel, setVisualizavel } }>
            {children}
        </VisualizavelContext.Provider>
    );
}