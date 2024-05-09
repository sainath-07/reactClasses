import "./task.css"

export const ProductsList=({list})=>{
    const {category,id,image,title,price,rating:{rate}}=list
      return(
        <>
         <div className=" category rounded border  mx-5  border pb-3">
               <div>
                <img src={image} height={"260px"} width={"265px"} alt="" className="p-5" />
               </div>
               <div>
                <p className="  border border-success text-center mt-2 py-2 mx-5 bg-dark text-white rounded">{category}</p>

                <div className="d-flex gap-3 justify-content-center">

                <button type="button" className="btn btn-success">{`price ${price}`}</button>
                <button type="button" className="btn btn-success">{`rating : ${rate}`}</button>
                </div>

               </div>
         </div>
        </>
      )
}
// export ProductsList
