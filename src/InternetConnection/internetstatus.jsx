import { Detector } from "react-detect-offline";


const InternetStatus=(prop)=>{
      console.log(prop)
    return(
        <>
        {/* <h1 className="text-center">Internet is up and running fine</h1> */}
        <Detector

        render={({online})=>(

            online ? 
             prop.children
                 :
            <h1 className="text-danger text-center">Internet is down......</h1>
        )}
        
        />
        </>
    )
}

export default InternetStatus