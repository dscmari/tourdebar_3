export type User = {
  id: number;
  email: string;
  username: string;
};

export type CreateUserInput = Omit<User, 'id'>;
