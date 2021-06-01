import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../Header/Header";

import styles from './Products.module.css';
import Card from "../UI/Card";

const Products = (props) => {
    const query = new URLSearchParams(useLocation().search);
    console.log(query.get("category"))
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
                <nav className={styles.sidebar}>Sidebar</nav>
                <main className={styles.products} >
                    <div className={styles.products__card}>
                        <Card id={1}/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                    <div className={styles.products__card}>
                        <Card/>
                    </div>
                </main>
        </div>
    )
};

export default Products;
