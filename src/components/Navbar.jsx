import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 text-white p-4'>
      <ul className='flex justify-around list-none m-0 p-0'>
        <li>
          <Link to='/' className='hover:underline'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/income' className='hover:underline'>
            Income
          </Link>
        </li>
        <li>
          <Link to='/expenses' className='hover:underline'>
            Expenses
          </Link>
        </li>
        <li>
          <Link to='/transactions' className='hover:underline'>
            Transactions
          </Link>
        </li>
        <li>
          <Link to='/savings' className='hover:underline'>
            Savings
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
