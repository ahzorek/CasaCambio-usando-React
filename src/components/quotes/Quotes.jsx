import QuoteBlock from '../quote/QuoteBlock'
import './Quotes.css'

function Quotes({ currencies, setSelect }) {
  const mainCurrencies = ['USD', 'EUR', 'GBP', 'DKK']
  const {list, isLoading } = currencies
  
  return (
    <aside className="quotes">
      {!isLoading &&
        mainCurrencies.map(curr => (
          <QuoteBlock
          setSelect={setSelect}
          currencyObject={list.get(curr)} key={curr}
          />
        ))}
    </aside>

  )
}

export default Quotes