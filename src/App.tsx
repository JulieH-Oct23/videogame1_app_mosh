import { useState } from "react";
import ExpenseList from "./expense-tracker/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

export const categories = ["Groceries", "Utilites", "Entertainment"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState(" ");
  const [expenses, setExpenses] = useState([
    { Id: 1, description: "Dozen Eggs", amount: 12, category: "Groceries" },
    { Id: 2, description: "Raisin Bread", amount: 5, category: "Groceries" },
    {
      Id: 3,
      description: "I Can't Believe Its Not Butter Light",
      amount: 4,
      category: "Groceries",
    },
    {
      Id: 4,
      description: "Crystal Light Raspberry Lemonade",
      amount: 2,
      category: "Groceries",
    },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(Id) => setExpenses(expenses.filter((e) => e.Id !== Id))}
      />
    </div>
  );
}

export default App;
