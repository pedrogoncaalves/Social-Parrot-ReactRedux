
import axios from 'axios';

const baseAPI = axios.create({
    baseURL: "http://localhost:3030",
    headers: {
        "Content-Type": "application/json"
    }
})

export default baseAPI;

