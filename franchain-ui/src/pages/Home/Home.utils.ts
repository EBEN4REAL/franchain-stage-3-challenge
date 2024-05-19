import { ICart } from '../../types/Cart.type';

export function getNumberOfItemsInCart(cartList: ICart[], productId: number) {
	const currentCartItem = cartList.find((cartItem) => cartItem.product.id === productId);

	return currentCartItem?.quantity || 0;
}
