import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);

    const { data: manageClasses = [], refetch } = useQuery(
        ["manageClasses"],
        async () => {
            const res = await axiosSecure.get("/instructorsClasses");
            return res.data;
        }
    );

    const handleDenied = (classItem) => {
        fetch(`https://summer-cump-school-server.vercel.app/instructorsClasses/denied/${classItem?._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "warning",
                        title: "Class has been Denied",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleApproved = (classItem) => {
        fetch(
            `https://summer-cump-school-server.vercel.app/instructorsClasses/approved/${classItem?._id}`,
            {
                method: "PATCH",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Class has been approved & Add classes page",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };

    const handleOpenFeedbackModal = (classItem) => {
        setSelectedClass(classItem);
        setFeedbackModalOpen(true);
    };

    const handleCloseFeedbackModal = () => {
        setFeedbackModalOpen(false);
    };

    const handleFeedbackSubmit = (classItem, feedback) => {
        fetch(`https://summer-cump-school-server.vercel.app/instructorsClasses/feedback/${classItem._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ feedback }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.matchedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Feedback submitted successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    handleCloseFeedbackModal(true);
                }
            })
    };




    return (
        <div className="pb-20 pt-10 pl-10">
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
                            <th>Instructor email</th>
                            <th className="text-center">Price</th>
                            <th></th>
                            <th className="text-center">Seats</th>
                            <th>Status</th>
                            <th className="text-center">Approved Button</th>
                            <th className="text-center">Denied Button</th>
                            <th className="text-center">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageClasses.map((item, index) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.instructor}</td>
                                <td>{item.email}</td>
                                <td className="text-end">${item.price}</td>
                                <td></td>
                                <td className="text-center">{item.seats}</td>
                                <td>{item.status}</td>
                                <td className="text-center">
                                    <button
                                        className="btn bg-success btn-sm text-white hover:text-black"
                                        onClick={() => handleApproved(item)}
                                        disabled={
                                            item.status === "Approved" || item.status === "Denied"
                                        }
                                    >
                                        Approve
                                    </button>
                                </td>
                                <td className="text-center">
                                    <button
                                        className="btn bg-error btn-sm text-white hover:text-black"
                                        onClick={() => handleDenied(item)}
                                        disabled={
                                            item.status === "Approved" || item.status === "Denied"
                                        }
                                    >
                                        Denied
                                    </button>
                                </td>
                                <td className="text-center">
                                    <button
                                        className="btn bg-[#1867FE] btn-sm text-white hover:text-black"
                                        onClick={() => handleOpenFeedbackModal(item)}
                                        disabled={
                                            item.feedback
                                        }
                                    >
                                        Feedback
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Feedback Modal */}
            {feedbackModalOpen && selectedClass && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-lg p-6 w-96">
                        <h2 className="text-xl font-semibold mb-4">Provide Feedback</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const feedback = e.target.feedback.value;
                                handleFeedbackSubmit(selectedClass, feedback);
                            }}
                        >
                            <div className="mb-4">
                                <label htmlFor="feedback" className="block font-medium">
                                    Feedback:
                                </label>
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    rows="4"
                                    className="w-full border border-gray-300 rounded p-2"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="btn bg-gray-300 text-black mr-2"
                                    onClick={handleCloseFeedbackModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn bg-[#1867FE] text-white"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageClasses;