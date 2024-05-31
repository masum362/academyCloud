import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import Button from '../../components/Button/Button';

const Categories = () => {
    const categories = useLoaderData();


    console.log(categories);
    return (
        <div className='m-4 md:m-8 lg:m-16'>
            <h1>  <h1 className='text-3xl text-center md:text-5xl font-bold text-black dark:text-white'>All Books <span

                className='text-themePrimary dark:text-themeSecondary underline'>Categories</span></h1></h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-4'>

                {
                    categories?.map(category => <div className="card w-full max-h-[400px] min-h-[400px] image-full group cursor-pointer">
                        <figure><img src={category.imageUrl} alt="Shoes" className='w-full h-full object-cover object-center group-hover:scale-150 duration-500 ' /></figure>
                        <div className="card-body group-hover:translate-y-20 duration-500">
                            <h2 className="card-title">{category.title}</h2>
                            <div className="card-actions">
                                <Link to={`/category/${category.title}`}><Button className="btn btn-primary">See All Books</Button></Link>
                            </div>
                        </div>
                    </div>)
                }

            </div>        </div>
    )
}

export default Categories