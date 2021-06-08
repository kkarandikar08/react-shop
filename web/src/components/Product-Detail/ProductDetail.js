import React, {useEffect} from "react";
import Header from "../Header/Header";

import styles from './ProductDetail.module.css';
import { useDispatch, useSelector } from "react-redux";

import testImage from '../../assets/8265443_fpx.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { addToBag } from '../../store/cart-slice';


const ProductDetail = () => {
    const dispatch = useDispatch();

    const addItemToCartHandler = () => {
        dispatch(addToBag());

    }
    return(
        <div className={styles.container}>
            <Header/>
            <main className={styles.content}>
                <div className={styles["image-and-detail-section"]}>
                    <Carousel autoPlay={true} stopOnHover={true}>
                        <div className={styles.image}>
                            <img src={testImage}  alt=""/>
                        </div>
                        <div className={styles.image}>
                            <img src={testImage}  alt=""/>
                        </div>
                    </Carousel>
                    <div className={styles["details-and-gift-options"]}>
                        <div className={styles.details}>
                            <div className={styles["size-info"]}>
                                <h4>Size Info</h4>
                                <ul>
                                    <li>True to size</li>
                                    <li>Nordstrom Men's Shop Athletic fit; considered a Slim-Straight fit; relaxed through seat, tailored from knee to ankle.
                                    </li>
                                    <li>Mid rise.
                                    </li>
                                </ul>
                            </div>
                            <div className={styles["details-and-care"]}>
                                <h4>Details And Care</h4>
                                <ul>
                                <span>
                                    A flat front and straight-leg fit keep the look clean and simple in pants cut for comfort and versatility from crisp, shape-retaining stretch cotton.
                                </span>
                                    <li>True to size</li>
                                    <li>Nordstrom Men's Shop Athletic fit; considered a Slim-Straight fit; relaxed through seat, tailored from knee to ankle.
                                    </li>
                                    <li>Mid rise.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles["gift-options"]}>
                            <div className={styles["size-info"]}>
                                <h4>Gift Options</h4>
                                <span>
                                    Get free gift wrap when you pick up your order at a Nordstrom store! Choose gift options when you check out. Some items may not be eligible for certain gift wrap options.
                                </span>
                                {/*<ul>*/}
                                {/*    <li>True to size</li>*/}
                                {/*    <li>Nordstrom Men's Shop Athletic fit; considered a Slim-Straight fit; relaxed through seat, tailored from knee to ankle.*/}
                                {/*    </li>*/}
                                {/*    <li>Mid rise.*/}
                                {/*    </li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["add-to-cart"]}>
                    <div className={styles.card}>
                        <h3 className={styles.title}>India Cricket Team Blue Jersey</h3>
                        <hr className={styles.divider}/>
                        <h3>Price</h3>
                        <h4>Lorem Ipsum</h4>
                        <button onClick={addItemToCartHandler} className={styles["add-to-cart__button"]}>Add to Bag</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductDetail;