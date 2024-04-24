const Iplteamlist =() =>{
    // const Iplteams = ["Hyderabad","Mumbai","Chennai","Delhi","Punjab","lucknow","rajasthan"]
    

    // Shortcut
    // return(<>
    //  {Iplteams.map(value=><><p>{value}</p></>)}
    //  </>)
    
// return(
//         <>
//         {
//             Iplteams.map((value)=>{
//                 return(
//                     <>
//                     <p>{value}</p>
//                     <p>{value}</p>
//                     </>
//                 )
//             })
//         }
//         </>
            
//     )




// in JSON format


// insitalized the array .

const Iplteams = [
    {
        name : "Chennai",
        totalScore : 1000,
        teamplayer : [ "Dhoni","Raina","Jadeja"]
    },
    {
        name : "Hyderabad",
        totalScore : 800,
        teamplayer : [ "Head","Bhuvi"]
    },
    {
        name : "Lucknow",
        totalScore : 820,
        teamplayer : [ "Head","Bhuvi"]
    },
    {
        name : "Delhi",
        totalScore : 700,
        teamplayer : [ "Head","Bhuvi"]
    }
]


//returning the jsx sntax

return (
   <>
   {
    Iplteams.map((value,index)=>{
        const {name,totalScore,teamplayer} =value
        return(
            <>
            {
                totalScore>=800 &&
            
            <>
            <h3>{index+1}.  {name}</h3>

            {
                teamplayer.map((teamplayer)=>{
                    return(
                        <>
                        <p>{teamplayer}</p>
                        </>)
                })
            }

            </>
         }
         </>
         
        )
    })
   }

   
   
   
   




   </>
)





    
}

export default Iplteamlist