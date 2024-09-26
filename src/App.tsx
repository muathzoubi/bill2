import { useState, useEffect } from 'react';
import './App.css'; // Importing the CSS
import BillForm from './BillForm';
import BillList from './BillList';
import BillGenerator from './print';

const App = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const savedBills = JSON.parse(localStorage.getItem('bills')!) || [];
    setBills(savedBills);
  }, []);

  const addBill = (bill: any) => {
    const updatedBills = [...bills, bill];
    setBills(updatedBills as any);
    localStorage.setItem('bills', JSON.stringify(updatedBills));
  };

  return (
    <div className="app" dir="rtl">
      <h1>انشاء فاتورة</h1>
      <div>
        <BillForm addBill={addBill} />
        <BillList bills={bills} />
      </div>
    </div>
  );
};

export default App;
