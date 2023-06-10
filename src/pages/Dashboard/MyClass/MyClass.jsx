import { Link } from "react-router-dom";
import useBooking from "../../../hooks/useBooking";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyClass = () => {
    const [booking, refetch] = useBooking();
    const totalPrice = booking.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${item._id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className="uppercase font-semibold mb-10 flex gap-3 items-center justify-between">
                <h3 className="text-2xl">Total Orders: {booking.length}</h3>
                <h3 className="text-2xl">Total Price: $ {totalPrice}</h3>
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
                            <th></th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking.map((item, index) => <tr key={item._id}>
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
                                {item.name}
                            </td>
                            <td>
                                {item.instructor}
                            </td>
                            <td className="text-end">${item.price}</td>
                            <td></td>
                            <td className='text-center'>
                                <button onClick={() => handleDelete(item)} className="btn bg-red-500 text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                            <td className='text-center'>
                                <Link to={`/dashboard/payment/${item._id}`}><button className="btn bg-[#1867FE] text-white">Payment</button></Link>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;