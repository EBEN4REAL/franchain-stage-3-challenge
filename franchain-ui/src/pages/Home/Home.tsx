import './Home.style.css';

import { Link } from 'react-router-dom';

import ProductItem from './components/ProductItem/ProductItem';
import useHome from './useHome';
import cartIcon from "../../assets/img/cart-icon.jpeg"
import useCheckout from '../Checkout/useCheckout';
import { useEffect } from 'react';

export default function Home() {
	const { products } = useHome();
	const { cartList: cartItems, refetch } = useCheckout();

	useEffect(() => {
		refetch();
	}, [refetch]);

	const totalCartItems: number = cartItems.reduce((total, currentItem) => total + currentItem.quantity, 0);

	return (
		<div className="page">
			<div className='home-header'>
				<h2 className='text-center'>Camera Listings</h2>
				<Link to="/checkout" replace className='position-relative'>
					<img src={cartIcon} alt="cart icon" className='cart-icon' />
					<div className="cart-count">{totalCartItems}</div>
				</Link>
			</div>

			<div className="wrapper">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
