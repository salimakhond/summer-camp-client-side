import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));

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
                            <input type="password" {...register("password", { required: true })} name='password' placeholder="Password" className="input input-bordered" />
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
                        <button className=" btn btn-circle btn-outline btn-error hover:text-white">
                            <FaGoogle></FaGoogle>
                        </button>
                    </div>
                    <p className="text-success text-center">success</p>
                    <p className="text-error text-center">error</p>
                </div>
            </div>
        </div>
    );
};

export default Login;