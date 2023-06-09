// import { useContext } from 'react';
import { FaHome, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';
import useBooking from '../hooks/useBooking';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';

const Dashboard = () => {

    const [booking] = useBooking();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    // console.log(isInstructor)


    // const isAdmin = true;
    // const { user } = useContext(AuthContext);
    // console.log(user)
    return (
        <div className='container mx-auto'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-5 lg:p-10">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#1867FE] text-white">

                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/allusers'><FaUsers className="text-xl"></FaUsers> Manage Users</NavLink></li>

                            </> : isInstructor ? <>
                                <li><NavLink to='/dashboard/addaclass'><FaWallet className="text-xl"></FaWallet>Add A Class</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard/myclass'>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-secondary -left-2 top-1">{booking?.length || 0}+</span>
                                        <FaShoppingCart className="text-2xl mr-5"></FaShoppingCart>
                                    </div> My Selected Classes</NavLink></li>
                                <li><NavLink to='/'><FaWallet></FaWallet> Payment History</NavLink></li>
                            </>
                        }

                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome className="text-xl"></FaHome>Home</NavLink></li>
                        <li><NavLink to='/classespage'>Classes Page</NavLink></li>
                        <li><NavLink to='/instructorspage'>Instructors Page</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;