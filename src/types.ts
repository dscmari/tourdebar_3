
export type User = {
    id : number;
    email : string
}

export type CreateUserInput = Omit<User, 'id'>;