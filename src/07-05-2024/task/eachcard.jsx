const Eachcard=({items})=>{
         const {id,image,title,category}=items
  return(
   
    <div className=" border bg-light m-5 p-5 rounded border-success">
    <img src={image} height={"220px"} width={"230px"} alt="" />
    <h4 className="text-center text-white bg-dark py-2 rounded mt-2">{category}</h4>
    
    </div>
    
  )

}
export default Eachcard;