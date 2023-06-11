import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";


const AddAClass = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/instructorsClasses', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        console.log(data)
    };
    return (
        <div className="px-5">
            <div className="container m-auto py-[30px] md:py-[50px] lg:py-[80px] bg-white">
                <h3 className="font-semibold text-2xl text-center mb-5">Add A New Class</h3>
                <form className="my-0" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("name")}
                                placeholder="Classes Name"
                            />
                        </div>

                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("instructor", { required: true })}
                                placeholder="Instructor Name"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("seats", { required: true })}
                                placeholder="Seats"
                                type="number"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("price", { required: true })}
                                placeholder="Price"
                                type="number"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                {...register("image")}
                                placeholder="Image Link"
                                type="url"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                className="input input-bordered"
                                value={user?.email}
                                {...register("email")}
                                placeholder="your email"
                                type="email"
                            />

                        </div>
                        <div className="form-control hidden">
                            <input
                                className="input input-bordered"
                                {...register("status")}
                                placeholder="Status"
                                type="text"
                                value={'pending'}
                            />
                        </div>

                        <div className="form-control hidden">
                            <input
                                className="input input-bordered"
                                {...register("enrolled", { required: true })}
                                placeholder="Enrolled"
                                type="number"
                                value={'0'}
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary  mx-auto" value="Add A Class" type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAClass;