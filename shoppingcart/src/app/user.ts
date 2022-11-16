import { Role } from "./role";

export class User {
    id:number;
    username:string;
    firstName:string;
    lastName:string;
    email:string;
    address:string
    phone:string;
    password:string;
    roles: Array<Role>[];

    constructor() {
        this.id=0;
        this.username='';
        this.firstName='';
        this.lastName='';
        this.email='';
        this.address='';
        this.phone='';
        this.password='';
        this.roles=[];
    
      }

}
