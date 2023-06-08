import { useEffect, useState } from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    // const users = true;
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUserData(data));
    }, []);
    // console.log(userData);

    const handleMakeUpdate = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    // User is now an admin
                    // Update the user's role in the userData state
                    const updatedData = userData.map((item) => {
                        if (item._id === user._id) {
                            return { ...item, role: 'admin' };
                        }
                        return item;
                    });
                    setUserData(updatedData);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            });
    };

    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    // User is now an instructor
                    // Update the user's role in the userData state
                    const updatedData = userData.map((item) => {
                        if (item._id === user._id) {
                            return { ...item, role: 'instructor' };
                        }
                        return item;
                    });
                    setUserData(updatedData);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            });
    };

    const handleDelete = (user) => {
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
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setUserData((prevData) => prevData.filter((u) => u._id !== user._id));
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
        console.log(user)
    };



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
                                        {user.role === 'admin' ? (
                                            'admin'
                                        ) : (
                                            <button
                                                onClick={() => handleMakeUpdate(user)}
                                                className="btn bg-[#1867FE] text-white hover:text-black"
                                            >
                                                <FaUsers />
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        {user.role === 'instructor' ? (
                                            'instructor'
                                        ) : (
                                            <button
                                                onClick={() => handleMakeInstructor(user)}
                                                className="btn bg-[#1867FE] text-white hover:text-black"
                                            >
                                                Make Instructor
                                            </button>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDelete(user)}
                                            className="btn bg-red-500 text-white hover:text-black"
                                        >
                                            <FaTrashAlt />
                                        </button>
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