import InternetStatus from "./InternetConnection/internetstatus";



const Render=()=>{
   return(
      <>
      <InternetStatus>
       <div>
         <h1 className="text-center text-success">Internet is up and fine....</h1>
       </div>
      </InternetStatus>

    </>
   )
}

export default Render;
