import { FaHome, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {


    const isAdmin = true;
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
                                <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><FaWallet></FaWallet> Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>
                            </> : <>
                                <li><NavLink to='/dashboard'><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard'>
                                    <div className="indicator">
                                        <span className="indicator-item badge badge-secondary -left-2">{'cart?.length || 0'}+</span>
                                        <FaShoppingCart className="text-2xl"></FaShoppingCart>
                                    </div> My Cart</NavLink></li>
                                <li><NavLink to='/'><FaWallet></FaWallet> Payment History</NavLink></li>
                            </>
                        }



                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to='/classespage'>Classes Page</NavLink></li>
                        <li><NavLink to='/instructorspage'>Instructors Page</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;