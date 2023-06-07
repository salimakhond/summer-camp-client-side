import { useEffect, useState } from "react";
import Instructors from "./Instructors";


const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])
    console.log(instructors)

    return (
        <div className="px-5 my-10">
            <div className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        instructors.map(instructor => <Instructors
                            key={instructor.id}
                            instructor={instructor}
                        ></Instructors>)
                    }
                </div>
            </div>
        </div>
    );
};

export default InstructorsPage;