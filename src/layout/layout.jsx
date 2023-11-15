import { React } from 'react'
import './layout.css'

function Layout({ children }) {
  return (
    <div className="min-h-screen p-2 bg-[var(--primary)]">
      <div className="container-[100%] rounded-xl p-6 bg-black custom-grid">
        {children}
      </div>
    </div>
  )
}

export default Layout