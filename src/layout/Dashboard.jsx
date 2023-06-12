import { FaHome, FaShoppingCart, FaUserShield, FaUsers, FaUsersCog } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useBooking from '../hooks/useBooking';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import NavBar from '../pages/shared/NavBar/NavBar';
import Footer from '../pages/shared/Footer/Footer';
import { BiAddToQueue } from "react-icons/bi";
import { MdClass, MdPayments } from "react-icons/md";
import { GiTiedScroll } from "react-icons/gi";

const Dashboard = () => {
    const [booking] = useBooking();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div>
            <NavBar></NavBar>
            <div className='container mx-auto'>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">

                        <div className='md:min-h-[calc(100vh-341px)]'>
                            <Outlet></Outlet>
                        </div>
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mb-10">
                            Open drawer
                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-[#1867FE] text-white">
                            {isAdmin ? (
                                <>
                                    <li>
                                    <NavLink to='/dashboard/allusers'>
                                    <FaUsers className="text-2xl mr-5" /> Manage Users
                                        </NavLink>
                                    </li>
                                    <li>
                                    <NavLink to='/dashboard/manageclasses'>
                                    <FaUsersCog className="text-2xl mr-5" /> Manage Classes
                                        </NavLink>
                                    </li>
                                </>
                            ) : isInstructor ? (
                                <>
                                    <li>
                                    <NavLink to='/dashboard/addaclass'>
                                    <BiAddToQueue className="text-2xl mr-5"></BiAddToQueue> Add A Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/instructormyclass'>
                                           <MdClass className="text-2xl mr-5"></MdClass> My Class</NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to='/dashboard/myclass'>
                                            <div className="indicator">
                                                <span className="indicator-item badge badge-secondary -left-2 top-1">
                                                    {booking?.length || 0}+
                                                </span>
                                                <FaShoppingCart className="text-2xl mr-5" />
                                            </div>
                                            My Selected Classes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/myenrolledclasses'>
                                            <GiTiedScroll className="text-2xl mr-5"></GiTiedScroll> My Enrolled Classes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymentHistory'>
                                           <MdPayments className="text-2xl mr-5"></MdPayments> My Payment History</NavLink>
                                    </li>
                                </>
                            )}
                            <div className="divider"></div>
                            <li>
                                <NavLink to='/'>
                                    <FaHome className="text-xl" />
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/classespage'><MdClass className="text-2xl mr-5"></MdClass> Classes Page</NavLink>
                            </li>
                            <li>
                                <NavLink to='/instructorspage'><FaUserShield className="text-2xl mr-5"></FaUserShield>  Instructors Page</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Dashboard;
