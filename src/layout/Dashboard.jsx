import { FaHome, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useBooking from '../hooks/useBooking';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import NavBar from '../pages/shared/NavBar/NavBar';
import Footer from '../pages/shared/Footer/Footer';

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
                                            <FaUsers className="text-xl" /> Manage Users
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/manageclasses'>
                                            <FaUsers className="text-xl" /> Manage Classes
                                        </NavLink>
                                    </li>
                                </>
                            ) : isInstructor ? (
                                <>
                                    <li>
                                        <NavLink to='/dashboard/addaclass'>
                                            <FaWallet className="text-xl" /> Add A Class
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/InstructorMyClass'>My Class</NavLink>
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
                                        <NavLink to='/dashboard/myenrolledclasses'>My Enrolled Classes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/paymentHistory'>My Payment History</NavLink>
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
                                <NavLink to='/classespage'>Classes Page</NavLink>
                            </li>
                            <li>
                                <NavLink to='/instructorspage'>Instructors Page</NavLink>
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
