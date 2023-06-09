import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: userData = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch("http://localhost:5000/users")
        return res.json();
    })
    console.log(userData)

    const handleMakeUpdate = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
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
                    refetch();
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
                            refetch();
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
                                <th className='text-center'>Role</th>
                                <th className='text-center'>Role</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className='text-center'>
                                        {user.role === 'admin' ? (
                                            'Admin'
                                        ) : (
                                            <button
                                                onClick={() => handleMakeUpdate(user)}
                                                disabled={user.role === 'instructor' || user.role === 'admin'
                                                }
                                                className="btn bg-[#1867FE] text-white hover:text-black"
                                            >
                                                <FaUsers />
                                            </button>
                                        )}
                                    </td>
                                    <td className='text-center'>
                                        {user.role === 'instructor' ? (
                                            'Instructor'
                                        ) : (
                                            <button
                                                onClick={() => handleMakeInstructor(user)}
                                                disabled={user.role === 'instructor' || user.role === 'admin'
                                                }
                                                className="btn bg-[#1867FE] text-white hover:text-black"
                                            >
                                                Make Instructor
                                            </button>
                                        )}
                                    </td>
                                    <td className='text-center'>
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