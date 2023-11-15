import { TrendingUp, TrendingDown } from '../icons/index'
import getCurrencyFormat from '../../utils/getCurrencyFormat'
import './QuoteBlock.css'

function QuoteBlock({ currencyObject, setSelect}) {
  const curr = currencyObject || demoObject
  const quoteArr = curr.cotacoes
  const latestQuote = quoteArr[quoteArr.length - 1]
  const comparingQuote = quoteArr[quoteArr.length - 10]
  const trendingUpValue = (
    latestQuote.cotacaoVenda - comparingQuote.cotacaoVenda > 0
  ) ? true : false

  const latestSellQuote = getCurrencyFormat(
    curr.simbolo,
    latestQuote.cotacaoVenda,
    false
  )

  return (
    <button
      onClick={() => setSelect(curr.simbolo)}
      className={`quote rounded-md ${trendingUpValue ? 'trending-up' : 'trending-down'}`}
      title={`Usar ${curr.simbolo} como moeda de saída`}
      id={curr.simbolo}
    >
      <div className="top">
        <span>
          {curr.nomeFormatado}
        </span>
      </div>
      <div className="mid">
        <span>
          {latestSellQuote}
        </span>
      </div>
      <div className="bottom">
        <span className="symbol">
          {curr.symbol}
        </span>
        <span className="trending-icon">
          {trendingUpValue
            ? <TrendingUp />
            : <TrendingDown />
          }
        </span>
      </div>
    </button>
  )

}

export default QuoteBlock



const demoObject = {
  "simbolo": "EUR",
  "nomeFormatado": "Euro",
  "symbol": "€",
  "cotacoes": [
    {
      "cotacaoCompra": 5.2621,
      "cotacaoVenda": 5.2647,
      "dataHoraCotacao": "2023-11-06 10:09:27.02",
      "tipoBoletim": "Abertura"
    },
    {
      "cotacaoCompra": 5.2677,
      "cotacaoVenda": 5.2693,
      "dataHoraCotacao": "2023-11-06 11:06:26.35",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2661,
      "cotacaoVenda": 5.2687,
      "dataHoraCotacao": "2023-11-06 12:02:25.78",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2504,
      "cotacaoVenda": 5.253,
      "dataHoraCotacao": "2023-11-06 13:05:30.733",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2628,
      "cotacaoVenda": 5.2654,
      "dataHoraCotacao": "2023-11-06 13:05:30.746",
      "tipoBoletim": "Fechamento"
    },
    {
      "cotacaoCompra": 5.1998,
      "cotacaoVenda": 5.2024,
      "dataHoraCotacao": "2023-11-07 10:05:27.913",
      "tipoBoletim": "Abertura"
    },
    {
      "cotacaoCompra": 5.1901,
      "cotacaoVenda": 5.1927,
      "dataHoraCotacao": "2023-11-07 11:03:26.335",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.1947,
      "cotacaoVenda": 5.1959,
      "dataHoraCotacao": "2023-11-07 12:03:26.629",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.1995,
      "cotacaoVenda": 5.2021,
      "dataHoraCotacao": "2023-11-07 13:09:32.904",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.1988,
      "cotacaoVenda": 5.2014,
      "dataHoraCotacao": "2023-11-07 13:09:32.911",
      "tipoBoletim": "Fechamento"
    },
    {
      "cotacaoCompra": 5.2114,
      "cotacaoVenda": 5.2135,
      "dataHoraCotacao": "2023-11-08 10:02:26.012",
      "tipoBoletim": "Abertura"
    },
    {
      "cotacaoCompra": 5.2134,
      "cotacaoVenda": 5.2145,
      "dataHoraCotacao": "2023-11-08 11:09:26.155",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2159,
      "cotacaoVenda": 5.2185,
      "dataHoraCotacao": "2023-11-08 12:10:26.618",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2319,
      "cotacaoVenda": 5.2345,
      "dataHoraCotacao": "2023-11-08 13:09:36.397",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2288,
      "cotacaoVenda": 5.2314,
      "dataHoraCotacao": "2023-11-08 13:09:36.404",
      "tipoBoletim": "Fechamento"
    },
    {
      "cotacaoCompra": 5.2402,
      "cotacaoVenda": 5.2428,
      "dataHoraCotacao": "2023-11-09 10:03:25.342",
      "tipoBoletim": "Abertura"
    },
    {
      "cotacaoCompra": 5.2486,
      "cotacaoVenda": 5.2512,
      "dataHoraCotacao": "2023-11-09 11:10:26.232",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2542,
      "cotacaoVenda": 5.2568,
      "dataHoraCotacao": "2023-11-09 12:04:25.908",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2455,
      "cotacaoVenda": 5.2467,
      "dataHoraCotacao": "2023-11-09 13:08:31.516",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2505,
      "cotacaoVenda": 5.2516,
      "dataHoraCotacao": "2023-11-09 13:08:31.522",
      "tipoBoletim": "Fechamento"
    },
    {
      "cotacaoCompra": 5.2571,
      "cotacaoVenda": 5.2597,
      "dataHoraCotacao": "2023-11-10 10:07:27.601",
      "tipoBoletim": "Abertura"
    },
    {
      "cotacaoCompra": 5.255,
      "cotacaoVenda": 5.2561,
      "dataHoraCotacao": "2023-11-10 11:06:27.553",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2568,
      "cotacaoVenda": 5.2584,
      "dataHoraCotacao": "2023-11-10 12:07:28.002",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2459,
      "cotacaoVenda": 5.2471,
      "dataHoraCotacao": "2023-11-10 13:05:44.473",
      "tipoBoletim": "Intermediário"
    },
    {
      "cotacaoCompra": 5.2505,
      "cotacaoVenda": 5.2517,
      "dataHoraCotacao": "2023-11-10 13:05:44.478",
      "tipoBoletim": "Fechamento"
    },
    {
      "cotacaoCompra": 5.2569,
      "cotacaoVenda": 5.2596,
      "dataHoraCotacao": "2023-11-13 10:02:29.433",
      "tipoBoletim": "Abertura"
    },
    {
      "cotacaoCompra": 5.2665,
      "cotacaoVenda": 5.2681,
      "dataHoraCotacao": "2023-11-13 11:04:26.908",
      "tipoBoletim": "Intermediário"
    }
  ]
}