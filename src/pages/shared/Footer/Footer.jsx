import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className='bg-[#1A1919] px-5 text-white py-16 md:py-24 lg:py-32'>
            <div className='container m-auto'>
                <div className='md:flex md:flex-wrap lg:flex-nowrap lg:gap-24 container bg-[#1A1919] text-white border-b border-[#7E90FE]'>
                    <div className='md:w-6/12 lg:w-4/12 mb-10'>
                        <Link to='/'><img className="w-28 mb-5" src="https://i.ibb.co/qpyGtmK/toyStore.png" alt="" /></Link>
                        <p className='mb-5 md:mr-10 lg:mr-0  text-[#ffffffb3]'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>

                        <div className="flex gap-3">
                            <Link className="p-3 bg-white text-black rounded-full"><FaFacebook className="text-xl"></FaFacebook></Link>
                            <Link className="p-3 bg-white text-black rounded-full"><FaInstagram className="text-xl"></FaInstagram></Link>
                            <Link className="p-3 bg-white text-black rounded-full"><FaTwitter className="text-xl"></FaTwitter></Link>
                            <Link className="p-3 bg-white text-black rounded-full"><FaLinkedin className="text-xl"></FaLinkedin></Link>
                        </div>
                    </div>
                    <div className='md:w-6/12 lg:w-2/12 mb-10'>
                        <h4 className='mb-4'>Company</h4>
                        <ul className='text-[#ffffffb3]'>
                            <li className='mb-4'>About Us</li>
                            <li className='mb-4'>Contact Us</li>
                            <li className='mb-4'>Latest News</li>
                            <li className='mb-4'>Blog</li>
                        </ul>
                    </div>
                    <div className='md:w-6/12 lg:w-2/12 mb-10'>
                        <h4 className='mb-4'>Product</h4>
                        <ul className='text-[#ffffffb3]'>
                            <li className='mb-4'>Toys</li>
                            <li className='mb-4'>Gadget</li>
                            <li className='mb-4'>Cartoon Kit</li>
                            <li className='mb-4'>Blocks Build Toy</li>
                            <li className='mb-4'>Games</li>
                        </ul>
                    </div>
                    <div className='md:w-6/12 lg:w-2/12 mb-10'>
                        <h4 className='mb-4'>Support</h4>
                        <ul className='text-[#ffffffb3]'>
                            <li className='mb-4'>Help Desk</li>
                            <li className='mb-4'>Sales</li>
                            <li className='mb-4'>Become a Partner</li>
                            <li className='mb-4'>Developers</li>
                        </ul>
                    </div>
                    <div className='md:w-6/12 lg:w-3/12 mb-10'>
                        <h4 className='mb-4'>Contact</h4>
                        <ul className='text-[#ffffffb3]'>
                            <li className='mb-4'>524 Broadway , NYC</li>
                            <li className='mb-4'>+1 256 - 589 - 5308</li>
                            <li className='mb-4'>info@gmail.com</li>
                        </ul>
                    </div>
                </div>
                <div className='md:flex justify-between text-center text-[#ffffff66] pt-12'>
                    <p className='mb-4 md:mb-0'><span>&copy;</span> 2023 ToyStore. All Rights Reserved</p>
                    <p>Powered by ToyStore</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;