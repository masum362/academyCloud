import React, { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BorrowBooks = () => {

    const axios = useAxiosSecure();
    const [books, setBooks] = useState([])

    const handleReturn = (bookId) => {
        axios.put(`/return-borrowed-book/${bookId}`).then(res => {
            if (res.status === 201) {
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
                const filteredBooks = books.filter(book => book.bookId !== bookId);
                console.log(filteredBooks)
                setBooks(filteredBooks);
            }
            else {
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
            }

        }).catch(err => console.log(err));
    }

    console.log(books)
    useEffect(() => {
        axios.get("/borrowed-books").then(res => setBooks(res.data.books)).catch(err => console.error(err));
    }, []);
    return (
        <div className='md:mx-12 my-6'>
            <ToastContainer />
            <h1 className='font-bold text-3xl md:text-5xl text-center dark:text-white'>Borrowed Books</h1>

            {
                books.length > 0 ? <>
                    <div className="overflow-x-auto dark:text-white">
                        <table className="dark:text-white w-full text-center gap-3 ">
                            <thead className='border-b py-2 bg-base-100 dark:bg-slate-800  '>
                                <tr className='border-b-2'>
                                    <th>SI.</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Borrowed Date</th>
                                    <th>Return Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    books?.map((book, i) => <tr key={book._id}
                                        className='border-b bg-base-200 dark:bg-slate-700 hover:bg-white/70 dark:hover:bg-slate-500 cursor-pointer'>
                                        <td>{i + 1}</td>
                                        <td>
                                            <img src={book.BooksDetails[0].photoURL} alt="borrow book image" className='w-12 h-12 rounded-full object-cover' />
                                        </td>
                                        <td>{book.BooksDetails[0].name}</td>
                                        <td>{book.BooksDetails[0].Category}</td>
                                        <td>{book.borrowedDate}</td>
                                        <td>{book.returnDate}</td>
                                        <td><span onClick={() => handleReturn(book.bookId)}><Button>Return</Button></span></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </> : <>
                    <div className='w-full h-[50vh] flex items-center justify-center'>
                        <h1 className='font-bold text-lg text-black dark:text-white text-center '>empty list</h1>
                    </div>
                </>
            }

        </div >
    )
}

export default BorrowBooks