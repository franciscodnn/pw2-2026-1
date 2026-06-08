'use client';

import Header from "@/components/Header";
import InvestmentCard from "@/components/InvestmentCard";
import { VisualizavelProvider } from "@/contexts/VisualizavelContext";
import { useContext, useEffect } from "react";
import { InvestmentsContext } from "@/contexts/InvestmentsContext";

import Storage from "@/services/storage";

export default function Home() {
  const { investments, setInvestments } = useContext(InvestmentsContext);  

  useEffect(() => {
    Storage.load('investments', investments);    
  }, []);
  

  return (
    <VisualizavelProvider>
    <div className="container mx-auto lg:max-w-screen-lg">
      <Header>Investimentos</Header>      
      <div className="investments grid grid-cols-3 gap-3">
          { /* Investimentos serão preenchidos dinamicamente */ }
          { 
            investments.map(
              (investment) => <InvestmentCard investment={investment} key={ investment.id  } />
            )
          }
          
      </div>
      
    </div>
    <hr />
    </VisualizavelProvider>
  );
}
