export function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${currencyCode == 'MSG' ? " " : currencyCode} - ${currencyName}</option>`
    )
    .join('');
}
