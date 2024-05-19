import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { useRootLayoutContext } from '../../../../layout/RootLayout';
import { addToCart } from '../../../../services/Cart.service';
import { getNumberOfItemsInCart } from '../../Home.utils';

export default function useProductItem(id: number) {
	const { cartList, refetch } = useRootLayoutContext();

	const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);

	useEffect(() => {
		const initNumberOfItemsInCart = getNumberOfItemsInCart(cartList, id);

		setNumberOfItemsInCart(initNumberOfItemsInCart);
	}, [cartList, id]);

	const { mutate: onAddToCart } = useMutation({
		mutationFn: addToCart,
		onSuccess: onAddToCartSuccessful,
		onError: (error) => console.log(error),
	});

	function onAddToCartSuccessful(data: { message: string }) {
		refetch()
		setNumberOfItemsInCart((prev) => prev + 1);
		toast.success(data.message);
	}

	return { onAddToCart, numberOfItemsInCart };
}
