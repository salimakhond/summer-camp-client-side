import React from 'react';

const Classess = () => {
    return (
        <div>
            <div className="bg-base-200 rounded-lg">
                <div className=" p-5 flex justify-between items-center gap-5 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <img className=" rounded-lg" src={image} alt="Toy" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl text-[#181D4E] font-bold">{'toyName'}</h2>
                        <p className="text-[#646672] my-3 text-lg font-semibold">Price : ${'price'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Classess;