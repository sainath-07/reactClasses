import { ColorRing } from "react-loader-spinner";


const Spinner = () => {
  return (
    <>
      <ColorRing
        visible={true}
        height="240"
        width="100%"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </>
  );
};
export default Spinner;
