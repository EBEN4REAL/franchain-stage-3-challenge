import { useRootLayoutContext } from '../../layout/RootLayout';
import "./checkout.css"

export default function useCheckout() {
	const { cartList, onDeleteCartProduct, refetch } = useRootLayoutContext();

	return {
		cartList,
		onDeleteCartProduct,
		refetch
	};
}
