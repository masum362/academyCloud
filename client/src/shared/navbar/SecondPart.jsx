import React, { useContext } from 'react'
import NavbarLink from '../../navLink/NavbarLink'
import { AuthContext } from '../../context/AuthProvider'
import { FaSearch } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'

const SecondPart = ({ handleToggle }) => {
    const { user, themeMode, LogOutUser } = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate();
    const handleLogOut = () => {
        LogOutUser().then(res => console.log('logged out done'));
        navigate("/login");
    }
    return (
        <div className="navbar bg-themePrimary text-white p-2 lg:px-16  sticky left-0 top-0 z-50 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-themePrimary rounded-box w-52">
                        <li>
                            <NavLink to={"/"} className={({ isActive }) => `${isActive ? " border-2 border-white text-themeSecondary " : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium `}>home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/all-books'} className={({ isActive }) => `${isActive ? " border-2 border-white text-themeSecondary " : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium `}>all books</NavLink>

                        </li>
                        <li>
                            <NavLink to={'/borrowed-books'} className={({ isActive }) => `${isActive ? " border-2 border-red-500 " : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium `}>borrowed books</NavLink>

                        </li>
                        <li>
                            <NavLink to={'/add-book'} className={({ isActive }) => `${isActive ? " border-2 border-red-500 " : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium `}>add book</NavLink>

                        </li>       
                    </ul>
                </div>
                <Link to={"/"}><h1 className="text-lg lg:text-3xl dark:text-white font-bold">AcademyCloud</h1></Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to={"/"} className={({ isActive }) => `${isActive ? " border-2 border-white text-themeSecondary" : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium text-white `}>home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/all-books'} className={({ isActive }) => `${isActive ? " border-2 border-white text-themeSecondary " : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium `}>all books</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/borrowed-books'} className={({ isActive }) => `${isActive ? " border-2 border-white text-themeSecondary " : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium `}>borrowed books</NavLink>

                    </li>
                    <li>
                        <NavLink to={'/add-book'} className={({ isActive }) => `${isActive ? " border-2 border-white text-themeSecondary " : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium `}>add book</NavLink>

                    </li>
                </ul>
            </div>
            <div className="navbar-end max-w-full gap-2 items-center  ">
                <input type="checkbox" className="toggle" onClick={handleToggle} checked={themeMode === "dark"} />
                <div className="flex">
                    {
                        user ? <>
                            <div className="flex items-center gap-2 ">
                                <figure className="w-10 h-10 tooltip cursor-pointer tooltip-bottom hidden md:flex" data-tip={user?.displayName}>
                                    <img src={user?.photoURL} alt="profile-pic" className="w-full h-full rounded-full" />
                                </figure>

                                <div className="dropdown dropdown-end md:hidden">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-themePrimary">
                                        <li><h1 className='text-lg'>{user?.displayName}</h1></li>
                                       
                                        {
                                            user && <li><span className='font-medium' onClick={handleLogOut}>Log Out</span></li>
                                        }
                                    </ul>
                                </div>


                                <span className='md:flex hidden' onClick={handleLogOut}><Button style={"border"}>LogOut</Button></span>
                            </div>
                        </> : <div className="rounded-sm cursor-pointer">
                            <Link to={'/login'}><Button style={"border border-white"}>Login</Button></Link>
                        </div>
                    }
                </div>

            </div>
        </div >
    )
}

export default SecondPart