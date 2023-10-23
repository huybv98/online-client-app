import {MenuObject} from "@/types/menu";
import { Dashboard, ExamManage, HistoryExam, QuestionManage, SourseManage } from "@/locales/index";

const AppMenuArray: Array<MenuObject> = [
    {
        path: '/dashboard',
        title: 'dashboard.title',
        breadcrumbText: 'dashboard.breadcrumbText',
        hidden: false,
        icon: 'ChartBarSquareIcon'
    },
    {
        path: '/sourse-manage',
        title: 'sourse-manage.title',
        breadcrumbText: 'sourse-manage.breadcrumbText',
        hidden: false,
        icon: 'AcademicCapIcon'
    },
    {
        path: '/exam-manage',
        title: 'exam-manage.title',
        breadcrumbText: 'exam-manage.breadcrumbText',
        hidden: false,
        icon: 'BookOpenIcon'
    },
    {
        path: '/question-manage',
        title: 'question-manage.title',
        breadcrumbText: 'question-manage.breadcrumbText',
        hidden: false,
        icon: 'ClipboardDocumentListIcon'
    },
    {
        path: '/history-exam',
        title: 'history-exam.title',
        breadcrumbText: 'history-exam.breadcrumbText',
        hidden: false,
        icon: 'DocumentDuplicateIcon'
    },

]

export { AppMenuArray }