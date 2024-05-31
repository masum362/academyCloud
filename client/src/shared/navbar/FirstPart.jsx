import { FaFacebook, FaInstagram, FaSearch, FaTwitter, FaUser, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const FirstPart = () => {
    const { user, LogOutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        LogOutUser().then(res => console.log('logged out done'));
        navigate("/login");
    }

    return (
        <div className="hidden md:flex justify-between bg-white dark:bg-dark text-themePrimary dark:text-themeSecondary w-full px-16 lg:py-2">
            <ul className="flex items-center justify-center gap-2">
                <li><a href='https://www.facebook.com/md.masum.ahmed.mk' target="_blank"><FaFacebook size={26} /></a></li>
                <li><a href='https://www.instagram.com/masum362ig' target="_blank"><FaInstagram size={26} /></a></li>
                <li><a href='https://www.twitter.com/' target="_blank"><FaTwitter size={26} /></a></li>
                <li><a href='wa.link/oi9fwi' target="_blank"><FaWhatsapp size={26} /></a></li>
            </ul>
            <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                    <p className="text-black dark:text-white">Questions?</p>
                    <div className="flex items-center justify-center gap-2">
                        <span><FiPhoneCall /></span>
                        <span>+8801775994314</span>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 text-black dark:text-themeSecondary">

                        <span className="cursor-pointer hidden  md:flex"><FaSearch size={20} /></span>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FirstPart