const initialState={
    profile : {
        name : "sainath",
        email : "sainath@gmail.com",
        mobileno : 90109952323,
        value :true
    }
}

export const profileReducer=(state=initialState,action)=>{

      switch(action.type){
        case "PROFILE_UPDATE" :
            return {
                ...initialState,profile : action.payload
            }
           
        default :
          return state
      }

}