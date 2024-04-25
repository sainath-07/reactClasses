const Iplcomponent=()=>{
    var ipl = [
        {
            name : "Mumbai",
            winningcount : 2
        },
         {
            name : "hyderabad",
            winningcount : 5
         },
          {
            name : "chennai",
            winningcount : 3
        },
         {
            name : "RR",
            winningcount : 4
        }
        
        ]
        

    //    shortcut

    return(
        <>
        <h1>IPL TEAMS 2024</h1>
        {
      ipl.filter(eachwinningcount=>eachwinningcount.winningcount>3).map((team,index)=>{
                return(
                    <>

                    <h3>{index+1}. {team.name}</h3>
                    
                    
                    </>)
                })}
        
        </>)



    // return(
    //     <>
    //     {
    //         ipl.filter((element)=>{
    //             return(
    //                 <>
    //                 {
                 
    //                     element>=5
                     

    //                 }
    //                 </>


    //             )
    //         }).map((team,value)=>{
    //             return(
    //                 <>
    //                 {
    //                    <p>{value+1}. {team.name}</p>
    //                 }



    //                 </>



                    
    //             )
    //         })
    //     }
        
        
        
    //     </>



    // )


}
export default Iplcomponent