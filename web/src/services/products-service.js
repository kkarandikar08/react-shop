import axios from "axios";

const ProductsService = () => {
    const fetchProducts = async (category) => {
        const response = await axios.get('http://localhost:3000/products', {
            data: {
                category: category
            }
        });

        if (response.status === 200) {
            console.log(response.data);
        } else {
            console.log(response.status);
        }
    }
};


export default ProductsService;