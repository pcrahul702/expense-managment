import React from 'react';

const ExpenseList = ({ expenses }) => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">Expense List</h2>
      <ul className="list-disc pl-5">
        {expenses.map((expense, index) => (
          <li key={index} className="my-2">
            {expense.title}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <h2 className="mt-4 font-bold">
        Total Expense: ${total.toFixed(2)}
      </h2>
    </div>
  );
};

export default ExpenseList;
