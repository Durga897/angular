import { User } from "./user";

export class Product {
    id!:number;
    name!:string;
    color!:string;
    price!:number;
    description!:string;
    stock!:number;
    user!:User;
    
    // constructor() {
    //     this.id=0;
    //     this.name='';
    //     this.color='';
    //     this.price=0;
    //     this.description='';
    //     this.stock=0;
        
    //   }
}
