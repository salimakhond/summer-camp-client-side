import { motion } from "framer-motion";

const PopularInstructor = ({ popularInstructor }) => {

    const { image, name, email } = popularInstructor;

    return (
        <motion.div
            className="bg-base-200 rounded-lg"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-5 text-center">
                <motion.div
                    className="avatar"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="w-52 rounded-full">
                        <img src={image} alt="User Avatar" />
                    </div>
                </motion.div>
                <div className="w-full mt-5">
                    <motion.h2
                        className="text-2xl text-[#181D4E] font-bold"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Name: {name}
                    </motion.h2>
                    <motion.p
                        className="text-[#646672] my-3 text-lg font-semibold"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Email: {email}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
};

export default PopularInstructor;