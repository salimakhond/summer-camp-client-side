import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
// import { saveUser } from "../../api/saveUser";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { logIn } = useContext(AuthContext);

    const [error, setError] = useState('');


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        logIn(data.email, data.password)
            .then(result => {
                const signInUser = result.user;
                console.log(signInUser);
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


    return (
        <div className="px-5 py-[50px] md:py-[80px] lg:py-[130px] bg-white">
            <div className="card m-auto w-full max-w-sm shadow-2xl bg-base-100">
                <div className="p-8">
                    <h2 className="text-5xl font-bold text-center">Login</h2>
                    <form className="m-0" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered m-0" />
                            {errors.email && <span className="text-error mt-2">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} name='password' placeholder="Password" className="input input-bordered w-full pr-10 m-0" />
                                <div
                                    type="button"
                                    className="p-2 absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                                    onClick={() => setShowPassword(show => !show)}
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </div>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary m-0" type="submit" value="Sign In" />
                        </div>
                    </form>
                    <p className='my-5 text-center'>New to Toy Marketplace?
                        <Link className='text-orange-500 font-bold ml-3' to='/register'>Register</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                    <p className="text-error text-center">{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;