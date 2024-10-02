import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ title, amount: parseFloat(amount) });
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 mb-2"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border border-gray-300 mb-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
