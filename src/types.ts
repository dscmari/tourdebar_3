type ValidatedFields = {
  email?: string[] | undefined;
  name?: string[] | undefined;
  password?: string[] | undefined;
};

export type FormStateRegister = {
  error: string | null;
  success: boolean;
  validationFields: ValidatedFields | null
};

export type FormStateSignin = {
  error: string | null;
  success: boolean;
};

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
};

export type CreateUserInput = Omit<User, "id">;
