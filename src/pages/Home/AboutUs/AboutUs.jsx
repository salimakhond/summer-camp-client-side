

const AboutUs = () => {
    return (
        <div className="hero px-5 pt-[50px] md:pt-[80px] lg:pt-[130px]">
            <div className="container mx-auto">
                <div className="hero-content p-0 flex-col lg:flex-row justify-center lg:gap-16 gap-8">
                    <div className="w-full">
                        <img src="https://i.ibb.co/QdVw7rp/volleyball.webp" className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="w-full">
                        <h1 className="text-primary text-sm lg:text-xl font-bold mb-3 lg:mb-5">About Us</h1>
                        <h1 className="text-3xl text-[#1A1919] lg:leading-[64px] lg:text-5xl font-extrabold">We are qualified <br /> &amp; of experience <br /> in this field</h1>
                        <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <button className="btn btn-outline btn-primary" style={{ border: "1px solid" }} z="true">
                            Get More Info
                        </button>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutUs;