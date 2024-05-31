import React from 'react'
import backgroundImageurl from '../../assets/backgroundImage.avif'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-9xl font-bold  text-transparent bg-clip-text bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImageurl})`, }}>Oops</h1>
            <p className='max-w-lg'>We're sorry, but the page you are looking for doesn't exist.
                You can search your topic using the box below or return to the homepage.</p>
            <Link to={"/"}><button className='btn bg-transparent border-2 border-themePrimary hover:bg-themePrimary text-black hover:text-white'>Go Back To Home</button></Link>
        </div>
    )
}

export default Error