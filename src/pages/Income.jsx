import React, { useState } from 'react'

const Income = () => {
  const [incomes, setIncomes] = useState([])

  const handleAddIncome = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newIncome = {
      amount: formData.get('amount'),
      description: formData.get('description'),
      date: formData.get('date'),
    }

    setIncomes([...incomes, newIncome])
    e.target.reset()
  }

  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Add Income</h1>
      <form
        onSubmit={handleAddIncome}
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
          type='date'
          name='date'
          required
          className='border p-2 m-2 w-full'
        />
        <button type='submit' className='bg-blue-600 text-white px-4 py-2 mt-2'>
          Add Income
        </button>
      </form>
      <h2 className='text-2xl font-semibold mb-4'>Income Records</h2>
      <ul className='bg-white p-4 rounded-lg shadow-md'>
        {incomes.map((income, index) => (
          <li key={index} className='border-b p-2'>
            {income.description} - ${income.amount} on {income.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Income
