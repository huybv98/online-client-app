import {Metadata} from "next";
import {useTranslation} from "@/locales/index";

const { t } = await useTranslation()

export const metadata: Metadata = {
    title: t('question-manage.title'),
}

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='wrapper'>
            { children }
        </div>
    )
}
export default PageLayout

