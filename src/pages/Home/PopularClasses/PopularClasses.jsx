
const PopularClasses = ({ popularClass }) => {
    const { name, image, price, seats, instructor, enrolled } = popularClass;

    return (

        <div className="bg-base-200 rounded-lg">
            <div className="p-5">
                <div className="w-full">
                    <img className="rounded-lg h-[300px] w-full" src={image} alt="classItemImg" />
                </div>
                <div className="w-full mt-5">
                    <h2 className="text-2xl text-[#181D4E] font-bold">Class Name : {name}</h2>
                    <p className="text-[#646672] my-3 text-lg font-semibold">Instructor Name: {instructor}</p>
                    <p className="text-[#646672] my-3 text-lg font-semibold"> Available seats: {seats} </p>
                    <p className="text-[#646672] my-3 text-lg font-semibold">Price: ${price}</p>
                    <p className="text-[#646672] my-3 text-lg font-semibold">Enrolled : {enrolled}</p>

                </div>
            </div>
        </div>
    );
};

export default PopularClasses;