export interface Campus {
    name: string;
    address: string;
    numberOfBuildings: number;
}

export interface StaffDistribution {
    teachers: number;
    cleaners: number;
    porters: number;
    gardeners: number;
}

export interface InstitutionModel {
    name: string;
    code: string;
    logoUrl: string;
    campuses: Campus[];
    totalBuildings: number;
    totalStaff: number;
    staffDistribution: StaffDistribution;
}