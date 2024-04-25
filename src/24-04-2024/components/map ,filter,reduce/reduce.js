const Reduce=()=>{
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
        

        // Reduce method

        const reducewinningcount=(ipl)=>{
           return ipl.reduce((a,b)=>a+b.winningcount,0)

        }
        



    //    shortcut
     return(
        <>
        <h1>IPL TEAMS 2024</h1>

        {/* STRING TEMPLATES.... */}
        <h1>{`Total winning count :${reducewinningcount(ipl)}`}</h1>
        {
      ipl.filter(eachwinningcount=>eachwinningcount.winningcount>3).map((team,index)=>{
                return(
                    <>

                    <h3>{index+1}. {team.name}</h3>
                    
                    
                    </>)
                })}
        
        </>)



}
export default Reduce