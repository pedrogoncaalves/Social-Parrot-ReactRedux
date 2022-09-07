import { useContext } from "react"
import { Login } from "../../pages/pages/Login";
import { AuthContext } from "./AuthContext"

import { Navigate } from "react-router-dom";


export const RequireAuth = ({ children } : { children: JSX.Element}) => {


    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <Navigate to="/"></Navigate>

    }

    return children
}