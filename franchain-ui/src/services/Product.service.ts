import { BASE_URL } from '../core/Constants';
import { IProduct } from '../types/Product.type';

export async function getProducts(): Promise<IProduct[]> {
	const response = await fetch(`${BASE_URL}/products`);
	if (!response.ok) {
		throw new Error("unable to get products");
	}
	return response.json() as Promise<IProduct[]>;
}
