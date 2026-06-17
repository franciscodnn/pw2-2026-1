'use client';

import { Investment } from "@/models/Investment";
import Link from "next/link";
import { useState, useContext } from "react";
import { InvestmentsContext } from "@/contexts/InvestmentsContext";

import Storage from "@/services/storageSupabase";

export default function InvestimentForm({ investmentToEdit }: { investmentToEdit?: Investment | undefined }) {
  const { 
    investments, setInvestments 
  } = useContext(InvestmentsContext);

  const isEditing = investmentToEdit ? true : false;

  const [investment, setInvestment] = useState<Investment>(investmentToEdit || {
    name: '',
    value: 0,
    origin: '',
    category: '',
    created_at: '',
    interest: ''
  });

  async function save(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if(!isEditing) {
      const newInvestment = {
        ...investment        
      };      
      delete newInvestment.created_at;

      const createdInvestment = await Storage.create('investments', newInvestment);

      setInvestments([...investments, createdInvestment]);
    } else {
      const updatedInvestments = investments.map( elem => {
        if((elem as Investment).id === investment.id) {
          return investment;
        }
        return elem;
      });
      setInvestments(updatedInvestments);
    }
  }

  function typedValue(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(`${event.target.name}: ${event.target.value}`);

    setInvestment( 
      { 
        ...investment, 
        [event.target.name]: event.target.value
      }
    );
  }

  return (
    <>
      <h1 className="text-center text-2xl my-12 font-bold">{ isEditing ? 'Editar' : 'Novo' } Investimento</h1>        
        <form id="investment-form">
            <div className="investments w-100 grid grid-cols-2 gap-3 mx-auto">
            
              <label htmlFor="name">Título:</label>
              <input id="name" 
              name="name"                 
              type="text" placeholder="Selic, IPCA" 
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-400" 
              value={investment.name}
              onChange={typedValue} />
          
          
              <label htmlFor="value">Valor:</label>
              <input id="value" name="value" type="text" placeholder="0,00" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-400" 
              value={investment.value}
              onChange={typedValue} />
          
              <label htmlFor="origin">Origem:</label>
              <input id="origin" name="origin" type="text" placeholder="" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-400" 
              value={investment.origin}
              onChange={ typedValue }
              />
          
          
              <label htmlFor="category">Categoria:</label>
              <input id="category" name="category" type="text" placeholder="Pre, Pós" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-400" 
              value={investment.category}
              onChange={ typedValue }
              />
          
          
              <label htmlFor="created_at">Data de criação:</label>
              <input id="created_at" name="created_at" type="text" placeholder="dd/mm/yyyy" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-400" 
              value={investment.created_at}
              onChange={ typedValue }
              />
          
          
              <label htmlFor="interest">Interesse:</label>
              <input id="interest" name="interest" type="text" placeholder="IPCA + 5%, 100% Selic" className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-gray-400" 
              value={investment.interest}
              onChange={ typedValue }
              />
          
              <button 
                className="bg-gray-400 hover:bg-gray-800 hover:text-gray-200 py-2 my-4 rounded col-start-1 col-end-3"
                onClick={save}
                type="button">{ isEditing ? 'Salvar' : 'Criar' } investimento
              </button>
              <Link href="/" className="text-blue-500 hover:text-blue-700">
                  { "Voltar" }
              </Link>
            </div>
        </form>
    </>
  );
}
