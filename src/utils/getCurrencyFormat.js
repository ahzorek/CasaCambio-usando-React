//formats to currency
function getCurrencyFormat(curr, value = NaN, symbol = true) {
  const formatted = new Intl.NumberFormat(Document.lang, {
    style: 'currency',
    currency: curr,
    currencyDisplay: symbol ? 'symbol' : 'code',
  }).format(value)

  if (!value) {
    return formatted.replace(/\NaN/g, '').trim()
  }
  else if (!symbol) {
    return formatted.replace(curr, '').trim()
  }
  else
    return formatted
}

export default getCurrencyFormat