import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import { Shop } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import styles from './Products.module.css';
import Card from "../UI/BaseCard";
import {useDispatch, useSelector} from "react-redux";
import { fetchProducts } from "../../store/products-slice";
import {Grid} from "@material-ui/core";
import BaseCard from "../UI/BaseCard";


const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Products = (props) => {
    const query = new URLSearchParams(useLocation().search);
    const category = query.get('category');
    const products  = useSelector(state => state.products);
    const loading  = useSelector(state => state.products.loading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts(category))
    }, [dispatch, category]);

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <CssBaseline />
            <Header/>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                                <ListItemText primary="Men" />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Grid container spacing={3}>
                    {loading ? <div>Loading</div> : products?.products?.payload?.map(p => <Grid key={p.id} item xs={12} md={4} lg={4}>
                        <BaseCard
                            id={p.id}
                            title={p.title}
                            price={p.price}
                            image={p.frontImage}
                        />
                    </Grid>)}
                </Grid>
            </main>
        </div>
    )
};

export default Products;
