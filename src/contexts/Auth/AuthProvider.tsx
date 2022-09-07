
import { useState } from 'react';
import baseAPI, { useApi } from '../../services/config';

import { User } from '../../types/index';

import { AuthContext } from './AuthContext';

export const AuthProvider = ({ chidren } : { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null) 
    const api = useApi();

    const signin = async (email:string, password: string ) => {
        const data = await api.signIn(email, password);
        if(data.user && data.token) {
            setUser(data.user)
            return true
        }
        return false
    }
    const signout = async () => {
        await api.logOut();
        setUser(null)
    }


    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {chidren}
            
            
        
              </AuthContext.Provider>
    )
}
