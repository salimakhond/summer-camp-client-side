import Classes from "./Classes";
import useClasses from "../../hooks/useClasses";


const ClassesPage = () => {
    const [classes] = useClasses();

    return (
        <div className="px-5 my-10">
            <div className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        classes.map(classItem => <Classes
                            key={classItem._id}
                            classItem={classItem}
                        ></Classes>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassesPage;