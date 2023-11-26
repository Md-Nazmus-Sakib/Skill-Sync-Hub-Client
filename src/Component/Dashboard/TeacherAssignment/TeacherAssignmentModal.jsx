import React from 'react';
import { useForm } from 'react-hook-form';

const TeacherAssignmentModal = () => {
    const { register, handleSubmit } = useForm();

    return (
        <>
            <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-[95%] md:w-1/2 max-w-5xl bg-opacity-80">
                    <h1 className='text-3xl font-semibold text-center my-8'>Add Assignment</h1>
                    {/* <form onSubmit={handleSubmit(handleUpdateCourse)}>
                        <div className="form-control w-full">
                            <label htmlFor="title22" className="text-xl my-2">Title</label>
                            <input id='title22' defaultValue={updateClass.title} type="text" {...register("title", {
                            })} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="photo2" className="text-xl my-2">Courses Photo Url</label>
                            <input id='photo2' type="text" defaultValue={updateClass.coursePhoto} {...register("photo", {
                            })} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="price" className="text-xl my-2">Price</label>
                            <input id='price' defaultValue={updateClass.price} type="number" {...register("price", {
                            })} className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="details" className="text-xl my-2">Details</label>
                            <textarea id='details' defaultValue={updateClass.details} type="textarea" {...register("details", {

                            })} className="input input-bordered h-36 w-full" />
                        </div>
                        <div className="modal-action">
                            <input type='submit' defaultValue={"update"} className='open-modal' />
                        </div>
                    </form> */}
                    {/* <button onClick={handelClose} className="btn bg-orange-500 text-white">Close!</button> */}
                </div>
            </dialog>
        </>
    );
};

export default TeacherAssignmentModal;