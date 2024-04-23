import Createbutton from "./component/button/button.js"
import Imagecomponent from "./component/image/image.js"
import Tablecomponent from "./component/tables/tables.js"
import Formcomponent from "./component/form/form.js"
import ListComponent from "./component/list/list-component.js"
import Orderedlist from "./component/list/orderlist.js"

const Ui=()=>{
   return(
    
    <div>

{/* day02 */}
        <ListComponent/>
         <Orderedlist/>



{/* day 01 */}
      {/* <h1>Hello world</h1>
      <Createbutton/>
      <Createbutton/>
      <Createbutton/>
      <Createbutton/>
       <div>

      <Imagecomponent/>
      <Imagecomponent/>
      <Imagecomponent/>
      <Imagecomponent/>

       </div>


      <div>
      <Tablecomponent/>
      </div>

      <div>
        <Formcomponent/>
      </div> */}




    </div>
    
     


   )
}

export default Ui