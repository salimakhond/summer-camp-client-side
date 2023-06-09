import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const [isInstructor, isInstructorLoading] = useInstructor();

    const location = useLocation();
    if (loading || isInstructorLoading) {
        return (
            <progress className="progress w-56"></progress>
        );
    }
    if (user && isInstructor) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/' replace></Navigate>
};

export default InstructorRoute;