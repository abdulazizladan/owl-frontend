export class UserModel {
    "role": string;
    "status": string;
    "email": string;
    //"createdAt": Date;
    "info": {
        "firstName": string;
        "middleName": string;
        "lastName": string;
        "image": string;
    };
    "contact": {
        "phone": string;
        //"address": string;
    };
}