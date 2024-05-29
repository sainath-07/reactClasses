const initialstate={
    bookCount : 100
}

export const reducerFunction=(state=initialstate,action)=>{
           switch(action.type){
               case "BUY_BOOK" :
                return {
                    ...state,bookCount:state.bookCount-1
                } 

                case "RETURN_BOOK" :
                    return {
                        ...state,bookCount :state.bookCount+1
                    }

                default : 
                return state;
           }
}