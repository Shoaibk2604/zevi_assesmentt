import axios from "axios"

export const fetchProductData = async() => {
    try {
        const data = await axios.get('https://fakestoreapi.com/products')
        return data;
    } catch (error) {
        console.log('API FAILED TO FETCH',error);
    }
}