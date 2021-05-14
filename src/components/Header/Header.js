import React from "react";
import * as styles from './Header.module.css'
import { MdShoppingCart, MdShoppingBasket, MdSettings } from 'react-icons/md';

const Header = () => {
    return(
        <div className={styles.container}>
            <MdShoppingCart className={styles.logo}/>
            <label htmlFor="header" className={styles.label}>THE REACT SHOP</label>
            <div className={styles.headerRight}>
                <MdShoppingBasket className={styles.cart}/>
                <MdSettings className={styles.settings}/>
            </div>
        </div>
    )
}

export default Header;