import { Key } from 'react';

const BillList = ({ bills }: any) => {
  const printRec=(billData:any,billUser:string)=>{
    console.log(billData ,billUser)
  }
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
              index: number 
            ) => (
              <tr key={index}>
                <th scope="row">{bill.date}</th>
                <td>{bill.items}</td>
                <td>{bill.desc}</td>
                <td>{bill.amount}</td>
                <td><button onClick={()=>printRec(bill,bill.user)}>M</button></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BillList;
