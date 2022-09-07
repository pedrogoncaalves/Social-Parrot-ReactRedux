import baseAPI from ".";

interface UsuarioPayload {

    name:string;
    email: string;
    password: string;
    apartment: string;
    confirmSenha?:string;
    userphoto: string;

}



export default function cadastroUsuario (payload: UsuarioPayload) {
    return baseAPI.post("/user", {payload})


}

