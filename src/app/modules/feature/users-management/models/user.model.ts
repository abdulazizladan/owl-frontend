export class UserModel {
    "id": string;
    "firstName": string;
    "middleName": string;
    "lastName": string;
    "role": "Admin" | "Staff" | "Guardian" | "Student";
    "status": "Active" | "Suspended";
    "email": string;
    "phone": string;
    "address": string;
    "createdAt": Date;
}