

import './App.css'
import Balance from './components/Balance/Balance'
import IncomeExpense from './components/IncomeExpense/IncomeExpense'
import TransactionList from './components/TransactionList/TransactionList'
import AddNewTransaction from './components/AddNewTransaction/AddNewTransaction'

function App() {
  return (
    <div className="App">
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </div>
  )
}

export default App
