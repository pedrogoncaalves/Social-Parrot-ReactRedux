

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

export type User = {
    name: string,
    password: string,
}