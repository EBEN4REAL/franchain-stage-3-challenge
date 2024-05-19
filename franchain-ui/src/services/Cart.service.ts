import { BASE_URL } from '../core/Constants';
import { ICart } from '../types/Cart.type';

export async function getCart(): Promise<ICart[]> {
	const response = await fetch(`${BASE_URL}/cart`);
	if (!response.ok) {
		throw new Error("unable to get products");
	}
	return response.json() as Promise<ICart[]>;
}

export async function addToCart(productId: number): Promise<{message: string}> {
	const response = await fetch(`${BASE_URL}/cart`, {
		method: "POST",
        mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ productId }),
	});

	if (!response.ok) {
		throw new Error("Unable to add product to cart");
	}

	return response.json() as Promise<{message: string}>;
}

export async function deleteCartProduct(productId: number): Promise<{message: string}> {
	const response = await fetch(`${BASE_URL}/cart/${productId}`, { method: 'DELETE' });
	if (!response.ok) {
		throw new Error("unable to delete product from cart");
	}
	return response.json() as Promise<{message: string}>;
}
