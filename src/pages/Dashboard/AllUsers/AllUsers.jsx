import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const AllUsers = () => {
    // const users = true;
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUserData(data));
    }, []);
    console.log(userData);

    return (
        <div>
            <div>
                <div className="uppercase font-semibold mb-10 flex gap-3 items-center justify-between">
                    <h3 className="text-2xl">Total Users: {userData.length}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Roll</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr >
                                <th>{"index + 1"}</th>
                                <td>{"user.name"}</td>
                                <td>{"user.email"}</td>
                                <td>
                                    <button
                                        className="btn bg-[#1867FE] text-white hover:text-black mr-3">Admin</button>
                                    <button
                                        className="btn bg-[#1867FE] text-white hover:text-black">Instructor</button>
                                </td>
                                <td>
                                    <button className="btn bg-red-500 text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr> */}

                            {userData.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <button
                                            className="btn bg-[#1867FE] text-white hover:text-black mr-3">Admin</button>
                                        <button
                                            className="btn bg-[#1867FE] text-white hover:text-black">Instructor</button>
                                    </td>
                                    <td>
                                        <button className="btn bg-red-500 text-white hover:text-black"><FaTrashAlt></FaTrashAlt></button>
                                    </td>

                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;