import { useState, useEffect } from 'react'
import {InputValue, OutputValue} from '../input/DisplayValue'
import './Form.css'

import getCurrencyFormat from '../../utils/getCurrencyFormat'
import convertCurrency from '../../utils/convertCurrency'

function Form({currencies, currenciesSelect, setCurrencies}) {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    // console.log(currencies)
    if (!currencies.isLoading) {
      setOutput(prev => (
        getCurrencyFormat(
          currenciesSelect.outputCurr,
          convertCurrency(
            currenciesSelect.inputCurr,
            currenciesSelect.outputCurr,
            input,
            currencies.list
          ),
          false //passing false here so ommit the curr symbol which is already on the select
        )
      ))
    }
  }, [input, currenciesSelect])


  return (
    <form onSubmit={(e) => {e.preventDefault()}} className="rounded-2" >
      <div className="input-wrapper rounded-lg">
        <span className="p-6">
          <select
            id="inputCurr"
            onChange={setCurrencies}
            title="Moeda de Entrada"
            className="custom-select rounded-xl focus:ring-blue-500 block p-2.5"
            aria-label="Seleciona Moeda de Entrada"
            value={currenciesSelect.inputCurr}
          >
            {!currencies.isLoading && Array.from(currencies.list.entries()).map(
              ([key, curr]) => {
              return (
                <option key={curr.simbolo} value={curr.simbolo}>{curr.symbol}</option>
              )
            })}
          </select>
        </span>
        <InputValue
          onChange={event => {
            setInput(event.target.value)
          }}
          value={input}
          title="Valor de Entrada"
        />
      </div>
      <div className="input-wrapper rounded-lg">
        <span className="p-6">
          <select
            id="outputCurr"
            onChange={setCurrencies}
            title="Moeda de Saída"
            className="custom-select rounded-xl focus:ring-blue-500 block p-2.5"
            aria-label="Seleciona Moeda de Saída"
            value={currenciesSelect.outputCurr}
          >
            {!currencies.isLoading && Array.from(currencies.list.entries()).map(([_, curr]) => {
              return (
                <option key={curr.simbolo} value={curr.simbolo}>{curr.symbol}</option>
              )
            })}
          </select>
        </span>
        <OutputValue
          title="Valor de Saída"
          value={output}
        />
      </div>
    </form>
  )
}

export default Form