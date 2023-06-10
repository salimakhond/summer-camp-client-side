import { useEffect, useState } from "react";


const MyPaymentHistory = () => {

    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => setPaymentHistory(data))
    }, [])
    console.log(paymentHistory)
    return (
        <div>
            
            <h3 className="font-semibold text-3xl mb-5 text-center">My Payment History</h3>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Transaction Id</th>
                            <th>User Email</th>
                            <th className='text-center'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paymentHistory.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {item.date}
                            </td>
                            <td>
                                {item.transactionId}
                            </td>
                            <td>
                                {item.email}
                            </td>
                            <td className="text-end">${item.price}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPaymentHistory;