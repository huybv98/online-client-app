import {Metadata} from "next";
import {useTranslation} from "@/locales/index";

const { t } = await useTranslation()

export const metadata: Metadata = {
    title: t('user.title'),
}

const PageLayout = ({children,}: { children: React.ReactNode }) => {
    return (
        <section>
            {children}
        </section>
    )
}
export default PageLayout


