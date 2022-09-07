
import axios from 'axios';

const baseAPI = axios.create({
    baseURL: "http://localhost:3030",
    headers: {
        "Content-Type": "application/json"
    }
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await baseAPI.post('/validate', { token });

    },
    

signIn: async (email:string, password: string) => {
    const response = await baseAPI.post('/signin', {email, password});
    return response.data

},
logOut: async () => {
    const response = await baseAPI.post('/logout');
    return response.data
    
}

})

export default baseAPI;

