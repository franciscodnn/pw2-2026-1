import { investments } from './data.js';
import { InvestmentCard } from './components/InvestmentCard.js';

const investmentsGrid = document.querySelector('.investments');

investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment)) // [<InvestmentCard>, <InvestmentCard:]
  .join(''); // '<InvestmenCard><InvestmentCard>'

localStorage.setItem('@invest-app:key', 'valor qualquer');