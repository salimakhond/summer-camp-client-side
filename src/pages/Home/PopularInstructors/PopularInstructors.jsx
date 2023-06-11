import { useEffect, useState } from "react";
import PopularInstructor from "./PopularInstructor";

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popular-instructors')
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, [])

    return (
        <div className="px-5 pb-[50px] md:pb-[80px] lg:pb-[130px]">
            <div className="container m-auto">
                <div className='w-2/3 m-auto text-center mb-14'>
                    <h2 className='text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4'>Popular Instructors</h2>
                    <p className='text-[#757575]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet vero magni perspiciatis ad molestias in, cupiditate sit temporibus velit placeat, unde itaque repudiandae consequuntur delectus. Aut sapiente neque magni?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        popularInstructors.map(popularInstructor => <PopularInstructor
                            key={popularInstructor._id}
                            popularInstructor={popularInstructor}
                        ></PopularInstructor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;