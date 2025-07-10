import { signalStore, withMethods, withState, patchState } from "@ngrx/signals";
import { InstitutionModel } from "../models/institution.model";
import { inject } from '@angular/core';
import { Institution } from '../services/institution';

interface InstitutionState {
    institution: InstitutionModel | null,
    loading: boolean,
    error: string | null
}

export const initialState: InstitutionState = {
    institution: null,
    loading: false,
    error: null
}

export const institutionStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withMethods((store) => {
        const institutionService = inject(Institution);
        return {
            async loadInstitution() {
                patchState(store, { loading: true, error: null });
                try {
                    // For demo, just set a dummy institution
                    const demoInstitution: InstitutionModel = {
                        name: 'Unity Secondary School',
                        code: 'USS123',
                        logoUrl: 'https://example.com/logo.png',
                        campuses: [
                            { name: 'Main Campus', address: '123 Main St, Lagos', numberOfBuildings: 10 },
                            { name: 'Annex', address: '456 Annex Rd, Abuja', numberOfBuildings: 5 }
                        ],
                        totalBuildings: 15,
                        totalStaff: 120,
                        staffDistribution: {
                            teachers: 80,
                            cleaners: 15,
                            porters: 10,
                            gardeners: 15
                        }
                    };
                    patchState(store, { institution: demoInstitution, loading: false });
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to load institution.' });
                }
            },
            async createInstitution(institution: InstitutionModel) {
                patchState(store, { loading: true, error: null });
                try {
                    const created = await institutionService.createInstitution(institution);
                    patchState(store, { institution: created, loading: false });
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to create institution.' });
                }
            },
            async updateInstitution(institution: InstitutionModel) {
                patchState(store, { loading: true, error: null });
                try {
                    // TODO: Implement updateInstitution in the service and use it here
                    // const updated = await institutionService.updateInstitution(institution);
                    // patchState(store, { institution: updated, loading: false });
                    patchState(store, { institution, loading: false }); // Demo: just update state
                } catch (error) {
                    patchState(store, { loading: false, error: 'Failed to update institution.' });
                }
            }
        };
    })
)