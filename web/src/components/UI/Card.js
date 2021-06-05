import React from "react";

import styles from './Card.module.css';

import testImage from '../../assets/8265443_fpx.jpeg';
import { useLocation, useHistory } from "react-router-dom";

const Card = (props) => {
    const query = new URLSearchParams(useLocation().search);
    const history = useHistory();
    const category = query.get("category");
    const getProductDetail = () => {
        history.push(`/product-detail/${category}:${props.id}`);
    };
    console.log(props);
    return (
            <div className={styles.card} onClick={getProductDetail}>
                <img className={styles.image} src={testImage} alt=""/>
                <hr className={styles.divider}/>
                <div className={styles.title}>{props.title}</div>
                <p className={styles.price}>${props.price}</p>
            </div>
    )
};



export default Card;
