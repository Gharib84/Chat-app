export class User {
    name: string;
    email: string;
    mobile: string;
    password: any;
    uid: string;
    friendcount: number;
    image: string;
    constructor(name?: string, email?:string, mobile?: string,password?: string, uid?: string, friendcount?: number,image?: string){
        this.email = email;
        this.name = name;
        this.mobile = mobile;
        this.password = password;
        this.uid = uid;
        this.friendcount = friendcount
        this.image = image;
    }
}
