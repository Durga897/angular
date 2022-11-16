import { Orders } from "./orders";
import { Product } from "./product";

export class OrderDetails {
    id!:number;
    orders!:Orders;
    product!:Product;
    productQuantity!:number;
    productAmount!:number;
    orderStatus!:string;   
}
