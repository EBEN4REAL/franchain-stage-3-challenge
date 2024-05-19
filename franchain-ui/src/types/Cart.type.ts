import { IProduct } from './Product.type';

export interface ICart {
    id: number;
    quantity: number;
    product: IProduct
}