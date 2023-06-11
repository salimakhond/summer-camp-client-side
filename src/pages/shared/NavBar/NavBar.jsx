import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';
import useInstructor from "../../../hooks/useInstructor";
import useAdmin from "../../../hooks/useAdmin";
import sportsSchoolImg from '../../../assets/sportsschool.png'


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/classespage'>Classes Page</Link></li>
        <li><Link to='/instructorspage'>Instructors Page</Link></li>
        {
            isAdmin && (
                <li>
                    <Link to="/dashboard/allusers">Dashboard</Link>
                </li>
            )
        }
        {
            isInstructor && (
                <li>
                    <Link to="/dashboard/addaclass">Dashboard</Link>
                </li>
            )
        }
        {
            user && !isAdmin && !isInstructor && (
                <li>
                    <Link to="/dashboard/myclass">Dashboard</Link>
                </li>
            )
        }
    </>
    return (
        <div className="px-5 bg-base-100 ">
            <div className="navbar container m-auto px-0 h-20">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <label tabIndex={0} className="btn btn-ghost pl-0 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case p-0 mb-3">
                        <img className="w-14" src={sportsSchoolImg} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end flex items-center">
                    {
                        user && <div className="tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : 'No Username Found'}>
                            {
                                user.photoURL ? <img className="w-12 rounded-full" src={user.photoURL} /> :
                                    <FaUserCircle className="text-4xl rounded-full"></FaUserCircle>
                            }
                        </div>
                    }
                    {
                        user ? <button style={{border: "1px solid"}} onClick={handleLogout} className="btn btn-outline mt-0 btn-primary ml-4">Log Out</button> : <Link to="/login">
                            <button style={{border: "1px solid"}}  className="btn btn-outline btn-primary mt-0 ml-4">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default NavBar;