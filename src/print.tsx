import { useRef } from 'react';
import { jsPDF } from 'jspdf';

const BillGenerator = () => {
  const billRef = useRef();

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.html(billRef.current!, {
      callback: function (pdf) {
        pdf.save('bill.pdf');
      },
      x: 10,
      y: 10,
      width: 180, // mm
      windowWidth: 650, // optional for rendering width
    });
  };

  return (
      <div className="d-flex card w-full " ref={billRef} style={{ padding: '20px', border: '1px solid #000' }} dir='rtl'>
    
    <div className="card">
  <img src="./vite.svg" className="card-img-top" style={{height:80}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">اللغة العربية</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
      <button onClick={generatePDF} style={{ marginTop: '20px' }}>
        تحميل{' '}
      </button>
    </div>
  );
};

export default BillGenerator;
