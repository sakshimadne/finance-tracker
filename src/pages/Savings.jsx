import React from 'react'

const Savings = () => {
  const totalIncome = 5000
  const totalExpenses = 2500
  const savings = totalIncome - totalExpenses

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Savings</h1>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-2'>Current Savings</h2>
        <p className='text-lg'>Total Income: ${totalIncome}</p>
        <p className='text-lg'>Total Expenses: ${totalExpenses}</p>
        <p className='text-lg font-bold'>Savings: ${savings}</p>
      </div>
    </div>
  )
}

export default Savings
