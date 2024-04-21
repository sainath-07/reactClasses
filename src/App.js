import Createbutton from "./component/button/button.js"
import Imagecomponent from "./component/image/image.js"
import Tablecomponent from "./component/tables/tables.js"
import Formcomponent from "./component/form/form.js"


const Ui=()=>{
   return(
    
    <div>
      <h1>Hello world</h1>
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
      </div>


    </div>
     


   )
}

export default Ui