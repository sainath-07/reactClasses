import axios from "axios"

export const productsAction=()=>{
    return async(dispatch)=>{
        
        
        try{
            dispatch({
                type: "PRODUCTS_RETRIEVE_LOADING"
            })
            let res= await axios.get('https://dummyjson.com/products')
            dispatch({
                type : "PRODUCTS_RETRIEVE_SUCCESS",
                payload : res.data.products
            })
        }
        catch(err){
            dispatch({
                type :"PRODUCTS_RETRIEVE_ERROR"
            })
        }

    }
}