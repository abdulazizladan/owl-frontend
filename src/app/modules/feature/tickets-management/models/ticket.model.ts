export interface Ticket {
    title: string;
    status: 'active' | 'resolved' | 'closed';
}