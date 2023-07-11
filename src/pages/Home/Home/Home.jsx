import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import News from "../News/News";
import { motion } from "framer-motion";
import AboutUs from "../AboutUs/AboutUs";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {

    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        fetch('https://summer-cump-school-server.vercel.app/popular-classes')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])

    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div className="px-5 py-[50px] md:py-[80px] lg:py-[130px]">
                <div className="container m-auto">
                    <div className="w-2/3 m-auto text-center mb-14">
                        <motion.h2
                            className="text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Popular Classes
                        </motion.h2>
                        <motion.p
                            className="text-[#757575]"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet
                            vero magni perspiciatis ad molestias in, cupiditate sit
                            temporibus velit placeat, unde itaque repudiandae consequuntur
                            delectus. Aut sapiente neque magni?
                        </motion.p>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {popularClasses.map((popularClass) => (
                            <PopularClasses
                                key={popularClass._id}
                                popularClass={popularClass}
                            ></PopularClasses>
                        ))}
                    </motion.div>
                </div>
            </div>
            <WhyChooseUs></WhyChooseUs>
            <PopularInstructors></PopularInstructors>
            <News></News>
        </div>
    );
};

export default Home;