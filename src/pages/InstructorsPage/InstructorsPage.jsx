import { useEffect, useState } from "react";
import Instructors from "./Instructors";


const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    return (
        <div className="px-5 my-10">
            <div className="container m-auto">
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