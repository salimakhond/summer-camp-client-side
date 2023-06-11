import { FaComment, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <div className="px-5">
            <div className="container m-auto pb-[50px] md:pb-[80px] lg:pb-[130px]">
                <div className='w-2/3 m-auto text-center mb-14'>
                    <h2 className='text-[#1A1919] text-4xl lg:text-5xl font-extrabold mb-4'>Latest News</h2>
                    <p className='text-[#757575]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum amet vero magni perspiciatis ad molestias in, cupiditate sit temporibus velit placeat, unde itaque repudiandae consequuntur delectus. Aut sapiente neque magni?</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/YhnrqKV/golf.jpg" className="w-full h-[320px]" /></figure>
                        <div className="flex justify-between px-4 py-3 text-white bg-red-500 items-center">
                            <p className="flex items-center"><FaRegCalendarAlt className="mr-2"></FaRegCalendarAlt> June 12 2023</p>
                            <p className="flex items-center"><FaComment className="mr-2"></FaComment>0 Comment</p>
                        </div>
                        <div className="card-body">
                            <Link><h2 className="card-title">Mastering the Swing Pro Tips for Improving Your Golf Game?</h2></Link>
                            <p className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quia eligendi accusantium in deserunt veritatis.</p>
                            <Link className="underline font-semibold mb-3">Read More</Link>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/pdd7y6s/martialarts.jpg" className="w-full h-[320px]" /></figure>
                        <div className="flex justify-between px-4 py-3 text-white bg-red-500 items-center">
                            <p className="flex items-center"><FaRegCalendarAlt className="mr-2"></FaRegCalendarAlt> June 12 2023</p>
                            <p className="flex items-center"><FaComment className="mr-2"></FaComment>0 Comment</p>
                        </div>
                        <div className="card-body">
                            <Link><h2 className="card-title">Unleashing Your Inner Warrior Exploring the World of Martial Arts Training!</h2></Link>
                            <p className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quia eligendi accusantium in deserunt veritatis.</p>
                            <Link className="underline font-semibold mb-3">Read More</Link>
                        </div>
                    </div>
                    <div className="card card-compact bg-base-100 shadow-xl">
                        <figure><img src="https://i.ibb.co/QMT84Wd/soccertraining.jpg" className="w-full h-[320px]" /></figure>
                        <div className="flex justify-between px-4 py-3 text-white bg-red-500 items-center">
                            <p className="flex items-center"><FaRegCalendarAlt className="mr-2"></FaRegCalendarAlt> June 12 2023</p>
                            <p className="flex items-center"><FaComment className="mr-2"></FaComment>0 Comment</p>
                        </div>
                        <div className="card-body">
                            <Link><h2 className="card-title">Unlocking Your Soccer Potential Strategies for Effective Training and Skill Enhancement?</h2></Link>
                            <p className="mb-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quia eligendi accusantium in deserunt veritatis.</p>
                            <Link className="underline font-semibold mb-3">Read More</Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default News;