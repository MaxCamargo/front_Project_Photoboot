import { File } from './file.model';
export class User {
    public firstName: string;
    public lastName: string;
    public email: string;
    public Photo: File;
    public token: string;

    static build(object: any) {
        let user = new User();

        user.firstName = object.firstName;
        user.lastName = object.lastName;
        user.email = object.email;

        if (object.Photo)
            user.Photo = File.build(object.Photo);

        return user;
    }
}