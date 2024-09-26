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
    <div>
      <div ref={billRef} style={{ padding: '20px', border: '1px solid #000' }}>
        <h2>Bill</h2>
        <p>Date: {new Date().toLocaleDateString()}</p>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>2</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td>1</td>
              <td>$20</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td>$40</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <button onClick={generatePDF} style={{ marginTop: '20px' }}>
        تحميل{' '}
      </button>
    </div>
  );
};

export default BillGenerator;
