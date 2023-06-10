import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useBooking from "../../hooks/useBooking";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";

const Classes = ({ classItem }) => {
    const { _id, image, name, instructor, seats, price } = classItem;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useBooking();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [selectedSeats, setSelectedSeats] = useState(seats);
    const [isSelectItem, setIsSelectItem] = useState(false);

    const handleBookingClass = () => {
        if (!user) {
            Swal.fire({
                title: "Please log in first!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login now!",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", { state: { from: location } });
                }
            });
            return;
        }

        if (isAdmin || isInstructor) {
            return;
        }

        // if (classItem.seats === 0 || isSelectItem) {
        //   return;
        // }

        if (selectedSeats === 0) {
            return;
        }

        const selectItem = {
            classId: _id,
            image,
            name,
            instructor,
            price,
            email: user.email,
        };

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(selectItem),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    setIsSelectItem(true);
                    setSelectedSeats(selectedSeats - 1);
                    refetch();
                    Swal.fire(
                        "Your item select successfully!",
                        "You clicked the button!",
                        "success"
                    );
                }
            });
    };

    return (
        <div>
            <div className={`bg-base-200 rounded-lg ${selectedSeats === 0 ? "text-white bg-red-500" : ""}`}>
                <div className="p-5">
                    <div className="w-full">
                        <img className="rounded-lg h-[300px]" src={image} alt="classItemImg" />
                    </div>
                    <div className="w-full mt-5">
                        <h2 className={`text-2xl text-[#181D4E] font-bold ${selectedSeats === 0 ? "text-white" : ""}`}>{name}</h2>
                        <p className={`text-[#646672] my-3 text-lg font-semibold ${selectedSeats === 0 ? "text-white" : ""}`}>Instructor Name: {instructor}</p>
                        <p className={`text-[#646672] my-3 text-lg font-semibold ${selectedSeats === 0 ? "text-white" : ""}`} > Available seats: {selectedSeats} </p>
                        <p className={`text-[#646672] my-3 text-lg font-semibold ${selectedSeats === 0 ? "text-white" : ""}`}>Price: ${price}</p>
                        <button
                            onClick={handleBookingClass}
                            disabled={
                                classItem.seats === 0 ||
                                isAdmin ||
                                isInstructor ||
                                isSelectItem
                            }
                            className="btn btn-primary"
                        >
                            {classItem.seats === 0 ? "Sold Out" : "Select"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;