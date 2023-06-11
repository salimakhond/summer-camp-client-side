import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import News from "../News/News";


const Home = () => {
    
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popular-classes')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            {
                <div className="px-5 py-[50px] md:py-[80px] lg:py-[130px]">
                    <div className="container m-auto">
                        <div className='w-2/3 m-auto text-center mb-14'>
                            <h2 className='text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4'>Popular Classes</h2>
                            <p className='text-[#757575]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet vero magni perspiciatis ad molestias in, cupiditate sit temporibus velit placeat, unde itaque repudiandae consequuntur delectus. Aut sapiente neque magni?</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                popularClasses.map(popularClass => <PopularClasses
                                    key={popularClass._id}
                                    popularClass={popularClass}
                                >

                                </PopularClasses>)
                            }
                        </div>
                    </div>
                </div>
            }
            <PopularInstructors></PopularInstructors>
            <News></News>
        </div>
    );
};

export default Home;