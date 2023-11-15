import formatDate from "./formatDate"
import getCurrencySymbol from "./getCurrencySymbol"

async function getConvertionRate(
  curr,
  startDate = new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)),
  endDate = new Date(Date.now())
) {

  const formatedStartDate = formatDate(startDate)
  const formatedEndDate = formatDate(endDate)

  const URL = `
    https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${curr}'&@dataInicial='${formatedStartDate}'&@dataFinalCotacao='${formatedEndDate}'&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao,tipoBoletim
  `
  const res = await fetch(URL)
  const { value } = await res.json()

  return value
}

async function createCurrenciesTable(currencies) {
  const currenciesTable = new Map()
  let newestData
  try {
    const conversionPromises = currencies.map(async (curr) => {
      if (curr.simbolo !== 'BRL') {
        const cotacoes = await getConvertionRate(curr.simbolo)
        const symbol = getCurrencySymbol(curr.simbolo)
        currenciesTable.set(curr.simbolo, { ...curr, symbol, cotacoes })
        newestData = cotacoes.pop()

        console.log(newestData)
      }
    })

    await Promise.all(conversionPromises)

    currenciesTable.set(
      'BRL',
      { simbolo: 'BRL', nomeFormatado: 'Real Brasileiro', symbol: "R$", cotacoes: [] }
    )
  } catch (error) {
    console.error('Erro ao criar a tabela de moedas:', error)
  }

  return { currenciesTable, newestData }
}

async function getCurrencyList() {
  try {
    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$skip=0&$format=json&$select=simbolo,nomeFormatado`
    const res = await fetch(url)
    const data = await res.json()
    const currencies = [
      { simbolo: 'BRL', nomeFormatado: 'Real Brasileiro' },
      ...data.value,
    ]


    const currenciesTable = await createCurrenciesTable(currencies)

    return currenciesTable
  } catch (error) {
    console.error('Erro ao obter a lista de moedas:', error)
    return new Map()
  }
}

export default getCurrencyList