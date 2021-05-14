import React from "react";

import Header from "../Header/Header";
import Products from "../Products/Products";


const Layout = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Products/>
            </div>
        </div>
    )
}

export default Layout;