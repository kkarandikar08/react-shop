import React from "react";

import styles from './Home.module.css';

import shopMen from "../../assets/shop-men.jpg";
import shopWomen from "../../assets/shop-women.jpg";
import shopAccessories from "../../assets/shop-accessories.jpeg";
import shopFootwear from "../../assets/shop-footwear.png";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className={styles.container}>
            <header>
                <Header/>
            </header>
            <nav className={styles["shop-navigation"]}>
                <ul>
                    <button href="" className={styles["shop-navigation__buttons"]}>Shop Men</button>
                </ul><ul>
                    <button href="" className={styles["shop-navigation__buttons"]}>Shop Women</button>
                </ul><ul>
                    <button href="" className={styles["shop-navigation__buttons"]}>Shop Footwear</button>
                </ul><ul>
                    <button href="" className={styles["shop-navigation__buttons"]}>Shop Accessories</button>
                </ul>
            </nav>
            <div className={styles["shop-men"]}>
                <img className={styles.images} src={shopMen} alt="" />
            </div>
            <div className={styles["shop-women"]}>
                <img className={styles.images} src={shopWomen} alt="" />
            </div>
            <div className={styles["shop-footwear"]}>
                <img className={styles.images} src={shopFootwear} alt="" />
            </div>
            <div className={styles["shop-accessories"]}>
                <img className={styles.images} src={shopAccessories} alt="" />
            </div>
        </div>
    )
}

export default Home;