import React from 'react';
import Product from "../Product/Product";

import styles from './Products.module.css';
import { MOCK_PRODUCTS } from "../../mocks/mock-products";

const silkImage = require('../../assets/silk_cloth.jpeg');

const Products = () => {
    return(
      <div className={styles.container}>
          {MOCK_PRODUCTS.length && MOCK_PRODUCTS.map((product) =>
                <div className={styles.card} key={product.id}>
                  <Product

                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={silkImage}
                  />
                </div>
          )}
      </div>
    );
}

export default Products;