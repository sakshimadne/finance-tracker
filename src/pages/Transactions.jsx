import React from 'react'

const Transactions = () => {
  const transactions = [
    { type: 'Income', description: 'Salary', amount: 2000, date: '2024-01-01' },
    {
      type: 'Expense',
      description: 'Groceries',
      amount: 150,
      date: '2024-01-02',
    },
  ]

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Transactions</h1>
      <ul className='bg-white p-4 rounded-lg shadow-md'>
        {transactions.map((transaction, index) => (
          <li key={index} className='border-b p-2'>
            {transaction.type}: {transaction.description} - $
            {transaction.amount} on {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Transactions
