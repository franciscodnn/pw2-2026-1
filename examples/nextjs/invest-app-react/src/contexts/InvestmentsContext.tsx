'use client';

import { Investment } from "@/models/Investment";
import { createContext, useEffect, useState } from "react";
import Storage from "@/services/storageSupabase";

type InvestmentsContextType = {
    investments: Investment[];
    setInvestments: (value: Investment[]) => void;
};

export const InvestmentsContext = createContext<InvestmentsContextType>({
    investments: [],
    setInvestments: (value: Investment[]) => {}
});

export function InvestmentsProvider( { children }: { children: React.ReactNode } ) {
    const [investments, setInvestments] = useState<Investment[]>([]);

    async function loadInvestments() {
        const investments = await Storage.read('investments');
        console.log(investments);
        
        setInvestments(investments);
    }

    useEffect( () => {
        loadInvestments();
    }, []);
    
    return (
        <InvestmentsContext.Provider value={ {investments, setInvestments} }>
            {children}
        </InvestmentsContext.Provider>
    )

}