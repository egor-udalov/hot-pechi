import React from 'react';
import Style from './ProductCard.module.scss';

function ProductCard({ image, name, price }) {
	return (
		<a href='#' className={Style.productCard}>
			<div className={Style.productCard__img}>
				<img src={image} alt='картинка товара' />
			</div>
			<p className={Style.productCard__nameProduct}>{name}</p>
			<p className={Style.productCard__priceProduct}>{price}</p>
		</a>
	);
}

export default ProductCard;
