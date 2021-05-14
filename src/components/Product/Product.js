import React from "react";

import styles from './Product.module.css';

const Product = (props) => {
    console.log(props);

    const addToCartHandler = () => {
        console.log('Clicked');
    }
    return(
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={props.image.default} alt="Silk"/>
            </div>
            <div className={styles.about}>
                <label className={styles.title}>{ props.title }</label>
                <label className={styles.description}>{ props.description }</label>
                <label className={styles.price}>${ props.price }</label>
                <button className={styles.addToCart} onClick={addToCartHandler}>Add to Cart</button>
            </div>

        </div>
    )
}

export default Product;