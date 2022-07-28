import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: 139.4,
    },
    {
      id: "e2",
      date: new Date(2023, 5, 11),
      title: "Bike Insurance",
      amount: 239.4,
    },
    {
      id: "e3",
      date: new Date(2021, 11, 21),
      title: "Home Insurance",
      amount: 339.4,
    },
    {
      id: "e4",
      date: new Date(2021, 1, 7),
      title: "shoes",
      amount: 339.4,
    },
    {
      id: "e5",
      date: new Date(2020, 8, 7),
      title: "Home Insurance",
      amount: 339.4,
    },
  ]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
