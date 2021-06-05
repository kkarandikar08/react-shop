import React from "react";

import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.jpeg';
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <div className={styles.header}>
            <Link to={'/'}>
                <img src={logo} className={styles.logo} alt=""/>
            </Link>
            <form action="" className={styles.search}>
                <input type="text" className={styles.search__input} placeholder="Search Product"/>
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
