const Listitem=({pro})=>{
      const {id,image}=pro
    //   console.log(pro)
      return(
        <>
           <div className="border border-success ">
                  <img src={image} width={"270px"} height={"280px"} alt="images" />
                 
           </div>
        </>
      )
}
export default Listitem;