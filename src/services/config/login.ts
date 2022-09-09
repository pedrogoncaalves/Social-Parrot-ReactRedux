

import { baseAPI} from ".";


interface LoginPayload {
    email: string;
    password: string;
}


export function login( payload: LoginPayload) {
    return baseAPI.post ("/login", payload)
};