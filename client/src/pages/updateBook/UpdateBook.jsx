import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import addBookSVG from '../../assets/add-book.svg'
import { useForm } from 'react-hook-form'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateBook = () => {
    const [categories, setCategories] = useState([])
    const book = useLoaderData();
    const axios = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/categories").then(res => setCategories(res.data)).catch(err => console.log(err));
    })

    const onFormSubmit = (data) => {
        data.rating = parseFloat(data.rating)
        data.quantity = parseInt(data.quantity);
        console.log(data)
        axios.patch(`/update-book/${book._id}`, data).then(res => {
            if(res.status ===201){
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
                console.log('reset comitng')
                reset();
                navigate(`/book/${book._id}`)
            }
        }).catch(err => {
            toast.success(err.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        })
        console.log(data);
    }
    return (
        <div className=' m-2 md:m-6'>
            <ToastContainer />
            <h1 className='font-bold text-3xl md:text-5xl text-center dark:text-white'>Update Book</h1>

            <div className='flex flex-row-reverse items-center justify-center'>
                <div className='w-full flex items-center justify-center'>
                    <form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col w-full gap-4 m-8 md:m-12 '>
                        <div>
                            <input type="text" defaultValue={book.photoURL} placeholder="Image Url" {...register("photoURL", {
                                required: {
                                    value: true,
                                    message: "Image Url must be required."
                                }
                            })} id='image' className="input input-bordered w-full " />
                            {errors.photoURL && <span className='text-red-500'>{errors.photoURL?.message}</span>}
                        </div>
                        <div>
                            <input type="text" defaultValue={book.name} placeholder="Name" {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name must be required."
                                }
                            })} id='name' className="input input-bordered w-full " />
                            {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}
                        </div>
                        <div>
                            <input type="number" defaultValue={book.quantity} placeholder="Quantity" {...register("quantity", {
                                required: {
                                    value: true,
                                    message: "Quantity must be required."
                                }
                            })} id='quantity' className="input input-bordered w-full " />
                            {errors.quantity && <span className='text-red-500'>{errors.quantity?.message}</span>}
                        </div>
                        <div>
                            <input type="text" defaultValue={book.author} placeholder="Author" id='author' {...register("author", {
                                required: {
                                    value: true,
                                    message: "Author must be required."
                                }
                            })} className="input input-bordered w-full " />
                            {errors.author && <span className='text-red-500'>{errors.author?.message}</span>}

                        </div>
                        <div>
                            <select id='category' defaultValue={book.Category} name='category' {...register("Category", {
                                required: {
                                    value: true,
                                    message: "Category must be required."
                                }
                            })} className="select select-bordered w-full">
                                <option selected value={book.Category}>{book.Category}</option>
                                {categories.map(category => <option value={category.title} key={category._id}>{category.title}</option>)}

                            </select>
                            {errors.category && <span className='text-red-500'>{errors.category?.message}</span>}

                        </div>
                        <div>

                            <input type="text" defaultValue={book.short_description} placeholder="Short description" id='description' {...register("short_description", {
                                required: {
                                    value: true,
                                    message: "Short description must be required."
                                }
                            })} className="input input-bordered w-full " />
                            {errors.short_description && <span className='text-red-500'>{errors.short_description?.message}</span>}

                        </div>
                        <div>
                            <input type="text" defaultValue={book.rating} placeholder="Rating" id='rating' {...register("rating", {
                                required: 'Rating is required',
                                pattern: {
                                    value: /^([0-9]|[0-9]\.\d)$/,
                                    message: 'Rating must be a single-digit number or a decimal value',
                                },
                                validate: (value) => value >= 0 && value <= 9,
                            })} className="input input-bordered w-full " />
                            {errors.rating && <span className='text-red-500'>{errors.rating?.message}</span>}

                        </div>
                        <div className='md:col-span-2'>
                            <textarea defaultValue={book.content} className="textarea textarea-bordered w-full"  {...register("content", {
                                required: {
                                    value: true,
                                    message: "Content must be required",
                                }
                            })} placeholder="Content"></textarea>
                            {errors.content && <span className='text-red-500'>{errors.content?.message}</span>}

                        </div>
                        <div>
                            <Button type={"submit"} style={"w-full"}>Update</Button>
                        </div>
                    </form>
                </div>
                <div className='hidden md:flex w-full justify-center items-center'>
                    <img src={addBookSVG} alt="a svg image" className='' />
                </div>
            </div>


        </div>
    )
}

export default UpdateBook