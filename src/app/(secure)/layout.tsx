import AppLayout from '@/components/AppLayout'
import { auth } from "@/utils/auth"
import { redirect } from "next/navigation"

const PageLayout = ({ children }: { children: React.ReactNode }) => {

    if (!auth.isAuthenticated()) {
        redirect('/user/login');
    }

    return (
        <AppLayout>{ children }</AppLayout>
    )
}
export default PageLayout
