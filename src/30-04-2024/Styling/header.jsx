import coloring from "./header.module.css"
import "./header.css"

// 4 ways to apply the styling in the react App

// 1. inline styles or object styles
// 2. external style sheet styles : with .css File
// 3.  external module styles : with .moudle.css
// 4. Saas typeof styling or external css libary styling ex : bootstrap , materialui , Antdesgin, style sheet, tailwind



// 1. inline styling...
// for inline css property name must be in camelcase...
const Header1 = ()=>{
    return(
        <h1 style={
            {
                color:"red",
                backgroundColor:"green"
            }
        }>Heading1</h1>
    )
}

export const Header2 = ()=>{
   let styling= {
        color:"blue",
        backgroundColor:"grey"
    }
    return(
        <>
        <h1 style={
            styling
        }>Heading2</h1>

        <h4 style={styling }>Heading 4.</h4>
        </>
    )
}

export default Header1



// external sytlesheet
export const Header3 = ()=>{
    return(
        <h1  className="headings">external style sheet..</h1>
    )
}

// external stylesheet using the conditionl redering..
export const Header4 = ()=>{
    const displaycolor=0
    return(
        <h1  className={
            displaycolor?
            "headings":
            "headings1"

        }>applying the styles using the conditional rendering methods</h1>
    )
}


// External modules.css

//  external modules are imported using the any variables names and we have to use the variable name + class name which have defined in the .moudle.css file
export const Navbar=()=>{
     return(
        <>
        <p className={coloring.modules}>External modules.css</p>
        </>
     )
}
