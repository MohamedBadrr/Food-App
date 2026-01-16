export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  image?: string | null;
  role: "USER" | "ADMIN";
  country?: string | null;
  city?: string | null;
  street_address?: string | null;
  phone?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface UserWithoutPassword {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  role: "USER" | "ADMIN";
  country?: string | null;
  city?: string | null;
  street_address?: string | null;
  phone?: string | null;
  created_at?: string;
  updated_at?: string;
}

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