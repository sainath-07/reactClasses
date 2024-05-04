import { Component } from "react"


// const ButtonProp=(Prop)=>{
//     console.log(Prop,"prop")

//     const {text,bgcolor,buttonproperties:{width,height}} =Prop
//      return(
//         <div>
//             <button style={{
//                 backgroundColor:bgcolor,
//                 height:height,
//                 width:width
//             }}>{text}</button>
//         </div>

//      )
// }



// export default ButtonProp  

// class ButtonProp extends Component {
//       constructor(p){
            
//       }
//     render() {
//         return (
//             <>
//                 <div>
//                     <button style={{
//                         backgroundColor: bgcolor,
//                         height: height,
//                         width: width
//                     }}>{this.p.text}</button>

//                     {/* Here we have to access the props using the this keyword in the class */}

//                 </div>



//             </>
//         )
//     }

// }


// Shortcut  no need of constructor function in the class while accessing the parent props.. use the this keyword 


// class ButtonProp extends Component {

//     render() {
//         return (
//             <>
//                 <div>
//                     <button style={{
//                         backgroundColor: bgcolor,
//                         height: height,
//                         width: width
//                     }}>{this.text}</button>

//                     {/* Here we have to access the props using the this keyword in the class */}

//                 </div>



//             </>
//         )
//     }

// }