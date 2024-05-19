
import { IProduct } from '../../../../types/Product.type';
import useProductItem from './useProductItem';

interface IProductItem {
	product: IProduct;
}

export default function ProductItem({ product }: IProductItem) {
	const { onAddToCart } = useProductItem(product.id);

	return (
		<div className="_product">
			<div className="title">
				{product.name}
			</div>

			<div className="text">
				<div className="description">
					{product.desc}
				</div>
				<div className="review">
					<span className="star-icon"></span>
					<span className="star-icon"></span>
					<span className="star-icon"></span>
					<span className="star-icon"></span>
					<span className="star-icon star-disable"></span>
					<span className="star-reviews">{product.reviews} reviews</span>
				</div>
				<div className="price">
					${product.price.toLocaleString('en-US', { maximumFractionDigits: 2 })}
				</div>
				<div className="shop-actions">
					<button className='cursor-pointer ' onClick={() => onAddToCart(product.id)}>
						<img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" />
						Add to Cart
					</button>
				</div>
			</div>

			<div className="preview">
				<svg className="svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<circle className="circle" cx="100" cy="100" r="100" />
					<image className="image" xlinkHref="http://cdn-4.nikon-cdn.com/e/Q5NM96RZZo-fTYlSZPBjlMhlFa1VHARsAMnUXr0r65W8XOJsHIQxeq_m3jcWAnFaskzdz7WzoICu9qJNoS76YW3Qa7aSB9_ky28ht1Iw6dE=/Views/1996_AF-VR-Zoom-NIKKOR-80-400mm-f4.5-5.6D_Product.png" x="0" y="0" width="200px" height="180px" />
				</svg>
			</div>

		</div>
	);
}
