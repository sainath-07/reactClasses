const Eachprod=({products})=>{
    const{id,image,title,category}=products
    return(
        <>
        <div className="d-flex flex-wrap justify-content-center flex-column border border-success my-4 mx-5 p-3 ">
            <img src={image} height={"260px"} width={"265px"} alt="" />
        <p className="text-center bg-dark text-white rounded">{category}</p>
        </div>
        </>
    )

}
export default Eachprod