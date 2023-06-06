

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/CzzS7zJ/summer-camp-banner1.jpg")`, placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="lg:px-40 hero-content justify-normal text-white lg:w-1/2 ">
                            <div className="w-full">
                                <h1 className="mb-5 text-5xl font-bold">Making you good friends in our club.</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/D4xss0c/summer-camp-banner2.jpg")`, placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="lg:px-40 hero-content justify-normal text-white lg:w-1/2 ">
                            <div className="w-full">
                                <h1 className="mb-5 text-5xl font-bold">Getting the know-how of arts & crafts.</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="hero h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/RvRptMY/summer-camp-banner3.jpg")`, placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="lg:px-40 hero-content justify-normal text-white lg:w-1/2 ">
                            <div className="w-full">
                                <h1 className="mb-5 text-5xl font-bold">Learning computers right from the start.</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="hero h-[600px]" style={{ backgroundImage: `url("https://i.ibb.co/gtFMCjZ/summer-camp-banner4.jpg")`, placeItems: 'normal' }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="lg:px-40 hero-content justify-normal text-white lg:w-1/2 ">
                            <div className="w-full">
                                <h1 className="mb-5 text-5xl font-bold">Preparing you for the school of your choice.</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Discover More</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;