/** @format */

import './App.css'
import Balance from './components/Balance/Balance'
import IncomeExpense from './components/IncomeExpense/IncomeExpense'
import TransactionList from './components/TransactionList/TransactionList'
import AddNewTransaction from './components/AddNewTransaction/AddNewTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </div>
    </GlobalProvider>
  )
}

export default App
