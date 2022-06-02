// import { formatCurrency } from './utils.js';
import { fromCurrencySelect, fromAmountInput, toCurrencySelect, toAmountElement } from './elements.js';

export  function handleInputChange(e) {
  const rates = (Math.random() * 10);
  const rawAmount =  fromAmountInput.value * rates;
  toAmountElement.textContent = Math.ceil(rawAmount);
}
