import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

// Navbar Component

// Home Page Component
const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className='p-6 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl font-bold text-center mb-6'>
          Finance Manager Dashboard
        </h1>
        <p className='text-center text-lg mb-8'>
          Welcome to the Finance Manager App! Use the navigation bar above to
          track your income, expenses, and savings.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* Financial Summary */}
          <div className='bg-white shadow-lg p-4 rounded-lg border'>
            <h2 className='text-xl font-semibold mb-4'>Financial Summary</h2>
            <p>Total Income: $0</p>
            <p>Total Expenses: $0</p>
            <p>Current Savings: $0</p>
          </div>

          {/* Data Analytics */}
          <div className='bg-white shadow-lg p-4 rounded-lg border'>
            <h2 className='text-xl font-semibold mb-4'>Data Analytics</h2>
            <p>Most Frequent Expense Category: None</p>
            <p>Most Expensive Expense Category: None</p>
            <p>Average Monthly Income: $0</p>
          </div>

          {/* Quick Links */}
          <div className='bg-white shadow-lg p-4 rounded-lg border'>
            <h2 className='text-xl font-semibold mb-4'>Quick Links</h2>
            <ul className='list-disc pl-6'>
              <li>
                <Link to='/income' className='text-blue-600 hover:underline'>
                  Add Income
                </Link>
              </li>
              <li>
                <Link to='/expenses' className='text-blue-600 hover:underline'>
                  Add Expenses
                </Link>
              </li>
              <li>
                <Link
                  to='/transactions'
                  className='text-blue-600 hover:underline'
                >
                  View Transactions
                </Link>
              </li>
              <li>
                <Link to='/savings' className='text-blue-600 hover:underline'>
                  Track Savings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
