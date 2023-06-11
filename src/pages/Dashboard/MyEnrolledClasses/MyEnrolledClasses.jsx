import { useEffect, useState } from "react";


const MyEnrolledClasses = () => {
    const [enrolledClasses, setEnrolledClasses] = useState([]);
    const totalPrice = enrolledClasses.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(totalPrice.toFixed(2))

    useEffect(() => {
        fetch('http://localhost:5000/payments')
            .then(res => res.json())
            .then(data => setEnrolledClasses(data))
    }, [])


    return (
        <div className="pb-20 pt-10 pl-10">
            <h3 className="font-semibold text-3xl mb-5 text-center">My Enrolled Classes</h3>

            <div className="uppercase font-semibold mb-10 flex gap-3 items-center justify-between">
                <h3 className="text-2xl">Total Orders: {enrolledClasses.length}</h3>
                <h3 className="text-2xl">Total Price: $ {price}</h3>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class IMAGE</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th className='text-center'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledClasses.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.itemName}
                            </td>
                            <td>
                                {item.instructorName}
                            </td>
                            <td className="text-end">${item.price}</td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyEnrolledClasses;