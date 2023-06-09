import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { createNewUser, UpdateUserData, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');

    const [registerError, setRegisterError] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        createNewUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess('Create a User Successfully Done')

                UpdateUserData(data.name, data.photoURL)
                    .then(() => {
                        navigate('/login');
                        logOut();
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire(
                                        'user profile update!',
                                        'You clicked the button!',
                                        'success'
                                    )
                                }
                            })

                    })
                    .catch(error => {
                        console.error(error.message);
                        setRegisterError(error.message);
                    })
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="px-5 py-[50px] md:py-[80px] lg:py-[130px] bg-white">
            <div className="">
                <div className="card m-auto w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-5xl font-bold text-center">Register</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" required />
                                {errors.name && <span className="text-error mt-2">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" required />
                                {errors.email && <span className="text-error mt-2">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="url" {...register("photoURL", { required: true })} name='photoURL' placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-error mt-2">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*[A-Z])(?=.*[!@#$&*]).*$/,
                                    })} name='password' placeholder="Password" className="input input-bordered w-full pr-10" />
                                    {errors.password?.type === 'required' && <p className="text-error mt-2">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-error mt-2">Your password less than 6 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-error mt-2">Your password must have one capital letter and one special character.</p>}
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                                        onClick={() => setShowPassword(show => !show)}
                                    >
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        {...register("confirmPassword", {
                                            required: true,
                                            validate: (value) =>
                                                value === watch("password") ||
                                                "Passwords do not match",
                                        })}
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        className="input input-bordered w-full pr-10"
                                        required
                                    />
                                    {errors.confirmPassword && (
                                        <p className="text-error mt-2">Passwords do not match</p>
                                    )}
                                    <button
                                        type="button"
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                                        onClick={() => setShowConfirmPassword(show => !show)}
                                    >
                                        {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                                    </button>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover mt-3">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='my-5 text-center'>All Ready Have An Account ?
                            <Link className='text-orange-500 font-bold ml-3' to='/login'>Login</Link>
                        </p>
                        <SocialLogin></SocialLogin>
                        <p className="text-success text-center">{success}</p>
                        <p className="text-error text-center">{registerError}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;