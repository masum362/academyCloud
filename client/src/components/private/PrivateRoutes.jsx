import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../../pages/loading/Loading'

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation();

    if (loading) {
        return <Loading />
    } else if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'} />
}

export default PrivateRoutes