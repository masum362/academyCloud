import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Rating from 'react-rating';
import Button from '../../components/Button/Button';

const IndividualCategory = () => {
    const {id} = useParams();
    const axios = useAxiosSecure();
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`/category/${id}`).then(res => setBooks(res.data.books)).catch(err => console.log(err));
    }, [])

console.log({books,id})


    return (
        <div className='m-4 md:m-8 lg:m-12'>
            <h1 className='font-bold text-3xl md:text-5xl text-center dark:text-white'>{id} Books</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6'>
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
                                <Link to={`/book/${book._id}`} className='w-full'><Button style={"w-full"}>View</Button></Link>

                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default IndividualCategory