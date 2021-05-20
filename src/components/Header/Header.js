import React from "react";

import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.jpeg';

const Header = () => {
    return(
        <div className={styles.header}>
            <img src={logo} className={styles.logo} alt=""/>
            <form action="" className={styles.search}>
                <input type="text" className={styles.search__input} placeholder="Search All Products"/>
                <FontAwesomeIcon className={styles.search__icon} icon={faSearch}/>
            </form>

            <div className={styles.shopping_cart}>
                <FontAwesomeIcon className={styles.icon__shopping_cart} icon={faShoppingCart}/>
                <span className={styles.notification}>
                    4
                </span>
            </div>
        </div>
    )
}

export default Header;
