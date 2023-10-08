import {MenuObject} from "@/types/menu";
import { Dashboard, ExamManage, HistoryExam, QuestionManage, SourseManage } from "@/locales/index";

const AppMenuArray: Array<MenuObject> = [
    {
        path: '/dashboard',
        title: Dashboard.title,
        breadcrumbText: 'dashboard.breadcrumbText',
        hidden: false,
        icon: null
    },
    {
        path: '/sourse-manage',
        title: SourseManage.title,
        breadcrumbText: 'sourse-manage.breadcrumbText',
        hidden: false,
        icon: null
    },
    {
        path: '/exam-manage',
        title: ExamManage.title,
        breadcrumbText: 'exam-manage.breadcrumbText',
        hidden: false,
        icon: null
    },
    {
        path: '/question-manage',
        title: QuestionManage.title,
        breadcrumbText: 'question-manage.breadcrumbText',
        hidden: false,
        icon: null
    },
    {
        path: '/history-exam',
        title: HistoryExam.title,
        breadcrumbText: 'history-exam.breadcrumbText',
        hidden: false,
        icon: null
    },

]

export { AppMenuArray }