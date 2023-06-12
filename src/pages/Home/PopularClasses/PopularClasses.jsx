import { motion } from "framer-motion";


const PopularClasses = ({ popularClass }) => {
    const { name, image, price, seats, instructor, enrolled } = popularClass;

    return (

        <motion.div
            className="bg-base-200 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="p-5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="w-full">
                    <motion.img
                        className="rounded-lg h-[300px] w-full"
                        src={image}
                        alt="classItemImg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    />
                </div>
                <div className="w-full mt-5">
                    <motion.h2
                        className="text-2xl text-[#181D4E] font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Class Name: {name}
                    </motion.h2>
                    <motion.p
                        className="text-[#646672] my-3 text-lg font-semibold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        Instructor Name: {instructor}
                    </motion.p>
                    <motion.p
                        className="text-[#646672] my-3 text-lg font-semibold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        Available seats: {seats}
                    </motion.p>
                    <motion.p
                        className="text-[#646672] my-3 text-lg font-semibold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        Price: ${price}
                    </motion.p>
                    <motion.p
                        className="text-[#646672] my-3 text-lg font-semibold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        Enrolled: {enrolled}
                    </motion.p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PopularClasses;