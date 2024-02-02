import { Metadata } from "next";
import { useTranslation } from "@/locales/index";
import AppAuthLayout from "@/components/AppAuthLayout/index";

const { t } = await useTranslation()

export const metadata: Metadata = {
    title: t('user.title'),
}

const PageAuthLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <AppAuthLayout>
            { children }
        </AppAuthLayout>
    )
}
export default PageAuthLayout


