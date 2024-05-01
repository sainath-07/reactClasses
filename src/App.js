import ButtonProp from "./01-05-2024/Prop/Prop"



const Ui = () => {
  return (

    <div>
        

        <ButtonProp  text={"Log in"} bgColor={"green"}  buttonproperties={{
          width: "100px",
          height : 100
        }}/>
        <ButtonProp  text={"sign in"} bgColor={"red"} buttonproperties={{
          width: "150px",
          height:100
        }} />
        <ButtonProp  text={"sign up"} bgColor={"yellow "} buttonproperties={{
       width: "150px",
          height:100
        }}/>

    </div>

  )
}

export default Ui
