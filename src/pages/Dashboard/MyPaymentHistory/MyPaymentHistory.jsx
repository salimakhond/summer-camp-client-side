import { useEffect, useState } from "react";


const MyPaymentHistory = () => {

    const [paymentHistory, setPaymentHistory] = useState([]);

    useEffect(() => {
        fetch('https://summer-cump-school-server.vercel.app/payments')
            .then(res => res.json())
            .then(data => setPaymentHistory(data))
    }, [])
    
    return (
        <div className="pb-20 pt-10 lg:pl-10">
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
                            <td>{new Date(item.date).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' })}</td>

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