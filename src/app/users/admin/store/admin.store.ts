import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { AdminDashboardSummary, UsersSummary } from "../models/admin-dashboard-summary.model";
import { inject } from "@angular/core";
import { AdminService } from "../services/admin-service";

export interface AdminState {
    adminSummary: AdminDashboardSummary | null;
    usersSummary: UsersSummary | null;
    loading: boolean;
    error: string | null;
}

const initialState: AdminState = {
    adminSummary: null,
    usersSummary: null,
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
                const uSummary = await adminService.getUsersSummary();
                patchState(store, {
                    adminSummary: null,
                    usersSummary: uSummary,
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