import { FaComment, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const News = () => {
    return (
        <motion.div
            className="px-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container m-auto pb-[50px] md:pb-[80px] lg:pb-[130px]">
                <div className="w-2/3 m-auto text-center mb-14">
                    <motion.h2
                        className="text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Latest News
                    </motion.h2>
                    <motion.p
                        className="text-[#757575]"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet
                        vero magni perspiciatis ad molestias in, cupiditate sit temporibus
                        velit placeat, unde itaque repudiandae consequuntur delectus. Aut
                        sapiente neque magni?
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div
                        className="card card-compact bg-base-100 shadow-xl"
                        whileHover={{ scale: 1.03 }}
                    >
                        <figure>
                            <img
                                src="https://i.ibb.co/YhnrqKV/golf.jpg"
                                className="w-full h-[320px]"
                                alt="Golf"
                            />
                        </figure>
                        <div className="flex justify-between px-4 py-3 text-white bg-red-500 items-center">
                            <p className="flex items-center">
                                <FaRegCalendarAlt className="mr-2" />
                                June 12 2023
                            </p>
                            <p className="flex items-center">
                                <FaComment className="mr-2" />
                                0 Comment
                            </p>
                        </div>
                        <div className="card-body">
                            <Link>
                                <motion.h2
                                    className="card-title"
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    Mastering the Swing Pro Tips for Improving Your Golf Game?
                                </motion.h2>
                            </Link>
                            <motion.p
                                className="mb-2"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                                quia eligendi accusantium in deserunt veritatis.
                            </motion.p>
                            <Link
                                className="underline font-semibold mb-3"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="card card-compact bg-base-100 shadow-xl"
                        whileHover={{ scale: 1.03 }}
                    >
                        <figure>
                            <img
                                src="https://i.ibb.co/pdd7y6s/martialarts.jpg"
                                className="w-full h-[320px]"
                                alt="Martial Arts"
                            />
                        </figure>
                        <div className="flex justify-between px-4 py-3 text-white bg-red-500 items-center">
                            <p className="flex items-center">
                                <FaRegCalendarAlt className="mr-2" />
                                June 12 2023
                            </p>
                            <p className="flex items-center">
                                <FaComment className="mr-2" />
                                0 Comment
                            </p>
                        </div>
                        <div className="card-body">
                            <Link>
                                <motion.h2
                                    className="card-title"
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    Unleashing Your Inner Warrior Exploring the World of Martial Arts
                                    Training!
                                </motion.h2>
                            </Link>
                            <motion.p
                                className="mb-2"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quia
                                eligendi accusantium in deserunt veritatis.
                            </motion.p>
                            <Link
                                className="underline font-semibold mb-3"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        className="card card-compact bg-base-100 shadow-xl"
                        whileHover={{ scale: 1.03 }}
                    >
                        <figure>
                            <img
                                src="https://i.ibb.co/QMT84Wd/soccertraining.jpg"
                                className="w-full h-[320px]"
                                alt="Soccer Training"
                            />
                        </figure>
                        <div className="flex justify-between px-4 py-3 text-white bg-red-500 items-center">
                            <p className="flex items-center">
                                <FaRegCalendarAlt className="mr-2" />
                                June 12 2023
                            </p>
                            <p className="flex items-center">
                                <FaComment className="mr-2" />
                                0 Comment
                            </p>
                        </div>
                        <div className="card-body">
                            <Link>
                                <motion.h2
                                    className="card-title"
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                    Unlocking Your Soccer Potential Strategies for Effective Training
                                    and Skill Enhancement?
                                </motion.h2>
                            </Link>
                            <motion.p
                                className="mb-2"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                            >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quia
                                eligendi accusantium in deserunt veritatis.
                            </motion.p>
                            <Link
                                className="underline font-semibold mb-3"
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 }}
                            >
                                Read More
                            </Link>
                        </div>
                    </motion.div>


                </div>
            </div>
        </motion.div>
    );
};

export default News;