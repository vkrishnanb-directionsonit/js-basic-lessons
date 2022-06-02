import { fromCurrencySelect, toCurrencySelect, form } from './elements.js';
import { generateOptions } from './utils.js';
import currencies from './currencies.js';
import { handleInput, handleInputChange } from './handlers.js';

export function init() {
  const optionsHTML = generateOptions(currencies);
  // populate the options elements
  fromCurrencySelect.innerHTML = optionsHTML;
  toCurrencySelect.innerHTML = optionsHTML;

  form.addEventListener('input', handleInputChange);
}
init();