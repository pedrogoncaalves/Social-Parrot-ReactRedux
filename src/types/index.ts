

export type Post = {
    idpost: number,
    iduser: number,
    nome: string,
    email: string,
    apartment: string,
    content: string

}

export interface SignIn {
    email: string,
    password: string
}

export interface User extends SignIn {
    id: number,
    nome: string,
    apartment: string,
}