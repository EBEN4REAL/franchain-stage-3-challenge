import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { useRootLayoutContext } from '../../../../layout/RootLayout';
import { addToCart } from '../../../../services/Cart.service';

export default function useProductItem(id: number) {
	const { refetch } = useRootLayoutContext();

	const { mutate: onAddToCart } = useMutation({
		mutationFn: addToCart,
		onSuccess: onAddToCartSuccessful,
		onError: (error) => console.log(error),
	});

	function onAddToCartSuccessful(data: { message: string }) {
		refetch()
		toast.success(data.message);
	}

	return { onAddToCart };
}
