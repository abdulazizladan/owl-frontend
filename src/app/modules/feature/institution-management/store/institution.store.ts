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
    institution: {
        name: 'Federal Government College Lagos',
        code: 'FGCLAG123',
        logoUrl: 'data:image/jpeg;base64,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',
        campuses: [
            { name: 'Main Campus', address: '1 Unity Road, Ikoyi, Lagos', numberOfBuildings: 18 },
            { name: 'Annex Campus', address: '12 College Crescent, Yaba, Lagos', numberOfBuildings: 7 }
        ],
        totalBuildings: 25,
        totalStaff: 150,
        staffDistribution: {
            teachers: 95,
            cleaners: 18,
            porters: 12,
            gardeners: 25
        }
    },
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