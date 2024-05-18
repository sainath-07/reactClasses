import axios from "axios";
import React, { useEffect, useState } from "react";

const Searchproduct = () => {
  const [digit, setdigit] = useState(null);
  const [storeproducts, setstoreproducts] = useState([]);
  const [dummystoreproducts, setdummystoreproducts] = useState([]);
  useEffect(() => {
    fetchapicall();
  }, []);

  const fetchapicall = async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    if (response.status === 200) {
      setstoreproducts(response.data);
      setdummystoreproducts(response.data);
      // setdigit(response.data.id);
    }
  };

  const searchprodut=(event)=>{
      setstoreproducts(dummystoreproducts)
      let check=event.target.value
    const filteriddata=dummystoreproducts.filter((eachitem)=>eachitem.id==check)
    setstoreproducts(filteriddata)

  }

  
  return (
    <>
      <form className="justify-content-center d-flex mt-4" role="search" >
  <input
    className="form-control me-2 border border-dark "
    type="search"
    placeholder="Search"
    aria-label="Search"
    value={digit}
    onChange={searchprodut}
    style={{
      width: "20%"
    }}
  />
  <button className="btn btn-outline-success" type="submit">
    Search
  </button>
</form>


      <div className=" justify-content-center d-flex flex-wrap gap-5 mt-5" >
        {storeproducts.map((eachproduct, index) => {
          const { id, title, image, category } = eachproduct;
          return (
            <div key={index} className="border border-danger p-4">
              <p className="text-center">{category}</p>
              <img src={image} height={"210px"} width={"220px"} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Searchproduct;
