import { DefaultSession } from "next-auth"

declare module "next-auth" {
  export interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string | null;
      role: "USER" | "ADMIN";
      country?: string | null;
      city?: string | null;
      street_address?: string | null;
      phone?: string | null;
    } & DefaultSession["user"]
  }

  export interface User {
    id: string;
    email: string;
    name: string;
    image?: string | null;
    role: "USER" | "ADMIN";
    country?: string | null;
    city?: string | null;
    street_address?: string | null;
    phone?: string | null;
  }
}

declare module "next-auth/jwt" {
  export interface JWT {
    id?: string;
    role?: "USER" | "ADMIN";
    country?: string | null;
    city?: string | null;
    street_address?: string | null;
    phone?: string | null;
  }
}