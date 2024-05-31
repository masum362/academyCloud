import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const BooksCategory = () => {
  const axios = useAxiosSecure();
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios.get("/categories").then(res => setCategories(res.data)).catch(err => console.log(err));
  }, [])


console.log({categories});
  return (
    <div className='my-24'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl text-start md:text-5xl font-bold text-black dark:text-white max-w-[70%] sm:max-w-full'>Explore Top Books <span

          className='text-themePrimary dark:text-themeSecondary underline'>Categories</span></h1>
        <Link to={'/categories'}><Button>Show All</Button></Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-8 gap-4'>

        {
          categories.slice(0, 4).map(category => <div className="card w-full max-h-[400px] image-full group cursor-pointer">
            <figure><img src={category.imageUrl} alt="Shoes" className='w-full h-full object-cover object-center group-hover:scale-150 duration-500 ' /></figure>
            <div className="card-body group-hover:translate-y-20 duration-500">
              <h2 className="card-title">{category.title}</h2>
              <div className="card-actions">
                <Link to={`/category/${category.title}`}><Button className="btn btn-primary">See All Books</Button></Link>
              </div>
            </div>
          </div>)
        }

      </div>
    </div>
  )
}

export default BooksCategory