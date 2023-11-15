//converter logic

//function from x to y (thru BRL)
function convertCurrency(inputCurrency, outputCurrency, value = 1, currenciesTable) {
  const list = currenciesTable
  if (!inputCurrency | !outputCurrency) {
    console.error('Issues with convertCurrency params')
  }
  else if (inputCurrency === outputCurrency) {
    return value
  }
  else if (outputCurrency === 'BRL') {
    return convertToBRL(inputCurrency, value, list)
  }
  else if (inputCurrency === 'BRL') {
    return convertFromBRL(outputCurrency, value, list)
  }
  else {
    return convertFromBRL(
      outputCurrency,
      convertToBRL(inputCurrency, value, list),
      list
    )
  }

}

//function from brl to x
function convertFromBRL(outputCurrency, value, currenciesTable) {
  const arr = currenciesTable?.get(outputCurrency)?.cotacoes || []
  const rate = arr[arr.length - 1]
  if (!rate) {
    console.error(`cotação para ${outputCurrency} não localizada`)
    return null
  }
  return value / rate.cotacaoVenda
}

//function from x to brl
function convertToBRL(inputCurrency, value, currenciesTable) {
  const arr = currenciesTable?.get(inputCurrency)?.cotacoes || []
  const rate = arr[arr.length - 1]
  if (!rate) {
    console.error(`cotação para ${inputCurrency} não localizada`)
    return null
  }
  return value * rate.cotacaoCompra
}



export default convertCurrency