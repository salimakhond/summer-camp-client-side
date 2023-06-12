import { useEffect, useState } from "react";
import Instructors from "./Instructors";


const InstructorsPage = () => {

    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('https://summer-cump-school-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className="px-5 my-16">
            <div className="container m-auto">
                <div className='w-2/3 m-auto text-center mb-14'>
                    <h2 className='text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4'>All Instructor</h2>
                    <p className='text-[#757575]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet vero magni perspiciatis ad molestias in, cupiditate sit temporibus velit placeat, unde itaque repudiandae consequuntur delectus. Aut sapiente neque magni?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        instructors.map(instructor => <Instructors
                            key={instructor._id}
                            instructor={instructor}
                        ></Instructors>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorsPage;