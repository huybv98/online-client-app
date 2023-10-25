import { auth } from "@/utils/auth"
import { redirect } from "next/navigation"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

    if (auth.isAuthenticated()) {
        redirect('/dashboard');
    }
    return (
        <>
            { children }
        </>
    )
}
export default AuthLayout

