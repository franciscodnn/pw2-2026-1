'use client';

import { Investment } from "@/models/Investment";
import { createContext, useState } from "react";

type InvestmentsContextType = {
    investments: Investment[];
    setInvestments: (value: Investment[]) => void;
};

export const InvestmentsContext = createContext<InvestmentsContextType>({
    investments: [],
    setInvestments: (value: Investment[]) => {}
});

export function InvestmentsProvider( { children }: { children: React.ReactNode } ) {
    const [investments, setInvestments] = useState<Investment[]>([{
                        id: '1',
                        name: 'Tesouro Selic 2029',
                        value: 10050,
                        origin: 'Tesouro Nacional',
                        category: 'Pós',
                        created_at: '2023-08-22T00:00:00-03:00',
                        interest: '100% Selic',
                    },
                    {
                        id: '2',
                        name: 'Tesouro Selic 2035',
                        value: 150000,
                        origin: 'Tesouro Nacional',
                        category: 'Pré',
                        created_at: '2023-08-22T00:00:00-03:00',
                        interest: '100% Selic',
                    }]);
    
    return (
        <InvestmentsContext.Provider value={ {investments, setInvestments} }>
            {children}
        </InvestmentsContext.Provider>
    )

}