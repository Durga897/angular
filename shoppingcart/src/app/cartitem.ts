import { Cart } from "./cart";
import { Product } from "./product";

export class Cartitem {
    id!:number;
    quantity!:number;
    price!:number;
    product!:Product;
    cart!:Cart;
   
}
