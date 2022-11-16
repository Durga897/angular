import { User } from "./user";

export class Orders {
    id!:number;
    user!:User;
    amount!:number;
    orderedDate!:Date;
}
