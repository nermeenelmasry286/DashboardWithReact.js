import axios from "axios";

const baseUrl = "http://localhost:3005/products";
const getProducts=()=> axios.get(baseUrl);
const getProductById=(id)=> axios.get(`${baseUrl}/${id}`);
const createProduct=(product)=> axios.post(baseUrl,product);
const updateProduct=(id,product)=> axios.put(`${baseUrl}/${id}`,product); 
const deleteProduct=(id)=> axios.delete(`${baseUrl}/${id}`);
export {getProducts,getProductById,createProduct,updateProduct,deleteProduct};