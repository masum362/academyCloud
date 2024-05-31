import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const gogleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null)
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "light")
  const [loading, setLoading] = useState(true);
  const axios = useAxiosSecure();


  const darkMode = () => {
    setThemeMode("dark");
    localStorage.setItem("theme", "dark")
  }
  const lightMode = () => {
    setThemeMode("light");
    localStorage.setItem("theme", "light")
  }


  const RegisterUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGogle = () => {
    return signInWithPopup(auth, gogleProvider)
  }
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubProvider)
  }

  const updateUser = (user, displayName, photoURL) => {
    setLoading(true)
    return updateProfile(user, {
      displayName, photoURL
    })
  }

  const LogOutUser = () => {
    setLoading(true)
    return signOut(auth);
  }

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log(currentUser)

        const response = await axios.post('/add-user', currentUser)
        console.log(response)
        axios.post('/login', currentUser).then(res => {
          setUser(res.data.user);
        }).catch(err => {
          LogOutUser().then(res => console.log(res))
        });
        setLoading(false);
        console.log("it's updating")
      } else {
        setLoading(false)
        axios.get('/logout')
        setUser(null);
        console.log("something went wrong from onauthstatechange");
      }
    })
    return () => {
      unSubscribe();
    }
  }, [])

  console.log(user)

  const values = { user, RegisterUser, LoginUser, LogOutUser, loading, loginWithGogle, loginWithGithub, updateUser, setLoading, themeMode, darkMode, lightMode }


  return (
    <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider