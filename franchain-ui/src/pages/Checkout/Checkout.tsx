
import React from 'react';
import { Link } from 'react-router-dom';

import useCheckout from './useCheckout';
import { useEffect } from 'react';

interface CartItem {
	id: number;
	quantity: number;
	product: {
		id: number;
		name: string;
		price: number;
	};
}

interface Props {
	cartItems: CartItem[];
}

const ShoppingCart: React.FC<Props> = () => {
	const { cartList: cartItems, onDeleteCartProduct, refetch } = useCheckout();

	useEffect(() => {
		refetch();
	}, [refetch]);

	const calculateTotal = () => {
		let subtotal = 0;
		cartItems.forEach((item) => {
			subtotal += item.quantity * item.product.price;
		});
		const tax = subtotal * 0.05;
		const shipping = 15;
		const grandTotal = subtotal + tax + shipping;
		return { subtotal, tax, shipping, grandTotal };
	};

	const { subtotal, tax, shipping, grandTotal } = calculateTotal();

	return (
		<div className="page">
			<h1>Shopping Cart</h1>

			<Link to="/" replace className='link'>
				View products
			</Link>

			{
				cartItems.length > 0 && (
					<div className="shopping-cart">
						<div className="column-labels">
							<label className="product-image">Image</label>
							<label className="product-details">Product</label>
							<label className="product-price">Price</label>
							<label className="product-quantity">Quantity</label>
							<label className="product-removal">Remove</label>
							<label className="product-line-price">Total</label>
						</div>

						{cartItems.map((item) => (
							<div className="product" key={item.id}>
								<div className="product-image">
									<img src={`http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-fTYlSZPBjlMhlFa1VHARsAMnUXr0r65W8XOJsHIQxeq_m3jcWAnFaskzdz7WzoICu9qJNoS76YW3Qa7aSB9_ky28ht1Iw6dE=/Views/1996_AF-VR-Zoom-NIKKOR-80-400mm-f4.5-5.6D_Product.png`} alt={item.product.name} />
								</div>
								<div className="product-details">
									<div className="product-title">{item.product.name}</div>
								</div>
								<div className="product-price">{item.product.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
								<div className="product-quantity">{item.quantity}</div>
								<div className="product-removal">
									<button className="remove-product" onClick={() => onDeleteCartProduct(item.id)}>Remove</button>
								</div>
								<div className="product-line-price">{item.product.price * item.quantity}</div>
							</div>
						))}
						<div className="totals">
							<div className="totals-item">
								<label>Subtotal</label>
								<div className="totals-value" id="cart-subtotal">{subtotal.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
							</div>
							<div className="totals-item">
								<label>Tax (5%)</label>
								<div className="totals-value" id="cart-tax">{tax.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
							</div>
							<div className="totals-item">
								<label>Shipping</label>
								<div className="totals-value" id="cart-shipping">{shipping.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
							</div>
							<div className="totals-item totals-item-total">
								<label>Grand Total</label>
								<div className="totals-value" id="cart-total">{grandTotal.toLocaleString('en-US', { maximumFractionDigits: 2 })}</div>
							</div>
						</div>
						<button className="checkout">Checkout</button>
					</div>
				)
			}

			{
				cartItems.length === 0 && (
					<div className='text-center'>
						Your cart is empty
					</div>
				)
			}
		</div>
	);
};

export default ShoppingCart;
