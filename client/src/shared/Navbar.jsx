import { FaFacebook, FaInstagram, FaSearch, FaTwitter, FaUser, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Button from "../components/Button/Button";
import { Link, NavLink } from "react-router-dom";
import NavbarLink from "../navLink/NavbarLink";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import FirstPart from "./navbar/FirstPart";
import SecondPart from "./navbar/SecondPart";

const Navbar = () => {
  const { user, themeMode, darkMode, lightMode } = useContext(AuthContext)

console.log(user)

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode])

  const handleToggle = (e) => {
    const darkTheme = e.currentTarget.checked;
    if (darkTheme) {
      darkMode();
    } else {
      lightMode();
    }
  }


  return (
    <>
      <FirstPart user={user} />
      <SecondPart handleToggle={handleToggle} />


    </>
  )
}

export default Navbar