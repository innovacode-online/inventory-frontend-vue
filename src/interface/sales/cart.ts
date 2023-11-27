import type { IProductsResponseData } from "..";

export interface ICart {
    product: IProductsResponseData;
    quantity: number;
}