/** @format */

import React from 'react'
import { useState } from  'react'
import {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'

function AddNewTransaction() {
    const { addTransaction } = useContext(GlobalContext)

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const onSubmit = (e) => {
      e.preventDefault()
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000000),
        text,
        amount
      }
      addTransaction(newTransaction)
    }
  
    return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type='submit' className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddNewTransaction
