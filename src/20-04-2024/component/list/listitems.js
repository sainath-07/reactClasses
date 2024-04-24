const Listitem =()=>{
  const iplteam = ["RCB","CHENNAI","MUMBAI","Gujarat","HYD"]
  const Iplhistory =[
    {
           name : "Chennai",
           winningHistory : [2013,2015],
           teamPlayer : [
             "MsDhoni","Jadeja","SureshRaina"
           ]
    },
    {
      name : "Hyderabad",
      winningHistory : [2014,2011],
      teamPlayer :[
         "Head","Bhuvi"
      ]
    }
  ]
  return (
    <div>

       <li className="listItem">{Iplhistory[0].name}</li>
       <li className="listItem">{Iplhistory[1].name}</li>
        <li className="listItem">{iplteam[2]}</li>
        <li className="listItem">{iplteam[3]}</li>
    </div>
  )
}

export default Listitem