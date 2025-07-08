import { signalStore, withMethods, withState } from "@ngrx/signals";
import { InstitutionModel } from "../models/institution.model";

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
    withMethods((store) => ({
        async loadInstitution() {

        },
        async updateInstitution() {

        }
    }))
)