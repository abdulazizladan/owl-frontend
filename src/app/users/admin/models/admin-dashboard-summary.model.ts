export interface AdminDashboardSummary {
    usersSummary: {
        total: number,
        staff: number,
        sudents: number
    },
    enrolmentSummary: {
        recentEnrolment: number,
        lastEnrolment: number
    },
    userActivity: {
        userName: string,
        action: string,
        date: Date
    }[]
}