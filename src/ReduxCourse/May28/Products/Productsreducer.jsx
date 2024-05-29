
const initialState={
    products : [],
    error : null,
    loading : false
}

export const productsReducer=(state=initialState,action)=>{
      switch(action.type){
              case "PRODUCTS_RETRIEVE_SUCCESS" :
                 return {
                    ...state,products : action.payload,loading : false
                 }

                case "PRODUCTS_RETRIEVE_ERROR" :
                    return {
                        ...state,error : "Something has went wrong..."
                    }

                case "PRODUCTS_RETRIEVE_LOADING":
                    return {
                        ...state,loading :true
                    }

                    default :

                    return state
      }

}