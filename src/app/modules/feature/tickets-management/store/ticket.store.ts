import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { TicketModel } from "../models/ticket.model";

interface TicketsState {
    tickets: TicketModel[],
    loading: boolean,
    error: string | null
}

export const initialState: TicketsState = {
    tickets: [{title: 'abcd', status: 'active'}],
    loading: false,
    error: null
}

export const ticketsStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => ({
        async loadTickets() {
            patchState(store, {
                loading: true,
                error: null
            });
            try {

            } catch(error) {

            }
        }
    }))
)