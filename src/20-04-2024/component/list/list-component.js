import Listitem from "./listitems.js"

const ListComponent =()=>{
    const dimensions={
        width : 250,
        height : 180

    }
    const indianleague= "Ipl team"
    return (
         
        <div>
              <h3>{indianleague}</h3>
            <img src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"}  height={dimensions.height} width={dimensions.width}/>
        <ul>
       <Listitem/>
    </ul>
    </div>
    )
}
export default ListComponent