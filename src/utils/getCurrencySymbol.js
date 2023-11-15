function getCurrencySymbol(curr) {
  const formatted = new Intl.NumberFormat(Document.lang, {
    style: 'currency',
    currency: curr,
    currencyDisplay: 'symbol',
  }).format(NaN)

  return formatted.replace(/\NaN/g, '').trim()

}

export default getCurrencySymbol