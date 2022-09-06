import baseAPI from ".";

interface UsuarioPayload {

    nome:string;
    email: string;
    senha: string;
    confirmSenha: string;
    apartamento: string;


}



export default function cadastroUsuario (payload: UsuarioPayload) {
    return baseAPI.post("/user", {payload})


}

