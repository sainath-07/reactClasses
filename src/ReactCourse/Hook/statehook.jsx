import { useState } from "react";

// useState is a React predefined method.
// we have to pass the default value to useState which ever value we like to update
// when we call the useState method it will return array
// array consits of varaible and function
// [variable,function]


// we  have to import the usestate method from react
//  we have to call the usestate method

// Explanation:

// variable is the intial value which is passed for useState() method  , here in the below code varaible will be "Samsung A15"
// by using the second parameter function , by calling the function we can modify the inital value of the function

// here i want to caputre the variable, function in the seperate varaibles so i will use the destructing..

// here we can call second parameter function in two ways 1. passing the variable name as value 2. callbackfunction.
const Statehook = () => {
  //1. if we have only one value. to modify
  // let product = "Samsung A15"
  //     let price = 6000

  //    let [productname,productprice]= useState("Samsung A1")

  //2. if we have multiple data to be modified

  let [productname, productprice] = useState(
    {
    product: "Samsung 121",
    price: 5000,
  },
    
);

  return (
    <>
      <h1>Product name : {productname.product}</h1>
      <h1>Price : {productname.price}</h1>
      {/* <h1>product : {JSON.stringify(productname)}</h1> */}

      <input id="input" />
      <button
        onClick={() => {
          let p = document.getElementById("input").value;
          // productname=p

          //   --------------------> if we have only one data to modify in the browser
          // 1.
          // productprice(p)
          //2.
          //   productprice(() => {
          //     return p;
          //   });
          //   console.log(productname);

          // productprice function will store the previous varaible value automatically
          // productprice((prev)=>{
          //     return prev+p;
          // })
          // console.log(productname)

          //   ------------------------> if we have multiple data to modify in the browse


        //   1.
          //   productprice({
          //     price: p,
          //     product: productname.product,
          //   });

        //   2. object spreading 
          productprice({
              ...productname,price : p
          });
        }}
      >
        click
      </button>
    </>
  );
};
export default Statehook;
