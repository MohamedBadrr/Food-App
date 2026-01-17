import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const requireAuth = async  (opts?:{
    role?:"USER"|"ADMIN";
    redirectTo? :string;
})=>{
    const session = await auth();

    if(!session)
        redirect(opts?.redirectTo ?? "/")

    if(opts?.role && session.user.role !== opts.role)
        redirect(opts.redirectTo ?? "/")

    return session;
}