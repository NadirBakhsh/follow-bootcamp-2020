

import './App.css'
import Balance from './components/Balance/Balance'
import IncomeExpense from './components/IncomeExpense/IncomeExpense'
import TransactionList from './components/TransactionList/TransactionList'
import AddNewTransaction from './components/AddNewTransaction/AddNewTransaction'
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddNewTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
