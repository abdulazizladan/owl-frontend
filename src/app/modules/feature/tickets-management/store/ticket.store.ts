import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { TicketModel } from "../models/ticket.model";
import { inject } from '@angular/core';
import { TicketsService } from '../services/tickets';

interface TicketsState {
    tickets: TicketModel[],
    loading: boolean,
    error: string | null
}

export const initialState: TicketsState = {
    tickets: [
        { id: '1', title: 'Cannot login to portal', status: 'active' },
        { id: '2', title: 'Payment not reflecting', status: 'resolved' },
        { id: '3', title: 'Feature request: Dark mode', status: 'active' },
        { id: '4', title: 'Bug: Error on dashboard', status: 'closed' }
    ],
    loading: false,
    error: null
}

export const ticketsStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
        const ticketsService = inject(TicketsService);
        return {
            async loadTickets() {
                patchState(store, { loading: true, error: null });
                try {
                    const tickets = await ticketsService.getAll();
                    patchState(store, { tickets, loading: false });
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to load tickets.' });
                }
            },
            async getTicketById(id: string) {
                patchState(store, { loading: true, error: null });
                try {
                    const ticket = await ticketsService.getById(id);
                    patchState(store, { loading: false });
                    return ticket;
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to get ticket.' });
                    return null;
                }
            },
            async createTicket(ticket: TicketModel) {
                patchState(store, { loading: true, error: null });
                try {
                    const newTicket = await ticketsService.createTicket(ticket);
                    patchState(store, state => ({ tickets: [newTicket, ...state.tickets], loading: false }));
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to create ticket.' });
                }
            },
            async updateTicket(id: string, ticket: TicketModel) {
                patchState(store, { loading: true, error: null });
                try {
                    const updatedTicket = await ticketsService.update(id, ticket);
                    patchState(store, state => ({
                        tickets: state.tickets.map(t => t.title === updatedTicket.title ? updatedTicket : t),
                        loading: false
                    }));
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to update ticket.' });
                }
            },
            async replyToTicket(id: string, response: string) {
                patchState(store, { loading: true, error: null });
                try {
                    await ticketsService.reply(id, response);
                    patchState(store, { loading: false });
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to reply to ticket.' });
                }
            },
            async toggleTicketStatus(id: string) {
                patchState(store, { loading: true, error: null });
                try {
                    const updatedTicket = await ticketsService.toggleStatus(id);
                    patchState(store, state => ({
                        tickets: state.tickets.map(t => t.title === updatedTicket.title ? updatedTicket : t),
                        loading: false
                    }));
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to toggle ticket status.' });
                }
            }
        };
    })
)