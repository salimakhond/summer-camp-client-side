import { useEffect, useState } from "react";
import Classes from "./Classes";


const ClassesPage = () => {
    const [classes, setClasses] = useState([]);


    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])


    console.log(classes)

    return (
        <div className="px-5 mt-10">
            <div className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        classes.map(classItem => <Classes
                            key={classItem.id}
                            classItem={classItem}
                        ></Classes>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassesPage;