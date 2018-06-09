export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';

export function swapCurrency() {
  return {
    type: SWAP_CURRENCY,
  };
}

export function changeCurrencyAmount(amount) {
  return {
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
  };
}
