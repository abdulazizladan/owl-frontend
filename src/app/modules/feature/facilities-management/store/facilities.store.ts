import { Site } from "../models/site.model";

export interface FacilitiesState {
    sites: Site[];
    loading: boolean;
    message: string | null;
}