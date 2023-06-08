import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { saveUser } from "../../api/AuthApi";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { logIn, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState('');


    

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        logIn(data.email, data.password)
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser);
                saveUser(signInUser)
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    };


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                saveUser(logInUser);
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <div className="px-5 py-[50px] md:py-[80px] lg:py-[130px] bg-white">
            <div className="card m-auto w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-5xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className="text-error mt-2">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} name='password' placeholder="Password" className="input input-bordered w-full pr-10" />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                                    onClick={() => setShowPassword(show => !show)}
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <p className='my-5 text-center'>New to Toy Marketplace?
                        <Link className='text-orange-500 font-bold ml-3' to='/register'>Register</Link>
                    </p>
                    <div className="divider">OR</div>
                    <div className="text-center">
                        <button onClick={handleGoogleSignIn} className=" btn btn-circle btn-outline btn-error hover:text-white">
                            <FaGoogle></FaGoogle>
                        </button>
                    </div>
                    <p className="text-error text-center">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;