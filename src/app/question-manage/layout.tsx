import {Metadata} from "next";
import {useTranslation} from "@/locales/index";

const { t } = await useTranslation()

export const metadata: Metadata = {
    title: t('question-manage.title'),
}

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode
}) {
    return (
        <section>
            {children}
        </section>
    )
}

