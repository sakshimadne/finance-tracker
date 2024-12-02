import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Importing Page Components
import Home from './pages/Home'
import Income from './pages/Income'
import Expenses from './pages/Expenses'
import Transactions from './pages/Transactions'
import Savings from './pages/Savings'



function App() {
  return (
    <Router>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/income' element={<Income />} />
        <Route path='/expenses' element={<Expenses />} />
        <Route path='/transactions' element={<Transactions />} />
        <Route path='/savings' element={<Savings />} />
      </Routes>
    </Router>
  )
}

export default App
