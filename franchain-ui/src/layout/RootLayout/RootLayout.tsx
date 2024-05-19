import { Outlet, useOutletContext } from 'react-router-dom';

import { ICart } from '../../types/Cart.type';
import useRootLayout from './useRootLayout';

export default function RootLayout() {
	const { cartList, onDeleteCartProduct, refetch } = useRootLayout();

	return <Outlet context={{ cartList, onDeleteCartProduct, refetch }} />;
}

type RootLayoutContextType = {
    cartList: ICart[];
    onDeleteCartProduct: (id: number) => void;
    refetch: () => void
}

export const useRootLayoutContext = () => useOutletContext<RootLayoutContextType>()