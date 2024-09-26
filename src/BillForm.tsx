import { useState } from 'react';

const BillForm = ({ addBill }: any) => {
  const [user, setUser] = useState('');
  const [amount, setAmount] = useState('');
  const [itemsCounter, setItemsCounter] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!user || !amount) return;

    const bill = {
      user,
      items: itemsCounter,
      desc: description,
      amount: parseFloat(amount),
      date: new Date().toLocaleDateString(),
    };
    addBill(bill);
    setUser('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="المستخدم"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </div>
      <div className="g-1">
        <textarea
          placeholder="تفاصيل"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />{' '}
      </div>
      <div className="g-2">
        <input
          type="number"
          placeholder="عدد"
          value={itemsCounter}
          onChange={(e) => setItemsCounter(e.target.value)}
          required
        />{' '}
        <input
          type="number"
          placeholder="المبلغ"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div className="g-1">
        <button type="submit">حفظ </button>
      </div>
    </form>
  );
};

export default BillForm;
