import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Classes = ({ classItem }) => {
    const { _id, image, name, instructor, seats, price } = classItem;
    const { user } = useContext(AuthContext)
    const isAdminOrInstructor = true;
    const handleSelectClass = (id) => {
        if (!user) {
            alert('please login first')
            return
        }

        console.log(id)
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
                            onClick={() => handleSelectClass(_id)}
                            disabled={classItem.seats === 0 && isAdminOrInstructor === true}
                            className="btn btn-primary">
                            {classItem.seats === 0 ? 'sold out' : 'select'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classes;