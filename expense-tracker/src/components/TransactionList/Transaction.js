import React from 'react';
import {useContext} from 'react'
import {GlobalContext} from '../../context/GlobalState'

function Transaction({transaction}) {

    const { deleteTransaction } = useContext(GlobalContext)

  return <>
   <li className={ transaction.amount > 0 ? 'plus' : "minus"}>
        {transaction.text} <span>{Math.abs(transaction.amount)}</span>
          <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
  </>;
}

export default Transaction;
