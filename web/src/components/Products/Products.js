import React, {useEffect} from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../Header/Header";

import styles from './Products.module.css';
import Card from "../UI/Card";
import {useDispatch, useSelector} from "react-redux";
import { fetchProducts } from "../../store/products-slice";

const Products = (props) => {
    const query = new URLSearchParams(useLocation().search);
    const category = query.get('category');
    const products  = useSelector(state => state.products);
    const loading  = useSelector(state => state.products.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(category))
    }, [dispatch]);

    console.log(products.products, loading);

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header/>
            </div>
                <nav className={styles.sidebar}>Sidebar</nav>
                <main className={styles.products}>
                    {
                        loading ? <div>Loading</div> : products?.products?.payload?.map(p => <div key={p.id} className={styles.products__card}>
                        <Card
                            id={1}
                            title={p.title}
                            price={p.price}
                        />
                    </div>
                    )}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card id={1}/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                    {/*<div className={styles.products__card}>*/}
                    {/*    <Card/>*/}
                    {/*</div>*/}
                </main>
        </div>
    )
};

export default Products;
