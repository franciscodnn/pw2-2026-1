import { investments } from './data.js';
import { InvestmentCard } from './components/InvestmentCard.js';
import Storage from './services/storage.js';

Storage.load('investments', investments);



// Novo investimento 
const newInvestment = {      
  name: 'Tesouro Selic 2035',
  value: 100.5,
  origin: 'Tesouro Nacional',
  category: 'Pos',
  created_at: '2023-03-22',
  interest: '100% Selic',
};

// Storage.create('investments', newInvestment);
// -----

const datasetInvestments = Storage.read('investments');

const investmentsGrid = document.querySelector('.investments');

investmentsGrid.innerHTML = datasetInvestments
  .map((investment) => InvestmentCard(investment)) // [<InvestmentCard>, <InvestmentCard:]
  .join(''); // '<InvestmenCard><InvestmentCard>'

// Storage.load('investments', investments);
// localStorage.setItem('@invest-app:key', 'valor qualquer');