import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { AdminDashboardSummary } from "../models/admin-dashboard-summary.model";
import { inject } from "@angular/core";
import { AdminService } from "../services/admin-service";

export interface AdminState {
    summary: AdminDashboardSummary | null;
    loading: boolean;
    error: string | null;
}

const initialState: AdminState = {
    summary: null,
    loading: false,
    error: null
}

export const AdminStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withMethods((store, adminService = inject(AdminService)) => ({
        async loadData() {
            patchState(store, {
                loading: true,
                error: null
            })
            try {
                patchState(store, {
                    loading: false,
                    error: null
                })
            } catch(error) {
                patchState(store, {
                    loading: false,
                    error: 'Could not load data. Please check your connection and refresh.'
                })
            }
        }
    })
))