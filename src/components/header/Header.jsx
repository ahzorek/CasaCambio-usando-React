import './Header.css'
import Logo from '../logo/Logo.jsx'

function Header() {
  return (
    <div className="header">
      <div className="logo-wrapper rounded-lg">
        <h1 title="pyramidx exchange">
          <Logo/>
        </h1>
      </div>
      <div className="sub-heading rounded-lg">
        <h2 className='text-3xl'>Currency Exchange Service</h2>
        <h3>powered by <span className="font-bold">Banco Central do Brasil</span></h3>
      </div>
    </div>
  )
}


export default Header