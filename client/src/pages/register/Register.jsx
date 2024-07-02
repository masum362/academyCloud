import React, { useContext, useState } from 'react'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthProvider';
import loginBanner from '../../assets/loginGradiant.jpg'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Register = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { LoginUser, RegisterUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();
    const axios = useAxiosSecure();

    const handleOnSubmit = ({ email, password, photoURL, name }) => {
        RegisterUser(email, password).then(result => {
            updateUser(result.user, name, photoURL,).then(async (res) => {
                console.log('user updated')
            })
            LoginUser(email, password).then(res => {
            console.log("user logged in successfully")
            toast.success('Successfully looged in user', {
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
            setTimeout(() => {
                navigate(location.state ? location.state : "/");
            }, 2000);
        }).catch(err => {
            toast.error(err.message, {
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
        }
        );
    }

    return (
        <div>
            <ToastContainer />
            <div className='flex flex-col md:flex-row items-center justify-start m-2 sm:mx-12 md:mx-16 lg:mx-32 md:my-12 rounded-lg' style={{ backgroundImage: `url(${loginBanner})` }}>
                <div className='w-full flex flex-col items-center justify-center gap-2 py-6'>
                    <h1 className='text-white font-bold text-5xl text-center'>Join Us!</h1>
                    <p className='max-w-sm text-white text-center'>Join our learning community! Sign up for an account and dive into the books world.</p>
                </div>

                <div className='w-full bg-[#fff] dark:bg-[#000]'>
                    <form onSubmit={handleSubmit(handleOnSubmit)} className='w-full p-2 py-12 md:px-4 lg:px-16 flex flex-col gap-4 rounded-r-lg'>
                        <h1 className='font-bold text-5xl text-center dark:text-white'>Register</h1>
                        <div>
                            <input type="text" className="input input-bordered w-full" name="photoURL"  {...register("photoURL", {
                                required: {
                                    value: true,
                                    message: "photoURL must be required."
                                }
                            })} placeholder="photoURL" />
                            {errors.photoURL && <span className='text-red-500'>{errors.photoURL?.message}</span>}
                        </div>
                        <div>
                            <input type="text" className="input input-bordered w-full" name="name"  {...register("name", {
                                required: {
                                    value: true,
                                    message: "name must be required."
                                }
                            })} placeholder="Name" />
                            {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}
                        </div>
                        <div>
                            <input type="text" className="input input-bordered w-full" name="email"  {...register("email", {
                                required: {
                                    value: true,
                                    message: "email must be required."
                                }
                            })} placeholder="Email" />
                            {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                        </div>
                        <div className='relative'>
                            <input type={isOpen ? "text" : "password"} name='password' {...register("password", {
                                minLength: {
                                    value: 6,
                                    message: "password must be at least 6 characters",
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                    message: "password must be at least one Uppercase letter and one lowercase letter",
                                },
                                required: {
                                    value: true,
                                    message: "password must be required."
                                }
                            })} className="input input-bordered w-full rounded-r-full" placeholder='password' />
                            <span className="absolute top-0 right-0 cursor-pointer bg-black dark:bg-white w-10 h-full rounded-r-full text-white dark:text-black flex items-center justify-center" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FaEyeSlash size={25} /> : <FaEye size={25} />}</span>

                        </div>
                        {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                    <Button type={'submit'} >Register</Button>
                    </form>

                    <div className='flex flex-col items-center justify-center gap-4 pb-6'>


                        <p className='dark:text-white'>Don't have an account ? <Link to={"/login"} className='text-themePrimary dark:text-themeSecondary font-medium capitalize'>login</Link></p>
                    </div>
                </div>

            </div >


        </div >
    )
}

export default Register