

const Instructors = ({ instructor }) => {
    const { image, name, email } = instructor;
    return (
        <div>
            <div className="bg-base-200 rounded-lg">
                <div className="p-5 text-center">
                    <div className="avatar">
                        <div className="w-52 rounded-full">
                            <img src={image} />
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <h2 className="text-2xl text-[#181D4E] font-bold">Name : {name}</h2>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;