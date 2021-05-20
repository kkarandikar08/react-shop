import React from "react";
import Header from "../Header/Header";

import styles from './Products.module.css';
import Card from "../UI/Card";

const Products = () => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
                <nav className={styles.sidebar}>Sidebar</nav>
                <main className={styles.products} >
                    <div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div><div className={styles.products__card}>
                        <Card/>
                    </div>
                </main>
        </div>
    )
};

export default Products;