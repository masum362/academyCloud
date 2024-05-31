import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../pages/loading/Loading";

import React from 'react'

const VerifyAuth = ({children}) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation();

    if (loading) {
        return <Loading />
    } else if (user.role==="admin") {
        return children
    }
    return <Navigate state={location.pathname} to={'/'} />
}

export default VerifyAuth