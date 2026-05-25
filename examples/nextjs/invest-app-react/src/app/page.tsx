'use client';

import Image from "next/image";
import Header from "@/components/Header";
import InvestmentCard from "@/components/InvestmentCard";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useState } from 'react';


export default function Home() {
  const [contador, setContador] = useState(0);
  const [toggle, setToggle] = useState('Hidden');

  const investments = [{
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
  }]
  ;

  function handleClick() {
    console.log('botão clicado...');
    setContador(contador + 1);
    setToggle( toggle === 'Hidden' ? 'Show' : 'Hidden' );
  }

  return (
    <>
    <div className="container mx-auto lg:max-w-screen-lg">
      <Header>Investimentos</Header>
      <div className="investments grid grid-cols-3 gap-3">
          { /* Investimentos serão preenchidos dinamicamente */ }
          { 
            investments.map(
              (investment) => <InvestmentCard investment={investment} key={ investment.id} />
            )
          }
          
      </div>
      <button
        className="bg-gray-400 hover:bg-gray-800 hover:text-gray-200 p-2 m-2 rounded-full"
        onClick={ handleClick }>

        {toggle} { contador }
      </button>
    </div>
    <hr />
    </>
  );
}
