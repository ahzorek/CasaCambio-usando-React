import { useState, useEffect } from 'react'
import Layout from "./layout/layout"
import Header from "./components/header/Header"
import Quotes from "./components/quotes/Quotes"
import Form from "./components/converter-form/Form"
import LastData from './components/last-data/LastData'
import getCurrencyList from './utils/getCurrencyList'
import Loading from './components/loading/Loading'

const initialSelectState = {
  inputCurr: 'USD',
  outputCurr: 'BRL',
}

function App() {
  const [currenciesSelect, setCurrenciesSelect ] = useState(initialSelectState)
  const [currencies, setCurrencies] = useState({
    list: null,
    lastData: null,
    isLoading: true
  })


  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const { currenciesTable, newestData } = await getCurrencyList()
        console.log(newestData)
        setCurrencies(prev => ({
          ...prev,
          list: currenciesTable,
          lastData: newestData,
          isLoading: false,
        }))
        
      } catch (error) {
        console.error('erro ao buscar dados:', error)
      }
    }
    fetchInitialData()
    
  }, [])

  const handleSelects = event => {
    setCurrenciesSelect(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }))
  }

  const handleTargetSelectOutput = curr => {
    setCurrenciesSelect(prev => ({
      ...prev,
      outputCurr: curr
    }))
  }

  if (currencies.isLoading) {
    return <Loading/>
  }

  return (
    <Layout>
      <Header />
      <Quotes currencies={currencies} setSelect={handleTargetSelectOutput} />
      <Form currencies={currencies} currenciesSelect={currenciesSelect} setCurrencies={handleSelects} />
      <LastData data={currencies.lastData} />
    </Layout>
  )
}

export default App
