import axios from 'axios';
import { FAILED, PRODUCTS, REQUEST } from './productTypes';


export const product=(payload)=>(dispatch)=>{
dispatch({type:REQUEST});

axios.get(`http://localhost:8080/products?type=${payload}`).then((res)=>{
    dispatch({type:PRODUCTS,payload:res.data.product});
    console.log(res.data.product);
}).catch((err)=>{
    dispatch({type:FAILED});
    console.log(err);
})

}