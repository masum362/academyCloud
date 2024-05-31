import React from 'react'
import Button from '../../components/Button/Button'
import addBookSVG from '../../assets/add-book.svg'
import { useForm } from 'react-hook-form'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {

  const axios = useAxiosSecure();
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const categories = useLoaderData();

  const onFormSubmit = (data) => {
    data.rating = parseFloat(data.rating)
    data.quantity = parseInt(data.quantity);
    axios.post("/add-book", data).then(res => {
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
        reset();
      }
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
      <div className='m-2 my-6 md:m-6'>

        <ToastContainer />
        <h1 className='font-bold text-3xl md:text-5xl text-center dark:text-white'>Add Book</h1>

        <div className='flex items-center justify-center'>
          <div className='w-full flex items-center justify-center'>
            <form onSubmit={handleSubmit(onFormSubmit)} className='flex flex-col w-full gap-4 m-8 md:m-12 '>
              <div>
                <input type="text" placeholder="Image Url" {...register("photoURL", {
                  required: {
                    value: true,
                    message: "Image Url must be required."
                  }
                })} id='image' className="input input-bordered w-full " />
                {errors.photoURL && <span className='text-red-500'>{errors.photoURL?.message}</span>}
              </div>
              <div>
                <input type="text" placeholder="Name" {...register("name", {
                  required: {
                    value: true,
                    message: "Name must be required."
                  }
                })} id='name' className="input input-bordered w-full " />
                {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}
              </div>
              <div>
                <input type="number" placeholder="Quantity" {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity must be required."
                  }
                })} id='quantity' className="input input-bordered w-full " />
                {errors.quantity && <span className='text-red-500'>{errors.quantity?.message}</span>}
              </div>
              <div>
                <input type="text" placeholder="Author" id='author' {...register("author", {
                  required: {
                    value: true,
                    message: "Author must be required."
                  }
                })} className="input input-bordered w-full " />
                {errors.author && <span className='text-red-500'>{errors.author?.message}</span>}

              </div>
              <div>
                <select id='category' name='Category' {...register("Category", {
                  required: {
                    value: true,
                    message: "Category must be required."
                  }
                })} className="select select-bordered w-full">
                  <option disabled selected value={""}>Category</option>
                  {categories.map(category => <option value={category.title} key={category._id}>{category.title}</option>)}

                </select>
                {errors.Category && <span className='text-red-500'>{errors.Category?.message}</span>}

              </div>
              <div>

                <input type="text" placeholder="Short description" id='description' {...register("short_description", {
                  required: {
                    value: true,
                    message: "Short description must be required."
                  }
                })} className="input input-bordered w-full " />
                {errors.short_description && <span className='text-red-500'>{errors.short_description?.message}</span>}

              </div>
              <div>
                <input type="text" placeholder="Rating" id='rating' {...register("rating", {
                  required: 'Rating is required',
                  pattern: {
                    value: /^([0-4])(\.\d)?|5$/,
                    message: 'Rating must be a in 1 to 5',
                  },
                  validate: (value) => value >= 0 && value <= 9,
                })} className="input input-bordered w-full " />
                {errors.rating && <span className='text-red-500'>{errors.rating?.message}</span>}

              </div>
              <div className='md:col-span-2'>
                <textarea className="textarea textarea-bordered w-full"  {...register("content", {
                  required: {
                    value: true,
                    message: "Content must be required",
                  }
                })} placeholder="Content"></textarea>
                {errors.content && <span className='text-red-500'>{errors.content?.message}</span>}

              </div>
              <div>
                <Button type={"submit"} style={"w-full"}>Add</Button>
              </div>
            </form>
          </div>
          <div className='hidden md:flex w-full justify-center items-center'>
            <img src={addBookSVG} alt="a svg image" className='' />
          </div>
        </div>


      </div>
    </>
  )
}

export default AddBook