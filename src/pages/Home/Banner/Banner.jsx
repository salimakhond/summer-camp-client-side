import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="carousel w-full">
            <motion.div
                id="slide1"
                className="carousel-item relative w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className="hero h-[600px]"
                    style={{
                        backgroundImage: `url("https://i.ibb.co/CzzS7zJ/summer-camp-banner1.jpg")`,
                        placeItems: "normal",
                    }}
                >
                    <div className="hero-overlay bg-opacity-30"></div>
                    <motion.div
                        className="lg:px-40 hero-content justify-normal text-white lg:w-1/2 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-full">
                            <motion.h1
                                className="mb-5 text-5xl font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Making you good friends in our club.
                            </motion.h1>
                            <motion.p
                                className="mb-5"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                                id nisi.
                            </motion.p>
                            <motion.button
                                className="btn btn-primary"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Discover More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </motion.div>
            <motion.div
                id="slide2"
                className="carousel-item relative w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className="hero h-[600px]"
                    style={{
                        backgroundImage: `url("https://i.ibb.co/D4xss0c/summer-camp-banner2.jpg")`,
                        placeItems: "normal",
                    }}
                >
                    <div className="hero-overlay bg-opacity-30"></div>
                    <motion.div
                        className="lg:px-40 hero-content justify-normal text-white lg:w-1/2 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-full">
                            <motion.h1
                                className="mb-5 text-5xl font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Getting the know-how of arts & crafts.
                            </motion.h1>
                            <motion.p
                                className="mb-5"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                                id nisi.
                            </motion.p>
                            <motion.button
                                className="btn btn-primary"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Discover More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </motion.div>
            <motion.div
                id="slide3"
                className="carousel-item relative w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className="hero h-[600px]"
                    style={{
                        backgroundImage: `url("https://i.ibb.co/RvRptMY/summer-camp-banner3.jpg")`,
                        placeItems: "normal",
                    }}
                >
                    <div className="hero-overlay bg-opacity-30"></div>
                    <motion.div
                        className="lg:px-40 hero-content justify-normal text-white lg:w-1/2 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-full">
                            <motion.h1
                                className="mb-5 text-5xl font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Learning computers right from the start.
                            </motion.h1>
                            <motion.p
                                className="mb-5"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                                id nisi.
                            </motion.p>
                            <motion.button
                                className="btn btn-primary"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Discover More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </motion.div>
            <motion.div
                id="slide4"
                className="carousel-item relative w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div
                    className="hero h-[600px]"
                    style={{
                        backgroundImage: `url("https://i.ibb.co/gtFMCjZ/summer-camp-banner4.jpg")`,
                        placeItems: "normal",
                    }}
                >
                    <div className="hero-overlay bg-opacity-30"></div>
                    <motion.div
                        className="lg:px-40 hero-content justify-normal text-white lg:w-1/2 "
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-full">
                            <motion.h1
                                className="mb-5 text-5xl font-bold"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                Preparing you for the school of your choice.
                            </motion.h1>
                            <motion.p
                                className="mb-5"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                                excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
                                id nisi.
                            </motion.p>
                            <motion.button
                                className="btn btn-primary"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                Discover More
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;