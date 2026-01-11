export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  image: string | null;
  phone: string | null;
  street_address: string | null;
  postal_code: string | null;
  city: string | null;
  country: string | null;
  role: "USER" | "ADMIN";
  created_at: string;
  updated_at: string;
}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UserWithoutPassword extends Omit<User, "password"> {}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface AuthResult {
  success: boolean;
  user?: UserWithoutPassword;
  error?: string;
}