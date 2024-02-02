import AppLayout from '@/components/AppLayout'

const PageLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <AppLayout>{ children }</AppLayout>
    )
}
export default PageLayout
