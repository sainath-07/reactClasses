

const Child = ({prop}) => {
  const { id, url,url1, text, type } = prop;
  return (
    <div key={id}>
      <div className=" border border-success mx-5 bg-light my-3">
        <>

      
       
          <img src={url} height={"310px"} className="p-4" width={"320px"} alt="" />
      
       
          
        </>
        <p className="text-center fs-4">{text}</p>
        <p className="text-center fs-5">Animal type : <span className="bg-dark text-white  px-2 py-1 fs-5">{type}</span> </p>
        
      </div>
    </div>
  );

  //  <ReactFlipCard
  //           frontStyle={styles.card}
  //           backStyle={styles.card}
  //           frontComponent={<div>Hover me!</div>}
  //           backComponent={<div>Back!</div>}
  //       />
};
export default Child;