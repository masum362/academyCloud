import { NavLink } from 'react-router-dom'

const NavbarLink = ({url,children}) => {
    return (
        <NavLink to={url} className={({ isActive }) => `${isActive ? " border-2 border-red-500 text-white bg-themePrimary/10" : ""} px-2 py-1 lg:py-2 lg:px-4 uppercase font-medium `}>{children}</NavLink>
    )
}

export default NavbarLink