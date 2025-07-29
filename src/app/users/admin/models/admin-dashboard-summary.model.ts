export interface UsersSummary {
    total: number,
    admin: number,
    staff: number,
    students: number,
    guardians: number,
    active: number
}
export interface AdminDashboardSummary {
    usersSummary: UsersSummary,
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