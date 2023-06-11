import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";


const InstructorMyClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { data: instructorsClasses = [] } = useQuery(['instructorsClasses'], async () => {
        const res = await axiosSecure.get(`/instructorsClasses/${user.email}`)
        return res.data;
    })
    console.log(instructorsClasses)

    return (
        <div>
            <h3 className="font-semibold text-2xl text-center">Instructor My Class</h3>

            <div className="uppercase font-semibold mb-10 flex gap-3 items-center justify-between">
                    <h3 className="text-2xl">Total Classes: {instructorsClasses.length}</h3>
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
                            <th className='text-center'>Total Enrolled Students</th>
                            <th className='text-center'>Feedback</th>
                            <th className='text-center'>Update Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {instructorsClasses.map((item, index) => <tr key={item._id}>
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
                                {item?.enrolled}
                            </td>
                            <td className='text-center'>
                                {item?.feedback}
                            </td>
                            <td className='text-center'>
                                <Link to={`/dashboard/payment/${item._id}`}><button className="btn bg-[#1867FE] btn-sm text-white hover:text-black">Update</button></Link>
                            </td>
                        </tr>)}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InstructorMyClass;