import React from "react";

import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/logo.jpeg';
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Header = () => {
    const classes = useStyles();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
    return(
        // <div className={styles.header}>
        //     <Link to={'/'}>
        //         <img src={logo} className={styles.logo} alt=""/>
        //     </Link>
        //     <form action="" className={styles.search}>
        //         <input type="text" className={styles.search__input} placeholder="Search Product"/>
        //         <FontAwesomeIcon className={styles.search__icon} icon={faSearch}/>
        //     </form>
        //
        //     <div className={styles.shopping_cart}>
        //         <FontAwesomeIcon className={styles.icon__shopping_cart} icon={faShoppingCart}/>
        //         <span className={styles.notification}>
        //             {cartQuantity}
        //         </span>
        //     </div>
        // </div>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Clipped drawer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
