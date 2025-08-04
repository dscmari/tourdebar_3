export type User = {
  id: number,
  email: string,
  username: string,
  password: string
};

export type CreateUserInput = Omit<User, 'id'>;
