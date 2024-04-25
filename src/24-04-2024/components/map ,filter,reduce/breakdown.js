const Iplcomponent1=()=>{
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

        // Breakdown the filter
        const filteredipl=(ipl)=>{
            return  ipl.filter(value=>value.winningcount>=3)
        }
        

    //    shortcut

    return(
        <>
        <h1>IPL TEAMS 2024</h1>
        {
      filteredipl(ipl).map((team,index)=>{
                return(
                    <>

                    <h3>{index+1}. {team.name}</h3>
                    
                    
                    </>)
                })}
        
        </>)



   


}
export default Iplcomponent1