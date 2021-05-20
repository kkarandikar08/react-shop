import React from "react";

import styles from './Card.module.css';

import testImage from '../../assets/1528.jpg';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={testImage} alt=""/>
            <hr className={styles.divider}/>
            <div className={styles.title}>Title</div>
            <p className={styles.price}>$12</p>
            <button className={styles.addToCart}>Add To Cart</button>
        </div>
    )
};

export default Card;