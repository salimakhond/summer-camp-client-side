import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateClass = () => {
    const classes = useLoaderData();

    const { _id, email, enrolled, price, image, instructor, name, seats, status } = classes;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.seats = parseInt(data.seats);
        data.price = parseFloat(data.price);
        data.enrolled = parseInt(data.enrolled);

        fetch(`http://localhost:5000/classes-by-id/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your toy update is successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };


    return (
        <div className="container m-auto p-20 py-[30px] md:py-[50px] lg:py-[80px] bg-white">
            <h3 className="font-semibold text-2xl text-center mb-5">Update Your Class</h3>
            <form className="my-0" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {errors.exampleRequired && <span>This field is required</span>}
                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            {...register("name")}
                            placeholder="Classes Name"
                            defaultValue={name}
                        />
                    </div>

                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            {...register("instructor", { required: true })}
                            placeholder="Instructor Name"
                            defaultValue={instructor}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            {...register("seats", { required: true })}
                            placeholder="Seats"
                            type="number"
                            defaultValue={seats}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            {...register("price", { required: true })}
                            placeholder="Price"
                            type="number"
                            step="0.01"
                            min="0"
                            defaultValue={price}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            {...register("image")}
                            placeholder="Image Link"
                            type="url"
                            defaultValue={image}
                        />
                    </div>
                    <div className="form-control">
                        <input
                            className="input input-bordered"
                            value={email}
                            {...register("email")}
                            placeholder="your email"
                            type="email"
                        />

                    </div>
                    <div className="form-control ">
                        <input
                            className="input input-bordered"
                            {...register("status")}
                            placeholder="Status"
                            type="text"
                            value={status}
                        />
                    </div>

                    <div className="form-control ">
                        <input
                            className="input input-bordered"
                            {...register("enrolled", { required: true })}
                            placeholder="Enrolled"
                            type="number"
                            value={enrolled}
                        />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary  mx-auto" value="Add A Class" type="submit" />
                </div>

            </form>
        </div>
    );
};

export default UpdateClass;