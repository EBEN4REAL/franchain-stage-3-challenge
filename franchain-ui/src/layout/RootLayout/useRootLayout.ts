import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

import { deleteCartProduct, getCart } from '../../services/Cart.service';
import { ICart } from '../../types/Cart.type';

export default function useRootLayout() {
	const [cartList, setCartList] = useState<ICart[]>([]);

	const { refetch } = useQuery({
		queryKey: ['Cart'],
		queryFn: getCart,
		onSuccess: (data) => setCartList(data),
	});

	const { mutate: onDeleteCartProduct } = useMutation({
		mutationFn: deleteCartProduct,
		onSuccess: ({ message }, cartId) => {
			onDeleteCartProductSuccessful(cartId, message);
			refetch(); 
		},
	});

	function onDeleteCartProductSuccessful(id: number, message: string) {
		setCartList((prev) => prev.filter((cartItem) => cartItem.id !== id));
		toast.success(message);
	}

	return { onDeleteCartProduct, cartList, refetch };
}
