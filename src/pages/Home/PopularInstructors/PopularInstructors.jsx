import { useEffect, useState } from "react";
import PopularInstructor from "./PopularInstructor";
import { motion } from "framer-motion";

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/popular-instructors')
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, [])

    return (
        <motion.div
        className="px-5 pb-[50px] md:pb-[80px] lg:pb-[130px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container m-auto">
          <motion.div
            className="w-2/3 m-auto text-center mb-14"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4">
              Popular Instructors
            </h2>
            <p className="text-[#757575]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet
              vero magni perspiciatis ad molestias in, cupiditate sit temporibus
              velit placeat, unde itaque repudiandae consequuntur delectus. Aut
              sapiente neque magni?
            </p>
          </motion.div>
  
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {popularInstructors.map((popularInstructor) => (
              <motion.div
                key={popularInstructor._id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PopularInstructor popularInstructor={popularInstructor} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
};

export default PopularInstructors;