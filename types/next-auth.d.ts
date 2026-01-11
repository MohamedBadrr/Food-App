import { DefaultSession } from "next-auth"

declare module "next-auth" {
  export interface Session {
    accessToken?: string
    idToken?: string
    provider?: string
    user: {
      id: string
    } & DefaultSession["user"]
  }
}

declare module "next-auth/jwt" {
  export interface JWT {
    id?: string
    accessToken?: string
    idToken?: string
    provider?: string
  }
}