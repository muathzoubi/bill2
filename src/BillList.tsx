import { Key } from 'react';

const BillList = ({ bills }: any) => {
  return (
    <div>
      <h2>الفواتير المحفوظة </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">تاريح</th>
            <th scope="col">عدد</th>
            <th scope="col">تفاصيل</th>
            <th scope="col">المبلغ</th>
            <th scope="col">تحميل</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {bills.map(
            (
              bill: {
                user: string;
                amount: string;
                date: string;
                items: string;
                desc: string;
              },
              index: Key | null | undefined
            ) => (
              <tr key={index}>
                <th scope="row">{bill.date}</th>
                <td>{bill.items}</td>
                <td>{bill.desc}</td>
                <td>{bill.amount}</td>
                <td>{bill.amount}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BillList;
