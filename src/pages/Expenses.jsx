import React, { useState } from 'react'

const Expenses = () => {
  const [expenses, setExpenses] = useState([])

  const handleAddExpense = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newExpense = {
      amount: formData.get('amount'),
      description: formData.get('description'),
      category: formData.get('category'),
      date: formData.get('date'),
    }

    setExpenses([...expenses, newExpense])
    e.target.reset()
  }

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Add Expense</h1>
      <form
        onSubmit={handleAddExpense}
        className='bg-white p-4 rounded-lg shadow-md mb-6'
      >
        <input
          type='number'
          name='amount'
          placeholder='Amount'
          required
          className='border p-2 m-2 w-full'
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          required
          className='border p-2 m-2 w-full'
        />
        <input
          type='text'
          name='category'
          placeholder='Category'
          required
          className='border p-2 m-2 w-full'
        />
        <input
          type='date'
          name='date'
          required
          className='border p-2 m-2 w-full'
        />
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 mt-2'>
          Add Expense
        </button>
      </form>
      <h2 className='text-2xl font-semibold mb-4'>Expense Records</h2>
      <ul className='bg-white p-4 rounded-lg shadow-md'>
        {expenses.map((expense, index) => (
          <li key={index} className='border-b p-2'>
            {expense.description} - ${expense.amount} for {expense.category} on{' '}
            {expense.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Expenses
