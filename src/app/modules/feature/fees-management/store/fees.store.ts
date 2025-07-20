import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { Payment, StudentFee } from "../models/fee.model";
import { inject } from "@angular/core";
import { FeesService } from "../services/fees-service";

export interface FeesState {
    payments: Payment[];
    studentFees: StudentFee[];
    loading: boolean;
    error: string | null;
}

export const initialState: FeesState = {
    payments: [],
    studentFees: [],
    loading: false,
    error: null
}

export const FeesStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store, usersService = inject(FeesService)) => ({
        async loadAll() {
            patchState(store, {
                loading: true,
                error: null
            })
            try {

            } catch(error) {
                patchState(store, {
                    loading: false,
                    error: 'Unable to load payments. Please try gain later'
                })
            }
        },
        async loadById(id: string) {
            patchState(store, {
                loading: true,
                error: null
            })
            try {

            } catch(error) {
                patchState(store, {
                    loading: false,
                    error: 'Unable to load payment details. Please try gain later'
                })
            }
        },
        async update(id: string) {
            patchState(store, {
                loading: true,
                error: null
            })
            try {

            } catch(error) {
                patchState(store, {
                    loading: false,
                    error: 'Unable to update payment. Please try gain later'
                })
            }
        }
    })
))