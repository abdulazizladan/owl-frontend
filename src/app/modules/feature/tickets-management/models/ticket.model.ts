export interface TicketModel {
    id: string;
    title: string;
    status: 'active' | 'resolved' | 'closed';
}