'use client';

import Image from "next/image";
import Header from "@/components/Header";
import InvestmentCard from "@/components/InvestmentCard";
import { VisualizavelProvider } from "@/contexts/VisualizavelContext";
import { useContext } from "react";
import { InvestmentsContext } from "@/contexts/InvestmentsContext";

export default function Home() {  
  const { investments } = useContext(InvestmentsContext);  

  return (
    <VisualizavelProvider>
    <div className="container mx-auto lg:max-w-screen-lg">
      <Header>Investimentos</Header>      
      <div className="investments grid grid-cols-3 gap-3">
          { /* Investimentos serão preenchidos dinamicamente */ }
          { 
            investments.map(
              (investment) => <InvestmentCard investment={investment} key={ investment.id } />
            )
          }
          
      </div>
      
    </div>
    <hr />
    </VisualizavelProvider>
  );
}
