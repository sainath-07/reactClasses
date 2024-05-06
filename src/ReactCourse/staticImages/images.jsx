import src from "./flowers.jpg"

const StaticImage=()=>{
    return(
        <>
        {/* below image is directly imported  from public floder without need of export and import */}
        {/* <img src={"/images/ground.jpg"}  width={"50%"} alt="" /> */}

        {/* below image is imported from src floder where we have to import the image by using the any variable name as like module.css filea*/}
        <img src={src}  width={"50%"} alt="" />

        </>
    )
}
export default StaticImage