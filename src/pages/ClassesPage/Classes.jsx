import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useBooking from "../../hooks/useBooking";

const Classes = ({ classItem }) => {
    const { _id, image, name, instructor, seats, price } = classItem;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useBooking();

    const handleBookingClass = (classItem) => {
        if (user && user.email) {
            const cartItem = { classId: _id, image, name, instructor, price, email: user.email }
            fetch('http://localhost:5000/booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch();
                        Swal.fire(
                            'Your item added successfully!',
                            'You clicked the button!',
                            'success'
                        )
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first!!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
        console.log(classItem)
    }
    return (
        <div>
            <div className="bg-base-200 rounded-lg">
                <div className=" p-5">
                    <div className="w-full">
                        <img className=" rounded-lg h-[300px]" src={image} alt="classItemImg" />
                    </div>
                    <div className="w-full mt-5">
                        <h2 className="text-2xl text-[#181D4E] font-bold">{name}</h2>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Instructor Name: {instructor}</p>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Available seats : {seats}</p>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Price : ${price}</p>
                        <button
                            onClick={() => handleBookingClass(classItem)}
                            disabled={classItem.seats === 0 && user === true}
                            className="btn btn-primary">
                            {classItem.seats === 0 ? 'sold out' : 'Booking'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;