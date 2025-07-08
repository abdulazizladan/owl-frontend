export interface TicketModel {
    title: string;
    status: 'active' | 'resolved' | 'closed';
}