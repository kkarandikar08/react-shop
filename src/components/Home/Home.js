import React from "react";

import styles from './Home.module.css';

import shopMen from "../../assets/wp3646129.jpeg";
import shopWomen from "../../assets/b56765a2c23a6f48caed41d12cff4c46.jpeg";
import shopFootwear from "../../assets/680074.jpeg";
import Header from "../Header/Header";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
            <div className={styles["shop-carousel"]}>
                    <Carousel
                        showThumbs={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={false}
                        showStatus={false}
                        interval={5000}
                    >
                            <img className={styles.images} src={shopMen} alt="" />
                            <img className={styles.images} src={shopWomen} alt="" />
                            <img className={styles.images} src={shopFootwear} alt="" />
                    </Carousel>
            </div>
        </div>
    )
}

export default Home;