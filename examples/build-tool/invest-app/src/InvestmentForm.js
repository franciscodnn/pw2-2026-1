import Storage from './services/storage.js';

const form = document.querySelector('#investment-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const newInvestment = Object.fromEntries(formData.entries());

  console.log(newInvestment);

  Storage.create('investments', newInvestment);
});