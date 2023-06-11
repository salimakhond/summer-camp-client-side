import Classes from "./Classes";
import useClasses from "../../hooks/useClasses";


const ClassesPage = () => {
    const [classes] = useClasses();

    return (
        <div className="px-5 my-16">
            <div className="container m-auto">
                <div className='w-2/3 m-auto text-center mb-14'>
                    <h2 className='text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4'>All Classes</h2>
                    <p className='text-[#757575]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet vero magni perspiciatis ad molestias in, cupiditate sit temporibus velit placeat, unde itaque repudiandae consequuntur delectus. Aut sapiente neque magni?</p>
                </div>
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