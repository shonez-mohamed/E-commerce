import { IProducts } from "./products";

export interface ICartProduct
{
   count : number,
   _id    : string,
   product : IProducts,
   price : number,
}