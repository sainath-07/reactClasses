const Tataiplteamlist = () =>{

    const list = [
        {
            TeamName : "Hyderabad",
            TeamCaptian : "Pat Cummins",
            TeamHighestScore : "SRH smashes record! Highest IPL score ever: 287/3 vs RCB (2024)",
            TeamPlayersnames : [ "Heinrich Klaasen","Mayank Agarwal","Anmolpreet Singh","Aiden Markram" ,"Travis Head" ],
            TeamLogo : "https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png"
        },
        {
            TeamName : "Chenna  i",
            TeamCaptian : "Ruturaj Gaikwad",
            TeamHighestScore : "CSK posted 246/5 against Rajasthan Royals in the 2010 season ",
            TeamPlayersnames : [ "MS Dhoni","Ruturaj Gaikwad",
            "Deepak Chahar","Mitchell Santner" ,"Ravindra Jadeja" ],
            TeamLogo : "https://logowik.com/content/uploads/images/chennai-super-kings3461.jpg"
        },
        {
            TeamName : "Rajasthan",
            TeamCaptian : "Sanju Samson",
            TeamHighestScore : "Rajasthan Royals boast their highest IPL score at a whopping 226/6, achieved while chasing against Kings XI Punjab",
            TeamPlayersnames : [ "Jos Buttler","Ravichandran Ashwin","Sanju Samson","Yashasvi Jaiswal" ,"Ravichandran Ashwin" ],
            TeamLogo : "https://seeklogo.com/images/I/ipl-rajasthan-royals-logo-F69DDCEF15-seeklogo.com.png"
        },
        {
            TeamName : "Mumbai",
            TeamCaptian : "Hardik Pandya",
            TeamHighestScore : "Mumbai Indians' valiant effort saw a formidable 235/9 against Sunrisers Hyderabad in IPL 2021",
            TeamPlayersnames : [ "Heinrich Klaasen","Mayank Agarwal","Anmolpreet Singh","Aiden Markram" ,"Travis Head" ],
            TeamLogo : "https://i.pinimg.com/originals/28/09/a8/2809a841bb08827603ccac5c6aee8b33.png"
        },
        {
            TeamName : "Rcb",
            TeamCaptian : "Faf du Plessis",
            TeamHighestScore : "Royal Challengers Bangalore (263/5) On April 23, 2013",
            TeamPlayersnames : [ 
                "Glenn Maxwell","Virat Kohli","Mohammed Siraj","Faf du Plessis" ,"Cameron Green" ],
            TeamLogo : "https://i.pinimg.com/originals/67/93/87/679387ef05f2fc31745c4eeb9d6a2ff5.png"
        }
    ]




    return(
        <>
        {
            list.map((value,index)=>{
                const {TeamName,TeamHighestScore,TeamLogo,TeamPlayersnames,TeamCaptian}=value
                return(
                    <>
                     {
                        <>
                        <img  src={TeamLogo} heigth={150} width={200}/>
                        <h1>TeamName : {TeamName}</h1>
                        <h2>TeamCaptian : {TeamCaptian}</h2>
                        <h4>TeamHighestScore : {TeamHighestScore}</h4>
                        {
                            TeamPlayersnames.map((names)=>{
                                    return(
                                        <>
                                        <p>{names}</p> 
                                        
                                        </>
                                    )
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

export default Tataiplteamlist