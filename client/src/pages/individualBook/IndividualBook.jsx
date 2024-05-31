import React, { useContext, useEffect, useState } from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useParams } from 'react-router-dom';
import Button from '../../components/Button/Button'
import { AuthContext } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IndividualBook = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const { user } = useContext(AuthContext)
    const [book, setBook] = useState({})
    const axios = useAxiosSecure();
    const { bookId } = useParams();
    useEffect(() => {
        axios.get(`/book/${bookId}`).then(res => setBook(res.data)).catch(err => console.log(err));
    }, []);

    const handleBorrowBook = ({ returnDate }) => {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${year}-0${month}-${day}`;

        const borrowedBook = {
            uid: user.uid,
            displayName: user.displayName,
            borrowed_Date: currentDate,
            return_Date: returnDate,
            bookId: book._id
        }

        axios.post('/add-borrowed-books', borrowedBook).then(res => {

            if (res.status === 201) {
                toast.success('Successfully borrowed the book', {
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
            } else if (res.status === 208) {
                toast.warn(res.data.message, {
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
            } else if(res.status === 203) {
                toast.error(res.data.message, {
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
            }

            document.getElementById('my_modal_3').close()

        }).catch(err => {
            console.log(err)
        })

    }

    return (
        <div className='my-12 flex flex-col gap-4 lg:px-12'>
            <ToastContainer />
            <div className='lg:my-12 flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start gap-8  '>

                <div className='lg:w-96 flex items-center justify-center bg-[#fff]/80 dark:bg-black/55 rounded-lg p-4 m-4 sm:w-1/2 md:w-full'>
                    <figure>
                        <img src={book.photoURL} alt="" className='rounded-lg object-cover w-full' />
                    </figure>
                </div>


                <div className='flex flex-col items-center md:items-start gap-4 md:max-w-lg dark:text-slate-300 p-4'>

                    <h1 className='text-2xl md:text-5xl font-bold text-themePrimary dark:text-themeSecondary'>{book.name}</h1>
                    <p>Author: {book.author}</p>
                    <p>Category: {book.Category}</p>
                    <p>Rating: {book.rating}</p>
                    <p>Author: {book.author}</p>
                    <p className='text-center md:text-start'>{book.short_description}</p>
                    {
                        book.quantity > 0 ? <>
                            <button className="btn bg-themePrimary text-white hover:bg-themePrimary/40 border-none" onClick={() => document.getElementById('my_modal_3').showModal()}>Borrow</button>

                        </> : <p className='text-red-500'>Out of stock</p>
                    }

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit(handleBorrowBook)} className='flex flex-col gap-4 p-4'>
                                <div className='flex flex-col text-black gap-2'>
                                    <label htmlFor="returnDate" className='text-lg font-bold'>Return Date</label>
                                    <input {...register("returnDate", {
                                        required: {
                                            value: true,
                                            message: "return date is required."
                                        }
                                    })} type="date" placeholder="Type here" className="input input-bordered w-full " />
                                    {errors.returnDate && <span className='text-red-500'>{errors.returnDate?.message}</span>}
                                </div>
                                <Button type={"submit"}>Borrow</Button>
                            </form>

                        </div>
                    </dialog>

                </div>
                <div>
                </div>


            </div>
            <div className='text-black dark:text-white w-full flex flex-col items-center justify-center md:items-start md:justify-start lg:gap-2'>
                <h1 className='text-themePrimary dark:text-themeSecondary font-bold text-5xl'>Description</h1>
                <p className='text-center md:text-start'>{book.content}</p>
            </div>
        </div >
    )
}

export default IndividualBook