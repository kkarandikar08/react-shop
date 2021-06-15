import React from "react";

import { Card, CardActionArea, Typography, CardMedia, CardContent } from '@material-ui/core';

import { useLocation, useHistory } from "react-router-dom";
import { getProductDetail } from "../../store/product-detail-slice";
import {useDispatch} from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        marginRight: 30,
        marginLeft: 60
    },
    media: {
        height: 400,
        width: 400
    },
});

const BaseCard = (props) => {
    const query = new URLSearchParams(useLocation().search);
    const history = useHistory();
    const category = query.get("category");
    const dispatch = useDispatch();
    const onCardClickedHandler = () => {
        history.push(`/product-detail/${category}:${props.id}`);
        dispatch(getProductDetail({product: props}));
    };

    const classes = useStyles();

    return (
        <Card className={classes.root} onClick={onCardClickedHandler}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={ props.image }
                    title={ props.title }
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align={"center"}>
                        { props.title }
                    </Typography>
                    <Typography variant="h3" color="inherit" align={"center"} component="p">
                        ${ props.price }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};



export default BaseCard;
