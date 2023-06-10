import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: manageClasses = [], refetch } = useQuery(['manageClasses'], async () => {
        const res = await axiosSecure.get('/instructorsClasses')
        return res.data;
    })
    console.log(manageClasses)

    const handleDenied = (classItem) => {
        fetch(`http://localhost:5000/instructorsClasses/denied/${classItem?._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Class has been Denied",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };
    const handleApproved = (classItem) => {
        fetch(`http://localhost:5000/instructorsClasses/approved/${classItem?._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Class has been Approved",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div>
            <h3 className="font-semibold text-2xl text-center">Manage Classes</h3>
            <div className="uppercase font-semibold mb-10 flex gap-3 items-center justify-between">
                <h3 className="text-2xl">Total Classes: {manageClasses.length}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th className='text-center'>Price</th>
                            <th></th>
                            <th className='text-center'>Seats</th>
                            <th>Status</th>
                            <th className='text-center'>Approved Button</th>
                            <th className='text-center'>Denied Button</th>
                            <th className='text-center'>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageClasses.map((item, index) => <tr key={item._id}>
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
                                {item.seats}
                            </td>
                            <td>
                                {item.status}
                            </td>
                            <td className='text-center'>
                                <button
                                    className="btn bg-success btn-sm text-white hover:text-black"
                                    onClick={() => handleApproved(item)}
                                    disabled={
                                        item.status == "Approved" ||
                                        item.status == "Denied"
                                    }
                                >
                                    Approve
                                </button>
                            </td>
                            <td className='text-center'>
                                <button
                                    className="btn bg-error btn-sm text-white hover:text-black"
                                    onClick={() => handleDenied(item)}
                                    disabled={
                                        item.status == "Approved" ||
                                        item.status == "Denied"
                                    }
                                >
                                    Denied
                                </button>
                            </td>
                            <td className='text-center'>
                                <Link to={`/dashboard/payment/${item._id}`}><button className="btn bg-[#1867FE] btn-sm text-white hover:text-black">Feedback</button></Link>
                            </td>


                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;