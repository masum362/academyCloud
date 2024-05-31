import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";



const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
});


const useAxiosSecure = () => {

    useEffect(() => {
        axiosSecure.interceptors.response.use(
            (res) => {
                return res;
            },
            (err) => {
                if (err.response.status === 404 || err.response.status === 403 || err.response.status === 401) {
                    err.login = false;
                    return err
                }
            }
        );
    }, [])

    return axiosSecure
}

export default useAxiosSecure