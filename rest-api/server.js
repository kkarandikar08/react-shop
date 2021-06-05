const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/products', (req, res ) => {
    console.log(req.query);
    res.json([{
        id: 1,
        category:"men",
        subCategory:"polos",
        title: 'Men\'s Classic Fit Performance Deck Polo',
        description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
        price: "59.50",
        images: [
            {
                color: 'white',
                url: [
                    'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                    'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                ]
            }
        ]
    },
        {
            id: 2,
            category:"men",
            subCategory:"polos",
            title: 'Men\'s Classic Fit Performance Deck Polo',
            description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
            price: "59.50",
            images: [
                {
                    color: 'white',
                    url: [
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                    ]
                }
            ]
        },
        {
            id: 3,
            category:"men",
            subCategory:"polos",
            title: 'Men\'s Classic Fit Performance Deck Polo',
            description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
            price: "59.50",
            images: [
                {
                    color: 'white',
                    url: [
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                    ]
                }
            ]
        },
        {
            id: 4,
            category:"men",
            subCategory:"polos",
            title: 'Men\'s Classic Fit Performance Deck Polo',
            description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
            price: "59.50",
            images: [
                {
                    color: 'white',
                    url: [
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                    ]
                }
            ]
        },
        {
            id: 5,
            category:"men",
            subCategory:"polos",
            title: 'Men\'s Classic Fit Performance Deck Polo',
            description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
            price: "59.50",
            images: [
                {
                    color: 'white',
                    url: [
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                    ]
                }
            ]
        },
        {
            id: 6,
            category:"men",
            subCategory:"polos",
            title: 'Men\'s Classic Fit Performance Deck Polo',
            description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
            price: "59.50",
            images: [
                {
                    color: 'white',
                    url: [
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                    ]
                }
            ]
        },
        {
            id: 7,
            category:"men",
            subCategory:"polos",
            title: 'Men\'s Classic Fit Performance Deck Polo',
            description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
            price: "59.50",
            images: [
                {
                    color: 'white',
                    url: [
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                    ]
                }
            ]
        },
        {
            id: 8,
            category:"men",
            subCategory:"polos",
            title: 'Men\'s Classic Fit Performance Deck Polo',
            description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
            price: "59.50",
            images: [
                {
                    color: 'white',
                    url: [
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                    ]
                }
            ]
        },{
            id: 9,
            category:"men",
            subCategory:"polos",
            title: 'Men\'s Classic Fit Performance Deck Polo',
            description: 'The classic silhouette of this solid polo from Nautica always looks handsome.',
            price: "59.50",
            images: [
                {
                    color: 'white',
                    url: [
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Front_White.jpeg',
                        'https://react-shop-kk.s3-us-west-2.amazonaws.com/Nautica_Men\'s_Classic_Fit_Performance_Deck_Polo_Back_White.jpeg'
                    ]
                }
            ]
        }
    ])
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});