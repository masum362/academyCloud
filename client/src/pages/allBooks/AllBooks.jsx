import React, { useContext, useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import { CiGrid41, CiBoxList } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import Rating from 'react-rating'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../context/AuthProvider';

const AllBooks = () => {
    const [isGrid, setIsGrid] = useState(localStorage.getItem("isGrid") || false);
    const [books, setBooks] = useState([])
    const navigate = useNavigate();
    const axios = useAxiosSecure();

    useEffect(() => {
        axios.get("/books").then(res => setBooks(res.data.books)).catch(err => console.log(err));
    }, [])


    const listMode = () => {
        localStorage.setItem("isGrid", "false")
        setIsGrid(false);
    }

    const gridMode = () => {
        localStorage.setItem("isGrid", "true")
        setIsGrid(true);
    }

    const getAvailableBooks = () => {
        axios.get("/available-books").then(res => setBooks(res.data.books)).catch(err => console.log(err));
    }

    return (
        <div className='md:my-12  my-4'>
            <h1 className='font-bold text-3xl md:text-5xl text-center dark:text-white'>All Books</h1>
            <div className='flex items-center justify-between mx-4 py-6 md:mx-12'>
                <div>
                    <span onClick={getAvailableBooks}><Button>Show available books</Button></span>
                </div>
                <div className='dark:text-white flex items-center justify-center gap-2'>
                    <span className='cursor-pointer' onClick={listMode}><CiBoxList size={36} /></span>
                    <span className='cursor-pointer' onClick={gridMode}><CiGrid41 size={36} /></span>
                </div>
            </div>

            <div className='p-6'>

                {
                    isGrid ? <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4'>
                            {
                                books?.map(book => <div key={book._id} className="cursor-pointer group card card-compact  h-96 bg-base-100 overflow-hidden">
                                    <figure><img src={book.photoURL} alt="Shoes" className='w-full h-full object-cover group-hover:rotate-6 group-hover:scale-110 duration-500' /></figure>
                                    <div className="card-body absolute left-0 bottom-0 bg-white group-hover:opacity-100 opacity-80 group-hover: w-full  translate-y-24 group-hover:translate-y-0 transition-all duration-500">
                                        <div className='flex items-center justify-between'>
                                            <h1 className='text-xl font-bold'>{book.name}</h1>
                                            <span className='w-full '>
                                                <Rating readonly placeholderRating={book.rating} />
                                            </span>
                                        </div>
                                        <p className='text-lg'>Author: <span className='text-themePrimary font-bold uppercase'>{book.author}</span></p>
                                        <p className='text-lg'>Category: <span className='font-bold'>{book.Category}</span></p>
                                        <div className='flex items-center justify-between gap-2'>
                                            <Link to={`/update/${book._id}`} className='w-full'  ><Button style={"w-full"}>Update</Button></Link>
                                            <Link to={`/book/${book._id}`} className='w-full'><Button style={"w-full"}>View</Button></Link>

                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>
                    </> : <>
                        <div className="overflow-x-auto dark:text-white">
                            <table className="dark:text-white w-full text-center gap-3 ">
                                <thead className='border-b py-2 bg-base-100 dark:bg-slate-800  '>
                                    <tr className='border-b-2'>
                                        <th>SI.</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Author</th>
                                        <th>Rating</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        books?.map((book, i) => <tr key={book._id}
                                            className='border-b bg-base-200 dark:bg-slate-700 hover:bg-white/70 dark:hover:bg-slate-500 cursor-pointer'>
                                            <td>{i + 1}</td>
                                            <td><img src={book.photoURL} alt="borrow book image" className='w-12 h-12 rounded-full object-cover' /></td>
                                            <td>{book.name}</td>
                                            <td>{book.Category}</td>
                                            <td>{book.author}</td>
                                            <td>{book.rating}</td>
                                            <td>
                                                <div className='flex gap-2'>
                                                    <Link to={`/update/${book._id}`} className='w-full'  ><Button style={"w-full"}>Update</Button></Link>
                                                    <Link to={`/book/${book._id}`} className='w-full'><Button style={"w-full"}>View</Button></Link>
                                                </div>

                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div></>
                }




            </div>

        </div>
    )
}

export default AllBooks